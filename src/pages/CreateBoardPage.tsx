import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Link as LinkIcon, MapPin, User as UserIcon } from 'lucide-react'
import { useI18n } from '@/utils/i18n'
import { createBoard } from '@/repositories/boardsRepository'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/appStore'

const TOPICS = [
  { id: 'assignments', name: '授業課題' },
  { id: 'lab-work', name: '実験課題' },
  { id: 'midterm', name: '中間試験' },
  { id: 'final', name: '期末試験' },
  { id: 'graduate-exam', name: '大学院試験' },
  { id: 'job-hunting', name: '就職活動' },
  { id: 'events', name: 'イベント' },
  { id: 'other', name: 'その他' },
]

const organizerTypeOptions = [
  { value: 'circle', label: 'サークル' },
  { value: 'student_group', label: '学生団体' },
  { value: 'company', label: '企業' },
  { value: 'other', label: 'その他' },
]

export default function CreateBoardPage() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const { selectedUniversityId } = useAppStore()

  const [boardType, setBoardType] = useState<'qa' | 'event'>('qa')
  const [title, setTitle] = useState('')
  const [topicId, setTopicId] = useState(TOPICS[0]?.id ?? '')
  const [description, setDescription] = useState('')
  const [eventStartAt, setEventStartAt] = useState('')
  const [eventEndAt, setEventEndAt] = useState('')
  const [location, setLocation] = useState('')
  const [organizerName, setOrganizerName] = useState('')
  const [organizerType, setOrganizerType] = useState<'circle' | 'student_group' | 'company' | 'other'>('circle')
  const [registrationUrl, setRegistrationUrl] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const parseDateTime = (value: string) => (value ? new Date(value) : null)

  const isValidUrl = (value: string) => {
    try {
      // eslint-disable-next-line no-new
      new URL(value)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!user) {
      setError('ログインが必要です')
      return
    }

    if (!title.trim()) {
      setError('タイトルを入力してください')
      return
    }

    if (!topicId) {
      setError('トピックを選択してください')
      return
    }

    const startDate = parseDateTime(eventStartAt)
    const endDate = parseDateTime(eventEndAt)

    if (boardType === 'event') {
      if (!startDate) {
        setError('開催日時を入力してください')
        return
      }
      if (!location.trim()) {
        setError('開催場所を入力してください')
        return
      }
      if (!organizerName.trim()) {
        setError('主催者名を入力してください')
        return
      }
      if (endDate && startDate && endDate < startDate) {
        setError('終了日時は開始日時以降に設定してください')
        return
      }
      if (registrationUrl && !isValidUrl(registrationUrl)) {
        setError('登録URLの形式が正しくありません')
        return
      }
    }

    setError(null)
    setIsSubmitting(true)
    try {
      const created = await createBoard({
        title: title.trim(),
        topicId,
        description: description.trim(),
        boardType,
        createdBy: user.id,
        universityId: selectedUniversityId,
        eventStartAt: boardType === 'event' ? startDate ?? undefined : undefined,
        eventEndAt: boardType === 'event' ? endDate ?? undefined : undefined,
        location: boardType === 'event' ? location.trim() : undefined,
        organizerName: boardType === 'event' ? organizerName.trim() : undefined,
        organizerType: boardType === 'event' ? organizerType : undefined,
        registrationUrl: boardType === 'event' ? registrationUrl.trim() || undefined : undefined,
      })
      navigate(`/boards/${created.id}`)
    } catch (err) {
      console.error(err)
      setError('掲示板の作成に失敗しました')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="mb-4 space-y-1">
        <h1 className="text-2xl font-bold text-foreground">{t('boards.createBoard')}</h1>
        <p className="text-muted-foreground">新しい掲示板を作成してください</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg border border-border shadow-sm p-6 space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-2">掲示板タイプ</h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setBoardType('qa')}
              className={`px-4 py-2 rounded border ${boardType === 'qa' ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground'}`}
            >
              Q&A
            </button>
            <button
              type="button"
              onClick={() => setBoardType('event')}
              className={`px-4 py-2 rounded border ${boardType === 'event' ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground'}`}
            >
              イベント
            </button>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-muted-foreground">タイトル</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input w-full"
              placeholder="例: オープンキャンパスの案内"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-muted-foreground">トピック</label>
            <select
              value={topicId}
              onChange={(e) => setTopicId(e.target.value)}
              className="input w-full"
            >
              {TOPICS.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-muted-foreground">説明</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input w-full min-h-[100px]"
              placeholder="掲示板の概要を入力してください"
            />
          </div>

          {boardType === 'event' && (
            <div className="space-y-4 border-t border-border pt-4">
              <h3 className="text-sm font-semibold text-muted-foreground">イベント情報</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Calendar className="h-4 w-4" /> 開始日時
                  </label>
                  <input
                    type="datetime-local"
                    value={eventStartAt}
                    onChange={(e) => setEventStartAt(e.target.value)}
                    className="input w-full"
                    required={boardType === 'event'}
                  />
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Calendar className="h-4 w-4" /> 終了日時（任意）
                  </label>
                  <input
                    type="datetime-local"
                    value={eventEndAt}
                    onChange={(e) => setEventEndAt(e.target.value)}
                    className="input w-full"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="h-4 w-4" /> 開催場所
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input w-full"
                  placeholder="例: 1号館201教室"
                  required={boardType === 'event'}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <UserIcon className="h-4 w-4" /> 主催者名
                  </label>
                  <input
                    type="text"
                    value={organizerName}
                    onChange={(e) => setOrganizerName(e.target.value)}
                    className="input w-full"
                    placeholder="例: 情報工学研究会"
                    required={boardType === 'event'}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-muted-foreground">主催者区分</label>
                  <select
                    value={organizerType}
                    onChange={(e) =>
                      setOrganizerType(e.target.value as 'circle' | 'student_group' | 'company' | 'other')
                    }
                    className="input w-full"
                  >
                    {organizerTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <LinkIcon className="h-4 w-4" /> 登録URL（任意）
                </label>
                <input
                  type="url"
                  value={registrationUrl}
                  onChange={(e) => setRegistrationUrl(e.target.value)}
                  className="input w-full"
                  placeholder="https://example.com"
                  inputMode="url"
                />
              </div>
            </div>
          )}

          {error && <div className="text-destructive text-sm">{error}</div>}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
            >
              {isSubmitting ? '作成中...' : '作成する'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
