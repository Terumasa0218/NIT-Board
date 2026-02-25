import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { isAllowedEmail } from '@/constants/university'

const RESEND_COOLDOWN_SECONDS = 30

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [sentEmail, setSentEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [cooldown, setCooldown] = useState(0)
  const { sendMagicLink, resendMagicLink } = useAuthStore()
  const { t } = useI18n()

  useEffect(() => {
    if (cooldown <= 0) return
    const timer = window.setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [cooldown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const normalized = email.trim().toLowerCase()

    if (!isAllowedEmail(normalized)) {
      toast.error(t('auth.onlyNitechEmail'))
      return
    }

    setIsLoading(true)
    try {
      await sendMagicLink(normalized)
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

          <div className="card-footer">
            <Link to="/login" className="btn btn-primary w-full">{t('auth.login')}</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md card">
        <div className="card-header text-center">
          <h1 className="card-title">{t('auth.createAccount')}</h1>
        </div>
        <form onSubmit={handleSubmit} className="card-content space-y-4">
          <label htmlFor="email" className="text-sm font-medium text-foreground">{t('auth.email')}</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('auth.enterNitechEmail')} className="input pl-10" required />
          </div>
          <button type="submit" disabled={isLoading} className="btn btn-primary w-full">
            {isLoading ? t('common.loading') : t('auth.sendLink')}
          </button>
        </form>
      </div>
    </div>
  )
}
