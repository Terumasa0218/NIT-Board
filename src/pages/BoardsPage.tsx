import { useState, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { Search, Plus, MessageSquare, Clock, TrendingUp } from 'lucide-react'
import type { Board } from '@/types'
import { listBoards } from '@/repositories/boardsRepository'
import LoadingIndicator from '@/components/common/LoadingIndicator'
import ErrorMessage from '@/components/common/ErrorMessage'
import { useAppStore } from '@/stores/appStore'

const TOPICS = [
  { id: 'assignments', name: '授業課題' },
  { id: 'lab-work', name: '実験課題' },
  { id: 'midterm', name: '中間試験' },
  { id: 'final', name: '期末試験' },
  { id: 'graduate-exam', name: '大学院試験' },
  { id: 'job-hunting', name: '就職活動' },
  { id: 'other', name: 'その他' },
]

type SortType = 'latest' | 'popular' | 'unanswered'

export default function BoardsPage() {
  const { t } = useI18n()
  const { selectedUniversityId } = useAppStore()
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortType, setSortType] = useState<SortType>('latest')
  const [boards, setBoards] = useState<Board[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const topicId = searchParams.get('topic') ?? undefined
  const currentTopic = topicId ? TOPICS.find(t => t.id === topicId) : null

  const fetchBoards = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const results = await listBoards({ topicId, universityId: selectedUniversityId })
      setBoards(results)
    } catch (err) {
      console.error('Failed to fetch boards', err)
      setError('掲示板の取得に失敗しました。時間をおいて再試行してください。')
    } finally {
      setIsLoading(false)
    }
  }, [topicId, selectedUniversityId])

  useEffect(() => {
    fetchBoards()
  }, [fetchBoards])

  const filteredBoards = useMemo(() => {
    let result = [...boards]

    if (searchQuery) {
      result = result.filter(board => board.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    switch (sortType) {
      case 'latest':
        result.sort((a, b) => {
          const aTime = (a.latestPostAt || a.createdAt).getTime()
          const bTime = (b.latestPostAt || b.createdAt).getTime()
          return bTime - aTime
        })
        break
      case 'popular':
        result.sort((a, b) => b.postCount - a.postCount)
        break
      case 'unanswered':
        result.sort((a, b) => Number(Boolean(a.latestPostAt)) - Number(Boolean(b.latestPostAt)))
        break
    }

    return result
  }, [boards, searchQuery, sortType])

  const handleSortChange = (newSortType: SortType) => {
    setSortType(newSortType)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">
            {currentTopic ? t('topic.filtered', { name: currentTopic.name }) : t('boards.title')}
          </h1>
          <Link to="/boards/create" className="btn btn-primary btn-sm">
            <Plus className="h-4 w-4 mr-2" />
            {t('boards.new')}
          </Link>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('boards.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10 w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => handleSortChange('latest')}
              className={`btn btn-sm ${sortType === 'latest' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Clock className="h-4 w-4 mr-1" />
              {t('boards.sort.latest')}
            </button>
            <button
              onClick={() => handleSortChange('popular')}
              className={`btn btn-sm ${sortType === 'popular' ? 'btn-primary' : 'btn-outline'}`}
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              {t('boards.sort.popular')}
            </button>
            <button
              onClick={() => handleSortChange('unanswered')}
              className={`btn btn-sm ${sortType === 'unanswered' ? 'btn-primary' : 'btn-outline'}`}
            >
              <MessageSquare className="h-4 w-4 mr-1" />
              {t('boards.sort.unanswered')}
            </button>
          </div>
        </div>
      </div>

      {/* Boards List */}
      {isLoading ? (
        <LoadingIndicator message="Loading boards..." />
      ) : error ? (
        <ErrorMessage message={error} onRetry={fetchBoards} />
      ) : filteredBoards.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            {t('boards.noBoards')}
          </h3>
          <p className="text-muted-foreground">
            {currentTopic ? `${currentTopic.name}の掲示板はまだありません` : '掲示板はまだありません'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBoards.map((board) => {
            const topicLabel = TOPICS.find(topic => topic.id === board.topicId)?.name ?? board.topicId
            const lastActivity = board.latestPostAt || board.createdAt

            return (
            <Link
              key={board.id}
              to={`/boards/${board.id}`}
              className="card hover:shadow-md transition-shadow"
            >
              <div className="card-content">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-2">
                      {board.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {topicLabel}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {board.postCount} 投稿
                      </span>
                      <span>
                        {lastActivity ? lastActivity.toLocaleString() : '-'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!board.latestPostAt && (
                      <span className="badge badge-warning">
                        {t('boards.badges.unanswered')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
