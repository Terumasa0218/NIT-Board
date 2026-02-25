import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Bell } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ja, enUS } from 'date-fns/locale'
import { getNotifications, markAllAsRead, markAsRead } from '@/repositories/notificationsRepository'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import type { Notification } from '@/types'

const resolvePath = (item: Notification): string => {
  switch (item.type) {
    case 'thanks_received':
    case 'best_answer':
    case 'new_post_by_following':
      return '/boards'
    case 'new_follower':
      return `/users/${item.refId}`
    case 'new_message':
      return `/messages/${item.refId}`
    default:
      return '/'
  }
}

export default function NotificationsPage() {
  const { user } = useAuthStore()
  const { t, currentLocale } = useI18n()
  const navigate = useNavigate()
  const [items, setItems] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      if (!user) return
      setLoading(true)
      try {
        const list = await getNotifications(user.id)
        setItems(list)
      } catch (error) {
        console.error(error)
        toast.error('Failed to load notifications')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user])

  const handleOpen = async (item: Notification) => {
    try {
      if (!item.isRead) {
        await markAsRead(item.id)
        setItems((prev) => prev.map((entry) => (entry.id === item.id ? { ...entry, isRead: true } : entry)))
      }
    } catch (error) {
      console.error(error)
    }
    navigate(resolvePath(item))
  }

  const handleMarkAllRead = async () => {
    if (!user) return
    try {
      await markAllAsRead(user.id)
      setItems((prev) => prev.map((entry) => ({ ...entry, isRead: true })))
      toast.success(t('notifications.marked'))
    } catch (error) {
      console.error(error)
      toast.error('Failed to mark notifications as read')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('notifications.title')}</h1>
        <button type="button" className="btn btn-outline btn-sm" onClick={handleMarkAllRead}>
          {t('notifications.markAllRead')}
        </button>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : items.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground">
          <Bell className="h-10 w-10 mx-auto mb-3" />
          <p>{t('notifications.empty')}</p>
          <Link className="btn btn-primary btn-sm mt-4" to="/boards">{t('empty.createFirst')}</Link>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleOpen(item)}
              className={`w-full text-left rounded-lg border border-border p-4 ${item.isRead ? 'bg-card' : 'bg-primary/5'}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center overflow-hidden">
                  {item.actorAvatarUrl ? (
                    <img src={item.actorAvatarUrl} alt={item.actorName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-semibold">{item.actorName.charAt(0)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{item.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDistanceToNow(item.createdAt, { addSuffix: true, locale: currentLocale === 'en' ? enUS : ja })}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
