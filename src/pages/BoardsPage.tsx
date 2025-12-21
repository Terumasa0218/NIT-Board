import { useState, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { Search, Plus, MessageSquare, Clock, TrendingUp } from 'lucide-react'
import type { Board } from '@/types'
import { listBoardsByTopic } from '@/repositories/boardsRepository'
import { DEPARTMENTS, getActiveTopics } from '@/constants/departments'
import { useAuthStore } from '@/stores/auth'

type SortType = 'latest' | 'popular' | 'unanswered'
const LAST_SELECTED_DEPT_KEY = 'lastSelectedDeptId'

export default function BoardsPage() {
  const { t, currentLocale } = useI18n()
  const { userProfile } = useAuthStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortType, setSortType] = useState<SortType>('latest')
  const [boards, setBoards] = useState<Board[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const allTopics = useMemo(() => getActiveTopics(), [])
  const searchParamsString = searchParams.toString()

  const selectedDepartmentId = searchParams.get('dept') || undefined
  const selectedTopicId = searchParams.get('topic') || undefined

  const currentDepartment = useMemo(
    () => DEPARTMENTS.find(dept => dept.id === selectedDepartmentId) ?? null,
    [selectedDepartmentId],
  )

  const availableTopics = useMemo(
    () =>
      allTopics.filter(
        topic => topic.departmentId === 'all' || topic.departmentId === selectedDepartmentId,
      ),
    [allTopics, selectedDepartmentId],
  )

  const currentTopic = availableTopics.find(topic => topic.id === selectedTopicId) ?? null

  const updateSearchParams = useCallback(
    (updates: { dept?: string | null; topic?: string | null }, options?: { replace?: boolean }) => {
      const params = new URLSearchParams(searchParamsString)
      if (updates.dept !== undefined) {
        if (updates.dept) {
          params.set('dept', updates.dept)
        } else {
          params.delete('dept')
        }
      }
      if (updates.topic !== undefined) {
        if (updates.topic) {
          params.set('topic', updates.topic)
        } else {
          params.delete('topic')
        }
      }
      setSearchParams(params, options)
    },
    [searchParamsString, setSearchParams],
  )

  useEffect(() => {
    if (selectedDepartmentId) return

    const lastSelected = typeof window !== 'undefined' ? localStorage.getItem(LAST_SELECTED_DEPT_KEY) : null
    const fallbackDept = lastSelected || userProfile?.department

    if (fallbackDept) {
      const params = new URLSearchParams(searchParamsString)
      if (params.get('dept') === fallbackDept) return
      params.set('dept', fallbackDept)
      setSearchParams(params, { replace: true })
      if (typeof window !== 'undefined') {
        localStorage.setItem(LAST_SELECTED_DEPT_KEY, fallbackDept)
      }
    }
  }, [selectedDepartmentId, userProfile?.department, searchParamsString, setSearchParams])

  useEffect(() => {
    if (selectedTopicId && !currentTopic) {
      updateSearchParams({ topic: null }, { replace: true })
    }
  }, [selectedTopicId, currentTopic, updateSearchParams])

  useEffect(() => {
    let isMounted = true
    const fetchBoards = async () => {
      if (!selectedDepartmentId || !selectedTopicId || !currentTopic) {
        setBoards([])
        setIsLoading(false)
        return
      }
      setIsLoading(true)
      try {
        const results = await listBoardsByTopic(selectedTopicId)
        if (isMounted) {
          setBoards(results)
        }
      } catch (error) {
        console.error('Failed to fetch boards', error)
        if (isMounted) {
          setBoards([])
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchBoards()

    return () => {
      isMounted = false
    }
  }, [selectedDepartmentId, selectedTopicId, currentTopic])

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

  const getDepartmentLabel = (departmentId?: string | null) => {
    if (!departmentId) return ''
    const department = DEPARTMENTS.find(dept => dept.id === departmentId)
    if (!department) return departmentId
    return currentLocale === 'en' ? department.nameEn : department.nameJa
  }

  const getTopicLabel = (topicId: string) => {
    const topic = allTopics.find(item => item.id === topicId)
    if (!topic) return topicId
    return currentLocale === 'en' ? topic.nameEn : topic.nameJa
  }

  const handleDepartmentChange = (deptId: string) => {
    if (!deptId) return
    setSearchQuery('')
    if (typeof window !== 'undefined') {
      localStorage.setItem(LAST_SELECTED_DEPT_KEY, deptId)
    }
    updateSearchParams({ dept: deptId, topic: null })
  }

  const handleTopicSelect = (topicId: string) => {
    if (!topicId) return
    setSearchQuery('')
    updateSearchParams({ topic: topicId })
  }

  const handleResetToMyDepartment = () => {
    if (!userProfile?.department) return
    setSearchQuery('')
    if (typeof window !== 'undefined') {
      localStorage.setItem(LAST_SELECTED_DEPT_KEY, userProfile.department)
    }
    updateSearchParams({ dept: userProfile.department, topic: null }, { replace: true })
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="h-10 bg-muted rounded"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">
            {currentTopic
              ? currentDepartment
                ? `${getDepartmentLabel(currentDepartment.id)} / ${getTopicLabel(currentTopic.id)}`
                : getTopicLabel(currentTopic.id)
              : t('boards.title')}
          </h1>
          <Link to="/boards/create" className="btn btn-primary btn-sm">
            <Plus className="h-4 w-4 mr-2" />
            {t('boards.new')}
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <span className="text-sm text-muted-foreground">学科</span>
              <select
                value={selectedDepartmentId || ''}
                onChange={(e) => handleDepartmentChange(e.target.value)}
                className="input w-full md:w-64"
              >
                <option value="" disabled>
                  学科を選択してください
                </option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {currentLocale === 'en' ? dept.nameEn : dept.nameJa}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={handleResetToMyDepartment}
              disabled={!userProfile?.department || userProfile.department === selectedDepartmentId}
            >
              自分の学科へ
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {availableTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleTopicSelect(topic.id)}
                className={`btn btn-sm ${
                  topic.id === selectedTopicId ? 'btn-primary' : 'btn-outline'
                }`}
                disabled={!selectedDepartmentId}
              >
                {currentLocale === 'en' ? topic.nameEn : topic.nameJa}
              </button>
            ))}
          </div>
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
              disabled={!currentTopic}
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => handleSortChange('latest')}
              className={`btn btn-sm ${sortType === 'latest' ? 'btn-primary' : 'btn-outline'}`}
              disabled={!currentTopic}
            >
              <Clock className="h-4 w-4 mr-1" />
              {t('boards.sort.latest')}
            </button>
            <button
              onClick={() => handleSortChange('popular')}
              className={`btn btn-sm ${sortType === 'popular' ? 'btn-primary' : 'btn-outline'}`}
              disabled={!currentTopic}
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              {t('boards.sort.popular')}
            </button>
            <button
              onClick={() => handleSortChange('unanswered')}
              className={`btn btn-sm ${sortType === 'unanswered' ? 'btn-primary' : 'btn-outline'}`}
              disabled={!currentTopic}
            >
              <MessageSquare className="h-4 w-4 mr-1" />
              {t('boards.sort.unanswered')}
            </button>
          </div>
        </div>
      </div>

      {/* Boards List */}
      {!selectedDepartmentId ? (
        <div className="text-center py-12 space-y-3">
          <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
          <h3 className="text-lg font-medium text-foreground">プロフィールで学科を設定してください</h3>
          <p className="text-muted-foreground">
            学科が未設定のため掲示板を表示できません。プロフィールで学科を設定してください。
          </p>
          <Link to="/profile" className="btn btn-primary btn-sm">
            プロフィールへ
          </Link>
        </div>
      ) : !currentTopic ? (
        <div className="text-center py-12 space-y-3">
          <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
          <h3 className="text-lg font-medium text-foreground">トピックを選択してください</h3>
          <p className="text-muted-foreground">
            学科に合わせて表示されたトピックから選んでください。
          </p>
        </div>
      ) : filteredBoards.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            {t('boards.noBoards')}
          </h3>
          <p className="text-muted-foreground">
            {currentTopic ? `${getTopicLabel(currentTopic.id)}の掲示板はまだありません` : '掲示板はまだありません'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBoards.map((board) => {
            const topicLabel = getTopicLabel(board.topicId)
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
