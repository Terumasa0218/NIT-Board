import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { CalendarDays, MessageSquare, Shield, Trophy, BookOpen, Search, Users } from 'lucide-react'
import type { Board, User } from '@/types'
import { ADMIN_PROFILE } from '@/constants/admin'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/appStore'
import toast from 'react-hot-toast'
import { getBoard, createBoard, listBoards } from '@/repositories/boardsRepository'
import { listTopUsersByPoints } from '@/repositories/usersRepository'

const RECENT_KEY = 'recentBoardIds'
const MAX_RECENT = 5

export default function HomePage() {
  const { t, formatRelativeTime, formatDate } = useI18n()
  const navigate = useNavigate()
  const { user, isGuest } = useAuthStore()
  const { selectedUniversityId } = useAppStore()
  const [recentBoards, setRecentBoards] = useState<Board[]>([])
  const [loading, setLoading] = useState(true)
  const [topUsers, setTopUsers] = useState<User[]>([])
  const [recentActivity, setRecentActivity] = useState<Board[]>([])

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
      const filtered = boards.filter(Boolean) as Board[]
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

  useEffect(() => {
    const loadRecentActivity = async () => {
      try {
        const boards = await listBoards({ universityId: selectedUniversityId, orderByField: 'createdAt', orderDirection: 'desc' })
        setRecentActivity(boards.slice(0, 5))
      } catch (error) {
        console.error(error)
      }
    }
    loadRecentActivity()
  }, [selectedUniversityId])

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

  const todayLabel = useMemo(() => formatDate(new Date(), 'PPP'), [formatDate])

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="rounded-lg border border-border bg-card p-5">
        <h1 className="text-2xl font-bold text-foreground">{t('home.welcome', { name: user?.nickname || 'Guest' })}</h1>
        <p className="text-sm text-steel-500 mt-2 inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />{todayLabel}</p>
      </div>

      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-nit-100 dark:bg-nit-900/40 text-nit-600 dark:text-nit-400 flex items-center justify-center">
            {ADMIN_PROFILE.avatarUrl ? <img src={ADMIN_PROFILE.avatarUrl} alt={ADMIN_PROFILE.name} className="w-full h-full rounded-full object-cover" /> : <Shield className="h-6 w-6" />}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{t('admin.title')}</h2>
            <p className="text-sm text-steel-500">{ADMIN_PROFILE.department} / {ADMIN_PROFILE.grade}</p>
            <p className="mt-2 text-sm">{t('admin.message')}</p>
            <div className="mt-3 flex gap-2">
              <button onClick={handleAskAdmin} className="btn btn-primary btn-sm">{t('admin.askButton')}</button>
              <Link to="/feedback/create" className="btn btn-outline btn-sm">{t('admin.feedbackButton')}</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex items-center gap-2 mb-3"><MessageSquare className="h-5 w-5 text-nit-600 dark:text-nit-400" /><h2 className="text-lg font-semibold">{t('home.recentActivity')}</h2></div>
        <div className="space-y-2">
          {recentActivity.length === 0 ? <p className="text-steel-500">{t('empty.boards')}</p> : recentActivity.map((board) => (
            <Link key={board.id} to={`/boards/${board.id}`} className="block rounded-md border border-border p-3 hover:bg-nit-50 dark:hover:bg-nit-900/40 transition-all duration-200">
              <p className="font-medium">{board.title}</p>
              <p className="text-xs text-steel-500">{board.createdBy} · {formatRelativeTime(board.createdAt)}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-5">
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

      <div className="rounded-lg border border-border bg-card p-5">
        <h2 className="text-lg font-semibold mb-3">{t('home.quickAccess')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link to="/departments" className="rounded-md border border-border p-4 hover:bg-nit-50 dark:hover:bg-nit-900/40 transition-all duration-200"><BookOpen className="h-4 w-4 mb-2" />{t('nav.boards')}</Link>
          <Link to="/circles" className="rounded-md border border-border p-4 hover:bg-nit-50 dark:hover:bg-nit-900/40 transition-all duration-200"><Users className="h-4 w-4 mb-2" />{t('nav.circles')}</Link>
          <Link to="/search" className="rounded-md border border-border p-4 hover:bg-nit-50 dark:hover:bg-nit-900/40 transition-all duration-200"><Search className="h-4 w-4 mb-2" />{t('search.title')}</Link>
          <Link to="/boards" className="rounded-md border border-border p-4 hover:bg-nit-50 dark:hover:bg-nit-900/40 transition-all duration-200"><MessageSquare className="h-4 w-4 mb-2" />{t('boards.title')}</Link>
        </div>
      </div>

      <div className="card">
        <div className="card-header"><h2 className="card-title">最近開いた掲示板</h2></div>
        <div className="card-content">
          {loading ? <p className="text-steel-500">読み込み中...</p> : recentBoards.length === 0 ? <p className="text-steel-500">最近開いた掲示板はありません。</p> : (
            <div className="space-y-2">{recentBoards.map((board) => <Link key={board.id} to={`/boards/${board.id}`} className="block p-2 rounded hover:bg-accent">{board.title}</Link>)}</div>
          )}
        </div>
      </div>
    </div>
  )
}
