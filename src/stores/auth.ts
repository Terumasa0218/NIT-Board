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
      loading: true,
      isGuest: false,

      login: async (email: string, password: string) => {
        set({ loading: true })
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          const firebaseUser = userCredential.user
          
          if (!firebaseUser.emailVerified) {
            throw new Error('EMAIL_NOT_VERIFIED')
          }

          const user = await fetchUserDocument(firebaseUser.uid)
          if (!user) {
            throw new Error('USER_DOCUMENT_NOT_FOUND')
          }

          if (user.suspendedUntil && user.suspendedUntil > new Date()) {
            throw new Error('USER_SUSPENDED')
          }

          set({ user, loading: false, isGuest: false })
        } catch (error) {
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
        const firebaseUser = auth.currentUser
        if (!firebaseUser) throw new Error('No Firebase user')

        const user = await createUserDocument(firebaseUser, nickname, avatarUrl)
        set({ user, loading: false, isGuest: false })
      },

      updateProfile: async (updates: Partial<User>) => {
        const { user } = get()
        if (!user) throw new Error('No user logged in')

        const userRef = doc(db, 'users', user.id)
        await updateDoc(userRef, {
          ...updates,
          updatedAt: serverTimestamp(),
        })

        const updatedUser = { ...user, ...updates, updatedAt: new Date() }
        set({ user: updatedUser })
      },

      setGuestMode: (isGuest: boolean) => {
        set({ isGuest, user: null, loading: false })
      },

      initializeAuth: () => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          if (firebaseUser) {
            if (!firebaseUser.emailVerified) {
              set({ loading: false, user: null, isGuest: false })
              return
            }

            try {
              const user = await fetchUserDocument(firebaseUser.uid)
              if (user && (!user.suspendedUntil || user.suspendedUntil <= new Date())) {
                set({ user, loading: false, isGuest: false })
              } else {
                set({ user: null, loading: false, isGuest: false })
              }
            } catch (error) {
              console.error('Error fetching user document:', error)
              set({ user: null, loading: false, isGuest: false })
            }
          } else {
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
