import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useI18n } from '@/utils/i18n'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/appStore'
import { createFeedback } from '@/repositories/feedbackRepository'

export default function CreateFeedbackPage() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const { selectedUniversityId } = useAppStore()
  const [body, setBody] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!user) return

    setSubmitting(true)
    try {
      await createFeedback({
        authorId: user.id,
        universityId: selectedUniversityId,
        body: body.trim(),
      })
      toast.success(t('admin.feedbackSubmitted'))
      navigate('/')
    } catch (error) {
      console.error(error)
      toast.error(t('admin.feedbackSubmitFailed'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t('admin.feedbackButton')}</h1>
      <form onSubmit={handleSubmit} className="space-y-3 rounded-lg border border-border bg-card p-4">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full min-h-[180px] border border-border rounded px-3 py-2"
          placeholder={t('admin.feedbackPlaceholder')}
          required
        />
        <button type="submit" disabled={submitting || !body.trim()} className="btn btn-primary btn-sm">{t('form.create')}</button>
      </form>
    </div>
  )
}
