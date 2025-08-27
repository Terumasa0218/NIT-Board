import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { MessageSquare, TrendingUp, Clock } from 'lucide-react'
import type { Board } from '@/types'

export default function HomePage() {
  const { user, isGuest } = useAuthStore()
  const { t, formatRelativeTime } = useI18n()
  const [latestBoards, setLatestBoards] = useState<Board[]>([])
  const [popularBoards, setPopularBoards] = useState<Board[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch latest and popular boards from Firestore
    // For now, using mock data
    const mockBoards: Board[] = [
      {
        id: '1',
        topicId: 'assignments',
        title: '制御工学基礎 課題1',
        createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        createdBy: 'user1',
        postCount: 15,
        latestPostAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
        yearCreated: 2024,
      },
      {
        id: '2',
        topicId: 'midterm',
        title: '物理数学 中間試験対策',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        createdBy: 'user2',
        postCount: 8,
        latestPostAt: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        yearCreated: 2024,
      },
      {
        id: '3',
        topicId: 'lab-work',
        title: '電気回路実験 レポート',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
        createdBy: 'user3',
        postCount: 12,
        latestPostAt: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
        yearCreated: 2024,
      },
    ]

    setLatestBoards(mockBoards)
    setPopularBoards([...mockBoards].sort((a, b) => b.postCount - a.postCount))
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          {t('common.welcome')} to NITech Board
        </h1>
        <p className="text-muted-foreground">
          名古屋工業大学の学生向け知識共有掲示板
        </p>
        {isGuest && (
          <p className="text-sm text-muted-foreground">
            ゲストモードで閲覧中です。投稿するにはログインしてください。
          </p>
        )}
      </div>

      {/* Latest Boards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {t('common.latest')}
          </h2>
          <Link
            to="/boards"
            className="text-sm text-primary hover:underline"
          >
            すべて見る
          </Link>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestBoards.map((board) => (
            <Link
              key={board.id}
              to={`/boards/${board.id}`}
              className="card hover:shadow-md transition-shadow"
            >
              <div className="card-content">
                <h3 className="font-medium text-foreground mb-2">
                  {board.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {board.postCount} {t('boards.postCount')}
                  </span>
                  <span>
                    {formatRelativeTime(board.latestPostAt || board.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Boards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            {t('common.popular')}
          </h2>
          <Link
            to="/boards"
            className="text-sm text-primary hover:underline"
          >
            すべて見る
          </Link>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularBoards.map((board) => (
            <Link
              key={board.id}
              to={`/boards/${board.id}`}
              className="card hover:shadow-md transition-shadow"
            >
              <div className="card-content">
                <h3 className="font-medium text-foreground mb-2">
                  {board.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {board.postCount} {t('boards.postCount')}
                  </span>
                  <span>
                    {formatRelativeTime(board.latestPostAt || board.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      {user && !isGuest && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            クイックアクション
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/create-board"
              className="card border-dashed border-2 border-muted-foreground/20 hover:border-primary/50 transition-colors"
            >
              <div className="card-content text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  新しい掲示板を作成
                </p>
              </div>
            </Link>
            <Link
              to="/departments"
              className="card border-dashed border-2 border-muted-foreground/20 hover:border-primary/50 transition-colors"
            >
              <div className="card-content text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  学科・コースを選択
                </p>
              </div>
            </Link>
            <Link
              to="/events"
              className="card border-dashed border-2 border-muted-foreground/20 hover:border-primary/50 transition-colors"
            >
              <div className="card-content text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  イベントを確認
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
