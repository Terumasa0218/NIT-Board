import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { getUserBySubEmail } from '@/repositories/usersRepository'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const { sendMagicLink, enterGuestMode } = useAuthStore()
  const { t } = useI18n()
  const navigate = useNavigate()

  const handleGuestAccess = () => {
    enterGuestMode()
    toast.success(t('auth.guest.entered'))
    navigate('/', { replace: true })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const normalized = email.trim().toLowerCase()
    if (!normalized) {
      toast.error(t('auth.emailRequired'))
      return
    }

    setIsLoading(true)
    try {
      if (normalized.endsWith('@ict.nitech.ac.jp')) {
        await sendMagicLink(normalized)
      } else {
        const user = await getUserBySubEmail(normalized)
        if (!user) {
          toast.error(t('auth.emailNotFound'))
          return
        }
        await sendMagicLink(normalized)
      }

      setEmailSent(true)
      toast.success(t('auth.magicLinkSent'))
    } catch (error) {
      console.error(error)
      toast.error(t('auth.magicLinkError'))
    } finally {
      setIsLoading(false)
    }
  }

  if (emailSent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md card text-center">
          <div className="card-header">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h1 className="card-title">{t('auth.checkEmail')}</h1>
            <p className="card-description">{t('auth.magicLinkSent')}</p>
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
            <h1 className="card-title">{t('auth.welcomeToNitechBoard')}</h1>
            <p className="card-description">{t('auth.welcomeBack')}</p>
          </div>
          <form onSubmit={handleSubmit} className="card-content space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">{t('auth.email')}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('auth.orSubEmail')}
                  className="input pl-10"
                  required
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{t('auth.enterNitechEmail')}</p>
            <button type="submit" disabled={isLoading} className="btn btn-primary w-full">
              {isLoading ? t('common.loading') : t('auth.sendLink')}
            </button>
          </form>

          <div className="card-footer flex flex-col gap-4">
            <button type="button" onClick={handleGuestAccess} className="btn btn-outline w-full">
              {t('auth.guest.browseAsGuest')}
            </button>
            <p className="text-center text-sm text-muted-foreground">
              {t('auth.dontHaveAccount')}{' '}
              <Link to="/register" className="text-primary hover:underline">{t('auth.createAccount')}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
