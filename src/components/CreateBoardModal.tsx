import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { X } from 'lucide-react'
import { getActiveTopics, normalizeTopicId } from '@/constants/departments'

interface CreateBoardModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateBoardModal({ isOpen, onClose }: CreateBoardModalProps) {
  const { t, currentLocale } = useI18n()
  const navigate = useNavigate()
  const topics = useMemo(() => getActiveTopics(), [])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [topicId, setTopicId] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const canonicalTopicId = normalizeTopicId(topicId)
    if (!title.trim() || !canonicalTopicId) {
      return
    }

    const params = new URLSearchParams()
    params.set('topic', canonicalTopicId)
    navigate(`/boards/create?${params.toString()}`)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">{t('boards.new')}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
              {t('form.title')}
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input w-full"
              placeholder="掲示板のタイトルを入力"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
              {t('form.desc')}
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea w-full"
              placeholder="掲示板の説明を入力"
              rows={3}
            />
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-foreground mb-2">
              {t('form.topic')}
            </label>
            <select
              id="topic"
              value={topicId}
              onChange={(e) => setTopicId(e.target.value)}
              className="select w-full"
              required
            >
              <option value="">トピックを選択</option>
              {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {currentLocale === 'en' ? topic.nameEn : topic.nameJa}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="btn btn-outline flex-1">
              キャンセル
            </button>
            <button type="submit" disabled={!title.trim() || !topicId} className="btn btn-primary flex-1">
              {t('form.create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
