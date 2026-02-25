import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { isAllowedEmail } from '@/constants/university'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const { sendMagicLink } = useAuthStore()
  const { t } = useI18n()

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
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h1 className="card-title">{t('auth.checkEmail')}</h1>
            <p className="card-description">{t('auth.magicLinkSent')}</p>
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
