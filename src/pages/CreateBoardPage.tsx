import { useI18n } from '@/utils/i18n'
import { Plus } from 'lucide-react'

export default function CreateBoardPage() {
  const { t } = useI18n()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('boards.createBoard')}
        </h1>
        <p className="text-muted-foreground">
          新しい掲示板を作成してください
        </p>
      </div>

      <div className="text-center py-12">
        <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          掲示板作成フォーム
        </h3>
        <p className="text-muted-foreground">
          タイトル、説明、最初の投稿を入力するフォームがここに表示されます
        </p>
      </div>
    </div>
  )
}
