import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import { User, Save } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ProfileSetupPage() {
  const [nickname, setNickname] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { user, updateProfile } = useAuthStore()
  const { t } = useI18n()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!nickname.trim()) {
      toast.error('ニックネームを入力してください')
      return
    }

    if (nickname.length < 2) {
      toast.error('ニックネームは2文字以上で入力してください')
      return
    }

    if (nickname.length > 20) {
      toast.error('ニックネームは20文字以下で入力してください')
      return
    }

    setIsLoading(true)
    try {
      await updateProfile({ nickname: nickname.trim() })
      toast.success('プロフィールを更新しました')
      navigate('/')
    } catch (error) {
      console.error('Profile setup error:', error)
      toast.error('プロフィールの更新に失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            ログインが必要です
          </h1>
          <p className="text-muted-foreground mb-6">
            プロフィール設定を行うにはログインしてください
          </p>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-primary"
          >
            ログイン画面へ
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            プロフィール設定
          </h1>
          <p className="text-muted-foreground">
            ニックネームを設定して掲示板を利用開始してください
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              disabled
              className="input w-full bg-muted"
            />
          </div>

          <div>
            <label htmlFor="nickname" className="block text-sm font-medium text-foreground mb-2">
              ニックネーム <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="ニックネームを入力"
              className="input w-full"
              maxLength={20}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              2-20文字で入力してください
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading || !nickname.trim()}
            className="btn btn-primary w-full"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                設定中...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                プロフィールを保存
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
