import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { MessageSquare, Clock } from 'lucide-react'
import type { Board } from '@/types'
import { getBoard } from '@/repositories/boardsRepository'

const RECENT_KEY = 'recentBoardIds'
const MAX_RECENT = 10

export default function HomePage() {
  const { t, formatRelativeTime } = useI18n()
  const [recentBoards, setRecentBoards] = useState<Board[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRecentBoards = async () => {
      const raw = localStorage.getItem(RECENT_KEY)
      const ids = raw ? (JSON.parse(raw) as string[]) : []
      if (ids.length === 0) {
        setRecentBoards([])
        setLoading(false)
        return
      }

      const limitedIds = ids.slice(0, MAX_RECENT)
      const boards = await Promise.all(limitedIds.map((id) => getBoard(id)))
      const filtered = boards
        .map((board, index) => ({ board, index }))
        .filter((item) => item.board !== null)
        .sort((a, b) => a.index - b.index)
        .map((item) => item.board!) as Board[]

      setRecentBoards(filtered)
      setLoading(false)
    }

    loadRecentBoards()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t('appTitle')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('home.subtitle')}
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="card-title">最近開いた掲示板</h2>
          </div>
        </div>
        <div className="card-content">
          {loading ? (
            <p className="text-muted-foreground">読み込み中...</p>
          ) : recentBoards.length === 0 ? (
            <p className="text-muted-foreground">最近開いた掲示板はありません。</p>
          ) : (
            <div className="space-y-3">
              {recentBoards.map((board) => (
                <Link
                  key={board.id}
                  to={`/boards/${board.id}`}
                  className="block p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {board.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {board.topicId}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {board.postCount}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground ml-2">
                      {board.latestPostAt ? formatRelativeTime(board.latestPostAt) : formatRelativeTime(board.createdAt)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
