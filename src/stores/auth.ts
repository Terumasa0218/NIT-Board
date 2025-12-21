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
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase'
import type { User, AuthState } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import { getUserById, updateUserProfile as updateUserProfileRepo } from '@/repositories/usersRepository'

let initializationInProgress = false

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  sendVerificationEmail: () => Promise<void>
  sendPasswordReset: (email: string) => Promise<void>
  setupProfile: (nickname: string, avatarUrl?: string) => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
  fetchUserProfile: (userId?: string) => Promise<User | null>
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
    departmentId: undefined,
    department: undefined,
    grade: undefined,
    circles: [],
    bio: undefined,
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

  if (userData.departmentId !== undefined) {
    docData.departmentId = userData.departmentId
  }

  if (userData.grade !== undefined) {
    docData.grade = userData.grade
  }

  if (userData.circles !== undefined) {
    docData.circles = userData.circles
  }

  if (userData.bio !== undefined) {
    docData.bio = userData.bio
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

const deriveNickname = (firebaseUser: FirebaseUser): string => {
  if (firebaseUser.displayName?.trim()) return firebaseUser.displayName.trim()
  if (firebaseUser.email) {
    const localPart = firebaseUser.email.split('@')[0]
    if (localPart) return localPart
  }
  return 'ユーザー'
}

const ensureUserRecord = async (firebaseUser: FirebaseUser): Promise<User> => {
  const existing = await getUserById(firebaseUser.uid)
  if (existing) {
    return existing
  }
  const nickname = deriveNickname(firebaseUser)
  const avatarUrl = firebaseUser.photoURL ?? undefined
  return createUserDocument(firebaseUser, nickname, avatarUrl)
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      userProfile: null,
      loading: true,

      login: async (email: string, password: string) => {
        set({ loading: true })
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          const firebaseUser = userCredential.user

          if (!firebaseUser.emailVerified) {
            throw new Error('EMAIL_NOT_VERIFIED')
          }

          const userDoc = await ensureUserRecord(firebaseUser)
          if (userDoc.suspendedUntil && userDoc.suspendedUntil > new Date()) {
            throw new Error('USER_SUSPENDED')
          }
          set({ user: userDoc, userProfile: userDoc, loading: false })
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
          set({ user: null, userProfile: null, loading: false })
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
          const userDoc = await createUserDocument(firebaseUser, nickname, avatarUrl)
          set({ user: userDoc, userProfile: userDoc, loading: false })
        } catch (error) {
          console.error('AuthStore: Profile setup failed:', error)
          throw error
        }
      },

      updateProfile: async (updates: Partial<User>) => {
        const { user } = get()
        if (!user) throw new Error('No user logged in')

        try {
          await updateUserProfileRepo(user.id, updates)
          const refreshed = await getUserById(user.id)
          if (refreshed) {
            set({ user: refreshed, userProfile: refreshed })
          }
        } catch (error) {
          console.error('AuthStore: Profile update failed:', error)
          throw error
        }
      },

      fetchUserProfile: async (userId?: string) => {
        const targetId = userId ?? get().user?.id
        if (!targetId) return null
        try {
          const profile = await getUserById(targetId)
          if (userId === undefined && profile) {
            set({ userProfile: profile, user: profile })
          }
          return profile
        } catch (error) {
          console.error('AuthStore: fetchUserProfile failed', error)
          return null
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
            set({ user: null, userProfile: null, loading: false })
            return
          }

          if (!firebaseUser.emailVerified) {
            set({ loading: false, user: null, userProfile: null })
            return
          }

          try {
            const userDoc = await ensureUserRecord(firebaseUser)
            if (userDoc && (!userDoc.suspendedUntil || userDoc.suspendedUntil <= new Date())) {
              set({ user: userDoc, userProfile: userDoc, loading: false })
            } else {
              set({ user: null, userProfile: null, loading: false })
            }
          } catch (error) {
            console.error('AuthStore: Error fetching user document:', error)
            set({ user: null, userProfile: null, loading: false })
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
          set({ user: null, userProfile: null, loading: false })
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
              avatarUrl: state.user.avatarUrl,
              preferredLocale: state.user.preferredLocale,
              universityId: state.user.universityId,
            }
          : null,
        userProfile: state.userProfile
          ? {
              id: state.userProfile.id,
              email: state.userProfile.email,
              nickname: state.userProfile.nickname,
              avatarUrl: state.userProfile.avatarUrl,
              preferredLocale: state.userProfile.preferredLocale,
              universityId: state.userProfile.universityId,
            }
          : null,
      }),
    },
  ),
)
