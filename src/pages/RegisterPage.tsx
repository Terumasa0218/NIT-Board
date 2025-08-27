import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { Eye, EyeOff, Mail, Lock, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  
  const { register } = useAuthStore()
  const { t } = useI18n()

  const validateEmail = (email: string) => {
    return email.endsWith('@ict.nitech.ac.jp')
  }

  const validatePassword = (password: string) => {
    return password.length >= 6
  }

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      toast.error(t('auth.onlyNitechEmail'))
      return
    }

    if (!validatePassword(password)) {
      toast.error(t('auth.passwordTooShort'))
      return
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      toast.error(t('auth.passwordsMustMatch'))
      return
    }

    setIsLoading(true)
    try {
      await register(email, password)
      setEmailSent(true)
      toast.success(t('auth.verificationEmailSent'))
    } catch (error: any) {
      console.error('Registration error:', error)
      
      let errorMessage = t('auth.registerFailed')
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = t('auth.emailAlreadyInUse')
      } else if (error.code === 'auth/weak-password') {
        errorMessage = t('auth.weakPassword')
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = t('auth.tooManyRequests')
      }
      
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  if (emailSent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="card text-center">
            <div className="card-header">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h1 className="card-title">{t('auth.verificationEmailSent')}</h1>
              <p className="card-description">{t('auth.checkEmail')}</p>
            </div>
            
            <div className="card-content space-y-4">
              <p className="text-sm text-muted-foreground">
                名古屋工業大学のメールアドレス（{email}）に確認メールを送信しました。
                メール内のリンクをクリックしてアカウントを有効化してください。
              </p>
              
              <div className="bg-muted p-4 rounded-md">
                <p className="text-sm text-muted-foreground">
                  <strong>注意:</strong> 確認メールが届かない場合は、スパムフォルダを確認してください。
                </p>
              </div>
            </div>
            
            <div className="card-footer">
              <Link to="/login" className="btn btn-primary w-full">
                {t('auth.login')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="card-header text-center">
            <h1 className="card-title">{t('auth.createAccount')}</h1>
            <p className="card-description">NITech Boardにアカウントを作成</p>
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
              <p className="text-xs text-muted-foreground">
                名古屋工業大学のメールアドレス（@ict.nitech.ac.jp）のみ使用できます
              </p>
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
              <p className="text-xs text-muted-foreground">
                パスワードは6文字以上である必要があります
              </p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                {t('auth.confirmPassword')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t('auth.enterConfirmPassword')}
                  className="input pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full"
            >
              {isLoading ? t('common.loading') : t('auth.register')}
            </button>
          </form>
          
          <div className="card-footer">
            <p className="text-center text-sm text-muted-foreground">
              {t('auth.alreadyHaveAccount')}{' '}
              <Link to="/login" className="text-primary hover:underline">
                {t('auth.login')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
