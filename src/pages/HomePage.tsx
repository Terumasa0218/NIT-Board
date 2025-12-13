import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { MessageSquare, Clock, TrendingUp, Hash } from 'lucide-react'

// モックデータ
const mockLatestBoards = [
  {
    id: '1',
    title: '制御工学基礎 課題1',
    topicName: '授業課題',
    postCount: 15,
    latestPostAt: new Date(Date.now() - 1000 * 60 * 30), // 30分前
  },
  {
    id: '2',
    title: '物理数学 中間試験対策',
    topicName: '中間試験',
    postCount: 8,
    latestPostAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2時間前
  },
  {
    id: '3',
    title: 'プログラミング演習 レポート',
    topicName: '授業課題',
    postCount: 12,
    latestPostAt: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4時間前
  },
  {
    id: '4',
    title: '実験レポート 書き方',
    topicName: '実験課題',
    postCount: 6,
    latestPostAt: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6時間前
  },
  {
    id: '5',
    title: '就職活動 面接対策',
    topicName: '就職活動',
    postCount: 20,
    latestPostAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8時間前
  },
]

const mockPopularBoards = [
  {
    id: '6',
    title: '期末試験 過去問まとめ',
    topicName: '期末試験',
    postCount: 45,
    viewCount: 1200,
  },
  {
    id: '7',
    title: '大学院入試 対策',
    topicName: '大学院試験',
    postCount: 38,
    viewCount: 980,
  },
  {
    id: '8',
    title: '実験レポート テンプレート',
    topicName: '実験課題',
    postCount: 32,
    viewCount: 850,
  },
  {
    id: '9',
    title: 'プログラミング 基礎',
    topicName: '授業課題',
    postCount: 28,
    viewCount: 720,
  },
  {
    id: '10',
    title: '就職活動 エントリーシート',
    topicName: '就職活動',
    postCount: 25,
    viewCount: 680,
  },
]

export default function HomePage() {
  const { t, formatRelativeTime } = useI18n()
  const [latestBoards] = useState(mockLatestBoards)
  const [popularBoards] = useState(mockPopularBoards)

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Latest Boards */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="card-title">最新の掲示板</h2>
            </div>
          </div>
          <div className="card-content">
            {latestBoards.length === 0 ? (
              <p className="text-muted-foreground">
                {t('empty.common')}
              </p>
            ) : (
              <div className="space-y-3">
                {latestBoards.map((board) => (
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
                            {board.topicName}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {board.postCount}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground ml-2">
                        {formatRelativeTime(board.latestPostAt)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Popular Boards */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="card-title">人気の掲示板</h2>
            </div>
          </div>
          <div className="card-content">
            {popularBoards.length === 0 ? (
              <p className="text-muted-foreground">
                {t('empty.common')}
              </p>
            ) : (
              <div className="space-y-3">
                {popularBoards.map((board) => (
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
                            {board.topicName}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {board.postCount}
                          </span>
                          <span className="flex items-center gap-1">
                            <Hash className="h-3 w-3" />
                            {board.viewCount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
