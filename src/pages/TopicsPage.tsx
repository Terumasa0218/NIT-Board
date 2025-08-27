import { useNavigate } from 'react-router-dom'
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

export default function TopicsPage() {
  const { t } = useI18n()
  const navigate = useNavigate()

  const handleTopicClick = (topicId: string) => {
    navigate(`/boards?topic=${topicId}`)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('topics')}
        </h1>
        <p className="text-muted-foreground">
          トピックを選択して掲示板を閲覧してください
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
