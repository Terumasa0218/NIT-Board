import { NavLink } from 'react-router-dom'
import { useMemo } from 'react'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { Home, Calendar, Settings, User, Layers, MessageSquare, Trophy, Users, Search } from 'lucide-react'

export default function Sidebar() {
  const { user, isGuest } = useAuthStore()
  const { t } = useI18n()

  const showMemberLinks = Boolean(user) && !isGuest

  const navItems = useMemo(
    () => [
      { to: '/', icon: Home, label: t('nav.home') },
      { to: '/boards', icon: Layers, label: t('boards.title') },
      { to: '/events', icon: Calendar, label: t('nav.events') },
      { to: '/circles', icon: Users, label: t('nav.circles') },
      { to: '/ranking', icon: Trophy, label: t('nav.ranking') },
      { to: '/search', icon: Search, label: t('search.title') },
      ...(showMemberLinks ? [{ to: '/messages', icon: MessageSquare, label: t('nav.messages') }] : []),
    ],
    [showMemberLinks, t],
  )

  const bottomItems = useMemo(
    () => [
      ...(showMemberLinks
        ? [
            { to: '/profile', icon: User, label: t('nav.profile') },
            { to: '/settings', icon: Settings, label: t('nav.settings') },
          ]
        : []),
    ],
    [showMemberLinks, t],
  )

  return (
    <div className="w-64 bg-nit-600 border-r border-nit-700/60 text-white flex flex-col">
      <div className="p-6 border-b border-white/20">
        <h1 className="text-xl font-bold tracking-wide text-white">NITech Board</h1>
        <p className="text-xs text-white/80 mt-1">名古屋工業大学掲示板</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-white text-nit-600 shadow-sm'
                  : 'text-white hover:bg-white/20 hover:text-white'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}

        {!showMemberLinks && (
          <div className="mt-4 rounded-md border border-white/30 bg-white/10 px-3 py-2 text-xs text-white/90">
            {t('guest.sidebarRestricted')}
          </div>
        )}
      </nav>

      <div className="p-4 border-t border-white/20 space-y-2">
        {bottomItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-white text-nit-600 shadow-sm'
                  : 'text-white hover:bg-white/20 hover:text-white'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
