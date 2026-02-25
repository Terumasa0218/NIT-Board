import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useI18n } from '@/utils/i18n'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/appStore'
import { uploadImage } from '@/utils/storage'
import { createCircle } from '@/repositories/circlesRepository'
import type { CircleCategory } from '@/types'

export default function CreateCirclePage() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const { selectedUniversityId } = useAppStore()
  const [name, setName] = useState('')
  const [category, setCategory] = useState<CircleCategory>('sports')
  const [description, setDescription] = useState('')
  const [schedule, setSchedule] = useState('')
  const [location, setLocation] = useState('')
  const [memberCount, setMemberCount] = useState<number>(0)
  const [contactInfo, setContactInfo] = useState('')
  const [welcomeMessage, setWelcomeMessage] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!user) {
      toast.error(t('auth.login'))
      return
    }

    setSubmitting(true)
    try {
      const tempCircleId = `${Date.now()}`
      const imageUrl = imageFile
        ? await uploadImage(imageFile, `circles/${tempCircleId}/${Date.now()}_${imageFile.name}`)
        : undefined

      const created = await createCircle({
        name: name.trim(),
        category,
        description: description.trim(),
        imageUrl,
        schedule: schedule.trim(),
        location: location.trim(),
        memberCount,
        contactInfo: contactInfo.trim(),
        welcomeMessage: welcomeMessage.trim() || undefined,
        createdBy: user.id,
        universityId: selectedUniversityId,
        isActive: true,
      })

      toast.success(t('circles.created'))
      navigate(`/circles/${created.id}`)
    } catch (error) {
      console.error(error)
      toast.error(t('circles.errors.createFailed'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t('circles.create')}</h1>
      <form onSubmit={handleSubmit} className="space-y-3 rounded-lg border border-border bg-card p-4">
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-border rounded px-3 py-2" placeholder={t('circles.form.name')} required />
        <select value={category} onChange={(e) => setCategory(e.target.value as CircleCategory)} className="w-full border border-border rounded px-3 py-2">
          <option value="sports">{t('circles.categories.sports')}</option>
          <option value="culture">{t('circles.categories.culture')}</option>
          <option value="academic">{t('circles.categories.academic')}</option>
          <option value="other">{t('circles.categories.other')}</option>
        </select>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-border rounded px-3 py-2" placeholder={t('circles.form.description')} required />
        <input value={schedule} onChange={(e) => setSchedule(e.target.value)} className="w-full border border-border rounded px-3 py-2" placeholder={t('circles.form.schedule')} required />
        <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-border rounded px-3 py-2" placeholder={t('circles.form.location')} required />
        <input value={memberCount} onChange={(e) => setMemberCount(Number(e.target.value))} type="number" min={0} className="w-full border border-border rounded px-3 py-2" placeholder={t('circles.form.memberCount')} required />
        <input value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} className="w-full border border-border rounded px-3 py-2" placeholder={t('circles.form.contactInfo')} required />
        <textarea value={welcomeMessage} onChange={(e) => setWelcomeMessage(e.target.value)} className="w-full border border-border rounded px-3 py-2" placeholder={t('circles.form.welcomeMessage')} />
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} />
        <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">{t('circles.create')}</button>
      </form>
    </div>
  )
}
