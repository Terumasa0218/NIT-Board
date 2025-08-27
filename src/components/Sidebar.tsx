import { NavLink } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { 
  Home, 
  MessageSquare, 
  Calendar, 
  Settings, 
  User,
  Hash,
  Layers
} from 'lucide-react'

export default function Sidebar() {
  const { user, isGuest } = useAuthStore()
  const { t } = useI18n()

  const navItems = [
    {
      to: '/',
      icon: Home,
      label: t('common.home'),
    },
    {
      to: '/departments',
      icon: MessageSquare,
      label: t('common.boards'),
    },
    {
      to: '/topics',
      icon: Hash,
      label: t('common.topics'),
    },
    {
      to: '/boards',
      icon: Layers,
      label: t('boards.title'),
    },
    {
      to: '/events',
      icon: Calendar,
      label: t('common.events'),
    },
    ...(user && !isGuest ? [
      {
        to: '/messages',
        icon: MessageSquare,
        label: t('common.messages'),
      },
    ] : []),
  ]

  const bottomItems = [
    ...(user && !isGuest ? [
      {
        to: '/profile',
        icon: User,
        label: t('common.profile'),
      },
    ] : []),
    {
      to: '/settings',
      icon: Settings,
      label: t('common.settings'),
    },
  ]

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-semibold text-foreground">
          NITech Board
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          名古屋工業大学掲示板
        </p>
      </div>

      {/* Navigation */}
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
      </nav>

      {/* Bottom section */}
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
