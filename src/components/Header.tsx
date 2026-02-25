import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun, Plus, User, Search, Bell, LogOut } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import { getUnreadCount } from '@/repositories/notificationsRepository'

export default function Header() {
  const { user, isGuest, logout } = useAuthStore()
  const { t } = useI18n()
  const { resolvedTheme, toggleTheme } = useTheme()

  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (!user || isGuest) {
      setUnreadCount(0)
      return
    }

    let active = true
    const load = async () => {
      try {
        const count = await getUnreadCount(user.id)
        if (active) setUnreadCount(count)
      } catch (error) {
        console.error('Failed to fetch unread notifications', error)
      }
    }

    load()
    const timer = setInterval(load, 30000)
    return () => {
      active = false
      clearInterval(timer)
    }
  }, [user, isGuest])

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="bg-white dark:bg-nit-900 border-b border-border">
      {isGuest && !user && (
        <div className="border-b border-border bg-nit-50 dark:bg-nit-900/60 px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
          <p className="text-sm text-foreground">{t('guest.bannerMessage')}</p>
          <div className="flex items-center gap-2 shrink-0">
            <Link to="/login" className="btn btn-outline btn-sm">{t('auth.login')}</Link>
            <Link to="/register" className="btn btn-primary btn-sm">{t('auth.createAccount')}</Link>
          </div>
        </div>
      )}
      <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <h1 className="text-lg sm:text-xl font-bold tracking-wide text-nit-600 dark:text-nit-400">NITech Board</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/search" className="btn btn-ghost btn-sm" title={t('search.title')}>
            <Search className="h-4 w-4" />
          </Link>

          {user && !isGuest && (
            <Link to="/notifications" className="btn btn-ghost btn-sm relative" title={t('notifications.title')}>
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[10px] leading-4 text-center">
                  {unreadCount > 99 ? '99+' : unreadCount}
                </span>
              )}
            </Link>
          )}

          <LanguageToggle />

          {user && (
            <>
              <Link to="/boards/create" className="btn btn-primary btn-sm">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">{t('boards.new')}</span>
              </Link>

              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-sm"
                title={resolvedTheme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
              >
                {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <div className="flex items-center gap-1 sm:gap-2">
                <Link to="/profile" className="btn btn-ghost btn-sm">
                  <User className="h-4 w-4" />
                </Link>
                <button onClick={handleLogout} className="btn btn-ghost btn-sm" title={t('auth.logout')}>
                  <LogOut className="h-4 w-4 sm:hidden" />
                  <span className="hidden sm:inline">{t('auth.logout')}</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
