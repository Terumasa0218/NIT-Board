import { useI18n } from '@/utils/i18n'
import { MessageSquare, Plus } from 'lucide-react'

export default function BoardsPage() {
  const { t } = useI18n()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('boards.title')}
        </h1>
        <p className="text-muted-foreground">
          掲示板一覧
        </p>
      </div>

      <div className="text-center py-12">
        <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          掲示板がありません
        </h3>
        <p className="text-muted-foreground mb-6">
          最初の掲示板を作成しましょう
        </p>
        <button className="btn btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          掲示板を作成
        </button>
      </div>
    </div>
  )
}
