import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ExternalLink, MapPin, RefreshCw, User as UserIcon } from 'lucide-react'
import { useI18n } from '@/utils/i18n'
import type { Board } from '@/types'
import { listEventBoards } from '@/repositories/boardsRepository'
import { useAppStore } from '@/stores/appStore'

export default function EventsPage() {
  const { t } = useI18n()
  const { selectedUniversityId } = useAppStore()
  const [events, setEvents] = useState<Board[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const selectedEvent = useMemo(() => events.find((event) => event.id === selectedId) ?? events[0], [events, selectedId])

  const formatDateRange = (board?: Board) => {
    if (!board?.eventStartAt) return '日時未定'
    const start = board.eventStartAt
    const end = board.eventEndAt
    if (end) {
      return `${start.toLocaleString()} - ${end.toLocaleString()}`
    }
    return start.toLocaleString()
  }

  const loadEvents = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await listEventBoards(selectedUniversityId)
      setEvents(result)
      if (result.length > 0) {
        setSelectedId((prev) => prev && result.some((item) => item.id === prev) ? prev : result[0].id)
      } else {
        setSelectedId(null)
      }
    } catch (err) {
      console.error(err)
      setError('イベントの取得に失敗しました')
      setEvents([])
      setSelectedId(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUniversityId])

  const renderLoading = () => (
    <div className="space-y-4">
      <div className="h-6 bg-muted rounded animate-pulse w-32" />
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-20 bg-muted rounded animate-pulse" />
      ))}
    </div>
  )

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">{t('common.events')}</h1>
          <p className="text-muted-foreground">学校イベントの一覧</p>
        </div>
        {renderLoading()}
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-4">
        <div className="flex items-center justify-between bg-destructive/10 text-destructive p-4 rounded">
          <span>{error}</span>
          <button onClick={loadEvents} className="btn btn-outline btn-sm">
            <RefreshCw className="h-4 w-4 mr-1" /> 再読み込み
          </button>
        </div>
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">{t('common.events')}</h1>
          <p className="text-muted-foreground">学校イベントの一覧</p>
        </div>
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">イベントがありません</h3>
          <p className="text-muted-foreground">学校イベントの投稿がここに表示されます</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground mb-1">{t('common.events')}</h1>
        <p className="text-muted-foreground">学校イベントの一覧</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 space-y-3">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedId(event.id)}
              className={`w-full text-left rounded-lg border p-4 transition-colors ${
                selectedEvent?.id === event.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">{event.title}</h3>
                <span className="text-xs px-2 py-1 bg-muted rounded">{event.boardType?.toUpperCase()}</span>
              </div>
              <p className="text-sm text-muted-foreground">{formatDateRange(event)}</p>
              {event.location && <p className="text-sm text-muted-foreground mt-1">{event.location}</p>}
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
          {selectedEvent ? (
            <div className="space-y-4">
              <div className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-sm space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">{selectedEvent.boardType.toUpperCase()}</span>
                      <span className="px-2 py-1 bg-muted rounded-full text-xs">イベント</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{selectedEvent.title}</h2>
                    {selectedEvent.description && (
                      <p className="text-muted-foreground whitespace-pre-wrap mt-1">{selectedEvent.description}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDateRange(selectedEvent)}</span>
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}
                  {selectedEvent.organizerName && (
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4" />
                      <span>
                        {selectedEvent.organizerName}
                        {selectedEvent.organizerType ? ` (${selectedEvent.organizerType})` : ''}
                      </span>
                    </div>
                  )}
                  {selectedEvent.registrationUrl && (
                    <a
                      href={selectedEvent.registrationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      参加登録・詳細ページ
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-muted/40 border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">このイベントに関する質問やコメント</p>
                    <p className="text-xs text-muted-foreground">投稿数: {selectedEvent.postCount}</p>
                  </div>
                  <Link to={`/boards/${selectedEvent.id}`} className="btn btn-primary btn-sm">
                    コメントを開く
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  投稿画面では既存の掲示板UIで質問やコメントを追加できます。
                </p>
              </div>
            </div>
          ) : (
            <div className="text-muted-foreground">イベントを選択してください。</div>
          )}
        </div>
      </div>
    </div>
  )
}
