import { NavLink } from 'react-router-dom'
import { useMemo } from 'react'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { Home, Calendar, Settings, User, Layers, MessageSquare } from 'lucide-react'

export default function Sidebar() {
  const { user, isGuest } = useAuthStore()
  const { t } = useI18n()

  const showMemberLinks = Boolean(user) && !isGuest

  const navItems = useMemo(
    () => [
      {
        to: '/',
        icon: Home,
        label: t('nav.home'),
      },
      {
        to: '/boards',
        icon: Layers,
        label: t('boards.title'),
      },
      {
        to: '/events',
        icon: Calendar,
        label: t('nav.events'),
      },
      ...(showMemberLinks
        ? [
            {
              to: '/messages',
              icon: MessageSquare,
              label: t('nav.messages'),
            },
          ]
        : []),
    ],
    [showMemberLinks, t],
  )

  const bottomItems = useMemo(
    () => [
      ...(showMemberLinks
        ? [
            {
              to: '/profile',
              icon: User,
              label: t('nav.profile'),
            },
            {
              to: '/settings',
              icon: Settings,
              label: t('nav.settings'),
            },
          ]
        : []),
    ],
    [showMemberLinks, t],
  )

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-semibold text-foreground">{t('appTitle')}</h1>
        <p className="text-sm text-muted-foreground mt-1">名古屋工業大学掲示板</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}

        {!showMemberLinks && (
          <div className="mt-4 rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            {t('guest.sidebarRestricted')}
          </div>
        )}
      </nav>

      <div className="p-4 border-t border-border space-y-2">
        {bottomItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
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
