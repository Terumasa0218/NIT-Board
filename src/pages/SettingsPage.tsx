import { useI18n } from '@/utils/i18n'
import { Settings } from 'lucide-react'

export default function SettingsPage() {
  const { t } = useI18n()

  return (
    <main className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('common.settings')}
        </h1>
        <p className="text-muted-foreground">
          アプリケーション設定
        </p>
      </div>

      <div className="text-center py-12">
        <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          設定画面
        </h3>
        <p className="text-muted-foreground">
          言語設定、テーマ設定、通知設定などがここに表示されます
        </p>
      </div>
    </main>
  )
}
