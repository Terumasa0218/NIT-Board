import { useNavigate, useSearchParams } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { Hash } from 'lucide-react'

const TOPICS = [
  { id: 'assignments', name: '授業課題', description: '授業の課題について' },
  { id: 'lab-work', name: '実験課題', description: '実験の課題について' },
  { id: 'midterm', name: '中間試験', description: '中間試験について' },
  { id: 'final', name: '期末試験', description: '期末試験について' },
  { id: 'graduate', name: '大学院試験', description: '大学院試験について' },
  { id: 'job-hunting', name: '就職活動', description: '就職活動について' },
  { id: 'other', name: 'その他', description: 'その他の話題' },
]

// 学科名のマッピング（簡略版）
const DEPARTMENT_NAMES: Record<string, string> = {
  'mechanical': '機械工学科',
  'electrical': '電気・機械工学科',
  'computer': '情報・メディア工学科',
  'chemical': '物質工学科',
  'civil': '社会工学科',
  'architecture': '建築学科',
  'creative': '創造工学教育課程',
  'core': '基幹工学教育課程',
}

export default function TopicsPage() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const departmentId = searchParams.get('department')
  const departmentName = departmentId ? DEPARTMENT_NAMES[departmentId] || '選択された学科' : null

  const handleTopicClick = (topicId: string) => {
    const params = new URLSearchParams()
    if (departmentId) {
      params.set('department', departmentId)
    }
    params.set('topic', topicId)
    navigate(`/boards?${params.toString()}`)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {departmentName ? `${departmentName} - ${t('topics')}` : t('topics')}
        </h1>
        <p className="text-muted-foreground">
          {departmentName 
            ? `${departmentName}のトピックを選択して掲示板を閲覧してください`
            : 'トピックを選択して掲示板を閲覧してください'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-2">
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleTopicClick(topic.id)}
            className="card hover:shadow-md transition-shadow text-left"
          >
            <div className="card-content">
              <div className="flex items-center gap-3 mb-3">
                <Hash className="h-5 w-5 text-primary" />
                <h3 className="font-medium text-foreground">
                  {topic.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {topic.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
