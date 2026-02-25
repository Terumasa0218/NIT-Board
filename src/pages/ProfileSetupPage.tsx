import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth'
import { ImagePlus, Save, User } from 'lucide-react'
import toast from 'react-hot-toast'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { uploadImage, IMAGE_ACCEPT } from '@/utils/storage'
import { useDropzone } from 'react-dropzone'

const MAX_AVATAR_SIZE = 5 * 1024 * 1024

const fetchUserDocument = async (uid: string) => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)
  return userSnap.exists() ? userSnap.data() : null
}

export default function ProfileSetupPage() {
  const [nickname, setNickname] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const { user, updateProfile, setupProfile } = useAuthStore()
  const navigate = useNavigate()

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setAvatarFile(acceptedFiles[0])
      }
    },
    accept: IMAGE_ACCEPT,
    maxFiles: 1,
    maxSize: MAX_AVATAR_SIZE,
    multiple: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast.error('ユーザー情報が見つかりません')
      return
    }

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
      const userDoc = await fetchUserDocument(user.id)
      let avatarUrl: string | undefined

      if (avatarFile) {
        avatarUrl = await uploadImage(avatarFile, `avatars/${user.id}/${Date.now()}_${avatarFile.name}`, MAX_AVATAR_SIZE)
      }

      if (!userDoc) {
        await setupProfile(nickname.trim(), avatarUrl)
        toast.success('プロフィールを作成しました')
      } else {
        await updateProfile({ nickname: nickname.trim(), avatarUrl })
        toast.success('プロフィールを更新しました')
      }

      navigate('/')
    } catch (error: any) {
      console.error('Profile setup error:', error)
      toast.error('プロフィールの保存に失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">ログインが必要です</h1>
          <p className="text-muted-foreground mb-6">プロフィール設定を行うにはログインしてください</p>
          <button onClick={() => navigate('/login')} className="btn btn-primary">
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
          <h1 className="text-2xl font-bold text-foreground mb-2">プロフィール設定</h1>
          <p className="text-muted-foreground">ニックネームを設定して掲示板を利用開始してください</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              メールアドレス
            </label>
            <input type="email" id="email" value={user.email} disabled className="input w-full bg-muted" />
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
            <p className="text-xs text-muted-foreground mt-1">2-20文字で入力してください</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">アバター画像</label>
            <div {...getRootProps()} className="rounded-md border-2 border-dashed border-border p-4 cursor-pointer hover:border-primary/60">
              <input {...getInputProps()} />
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <ImagePlus className="h-4 w-4" />
                画像をドロップ、またはクリックして選択（5MB以下）
              </div>
            </div>
            {avatarFile && (
              <div className="mt-3 flex items-center gap-3">
                <img src={URL.createObjectURL(avatarFile)} alt="avatar-preview" className="w-16 h-16 rounded-full object-cover border border-border" />
                <span className="text-sm text-muted-foreground truncate">{avatarFile.name}</span>
              </div>
            )}
          </div>

          <button type="submit" disabled={isLoading || !nickname.trim()} className="btn btn-primary w-full">
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
