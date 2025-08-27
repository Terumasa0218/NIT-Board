import { useI18n } from '@/utils/i18n'
import { Calendar } from 'lucide-react'

export default function EventsPage() {
  const { t } = useI18n()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('common.events')}
        </h1>
        <p className="text-muted-foreground">
          学校イベントの一覧
        </p>
      </div>

      <div className="text-center py-12">
        <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          イベントがありません
        </h3>
        <p className="text-muted-foreground">
          学校イベントの投稿がここに表示されます
        </p>
      </div>
    </div>
  )
}
