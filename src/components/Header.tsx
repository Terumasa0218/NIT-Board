import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { Bell, Plus, User } from 'lucide-react'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const { user, logout } = useAuthStore()
  const { t } = useI18n()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-foreground">
          {t('appTitle')}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <LanguageToggle />
        
        {user && (
          <>
            <button className="btn btn-primary btn-sm">
              <Plus className="h-4 w-4" />
              {t('boards.new')}
            </button>
            
            <button className="btn btn-ghost btn-sm">
              <Bell className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-2">
              <button className="btn btn-ghost btn-sm">
                <User className="h-4 w-4" />
              </button>
              <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                ログアウト
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
