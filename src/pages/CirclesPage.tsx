import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { useAppStore } from '@/stores/appStore'
import { useAuthStore } from '@/stores/auth'
import { getCircles } from '@/repositories/circlesRepository'
import type { Circle, CircleCategory } from '@/types'

const categoryOptions: Array<{ key: 'all' | CircleCategory; label: string }> = [
  { key: 'all', label: 'circles.categories.all' },
  { key: 'sports', label: 'circles.categories.sports' },
  { key: 'culture', label: 'circles.categories.culture' },
  { key: 'academic', label: 'circles.categories.academic' },
  { key: 'other', label: 'circles.categories.other' },
]

export default function CirclesPage() {
  const { t } = useI18n()
  const { selectedUniversityId } = useAppStore()
  const { user, isGuest } = useAuthStore()
  const [circles, setCircles] = useState<Circle[]>([])
  const [category, setCategory] = useState<'all' | CircleCategory>('all')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const result = await getCircles(selectedUniversityId, category === 'all' ? undefined : category)
        setCircles(result)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [selectedUniversityId, category])

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase()
    if (!keyword) return circles
    return circles.filter((circle) => circle.name.toLowerCase().includes(keyword))
  }, [circles, search])

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">{t('circles.title')}</h1>
        {user && !isGuest && (
          <Link to="/circles/create" className="btn btn-primary btn-sm">{t('circles.create')}</Link>
        )}
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t('circles.searchPlaceholder')}
        className="w-full rounded-md border border-border bg-card px-3 py-2"
      />

      <div className="flex flex-wrap gap-2">
        {categoryOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => setCategory(option.key)}
            className={`px-3 py-1 rounded-full text-sm border ${category === option.key ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground'}`}
          >
            {t(option.label)}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-muted-foreground">{t('circles.loading')}</p>
      ) : filtered.length === 0 ? (
        <p className="text-muted-foreground">{t('circles.empty')}</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((circle) => (
            <Link key={circle.id} to={`/circles/${circle.id}`} className="rounded-lg border border-border bg-card p-4 hover:bg-accent/30">
              {circle.imageUrl && <img src={circle.imageUrl} alt={circle.name} className="w-full h-40 object-cover rounded mb-3" />}
              <div className="flex items-center gap-2 mb-2">
                <h2 className="font-semibold text-lg">{circle.name}</h2>
                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">{t(`circles.categories.${circle.category}`)}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{circle.description}</p>
              <p className="text-sm mt-2">{circle.schedule}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
