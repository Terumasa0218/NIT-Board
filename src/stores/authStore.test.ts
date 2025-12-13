import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { User } from '@/types'

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

vi.stubGlobal('localStorage', localStorageMock)

const mockSignOut = vi.fn().mockResolvedValue(undefined)

vi.mock('firebase/auth', () => ({
  signOut: mockSignOut,
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  sendEmailVerification: vi.fn(),
  sendPasswordResetEmail: vi.fn(),
  onAuthStateChanged: vi.fn(),
}))

vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  updateDoc: vi.fn(),
  serverTimestamp: vi.fn(),
}))

vi.mock('@/firebase', () => ({
  auth: {},
  db: {},
}))

let useAuthStore: typeof import('./auth')['useAuthStore']

beforeEach(async () => {
  vi.clearAllMocks()
  localStorageMock.getItem.mockReturnValue(null)
  const storeModule = await import('./auth')
  useAuthStore = storeModule.useAuthStore
  useAuthStore.setState({ user: null, loading: true })
})

describe('useAuthStore', () => {
  it('initializes with null user and loading true', () => {
    const state = useAuthStore.getState()
    expect(state.user).toBeNull()
    expect(state.loading).toBe(true)
  })

  it('logout clears user and sets loading false', async () => {
    const mockUser: User = {
      id: 'user-1',
      email: 'user@example.com',
      nickname: 'Tester',
      universityId: 'nitech',
      followers: [],
      following: [],
      preferredLocale: 'ja',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    useAuthStore.setState({ user: mockUser, loading: false })

    await useAuthStore.getState().logout()

    const state = useAuthStore.getState()
    expect(mockSignOut).toHaveBeenCalled()
    expect(state.user).toBeNull()
    expect(state.loading).toBe(false)
  })
})
