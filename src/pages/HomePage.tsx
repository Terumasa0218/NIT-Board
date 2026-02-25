import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { MessageSquare, Clock, Shield, Trophy } from 'lucide-react'
import type { Board, User } from '@/types'
import { ADMIN_PROFILE } from '@/constants/admin'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/appStore'
import toast from 'react-hot-toast'
import { getBoard, createBoard } from '@/repositories/boardsRepository'
import { listTopUsersByPoints } from '@/repositories/usersRepository'

const RECENT_KEY = 'recentBoardIds'
const MAX_RECENT = 10

export default function HomePage() {
  const { t, formatRelativeTime } = useI18n()
  const navigate = useNavigate()
  const { user, isGuest } = useAuthStore()
  const { selectedUniversityId } = useAppStore()
  const [recentBoards, setRecentBoards] = useState<Board[]>([])
  const [loading, setLoading] = useState(true)
  const [topUsers, setTopUsers] = useState<User[]>([])

  useEffect(() => {
    const loadRecentBoards = async () => {
      const raw = localStorage.getItem(RECENT_KEY)
      const ids = raw ? (JSON.parse(raw) as string[]) : []
      if (ids.length === 0) {
        setRecentBoards([])
        setLoading(false)
        return
      }

      const limitedIds = ids.slice(0, MAX_RECENT)
      const boards = await Promise.all(limitedIds.map((id) => getBoard(id)))
      const filtered = boards
        .map((board, index) => ({ board, index }))
        .filter((item) => item.board !== null)
        .sort((a, b) => a.index - b.index)
        .map((item) => item.board!) as Board[]

      setRecentBoards(filtered)
      setLoading(false)
    }

    loadRecentBoards()
  }, [])


  useEffect(() => {
    const loadTopUsers = async () => {
      const users = await listTopUsersByPoints(5)
      setTopUsers(users)
    }
    loadTopUsers()
  }, [])

  const handleAskAdmin = async () => {
    if (!user || isGuest) {
      toast.error(t('guest.boardLoginRequired'))
      return
    }
    try {
      const board = await createBoard({
        title: t('admin.title'),
        topicId: 'admin-qa',
        departmentId: 'all',
        year: 1,
        description: t('admin.message'),
        boardType: 'qa',
        createdBy: user.id,
        universityId: selectedUniversityId,
      })
      navigate(`/boards/${board.id}`)
    } catch (error) {
      console.error(error)
      toast.error(t('admin.createBoardFailed'))
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t('appTitle')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('home.subtitle')}
        </p>
      </div>

      <div className="mb-6 rounded-lg border border-border bg-card p-5">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            {ADMIN_PROFILE.avatarUrl ? <img src={ADMIN_PROFILE.avatarUrl} alt={ADMIN_PROFILE.name} className="w-full h-full rounded-full object-cover" /> : <Shield className="h-6 w-6" />}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{t('admin.title')}</h2>
            <p className="text-sm text-muted-foreground">{ADMIN_PROFILE.department} / {ADMIN_PROFILE.grade}</p>
            <p className="mt-2 text-sm">{t('admin.message')}</p>
            <div className="mt-3 flex gap-2">
              <button onClick={handleAskAdmin} className="btn btn-primary btn-sm">{t('admin.askButton')}</button>
              <Link to="/feedback/create" className="btn btn-outline btn-sm">{t('admin.feedbackButton')}</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="mb-6 rounded-lg border border-border bg-card p-5">
        <div className="flex items-center gap-2 mb-3">
          <Trophy className="h-5 w-5 text-amber-500" />
          <h2 className="text-lg font-semibold">{t('ranking.thisMonth')} TOP5</h2>
        </div>
        <div className="space-y-2">
          {topUsers.map((u, index) => (
            <div key={u.id} className="flex items-center justify-between text-sm">
              <span>#{index + 1} {u.nickname}</span>
              <span className="font-semibold">{u.points ?? 0} pt</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="card-title">最近開いた掲示板</h2>
          </div>
        </div>
        <div className="card-content">
          {loading ? (
            <p className="text-muted-foreground">読み込み中...</p>
          ) : recentBoards.length === 0 ? (
            <p className="text-muted-foreground">最近開いた掲示板はありません。</p>
          ) : (
            <div className="space-y-3">
              {recentBoards.map((board) => (
                <Link
                  key={board.id}
                  to={`/boards/${board.id}`}
                  className="block p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {board.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {board.topicId}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {board.postCount}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground ml-2">
                      {board.latestPostAt ? formatRelativeTime(board.latestPostAt) : formatRelativeTime(board.createdAt)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
