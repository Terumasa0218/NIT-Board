import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
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
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function App() {
  const { user, loading, initializeAuth } = useAuthStore()
  const { changeLanguage } = useI18n()

  useEffect(() => {
    console.log('App: Initializing auth...')
    const unsubscribe = initializeAuth()
    
    // Set user's preferred locale if logged in
    if (user?.preferredLocale) {
      changeLanguage(user.preferredLocale)
    }
    
    return unsubscribe
  }, [initializeAuth, user?.preferredLocale, changeLanguage])

  useEffect(() => {
    console.log('App: Auth state changed:', { user: !!user, loading, isGuest: false })
  }, [user, loading])

  // Show loading screen only for a short time, then proceed
  if (loading) {
    console.log('App: Showing loading screen...')
    return <LoadingScreen />
  }

  console.log('App: Rendering main app...')

  return (
    <Suspense fallback={<div>Loading routes...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="topics" element={<TopicsPage />} />
          <Route path="boards" element={<BoardsPage />} />
          <Route path="boards/:boardId" element={<BoardPage />} />
          <Route path="boards/create" element={
            <AuthGuard>
              <CreateBoardPage />
            </AuthGuard>
          } />
          <Route path="create-board" element={
            <AuthGuard>
              <CreateBoardPage />
            </AuthGuard>
          } />
          <Route path="events" element={<EventsPage />} />
          <Route path="messages" element={
            <AuthGuard>
              <MessagesPage />
            </AuthGuard>
          } />
          <Route path="profile" element={
            <AuthGuard>
              <ProfilePage />
            </AuthGuard>
          } />
          <Route path="settings" element={
            <AuthGuard>
              <SettingsPage />
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
