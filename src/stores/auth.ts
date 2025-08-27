import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '@/firebase'
import type { User, AuthState } from '@/types'

interface AuthStore extends AuthState {
  // Actions
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  sendVerificationEmail: () => Promise<void>
  sendPasswordReset: (email: string) => Promise<void>
  setupProfile: (nickname: string, avatarUrl?: string) => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
  setGuestMode: (isGuest: boolean) => void
  initializeAuth: () => void
}

const createUserDocument = async (firebaseUser: FirebaseUser, nickname: string, avatarUrl?: string): Promise<User> => {
  const userData: Omit<User, 'id'> = {
    email: firebaseUser.email!,
    nickname,
    avatarUrl,
    suspendedUntil: undefined,
    followers: [],
    following: [],
    preferredLocale: 'ja',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const userRef = doc(db, 'users', firebaseUser.uid)
  await setDoc(userRef, {
    ...userData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

  return {
    id: firebaseUser.uid,
    ...userData,
  }
}

const fetchUserDocument = async (uid: string): Promise<User | null> => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)
  
  if (!userSnap.exists()) {
    return null
  }

  const data = userSnap.data()
  return {
    id: uid,
    email: data.email,
    nickname: data.nickname,
    avatarUrl: data.avatarUrl,
    suspendedUntil: data.suspendedUntil?.toDate(),
    followers: data.followers || [],
    following: data.following || [],
    preferredLocale: data.preferredLocale || 'ja',
    createdAt: data.createdAt?.toDate() || new Date(),
    updatedAt: data.updatedAt?.toDate() || new Date(),
  }
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      loading: false, // Start with loading false
      isGuest: false,

      login: async (email: string, password: string) => {
        set({ loading: true })
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          const firebaseUser = userCredential.user
          
          if (!firebaseUser.emailVerified) {
            throw new Error('EMAIL_NOT_VERIFIED')
          }

          try {
            const user = await fetchUserDocument(firebaseUser.uid)
            if (user && (!user.suspendedUntil || user.suspendedUntil <= new Date())) {
              console.log('AuthStore: User logged in successfully')
              set({ user, loading: false, isGuest: false })
            } else if (user && user.suspendedUntil && user.suspendedUntil > new Date()) {
              throw new Error('USER_SUSPENDED')
            } else {
              // User document not found - this is normal for new users
              console.log('AuthStore: User document not found, redirecting to profile setup')
              // Create a minimal user object for profile setup
              const minimalUser: User = {
                id: firebaseUser.uid,
                email: firebaseUser.email!,
                nickname: '',
                avatarUrl: undefined,
                suspendedUntil: undefined,
                followers: [],
                following: [],
                preferredLocale: 'ja',
                createdAt: new Date(),
                updatedAt: new Date(),
              }
              set({ user: minimalUser, loading: false, isGuest: false })
            }
          } catch (error) {
            console.error('AuthStore: Error fetching user document:', error)
            // If user document doesn't exist, create a minimal user object
            const minimalUser: User = {
              id: firebaseUser.uid,
              email: firebaseUser.email!,
              nickname: '',
              avatarUrl: undefined,
              suspendedUntil: undefined,
              followers: [],
              following: [],
              preferredLocale: 'ja',
              createdAt: new Date(),
              updatedAt: new Date(),
            }
            set({ user: minimalUser, loading: false, isGuest: false })
          }
        } catch (error) {
          console.error('AuthStore: Login error:', error)
          set({ loading: false })
          throw error
        }
      },

      register: async (email: string, password: string) => {
        set({ loading: true })
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          const firebaseUser = userCredential.user
          
          await sendEmailVerification(firebaseUser)
          
          set({ loading: false })
        } catch (error) {
          set({ loading: false })
          throw error
        }
      },

      logout: async () => {
        set({ loading: true })
        try {
          await signOut(auth)
          set({ user: null, loading: false, isGuest: false })
        } catch (error) {
          set({ loading: false })
          throw error
        }
      },

      sendVerificationEmail: async () => {
        const { user } = get()
        if (!user) throw new Error('No user logged in')
        
        const firebaseUser = auth.currentUser
        if (!firebaseUser) throw new Error('No Firebase user')
        
        await sendEmailVerification(firebaseUser)
      },

      sendPasswordReset: async (email: string) => {
        await sendPasswordResetEmail(auth, email)
      },

      setupProfile: async (nickname: string, avatarUrl?: string) => {
        console.log('AuthStore: Setting up profile for user:', auth.currentUser?.uid)
        const firebaseUser = auth.currentUser
        if (!firebaseUser) throw new Error('No Firebase user')

        try {
          const user = await createUserDocument(firebaseUser, nickname, avatarUrl)
          console.log('AuthStore: Profile setup successful:', user)
          set({ user, loading: false, isGuest: false })
        } catch (error) {
          console.error('AuthStore: Profile setup failed:', error)
          throw error
        }
      },

      updateProfile: async (updates: Partial<User>) => {
        console.log('AuthStore: Updating profile for user:', auth.currentUser?.uid, 'updates:', updates)
        const { user } = get()
        if (!user) throw new Error('No user logged in')

        try {
          const userRef = doc(db, 'users', user.id)
          const updateData = {
            ...updates,
            updatedAt: serverTimestamp(),
          }
          
          console.log('AuthStore: Updating Firestore document with:', updateData)
          await updateDoc(userRef, updateData)

          const updatedUser = { ...user, ...updates, updatedAt: new Date() }
          console.log('AuthStore: Profile update successful:', updatedUser)
          set({ user: updatedUser })
        } catch (error) {
          console.error('AuthStore: Profile update failed:', error)
          throw error
        }
      },

      setGuestMode: (isGuest: boolean) => {
        set({ isGuest, user: null, loading: false })
      },

      initializeAuth: () => {
        console.log('AuthStore: Starting auth initialization...')
        
        // Check if already initialized
        const currentState = get()
        if (!currentState.loading && currentState.user === null) {
          console.log('AuthStore: Already initialized, skipping...')
          return () => {} // Return empty cleanup function
        }
        
        // Set loading to true only when we start initializing
        set({ loading: true })
        
        // Add a timeout to prevent infinite loading
        const timeoutId = setTimeout(() => {
          console.log('AuthStore: Auth initialization timeout, proceeding without auth')
          set({ user: null, loading: false, isGuest: false })
        }, 3000) // 3 second timeout

        let isInitialized = false

        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          if (isInitialized) {
            console.log('AuthStore: Auth state change after initialization, ignoring...')
            return
          }
          
          isInitialized = true
          clearTimeout(timeoutId)
          console.log('AuthStore: Auth state changed:', !!firebaseUser)
          
          if (firebaseUser) {
            if (!firebaseUser.emailVerified) {
              console.log('AuthStore: User email not verified')
              set({ loading: false, user: null, isGuest: false })
              return
            }

            try {
              const user = await fetchUserDocument(firebaseUser.uid)
              if (user && (!user.suspendedUntil || user.suspendedUntil <= new Date())) {
                console.log('AuthStore: User authenticated successfully')
                set({ user, loading: false, isGuest: false })
              } else {
                console.log('AuthStore: User suspended or not found')
                set({ user: null, loading: false, isGuest: false })
              }
            } catch (error) {
              console.error('AuthStore: Error fetching user document:', error)
              set({ user: null, loading: false, isGuest: false })
            }
          } else {
            console.log('AuthStore: No user authenticated')
            set({ user: null, loading: false, isGuest: false })
          }
        })

        return unsubscribe
      },
    }),
    {
      name: 'nitech-board-auth',
      partialize: (state) => ({ 
        isGuest: state.isGuest,
        user: state.user ? {
          id: state.user.id,
          email: state.user.email,
          nickname: state.user.nickname,
          preferredLocale: state.user.preferredLocale,
        } : null,
      }),
    }
  )
)
