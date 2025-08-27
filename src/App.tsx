import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import Layout from '@/components/Layout'
import AuthGuard from '@/components/AuthGuard'
import LoadingScreen from '@/components/LoadingScreen'

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
  const { changeLanguage } = useI18n()

  // Initialize auth only once on mount
  useEffect(() => {
    console.log('App: Initializing auth...')
    const unsubscribe = initializeAuth()
    return unsubscribe
  }, []) // Empty dependency array

  // Handle language change when user changes
  useEffect(() => {
    if (user?.preferredLocale && user.preferredLocale !== 'ja') {
      changeLanguage(user.preferredLocale)
    }
  }, [user?.preferredLocale, changeLanguage])

  useEffect(() => {
    console.log('App: Auth state changed:', { user: !!user, loading, isGuest: false })
  }, [user, loading])

  // Show loading screen only for a short time, then proceed
  if (loading) {
    console.log('App: Showing loading screen...')
    return <LoadingScreen />
  }

  console.log('App: Rendering main app...')

  // Check if user needs to complete profile setup
  const needsProfileSetup = user && !user.nickname

  return (
    <Suspense fallback={<div>Loading routes...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile-setup" element={<ProfileSetupPage />} />
        
        {/* Protected routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={
            needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <HomePage />
          } />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="topics" element={<TopicsPage />} />
          <Route path="boards" element={<BoardsPage />} />
          <Route path="boards/:boardId" element={<BoardPage />} />
          <Route path="boards/create" element={
            <AuthGuard>
              {needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <CreateBoardPage />}
            </AuthGuard>
          } />
          <Route path="create-board" element={
            <AuthGuard>
              {needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <CreateBoardPage />}
            </AuthGuard>
          } />
          <Route path="events" element={<EventsPage />} />
          <Route path="messages" element={
            <AuthGuard>
              {needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <MessagesPage />}
            </AuthGuard>
          } />
          <Route path="profile" element={
            <AuthGuard>
              {needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <ProfilePage />}
            </AuthGuard>
          } />
          <Route path="settings" element={
            <AuthGuard>
              {needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <SettingsPage />}
            </AuthGuard>
          } />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
