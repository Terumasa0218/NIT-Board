import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { login, enterGuestMode } = useAuthStore()
  const { t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const validateEmail = (email: string) => {
    return email.endsWith('@ict.nitech.ac.jp')
  }


  const handleGuestAccess = () => {
    enterGuestMode()
    toast.success(t('auth.guest.entered'))
    navigate('/', { replace: true })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim() || !password.trim()) {
      toast.error('メールアドレスとパスワードを入力してください')
      return
    }

    if (!validateEmail(email)) {
      toast.error('名古屋工業大学のメールアドレス（@ict.nitech.ac.jp）を使用してください')
      return
    }

    setIsLoading(true)
    try {
      await login(email.trim(), password)
      toast.success('ログインしました')
      navigate(from, { replace: true })
    } catch (error: any) {
      console.error('Login error:', error)
      
      let errorMessage = 'ログインに失敗しました'
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'ユーザーが見つかりません。登録してください。'
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'パスワードが正しくありません'
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'ログイン試行回数が多すぎます。しばらく待ってから再試行してください'
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = 'アカウントが無効化されています'
      } else if (error.message === 'EMAIL_NOT_VERIFIED') {
        errorMessage = 'メールアドレスの確認が必要です。確認メールをチェックしてください'
      } else if (error.message === 'USER_SUSPENDED') {
        errorMessage = 'アカウントが一時停止されています'
      } else if (error.message === 'USER_DOCUMENT_NOT_FOUND') {
        // This should not happen anymore with our new logic
        errorMessage = 'ユーザー情報の取得に失敗しました。再試行してください'
      }
      
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="card-header text-center">
            <h1 className="card-title">{t('auth.welcomeToNitechBoard')}</h1>
            <p className="card-description">{t('auth.welcomeBack')}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="card-content space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                {t('auth.email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('auth.enterEmail')}
                  className="input pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                {t('auth.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('auth.enterPassword')}
                  className="input pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                {t('auth.forgotPassword')}
              </Link>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full"
            >
              {isLoading ? t('common.loading') : t('auth.login')}
            </button>
          </form>
          
          <div className="card-footer flex flex-col gap-4">
            <button
              type="button"
              onClick={handleGuestAccess}
              className="btn btn-outline w-full"
            >
              {t('auth.guest.browseAsGuest')}
            </button>
            <p className="text-center text-sm text-muted-foreground">
              {t('auth.dontHaveAccount')}{' '}
              <Link to="/register" className="text-primary hover:underline">
                {t('auth.createAccount')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
