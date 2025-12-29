import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getMessaging, isSupported } from 'firebase/messaging'
import { firebaseConfig, firebaseConfigStatus } from '@/config/firebaseConfig'

export const vapidKey = '' // leave empty if not yet issued

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

if (import.meta.env.DEV && firebaseConfigStatus.useEmulators) {
  connectAuthEmulator(auth, 'http://localhost:9099')
  connectFirestoreEmulator(db, 'localhost', 8080)
  console.info('Firebase emulators connected (auth:9099, firestore:8080)')
}

export const getMessagingIfSupported = async () => {
  const ok = await isSupported().catch(() => false)
  if (!ok) return null
  try {
    return getMessaging(app)
  } catch {
    return null
  }
}
