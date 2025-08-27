import { useI18n } from '@/utils/i18n'
import { MessageSquare } from 'lucide-react'

export default function MessagesPage() {
  const { t } = useI18n()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('common.messages')}
        </h1>
        <p className="text-muted-foreground">
          ダイレクトメッセージ
        </p>
      </div>

      <div className="text-center py-12">
        <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          メッセージがありません
        </h3>
        <p className="text-muted-foreground">
          フォローしているユーザーとのメッセージがここに表示されます
        </p>
      </div>
    </div>
  )
}
