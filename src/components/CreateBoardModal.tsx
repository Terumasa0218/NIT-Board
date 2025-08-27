import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { X } from 'lucide-react'

const TOPICS = [
  { id: 'assignments', name: '授業課題' },
  { id: 'lab-work', name: '実験課題' },
  { id: 'midterm', name: '中間試験' },
  { id: 'final', name: '期末試験' },
  { id: 'graduate', name: '大学院試験' },
  { id: 'job-hunting', name: '就職活動' },
  { id: 'other', name: 'その他' },
]

interface CreateBoardModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateBoardModal({ isOpen, onClose }: CreateBoardModalProps) {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [topicId, setTopicId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !topicId) {
      return
    }

    setIsLoading(true)
    try {
      // TODO: Create board in Firestore
      const newBoardId = 'new-board-' + Date.now()
      
      // Navigate to the new board
      navigate(`/boards/${newBoardId}`)
      onClose()
    } catch (error) {
      console.error('Failed to create board:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">
            {t('boards.new')}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
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
              {TOPICS.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline flex-1"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isLoading || !title.trim() || !topicId}
              className="btn btn-primary flex-1"
            >
              {isLoading ? '作成中...' : t('form.create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
