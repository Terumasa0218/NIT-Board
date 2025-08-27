import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          ページが見つかりません
        </h2>
        <p className="text-muted-foreground mb-8">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="btn btn-primary"
          >
            <Home className="h-4 w-4 mr-2" />
            ホームに戻る
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            戻る
          </button>
        </div>
      </div>
    </main>
  )
}
