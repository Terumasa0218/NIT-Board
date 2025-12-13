import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getMessaging, isSupported } from 'firebase/messaging'
import { firebaseConfig } from '@/config/firebaseConfig'

export const vapidKey = '' // leave empty if not yet issued

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const getMessagingIfSupported = async () => {
  const ok = await isSupported().catch(() => false)
  if (!ok) return null
  try {
    return getMessaging(app)
  } catch {
    return null
  }
}
