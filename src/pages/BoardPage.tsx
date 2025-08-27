import { useParams } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'

export default function BoardPage() {
  const { boardId } = useParams()

  return (
    <main className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          掲示板詳細
        </h1>
        <p className="text-muted-foreground">
          掲示板ID: {boardId}
        </p>
      </div>

      <div className="text-center py-12">
        <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          掲示板の詳細が表示されます
        </h3>
        <p className="text-muted-foreground">
          投稿一覧と新規投稿機能がここに表示されます
        </p>
      </div>
    </main>
  )
}
