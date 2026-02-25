import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'

export default function AuthCallbackPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { completeMagicLinkSignIn } = useAuthStore()
  const { t } = useI18n()
  const navigate = useNavigate()

  useEffect(() => {
    const run = async () => {
      try {
        const result = await completeMagicLinkSignIn()
        setSuccess(true)
        navigate(result.isNewUser ? '/profile-setup' : '/', { replace: true })
      } catch (err) {
        console.error(err)
        setError(t('auth.callback.error'))
      }
    }
    run()
  }, [completeMagicLinkSignIn, navigate, t])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md text-center">
        <div className="card-content py-8 space-y-3">
          {!error && !success && <p>{t('auth.callback.verifying')}</p>}
          {success && <p>{t('auth.callback.success')}</p>}
          {error && (
            <>
              <p className="text-destructive">{error}</p>
              <Link to="/login" className="btn btn-primary">{t('auth.login')}</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
