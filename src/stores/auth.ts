import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  Auth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  getAdditionalUserInfo,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase'
import type { User, AuthState } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import { getUserById, updateUserProfile as updateUserProfileRepo } from '@/repositories/usersRepository'

let initializationInProgress = false
const MAGIC_LINK_EMAIL_KEY = 'nitboard_magic_link_email'

interface AuthStore extends AuthState {
  magicLinkEmail: string | null
  sendMagicLink: (email: string) => Promise<void>
  resendMagicLink: () => Promise<void>
  completeMagicLinkSignIn: (email?: string) => Promise<{ isNewUser: boolean } | null>
  enterGuestMode: () => void
  logout: () => Promise<void>
  setupProfile: (nickname: string, avatarUrl?: string, subEmail?: string) => Promise<void>
  updateProfile: (updates: Partial<User> & { subEmail?: string | null }) => Promise<void>
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
  subEmail?: string,
): Promise<User> => {
  const userData: Omit<User, 'id'> = {
    email: firebaseUser.email!,
    subEmail,
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
    points: 0,
    badges: [],
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
    points: userData.points,
    badges: userData.badges,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  if (userData.avatarUrl !== undefined) docData.avatarUrl = userData.avatarUrl
  if (userData.subEmail !== undefined) docData.subEmail = userData.subEmail

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

const buildActionCodeSettings = () => {
  return {
    url: `${window.location.origin}/auth/callback`,
    handleCodeInApp: true,
  }
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      userProfile: null,
      isGuest: false,
      magicLinkEmail: localStorage.getItem(MAGIC_LINK_EMAIL_KEY),
      loading: true,

      sendMagicLink: async (email: string) => {
        await sendSignInLinkToEmail(auth, email, buildActionCodeSettings())
        localStorage.setItem(MAGIC_LINK_EMAIL_KEY, email)
        set({ magicLinkEmail: email })
      },

      resendMagicLink: async () => {
        const email = get().magicLinkEmail ?? localStorage.getItem(MAGIC_LINK_EMAIL_KEY)
        if (!email) {
          throw new Error('EMAIL_NOT_FOUND')
        }
        await sendSignInLinkToEmail(auth, email, buildActionCodeSettings())
        localStorage.setItem(MAGIC_LINK_EMAIL_KEY, email)
        set({ magicLinkEmail: email })
      },

      completeMagicLinkSignIn: async (email?: string) => {
        if (!isSignInWithEmailLink(auth, window.location.href)) {
          throw new Error('INVALID_MAGIC_LINK')
        }

        const fallbackEmail = get().magicLinkEmail ?? localStorage.getItem(MAGIC_LINK_EMAIL_KEY)
        const storedEmail = email?.trim().toLowerCase() || fallbackEmail
        if (!storedEmail) {
          return null
        }

        const credential = await signInWithEmailLink(auth, storedEmail, window.location.href)
        localStorage.removeItem(MAGIC_LINK_EMAIL_KEY)
        set({ magicLinkEmail: null })
        const userDoc = await ensureUserRecord(credential.user)
        if (userDoc.suspendedUntil && userDoc.suspendedUntil > new Date()) {
          throw new Error('USER_SUSPENDED')
        }
        const info = getAdditionalUserInfo(credential)
        return { isNewUser: !!info?.isNewUser }
      },

      enterGuestMode: () => {
        set({ user: null, userProfile: null, isGuest: true, loading: false })
      },

      logout: async () => {
        set({ loading: true })
        try {
          await signOut(auth)
          set({ user: null, userProfile: null, isGuest: false, loading: false })
        } catch (error) {
          set({ loading: false })
          throw error
        }
      },

      setupProfile: async (nickname: string, avatarUrl?: string, subEmail?: string) => {
        const firebaseUser = auth.currentUser
        if (!firebaseUser) throw new Error('No Firebase user')

        try {
          const userDoc = await createUserDocument(firebaseUser, nickname, avatarUrl, subEmail)
          set({ user: userDoc, userProfile: userDoc, isGuest: false, loading: false })
        } catch (error) {
          console.error('AuthStore: Profile setup failed:', error)
          throw error
        }
      },

      updateProfile: async (updates: Partial<User> & { subEmail?: string | null }) => {
        const { user } = get()
        if (!user) {
          const error = new Error('No user logged in') as Error & { code?: string }
          error.code = 'unauthenticated'
          throw error
        }

        const firebaseUser = auth.currentUser
        if (!firebaseUser) {
          const error = new Error('No Firebase user') as Error & { code?: string }
          error.code = 'unauthenticated'
          throw error
        }

        try {
          const ensuredUser = await ensureUserRecord(firebaseUser)
          const targetUserId = ensuredUser.id ?? firebaseUser.uid
          await updateUserProfileRepo(targetUserId, updates)
          const refreshed = await getUserById(targetUserId)
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
            set((state) => ({ user: null, userProfile: null, isGuest: state.isGuest, loading: false }))
            return
          }

          try {
            const userDoc = await ensureUserRecord(firebaseUser)
            if (userDoc && (!userDoc.suspendedUntil || userDoc.suspendedUntil <= new Date())) {
              set({ user: userDoc, userProfile: userDoc, isGuest: false, loading: false })
            } else {
              set((state) => ({ user: null, userProfile: null, isGuest: state.isGuest, loading: false }))
            }
          } catch (error) {
            console.error('AuthStore: Error fetching user document:', error)
            set((state) => ({ user: null, userProfile: null, isGuest: state.isGuest, loading: false }))
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
          set((state) => ({ user: null, userProfile: null, isGuest: state.isGuest, loading: false }))
          initializationInProgress = false
          return () => {}
        }
      },
    }),
    {
      name: 'nitech-board-auth',
      partialize: (state) => ({
        isGuest: state.isGuest,
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
