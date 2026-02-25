import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import toast from 'react-hot-toast'
import { searchBoards, searchCircles, searchPosts, type SearchBoardFilters } from '@/repositories/searchRepository'
import { useI18n } from '@/utils/i18n'
import { useAppStore } from '@/stores/appStore'

type SearchTab = 'boards' | 'posts' | 'circles'

type SearchResults = {
  boards: Awaited<ReturnType<typeof searchBoards>>
  posts: Awaited<ReturnType<typeof searchPosts>>
  circles: Awaited<ReturnType<typeof searchCircles>>
}

const tabValues: SearchTab[] = ['boards', 'posts', 'circles']

export default function SearchPage() {
  const { t } = useI18n()
  const { selectedUniversityId } = useAppStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const initialTab = searchParams.get('tab')
  const activeTab: SearchTab = tabValues.includes(initialTab as SearchTab) ? (initialTab as SearchTab) : 'boards'

  const [query, setQuery] = useState(initialQuery)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<SearchResults>({ boards: [], posts: [], circles: [] })
  const [period, setPeriod] = useState<SearchBoardFilters['period']>('all')
  const [sort, setSort] = useState<SearchBoardFilters['sort']>('createdAt')
  const [hasBestAnswer, setHasBestAnswer] = useState(false)

  const updateParams = (nextQuery: string, nextTab: SearchTab) => {
    const params = new URLSearchParams(searchParams)
    if (nextQuery.trim()) params.set('q', nextQuery.trim())
    else params.delete('q')
    params.set('tab', nextTab)
    setSearchParams(params)
  }

  const executeSearch = useCallback(async (targetQuery: string) => {
    const trimmed = targetQuery.trim()
    if (!trimmed) {
      setResults({ boards: [], posts: [], circles: [] })
      return
    }

    setLoading(true)
    try {
      const [boards, posts, circles] = await Promise.all([
        searchBoards(trimmed, selectedUniversityId, { period, sort, hasBestAnswer }),
        searchPosts(trimmed, selectedUniversityId),
        searchCircles(trimmed, selectedUniversityId),
      ])
      setResults({ boards, posts, circles })
    } catch (error) {
      console.error(error)
      toast.error(t('search.failed'))
    } finally {
      setLoading(false)
    }
  }, [hasBestAnswer, period, selectedUniversityId, sort, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    updateParams(query, activeTab)
    await executeSearch(query)
  }

  const switchTab = (tab: SearchTab) => {
    updateParams(query, tab)
  }

  const activeResults = useMemo(() => results[activeTab], [results, activeTab])


  useEffect(() => {
    if (initialQuery.trim()) {
      executeSearch(initialQuery)
    }
  }, [executeSearch, initialQuery])


  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-foreground">{t('search.title')}</h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="input pl-9 w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? '...' : t('search.title')}
        </button>
      </form>

      <div className="flex gap-2 flex-wrap">
        {tabValues.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`btn btn-sm ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => switchTab(tab)}
          >
            {t(`search.tabs.${tab}`)}
          </button>
        ))}
      </div>

      {activeTab === 'boards' && (
        <div className="grid md:grid-cols-3 gap-3">
          <label className="form-control">
            <span className="text-sm text-muted-foreground">{t('search.filters.period')}</span>
            <select className="input" value={period} onChange={(e) => setPeriod(e.target.value as SearchBoardFilters['period'])}>
              <option value="all">{t('search.filters.periodOptions.all')}</option>
              <option value="month">{t('search.filters.periodOptions.month')}</option>
              <option value="week">{t('search.filters.periodOptions.week')}</option>
            </select>
          </label>
          <label className="form-control">
            <span className="text-sm text-muted-foreground">{t('search.filters.sort')}</span>
            <select className="input" value={sort} onChange={(e) => setSort(e.target.value as SearchBoardFilters['sort'])}>
              <option value="createdAt">{t('search.filters.sortOptions.createdAt')}</option>
              <option value="latestPost">{t('search.filters.sortOptions.latestPost')}</option>
              <option value="postCount">{t('search.filters.sortOptions.postCount')}</option>
            </select>
          </label>
          <label className="flex items-center gap-2 mt-6">
            <input type="checkbox" checked={hasBestAnswer} onChange={(e) => setHasBestAnswer(e.target.checked)} />
            <span className="text-sm">{t('search.filters.hasBestAnswer')}</span>
          </label>
        </div>
      )}

      <div className="space-y-3">
        {activeResults.length === 0 && !loading && (
          <p className="text-muted-foreground">{t('search.noResults')}</p>
        )}

        {activeTab === 'boards' &&
          results.boards.map((board) => (
            <Link key={board.id} to={`/boards/${board.id}`} className="card block">
              <div className="card-content">
                <p className="font-semibold text-foreground">{board.title}</p>
                <p className="text-sm text-muted-foreground">{board.description || '-'}</p>
              </div>
            </Link>
          ))}

        {activeTab === 'posts' &&
          results.posts.map((post) => (
            <Link key={post.id} to={`/boards/${post.boardId}`} className="card block">
              <div className="card-content">
                <p className="text-foreground line-clamp-2">{post.text}</p>
                <p className="text-xs text-muted-foreground">{post.createdAt.toLocaleString()}</p>
              </div>
            </Link>
          ))}

        {activeTab === 'circles' &&
          results.circles.map((circle) => (
            <Link key={circle.id} to={`/circles/${circle.id}`} className="card block">
              <div className="card-content">
                <p className="font-semibold text-foreground">{circle.name}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{circle.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
