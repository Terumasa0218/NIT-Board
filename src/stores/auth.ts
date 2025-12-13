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
  Auth,
} from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '@/firebase'
import type { User, AuthState } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

let initializationInProgress = false

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  sendVerificationEmail: () => Promise<void>
  sendPasswordReset: (email: string) => Promise<void>
  setupProfile: (nickname: string, avatarUrl?: string) => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
  initializeAuth: () => Promise<() => void>
}

const waitForAuthState = (firebaseAuth: Auth): Promise<FirebaseUser | null> =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (firebaseUser) => {
        unsubscribe()
        resolve(firebaseUser)
      },
      (error) => {
        unsubscribe()
        reject(error)
      },
    )
  })

const createUserDocument = async (
  firebaseUser: FirebaseUser,
  nickname: string,
  avatarUrl?: string,
): Promise<User> => {
  const userData: Omit<User, 'id'> = {
    email: firebaseUser.email!,
    nickname,
    avatarUrl,
    universityId: DEFAULT_UNIVERSITY_ID,
    suspendedUntil: undefined,
    followers: [],
    following: [],
    preferredLocale: 'ja',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const userRef = doc(db, 'users', firebaseUser.uid)

  const docData: Record<string, unknown> = {
    email: userData.email,
    nickname: userData.nickname,
    followers: userData.followers,
    following: userData.following,
    preferredLocale: userData.preferredLocale,
    universityId: userData.universityId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  if (userData.avatarUrl !== undefined) {
    docData.avatarUrl = userData.avatarUrl
  }

  if (userData.suspendedUntil !== undefined) {
    docData.suspendedUntil = userData.suspendedUntil
  }

  await setDoc(userRef, docData)

  return {
    id: firebaseUser.uid,
    ...userData,
  }
}

const fetchUserDocument = async (uid: string): Promise<User | null> => {
  try {
    const userRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {
      console.log('AuthStore: User document does not exist for uid:', uid)
      return null
    }

    const data = userSnap.data()
    return {
      id: uid,
      email: data.email,
      nickname: data.nickname,
      universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
      avatarUrl: data.avatarUrl,
      suspendedUntil: data.suspendedUntil?.toDate(),
      followers: data.followers || [],
      following: data.following || [],
      preferredLocale: data.preferredLocale || 'ja',
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
    }
  } catch (error) {
    console.error('AuthStore: Error fetching user document for uid:', uid, error)
    return null
  }
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      loading: true,

      login: async (email: string, password: string) => {
        set({ loading: true })
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          const firebaseUser = userCredential.user

          if (!firebaseUser.emailVerified) {
            throw new Error('EMAIL_NOT_VERIFIED')
          }

          const user = await fetchUserDocument(firebaseUser.uid)

          if (user) {
            if (user.suspendedUntil && user.suspendedUntil > new Date()) {
              throw new Error('USER_SUSPENDED')
            }
            set({ user, loading: false })
          } else {
            const minimalUser: User = {
              id: firebaseUser.uid,
              email: firebaseUser.email!,
              nickname: '',
              universityId: DEFAULT_UNIVERSITY_ID,
              avatarUrl: undefined,
              suspendedUntil: undefined,
              followers: [],
              following: [],
              preferredLocale: 'ja',
              createdAt: new Date(),
              updatedAt: new Date(),
            }
            set({ user: minimalUser, loading: false })
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
          set({ user: null, loading: false })
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

        try {
          const user = await createUserDocument(firebaseUser, nickname, avatarUrl)
          set({ user, loading: false })
        } catch (error) {
          console.error('AuthStore: Profile setup failed:', error)
          throw error
        }
      },

      updateProfile: async (updates: Partial<User>) => {
        const { user } = get()
        if (!user) throw new Error('No user logged in')

        try {
          const userRef = doc(db, 'users', user.id)
          const updateData = {
            ...updates,
            updatedAt: serverTimestamp(),
          }

          await updateDoc(userRef, updateData)

          const updatedUser = { ...user, ...updates, updatedAt: new Date() }
          set({ user: updatedUser })
        } catch (error) {
          console.error('AuthStore: Profile update failed:', error)
          throw error
        }
      },

      initializeAuth: async () => {
        if (initializationInProgress) {
          return () => {}
        }

        initializationInProgress = true

        set({ loading: true })

        const warnTimeout = setTimeout(() => {
          console.warn('AuthStore: Auth initialization taking longer than expected')
        }, 10000)

        const handleUserState = async (firebaseUser: FirebaseUser | null) => {
          if (!firebaseUser) {
            set({ user: null, loading: false })
            return
          }

          if (!firebaseUser.emailVerified) {
            set({ loading: false, user: null })
            return
          }

          try {
            const user = await fetchUserDocument(firebaseUser.uid)
            if (user && (!user.suspendedUntil || user.suspendedUntil <= new Date())) {
              set({ user, loading: false })
            } else {
              set({ user: null, loading: false })
            }
          } catch (error) {
            console.error('AuthStore: Error fetching user document:', error)
            set({ user: null, loading: false })
          }
        }

        try {
          const firebaseUser = await waitForAuthState(auth)
          clearTimeout(warnTimeout)

          await handleUserState(firebaseUser)

          let skipFirst = true
          const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
            if (skipFirst) {
              skipFirst = false
              return
            }
            await handleUserState(nextUser)
          })

          initializationInProgress = false
          return unsubscribe
        } catch (error) {
          clearTimeout(warnTimeout)
          console.error('AuthStore: Auth initialization failed:', error)
          set({ user: null, loading: false })
          initializationInProgress = false
          return () => {}
        }
      },
    }),
    {
      name: 'nitech-board-auth',
      partialize: (state) => ({
        user: state.user
          ? {
              id: state.user.id,
              email: state.user.email,
              nickname: state.user.nickname,
              preferredLocale: state.user.preferredLocale,
              universityId: state.user.universityId,
            }
          : null,
      }),
    },
  ),
)
