const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
] as const

const optionalEnvVars = ['VITE_FIREBASE_MEASUREMENT_ID'] as const

const useEmulators = import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true'
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || 'nitboard-57de2'
const missingEnvVars = requiredEnvVars.filter((key) => !import.meta.env[key])
const isConfigured = missingEnvVars.length === 0

if (import.meta.env.PROD && !isConfigured) {
  throw new Error(`Missing Firebase environment variable(s): ${missingEnvVars.join(', ')}`)
}

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${projectId}.firebaseapp.com`,
  projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${projectId}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'demo',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'demo',
  measurementId: import.meta.env[optionalEnvVars[0]] || undefined,
}

export const firebaseConfigStatus = {
  isConfigured,
  useEmulators,
  missingEnvVars,
  projectId,
}

type FirebaseConfig = typeof firebaseConfig

export type { FirebaseConfig }
