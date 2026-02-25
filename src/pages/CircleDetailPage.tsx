import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useI18n } from '@/utils/i18n'
import { getCircle, updateCircle, deleteCircle } from '@/repositories/circlesRepository'
import { createBoard } from '@/repositories/boardsRepository'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/appStore'
import type { Circle } from '@/types'

export default function CircleDetailPage() {
  const { circleId } = useParams<{ circleId: string }>()
  const navigate = useNavigate()
  const { t } = useI18n()
  const { user, isGuest } = useAuthStore()
  const { selectedUniversityId } = useAppStore()
  const [circle, setCircle] = useState<Circle | null>(null)
  const [loading, setLoading] = useState(true)
  const [asking, setAsking] = useState(false)

  useEffect(() => {
    const load = async () => {
      if (!circleId) return
      setLoading(true)
      try {
        setCircle(await getCircle(circleId))
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [circleId])

  const handleAskQuestion = async () => {
    if (!user || isGuest || !circle) {
      toast.error(t('guest.boardLoginRequired'))
      return
    }

    setAsking(true)
    try {
      if (circle.questionBoardId) {
        navigate(`/boards/${circle.questionBoardId}`)
        return
      }

      const board = await createBoard({
        title: `${circle.name} Q&A`,
        topicId: 'other',
        departmentId: 'all',
        year: 1,
        description: `${circle.name}について質問する掲示板です。`,
        boardType: 'qa',
        createdBy: user.id,
        universityId: selectedUniversityId,
      })

      await updateCircle(circle.id, { questionBoardId: board.id })
      navigate(`/boards/${board.id}`)
    } catch (error) {
      console.error(error)
      toast.error(t('circles.errors.askFailed'))
    } finally {
      setAsking(false)
    }
  }

  const handleDelete = async () => {
    if (!circle) return
    if (!window.confirm(t('circles.deleteConfirm'))) return

    try {
      await deleteCircle(circle.id)
      toast.success(t('circles.deleted'))
      navigate('/circles')
    } catch (error) {
      console.error(error)
      toast.error(t('circles.errors.deleteFailed'))
    }
  }

  if (loading) return <div className="p-6">{t('circles.loading')}</div>
  if (!circle) return <div className="p-6">{t('circles.notFound')}</div>

  const canManage = user?.id === circle.createdBy

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <Link to="/circles" className="text-sm text-primary hover:underline">← {t('circles.title')}</Link>
      <div className="rounded-lg border border-border bg-card p-6 space-y-3">
        <h1 className="text-2xl font-bold">{circle.name}</h1>
        {circle.imageUrl && <img src={circle.imageUrl} alt={circle.name} className="w-full h-64 object-cover rounded" />}
        <p>{circle.description}</p>
        <p><strong>{t('circles.schedule')}:</strong> {circle.schedule}</p>
        <p><strong>{t('circles.location')}:</strong> {circle.location}</p>
        <p><strong>{t('circles.memberCount')}:</strong> {circle.memberCount}</p>
        <p><strong>{t('circles.contactInfo')}:</strong> {circle.contactInfo}</p>
        {circle.welcomeMessage && (
          <div>
            <h2 className="font-semibold">{t('circles.detail.welcomeMessage')}</h2>
            <p>{circle.welcomeMessage}</p>
          </div>
        )}

        <button onClick={handleAskQuestion} disabled={asking} className="btn btn-primary btn-sm">
          {t('circles.detail.askQuestion')}
        </button>

        {canManage && (
          <div className="flex gap-2">
            <Link to={`/circles/${circle.id}/edit`} className="btn btn-outline btn-sm">{t('common.edit')}</Link>
            <button onClick={handleDelete} className="btn btn-outline btn-sm">{t('common.delete')}</button>
          </div>
        )}
      </div>
    </div>
  )
}
