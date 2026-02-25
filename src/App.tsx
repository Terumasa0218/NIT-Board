import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import Layout from '@/components/Layout'
import AuthGuard from '@/components/AuthGuard'
import LoadingScreen from '@/components/LoadingScreen'
import { useAppStore } from '@/stores/appStore'
import { firebaseConfigStatus } from '@/config/firebaseConfig'

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
const CirclesPage = lazy(() => import('@/pages/CirclesPage'))
const CircleDetailPage = lazy(() => import('@/pages/CircleDetailPage'))
const CreateCirclePage = lazy(() => import('@/pages/CreateCirclePage'))
const EditCirclePage = lazy(() => import('@/pages/EditCirclePage'))
const CreateFeedbackPage = lazy(() => import('@/pages/CreateFeedbackPage'))
const RankingPage = lazy(() => import('@/pages/RankingPage'))
const AuthCallbackPage = lazy(() => import('@/pages/AuthCallbackPage'))
const SearchPage = lazy(() => import('@/pages/SearchPage'))
const NotificationsPage = lazy(() => import('@/pages/NotificationsPage'))

function App() {
  const { user, loading, initializeAuth } = useAuthStore()
  const { setPreferredLocale } = useAppStore()
  const { changeLanguage } = useI18n()
  const showFirebaseSetupNotice =
    import.meta.env.DEV && !firebaseConfigStatus.isConfigured && !firebaseConfigStatus.useEmulators

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

  if (showFirebaseSetupNotice) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="max-w-2xl w-full space-y-4 border border-border rounded-lg bg-card p-6 shadow-sm">
          <h1 className="text-xl font-semibold">Firebase 設定が未完了です</h1>
          <p className="text-sm text-muted-foreground">
            ローカル開発では <code className="px-1 py-0.5 bg-muted rounded">.env.local</code> に Firebase 設定を追加するか、
            エミュレータを利用してください。
          </p>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Missing: {firebaseConfigStatus.missingEnvVars.join(', ')}</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <code className="px-1 py-0.5 bg-muted rounded">.env.local.example</code> を
                <code className="px-1 py-0.5 bg-muted rounded">.env.local</code> にコピー
              </li>
              <li>実 Firebase で動かす場合はコンソールの値を入力</li>
              <li>
                エミュレータを使う場合は
                <code className="px-1 py-0.5 bg-muted rounded">VITE_USE_FIREBASE_EMULATORS=true</code> を設定し、
                <code className="px-1 py-0.5 bg-muted rounded">firebase emulators:start --only firestore,auth</code> を実行
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }

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
        <Route path="/auth/callback" element={<AuthCallbackPage />} />

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
          <Route path="ranking" element={<RankingPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="circles" element={<CirclesPage />} />
          <Route path="circles/:circleId" element={<CircleDetailPage />} />
          <Route path="circles/create" element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <CreateCirclePage />} />
          <Route path="circles/:circleId/edit" element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <EditCirclePage />} />
          <Route path="feedback/create" element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <CreateFeedbackPage />} />
          <Route
            path="messages"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <MessagesPage />}
          />
          <Route
            path="messages/:chatId"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <MessagesPage />}
          />
          <Route
            path="notifications"
            element={needsProfileSetup ? <Navigate to="/profile-setup" replace /> : <NotificationsPage />}
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
