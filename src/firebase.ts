import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getMessaging, isSupported } from 'firebase/messaging'

export const firebaseConfig = {
  apiKey: 'AIzaSyC2X3wAIyE3dbe4NtGxH0tmdvzWw-OuBNM',
  authDomain: 'nitboard-57de2.firebaseapp.com',
  projectId: 'nitboard-57de2',
  storageBucket: 'nitboard-57de2.appspot.com',
  messagingSenderId: '317592149056',
  appId: '1:317592149056:web:8760a6907ce2439e2e93a5',
  measurementId: 'G-X127WXT7T0',
}

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
