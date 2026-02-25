import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'

interface AuthGuardProps {
  children: ReactNode
}

const GUEST_ALLOWED_PATHS = ['/', '/departments', '/topics', '/boards', '/events']

const isGuestAllowedPath = (pathname: string): boolean => {
  if (GUEST_ALLOWED_PATHS.includes(pathname)) return true
  return /^\/boards\/[^/]+$/.test(pathname) && pathname !== '/boards/create'
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, isGuest } = useAuthStore()
  const location = useLocation()

  if (!user && !(isGuest && isGuestAllowedPath(location.pathname))) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
