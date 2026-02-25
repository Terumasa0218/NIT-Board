import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { getUserBySubEmail } from '@/repositories/usersRepository'
import { isAllowedEmail } from '@/constants/university'

const RESEND_COOLDOWN_SECONDS = 30

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sentEmail, setSentEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  const { sendMagicLink, resendMagicLink, enterGuestMode } = useAuthStore()
  const { t } = useI18n()
  const navigate = useNavigate()

  useEffect(() => {
    if (cooldown <= 0) return
    const timer = window.setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [cooldown])

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
      if (isAllowedEmail(normalized)) {
        await sendMagicLink(normalized)
      } else {
        const user = await getUserBySubEmail(normalized)
        if (!user) {
          toast.error(t('auth.emailNotFound'))
          return
        }
        await sendMagicLink(normalized)
      }

      setSentEmail(normalized)
      setEmailSent(true)
      setCooldown(RESEND_COOLDOWN_SECONDS)
      toast.success(t('auth.linkSent'))
    } catch (error) {
      console.error(error)
      toast.error(t('auth.magicLinkError'))
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    if (cooldown > 0 || isLoading) return

    setIsLoading(true)
    try {
      await resendMagicLink()
      setCooldown(RESEND_COOLDOWN_SECONDS)
      toast.success(t('auth.linkSent'))
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
          <div className="card-header space-y-2">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-1" />
            <h1 className="card-title">{t('auth.linkSent')}</h1>
            <p className="card-description">{t('auth.linkSentTo', { email: sentEmail })}</p>
            <p className="text-sm text-muted-foreground">{t('auth.checkInbox')}</p>
          </div>
          <div className="card-content space-y-4 text-left">
            <div className="rounded-md border p-3 space-y-2">
              <p className="font-medium">{t('auth.notReceived')}</p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>{t('auth.checkSpam')}</li>
                <li>{t('auth.checkEmail')}</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleResend}
              disabled={cooldown > 0 || isLoading}
              className="btn btn-outline w-full"
            >
              {t('auth.resend')}
            </button>
            {cooldown > 0 && (
              <p className="text-sm text-center text-muted-foreground">
                {t('auth.resendIn', { seconds: cooldown })}
              </p>
            )}
            <p className="text-xs text-center text-muted-foreground">{t('auth.resendCooldown')}</p>

            <button
              type="button"
              onClick={() => {
                setEmailSent(false)
                setCooldown(0)
              }}
              className="text-sm text-primary hover:underline w-full"
            >
              {t('auth.tryAnotherEmail')}
            </button>
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
