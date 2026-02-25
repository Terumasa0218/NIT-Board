import { useState, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { Search, Plus, MessageSquare, Clock, TrendingUp } from 'lucide-react'
import type { Board } from '@/types'
import { listBoardsByDeptYearTopicWithFallback } from '@/repositories/boardsRepository'
import {
  DEPARTMENTS,
  getActiveTopics,
  normalizeTopicId,
} from '@/constants/departments'
import { useAuthStore } from '@/stores/auth'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import { normalizeYearParam } from '@/utils/boardsUrl'

type SortType = 'latest' | 'popular' | 'unanswered'
const LAST_SELECTED_DEPT_KEY = 'nitboard:lastSelectedDepartmentId'
export default function BoardsPage() {
  const { t, currentLocale } = useI18n()
  const { userProfile, updateProfile, isGuest } = useAuthStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortType, setSortType] = useState<SortType>('latest')
  const [boards, setBoards] = useState<Board[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [persistedDepartmentId, setPersistedDepartmentId] = useState<string | null>(null)
  const [profileSaveStatus, setProfileSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle')
  const [profileSaveError, setProfileSaveError] = useState<string | null>(null)
  const allTopics = useMemo(() => getActiveTopics(), [])
  const searchParamsString = searchParams.toString()

  const isValidDepartmentId = useCallback(
    (deptId?: string | null) => !!deptId && DEPARTMENTS.some(dept => dept.id === deptId),
    [],
  )

  const rawDeptParam = searchParams.get('dept') || undefined
  const legacyDepartmentId = searchParams.get('department') || undefined
  const rawDepartmentId = rawDeptParam ?? legacyDepartmentId
  const selectedDepartmentId = isValidDepartmentId(rawDepartmentId) ? rawDepartmentId : undefined
  const rawTopicId = searchParams.get('topic') || undefined
  const selectedTopicId = normalizeTopicId(rawTopicId)
  const rawYearParam = searchParams.get('year')
  const selectedYear = normalizeYearParam(rawYearParam)
  const profileDepartmentId = useMemo(() => {
    const deptId = userProfile?.departmentId ?? userProfile?.department
    return isValidDepartmentId(deptId) ? deptId : undefined
  }, [isValidDepartmentId, userProfile])

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
  const resolvedDepartmentId = useMemo(
    () => selectedDepartmentId ?? persistedDepartmentId ?? profileDepartmentId ?? undefined,
    [persistedDepartmentId, profileDepartmentId, selectedDepartmentId],
  )

  const updateSearchParams = useCallback(
    (updates: { dept?: string | null; topic?: string | null; year?: number | null }, options?: { replace?: boolean }) => {
      const params = new URLSearchParams(searchParamsString)
      if (updates.dept !== undefined) {
        if (updates.dept) {
          params.set('dept', updates.dept)
        } else {
          params.delete('dept')
        }
      }
      params.delete('department')
      if (updates.topic !== undefined) {
        if (updates.topic) {
          params.set('topic', updates.topic)
        } else {
          params.delete('topic')
        }
      }
      if (updates.year !== undefined) {
        if (typeof updates.year === 'number') {
          params.set('year', String(normalizeYearParam(String(updates.year))))
        } else {
          params.delete('year')
        }
      }
      setSearchParams(params, options)
    },
    [searchParamsString, setSearchParams],
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(LAST_SELECTED_DEPT_KEY)
    if (stored && isValidDepartmentId(stored)) {
      setPersistedDepartmentId(stored)
    } else if (stored && !isValidDepartmentId(stored)) {
      localStorage.removeItem(LAST_SELECTED_DEPT_KEY)
    }
  }, [isValidDepartmentId])

  useEffect(() => {
    if (!rawDeptParam && legacyDepartmentId) {
      if (isValidDepartmentId(legacyDepartmentId)) {
        updateSearchParams({ dept: legacyDepartmentId }, { replace: true })
      } else {
        updateSearchParams({ dept: null, topic: null, year: selectedYear }, { replace: true })
      }
      return
    }

    if (!selectedDepartmentId && rawDepartmentId && !isValidDepartmentId(rawDepartmentId)) {
      updateSearchParams({ dept: null, topic: null, year: selectedYear }, { replace: true })
      return
    }

    if (!selectedDepartmentId && resolvedDepartmentId) {
      setSearchQuery('')
      updateSearchParams({ dept: resolvedDepartmentId, topic: null, year: selectedYear }, { replace: true })
      return
    }
  }, [
    isValidDepartmentId,
    legacyDepartmentId,
    rawDepartmentId,
    rawDeptParam,
    resolvedDepartmentId,
    selectedDepartmentId,
    selectedYear,
    updateSearchParams,
  ])

  useEffect(() => {
    if (!selectedDepartmentId) return
    setPersistedDepartmentId(selectedDepartmentId)
    if (typeof window !== 'undefined') {
      localStorage.setItem(LAST_SELECTED_DEPT_KEY, selectedDepartmentId)
    }
    setProfileSaveStatus('idle')
    setProfileSaveError(null)
  }, [selectedDepartmentId])

  useEffect(() => {
    if (!rawTopicId) return

    if (!selectedTopicId) {
      updateSearchParams({ topic: null }, { replace: true })
      return
    }

    if (rawTopicId !== selectedTopicId) {
      updateSearchParams({ topic: selectedTopicId }, { replace: true })
      return
    }

    if (!currentTopic) {
      updateSearchParams({ topic: null }, { replace: true })
    }
  }, [rawTopicId, selectedTopicId, currentTopic, updateSearchParams])

  useEffect(() => {
    const normalizedYear = normalizeYearParam(rawYearParam)
    if (rawYearParam !== String(normalizedYear)) {
      updateSearchParams({ year: normalizedYear }, { replace: true })
    }
  }, [rawYearParam, updateSearchParams])

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
        const mergedBoards = await listBoardsByDeptYearTopicWithFallback({
          universityId: userProfile?.universityId || DEFAULT_UNIVERSITY_ID,
          departmentId: selectedDepartmentId,
          year: selectedYear,
          topicId: selectedTopicId,
        })
        if (isMounted) {
          setBoards(mergedBoards)
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
  }, [selectedDepartmentId, selectedTopicId, currentTopic, selectedYear, userProfile?.universityId])

  useEffect(() => {
    if (!selectedDepartmentId) return
    if (selectedTopicId && currentTopic) return
    const firstAvailableTopic = availableTopics[0]
    if (!firstAvailableTopic) return
    setSearchQuery('')
    updateSearchParams({ topic: firstAvailableTopic.id, year: selectedYear }, { replace: true })
  }, [availableTopics, currentTopic, selectedDepartmentId, selectedTopicId, selectedYear, updateSearchParams])

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

  const handleDepartmentChange = useCallback(
    (deptId: string) => {
      if (!deptId) return
      setSearchQuery('')
      updateSearchParams({ dept: deptId, topic: null, year: selectedYear })
    },
    [selectedYear, updateSearchParams],
  )

  const handleTopicSelect = useCallback(
    (topicId: string, options?: { replace?: boolean }) => {
      if (!topicId) return
      setSearchQuery('')
      updateSearchParams({ topic: topicId, year: selectedYear }, options)
    },
    [selectedYear, updateSearchParams],
  )

  const handleResetToMyDepartment = () => {
    if (!profileDepartmentId) return
    setSearchQuery('')
    updateSearchParams({ dept: profileDepartmentId, topic: null, year: selectedYear }, { replace: true })
  }

  const handleSaveDepartmentToProfile = async () => {
    if (!selectedDepartmentId || !userProfile) return
    setProfileSaveStatus('saving')
    setProfileSaveError(null)
    try {
      await updateProfile({ departmentId: selectedDepartmentId })
      setProfileSaveStatus('success')
    } catch (error) {
      console.error('Failed to save department to profile', error)
      setProfileSaveStatus('error')
      setProfileSaveError('プロフィールの保存に失敗しました。権限を確認して再度お試しください。')
    }
  }

  const canSaveDepartmentToProfile =
    !!selectedDepartmentId && !!userProfile && selectedDepartmentId !== profileDepartmentId
  const canResetToMyDepartment = !!profileDepartmentId && profileDepartmentId !== selectedDepartmentId
  const showProfileGuidance = !profileDepartmentId
  const showNicknameGuidance = !!userProfile && !userProfile.nickname?.trim()

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
          {!isGuest && userProfile && (
            <Link to="/boards/create" className="btn btn-primary btn-sm">
              <Plus className="h-4 w-4 mr-2" />
              {t('boards.new')}
            </Link>
          )}
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
              disabled={!canResetToMyDepartment}
            >
              自分の学科へ
            </button>
          </div>

          {showProfileGuidance && (
            <p className="text-sm text-muted-foreground">
              プロフィールに学科が未設定です。学科を選択すると、このページから掲示板を閲覧できます。
            </p>
          )}
          {showNicknameGuidance && (
            <div className="rounded-md border border-muted p-4 bg-card text-sm text-foreground flex items-center justify-between flex-wrap gap-2">
              <span>表示名が未設定です。プロフィールで設定すると回答や投稿で信頼性が高まります。</span>
              <Link to="/profile" className="btn btn-outline btn-sm">
                プロフィールを設定
              </Link>
            </div>
          )}

          {canSaveDepartmentToProfile && (
            <div className="rounded-md border border-muted p-4 space-y-2 bg-card">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="text-sm text-foreground">
                  選択した学科をプロフィールに保存できます。
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleSaveDepartmentToProfile}
                  disabled={profileSaveStatus === 'saving'}
                >
                  {profileSaveStatus === 'saving' ? '保存中...' : 'この学科をプロフィールに保存'}
                </button>
              </div>
              {profileSaveStatus === 'success' && (
                <p className="text-sm text-green-600">プロフィールに保存しました。</p>
              )}
              {profileSaveStatus === 'error' && (
                <p className="text-sm text-destructive">{profileSaveError}</p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <span className="text-sm text-muted-foreground">学年</span>
            <select
              value={selectedYear}
              onChange={(e) => updateSearchParams({ year: normalizeYearParam(e.target.value) })}
              className="input w-full md:w-40"
            >
              {[1, 2, 3, 4].map((year) => (
                <option key={year} value={year}>
                  {year}年
                </option>
              ))}
            </select>
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
          <h3 className="text-lg font-medium text-foreground">学科を選択してください</h3>
          <p className="text-muted-foreground">
            上部のセレクトから学科を選ぶとトピック一覧が表示されます。選択内容はブラウザに保存され、次回以降も引き継がれます。
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link to="/boards" className="btn btn-primary btn-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              学科を選ぶ
            </Link>
            <Link to="/profile" className="btn btn-outline btn-sm">
              プロフィールで設定する
            </Link>
          </div>
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
