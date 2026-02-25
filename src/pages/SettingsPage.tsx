import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useI18n } from '@/utils/i18n'
import { useTheme } from '@/hooks/useTheme'
import { useAuthStore } from '@/stores/auth'
import { auth } from '@/firebase'
import { deleteUserById } from '@/repositories/usersRepository'

export default function SettingsPage() {
  const navigate = useNavigate()
  const { t, currentLocale, changeLanguage, formatDate } = useI18n()
  const { theme, setTheme } = useTheme()
  const { user, userProfile, updateProfile, logout } = useAuthStore()
  const [subEmail, setSubEmail] = useState(userProfile?.subEmail || '')
  const [savingSubEmail, setSavingSubEmail] = useState(false)
  const [deletingAccount, setDeletingAccount] = useState(false)

  const handleSaveSubEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavingSubEmail(true)
    try {
      await updateProfile({ subEmail: subEmail.trim() || undefined })
      toast.success(t('settings.saved'))
    } catch (error) {
      console.error(error)
      toast.error(t('settings.subEmailSaveFailed'))
    } finally {
      setSavingSubEmail(false)
    }
  }

  const handleDeleteSubEmail = async () => {
    setSavingSubEmail(true)
    try {
      await updateProfile({ subEmail: '' })
      setSubEmail('')
      toast.success(t('settings.subEmailDeleted'))
    } catch (error) {
      console.error(error)
      toast.error(t('settings.subEmailDeleteFailed'))
    } finally {
      setSavingSubEmail(false)
    }
  }

  const handleLogout = async () => {
    if (!window.confirm(t('settings.logoutConfirm'))) return
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error(error)
      toast.error(t('settings.logoutFailed'))
    }
  }

  const handleDeleteAccount = async () => {
    if (!user) return
    if (!window.confirm(t('settings.deleteAccountConfirm'))) return
    if (!window.confirm(t('settings.deleteAccountWarning'))) return

    setDeletingAccount(true)
    try {
      await deleteUserById(user.id)
      if (auth.currentUser) {
        await deleteUser(auth.currentUser)
      }
      navigate('/login')
      toast.success(t('settings.accountDeleted'))
    } catch (error) {
      console.error(error)
      toast.error(t('settings.deleteAccountFailed'))
    } finally {
      setDeletingAccount(false)
    }
  }

  return (
    <main className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">{t('common.settings')}</h1>
      </div>

      <section className="card">
        <div className="card-content space-y-3">
          <h2 className="font-semibold">{t('settings.theme')}</h2>
          <div className="flex gap-4">
            {(['light', 'dark', 'system'] as const).map((value) => (
              <label key={value} className="flex items-center gap-2">
                <input type="radio" checked={theme === value} onChange={() => setTheme(value)} />
                <span>{t(`settings.themeOptions.${value}`)}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-content space-y-3">
          <h2 className="font-semibold">{t('settings.language')}</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" checked={currentLocale === 'ja'} onChange={() => changeLanguage('ja')} />
              <span>日本語</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" checked={currentLocale === 'en'} onChange={() => changeLanguage('en')} />
              <span>English</span>
            </label>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-content space-y-3">
          <h2 className="font-semibold">{t('settings.subEmail')}</h2>
          <p className="text-sm text-muted-foreground">{userProfile?.subEmail || '-'}</p>
          <form className="flex gap-2" onSubmit={handleSaveSubEmail}>
            <input className="input flex-1" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} placeholder={t('settings.subEmailPlaceholder')} />
            <button className="btn btn-primary" disabled={savingSubEmail}>{t('common.save')}</button>
            <button type="button" className="btn btn-outline" disabled={savingSubEmail} onClick={handleDeleteSubEmail}>{t('common.delete')}</button>
          </form>
        </div>
      </section>

      <section className="card">
        <div className="card-content space-y-2">
          <h2 className="font-semibold">{t('settings.account')}</h2>
          <p className="text-sm">{user?.email}</p>
          <p className="text-sm text-muted-foreground">{userProfile?.createdAt ? formatDate(userProfile.createdAt) : '-'}</p>
        </div>
      </section>

      <section className="card">
        <div className="card-content space-y-3">
          <button className="btn btn-outline" onClick={handleLogout}>{t('settings.logout')}</button>
          <button className="btn btn-outline text-red-600 border-red-300 hover:bg-red-50" onClick={handleDeleteAccount} disabled={deletingAccount}>
            {t('settings.deleteAccount')}
          </button>
        </div>
      </section>
    </main>
  )
}
