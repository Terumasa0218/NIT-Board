import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'

type CallbackStatus = 'verifying' | 'needsEmail' | 'success' | 'error'

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<CallbackStatus>('verifying')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { completeMagicLinkSignIn } = useAuthStore()
  const { t } = useI18n()
  const navigate = useNavigate()

  const resolveErrorState = (err: unknown): { message: string; showEmailForm: boolean } => {
    const code = typeof err === 'object' && err !== null && 'code' in err ? String(err.code) : ''
    const message = err instanceof Error ? err.message : ''

    if (message === 'EMAIL_NOT_FOUND' || code === 'auth/invalid-email' || code === 'auth/user-mismatch') {
      return { message: t('auth.errors.emailMismatch'), showEmailForm: true }
    }
    if (code === 'auth/invalid-action-code' || message === 'INVALID_MAGIC_LINK') {
      return { message: t('auth.errors.invalidLink'), showEmailForm: false }
    }
    if (code === 'auth/expired-action-code') {
      return { message: t('auth.errors.expiredLink'), showEmailForm: false }
    }

    return { message: t('auth.callback.error'), showEmailForm: false }
  }

  const verify = useCallback(async (inputEmail?: string) => {
    setIsSubmitting(true)
    setError(null)
    setStatus(inputEmail ? 'needsEmail' : 'verifying')

    try {
      const result = await completeMagicLinkSignIn(inputEmail)
      if (!result) {
        setStatus('needsEmail')
        return
      }
      setStatus('success')
      navigate(result.isNewUser ? '/profile-setup' : '/', { replace: true })
    } catch (err) {
      console.error(err)
      const { message, showEmailForm } = resolveErrorState(err)
      setError(message)
      setStatus(showEmailForm ? 'needsEmail' : 'error')
      if (!showEmailForm) {
        toast.error(message)
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [completeMagicLinkSignIn, navigate, t])

  useEffect(() => {
    verify()
  }, [verify])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const normalized = email.trim().toLowerCase()
    if (!normalized) {
      toast.error(t('auth.emailRequired'))
      return
    }

    await verify(normalized)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md">
        <div className="card-content py-8 space-y-4">
          {status === 'verifying' && <p className="text-center">{t('auth.callback.verifying')}</p>}
          {status === 'success' && <p className="text-center">{t('auth.callback.success')}</p>}

          {status === 'needsEmail' && (
            <>
              <div className="space-y-2 text-center">
                <p className="font-medium">{t('auth.callback.enterEmail')}</p>
                <p className="text-sm text-muted-foreground">{t('auth.callback.enterEmailDescription')}</p>
                {error && <p className="text-destructive text-sm">{error}</p>}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t('auth.email')}
                  className="input w-full"
                  required
                />
                <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                  {isSubmitting ? t('auth.callback.retrying') : t('auth.login')}
                </button>
              </form>
            </>
          )}

          {status === 'error' && (
            <div className="space-y-3 text-center">
              <p className="text-destructive">{error ?? t('auth.callback.error')}</p>
              <Link to="/login" className="btn btn-primary w-full">{t('auth.login')}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
