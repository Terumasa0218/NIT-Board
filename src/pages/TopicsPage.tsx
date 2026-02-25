import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { Hash } from 'lucide-react'
import { DEPARTMENTS, getActiveTopics, normalizeTopicId } from '@/constants/departments'
import { listBoardsByDeptYearTopicWithFallback } from '@/repositories/boardsRepository'
import { useAppStore } from '@/stores/appStore'
import { TOPIC_BOARD_GOAL } from '@/constants/goals'

export default function TopicsPage() {
  const { t, currentLocale } = useI18n()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const activeTopics = useMemo(() => getActiveTopics(), [])
  const { selectedUniversityId } = useAppStore()
  const [counts, setCounts] = useState<Record<string, number>>({})

  const departmentId = searchParams.get('dept') || searchParams.get('department')
  const departmentName = useMemo(() => {
    if (!departmentId) return null
    const department = DEPARTMENTS.find((dept) => dept.id === departmentId)
    if (!department) return '選択された学科'
    return currentLocale === 'en' ? department.nameEn : department.nameJa
  }, [currentLocale, departmentId])

  useEffect(() => {
    const loadCounts = async () => {
      if (!departmentId) return
      const entries = await Promise.all(
        activeTopics.map(async (topic) => {
          try {
            const boards = await listBoardsByDeptYearTopicWithFallback({
              universityId: selectedUniversityId,
              departmentId,
              year: 1,
              topicId: topic.id,
            })
            return [topic.id, boards.length] as const
          } catch {
            return [topic.id, 0] as const
          }
        }),
      )
      setCounts(Object.fromEntries(entries))
    }
    loadCounts()
  }, [activeTopics, departmentId, selectedUniversityId])

  const handleTopicClick = (topicId: string) => {
    const canonicalTopicId = normalizeTopicId(topicId)
    if (!canonicalTopicId) return

    const params = new URLSearchParams()
    if (departmentId) {
      params.set('dept', departmentId)
    }
    params.set('year', '1')
    params.set('topic', canonicalTopicId)
    navigate(`/boards?${params.toString()}`)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {departmentName ? `${departmentName} - ${t('topics.title')}` : t('topics.title')}
        </h1>
        <p className="text-muted-foreground">
          {departmentName
            ? `${departmentName}のトピックを選択して掲示板を閲覧してください`
            : 'トピックを選択して掲示板を閲覧してください'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-2">
        {activeTopics.map((topic) => {
          const count = counts[topic.id] ?? 0
          const percent = Math.min(100, Math.round((count / TOPIC_BOARD_GOAL) * 100))
          return (
            <button
              key={topic.id}
              onClick={() => handleTopicClick(topic.id)}
              className="card hover:shadow-md transition-shadow text-left"
            >
              <div className="card-content space-y-2">
                <div className="flex items-center gap-3">
                  <Hash className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-foreground">
                    {currentLocale === 'en' ? topic.nameEn : topic.nameJa}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{t('topics.completeness')}: {count}/{TOPIC_BOARD_GOAL}</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${percent}%` }} />
                </div>
                {count < TOPIC_BOARD_GOAL && <p className="text-xs text-amber-600">{t('topics.contributeMessage')}</p>}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
