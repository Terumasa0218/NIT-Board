import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useI18n } from '@/utils/i18n'
import { getCircle, updateCircle } from '@/repositories/circlesRepository'
import type { Circle, CircleCategory } from '@/types'

export default function EditCirclePage() {
  const { circleId } = useParams<{ circleId: string }>()
  const { t } = useI18n()
  const navigate = useNavigate()
  const [circle, setCircle] = useState<Circle | null>(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState<CircleCategory>('sports')
  const [description, setDescription] = useState('')
  const [schedule, setSchedule] = useState('')
  const [location, setLocation] = useState('')
  const [memberCount, setMemberCount] = useState(0)
  const [contactInfo, setContactInfo] = useState('')
  const [welcomeMessage, setWelcomeMessage] = useState('')

  useEffect(() => {
    const load = async () => {
      if (!circleId) return
      const result = await getCircle(circleId)
      if (!result) return
      setCircle(result)
      setName(result.name)
      setCategory(result.category)
      setDescription(result.description)
      setSchedule(result.schedule)
      setLocation(result.location)
      setMemberCount(result.memberCount)
      setContactInfo(result.contactInfo)
      setWelcomeMessage(result.welcomeMessage ?? '')
    }
    load()
  }, [circleId])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!circle) return
    try {
      await updateCircle(circle.id, {
        name: name.trim(),
        category,
        description: description.trim(),
        schedule: schedule.trim(),
        location: location.trim(),
        memberCount,
        contactInfo: contactInfo.trim(),
        welcomeMessage: welcomeMessage.trim() || undefined,
      })
      toast.success(t('common.edit'))
      navigate(`/circles/${circle.id}`)
    } catch (error) {
      console.error(error)
      toast.error(t('circles.errors.createFailed'))
    }
  }

  if (!circle) return <div className="p-6">{t('circles.loading')}</div>

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t('common.edit')}</h1>
      <form onSubmit={handleSubmit} className="space-y-3 rounded-lg border border-border bg-card p-4">
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-border rounded px-3 py-2" required />
        <select value={category} onChange={(e) => setCategory(e.target.value as CircleCategory)} className="w-full border border-border rounded px-3 py-2">
          <option value="sports">{t('circles.categories.sports')}</option>
          <option value="culture">{t('circles.categories.culture')}</option>
          <option value="academic">{t('circles.categories.academic')}</option>
          <option value="other">{t('circles.categories.other')}</option>
        </select>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-border rounded px-3 py-2" required />
        <input value={schedule} onChange={(e) => setSchedule(e.target.value)} className="w-full border border-border rounded px-3 py-2" required />
        <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-border rounded px-3 py-2" required />
        <input value={memberCount} onChange={(e) => setMemberCount(Number(e.target.value))} type="number" min={0} className="w-full border border-border rounded px-3 py-2" required />
        <input value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} className="w-full border border-border rounded px-3 py-2" required />
        <textarea value={welcomeMessage} onChange={(e) => setWelcomeMessage(e.target.value)} className="w-full border border-border rounded px-3 py-2" />
        <button type="submit" className="btn btn-primary btn-sm">{t('common.edit')}</button>
      </form>
    </div>
  )
}
