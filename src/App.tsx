import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import Layout from '@/components/Layout'
import AuthGuard from '@/components/AuthGuard'
import LoadingScreen from '@/components/LoadingScreen'
import { useAppStore } from '@/stores/appStore'

// Lazy load page components
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))
const HomePage = lazy(() => import('@/pages/HomePage'))
const DepartmentsPage = lazy(() => import('@/pages/DepartmentsPage'))
const TopicsPage = lazy(() => import('@/pages/TopicsPage'))
const BoardsPage = lazy(() => import('@/pages/BoardsPage'))
const BoardPage = lazy(() => import('@/pages/BoardPage'))
const CreateBoardPage = lazy(() => import('@/pages/CreateBoardPage'))
const EventsPage = lazy(() => import('@/pages/EventsPage'))
const MessagesPage = lazy(() => import('@/pages/MessagesPage'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const ProfileSetupPage = lazy(() => import('@/pages/ProfileSetupPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function App() {
  const { user, loading, initializeAuth } = useAuthStore()
  const { setPreferredLocale } = useAppStore()
  const { changeLanguage } = useI18n()

  // Initialize auth only once on mount
  useEffect(() => {
    let unsubscribe: (() => void) | undefined
    ;(async () => {
      unsubscribe = await initializeAuth()
    })()
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [initializeAuth])

  // Handle language change when user changes
  useEffect(() => {
    if (user?.preferredLocale) {
      changeLanguage(user.preferredLocale)
      setPreferredLocale(user.preferredLocale)
    }
  }, [user?.preferredLocale, changeLanguage, setPreferredLocale])

  if (loading) {
    return <LoadingScreen />
  }

  // Check if user needs to complete profile setup
  const needsProfileSetup = user && !user.nickname

  return (
    <Suspense fallback={<div>Loading routes...</div>}>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <RegisterPage />}
        />
        <Route path="/profile-setup" element={<ProfileSetupPage />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <AuthGuard>
              <Layout />
            </AuthGuard>
          }
        >
          <Route
            index
            element={
              needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <HomePage />
            }
          />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="topics" element={<TopicsPage />} />
          <Route path="boards" element={<BoardsPage />} />
          <Route path="boards/:boardId" element={<BoardPage />} />
          <Route
            path="boards/create"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <CreateBoardPage />}
          />
          <Route
            path="create-board"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <CreateBoardPage />}
          />
          <Route path="events" element={<EventsPage />} />
          <Route
            path="messages"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <MessagesPage />}
          />
          <Route
            path="profile"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <ProfilePage />}
          />
          <Route
            path="users/:userId"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <ProfilePage />}
          />
          <Route
            path="settings"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <SettingsPage />}
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={user ? <NotFoundPage /> : <Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
