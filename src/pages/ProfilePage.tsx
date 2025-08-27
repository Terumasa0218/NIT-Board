import { useI18n } from '@/utils/i18n'
import { User } from 'lucide-react'

export default function ProfilePage() {
  const { t } = useI18n()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('common.profile')}
        </h1>
        <p className="text-muted-foreground">
          プロフィール設定
        </p>
      </div>

      <div className="text-center py-12">
        <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          プロフィール設定
        </h3>
        <p className="text-muted-foreground">
          ユーザー情報の編集とアバター設定がここに表示されます
        </p>
      </div>
    </div>
  )
}
