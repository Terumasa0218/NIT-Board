import { useI18n } from '@/utils/i18n'
import { getActiveTopics } from '@/constants/departments'
import { MessageSquare } from 'lucide-react'

export default function TopicsPage() {
  const { t, currentLocale } = useI18n()

  const topics = getActiveTopics()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('topics.title')}
        </h1>
        <p className="text-muted-foreground">
          トピックを選択して掲示板を閲覧してください
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <div key={topic.id} className="card hover:shadow-md transition-shadow">
            <div className="card-content">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="font-medium text-foreground">
                  {currentLocale === 'ja' ? topic.nameJa : topic.nameEn}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {currentLocale === 'ja' ? topic.nameEn : topic.nameJa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
