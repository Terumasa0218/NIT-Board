import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { 
  Plus, 
  User, 
  LogOut, 
  Settings, 
  Sun, 
  Moon,
  ChevronDown,
  Globe
} from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export default function Header() {
  const { user, isGuest, logout } = useAuthStore()
  const { t, currentLocale, changeLanguage } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
      setShowUserMenu(false)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-foreground">
          NITech Board
        </h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Globe className="h-4 w-4" />
            {currentLocale === 'ja' ? '日本語' : 'English'}
            <ChevronDown className="h-3 w-3" />
          </button>
          
          {showLanguageMenu && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-card border border-border rounded-md shadow-lg z-50">
              <button
                onClick={() => {
                  changeLanguage('ja')
                  setShowLanguageMenu(false)
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-accent transition-colors ${
                  currentLocale === 'ja' ? 'text-primary' : 'text-foreground'
                }`}
              >
                日本語
              </button>
              <button
                onClick={() => {
                  changeLanguage('en')
                  setShowLanguageMenu(false)
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-accent transition-colors ${
                  currentLocale === 'en' ? 'text-primary' : 'text-foreground'
                }`}
              >
                English
              </button>
            </div>
          )}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>

        {/* New Post button */}
        {user && !isGuest && (
          <Link
            to="/create-board"
            className="btn btn-primary btn-sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            {t('common.newPost')}
          </Link>
        )}

        {/* User menu */}
        {user && !isGuest ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.nickname}
                  className="h-6 w-6 rounded-full"
                />
              ) : (
                <User className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">{user.nickname}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-card border border-border rounded-md shadow-lg z-50">
                <Link
                  to="/profile"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                >
                  <User className="h-4 w-4" />
                  {t('common.profile')}
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  {t('common.settings')}
                </Link>
                <div className="border-t border-border my-1" />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-accent transition-colors w-full text-left"
                >
                  <LogOut className="h-4 w-4" />
                  {t('common.logout')}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="btn btn-outline btn-sm"
            >
              {t('common.login')}
            </Link>
            <Link
              to="/register"
              className="btn btn-primary btn-sm"
            >
              {t('common.register')}
            </Link>
          </div>
        )}
      </div>

      {/* Backdrop for menus */}
      {(showUserMenu || showLanguageMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowUserMenu(false)
            setShowLanguageMenu(false)
          }}
        />
      )}
    </header>
  )
}
