import { useI18n } from '@/utils/i18n'
import { MessageSquare, Calendar, TrendingUp } from 'lucide-react'

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t('appTitle')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('home.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Latest Boards */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="card-title">{t('boards.title')}</h2>
            </div>
          </div>
          <div className="card-content">
            <p className="text-muted-foreground">
              {t('empty.common')}
            </p>
          </div>
        </div>

        {/* Events */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="card-title">{t('nav.events')}</h2>
            </div>
          </div>
          <div className="card-content">
            <p className="text-muted-foreground">
              {t('empty.common')}
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="card-title">{t('topics')}</h2>
            </div>
          </div>
          <div className="card-content">
            <p className="text-muted-foreground">
              {t('empty.common')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
