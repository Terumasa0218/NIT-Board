import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BookOpen, Crown, Edit2, ImagePlus, Loader2, MessageCircle, ThumbsUp, User as UserIcon, Users } from 'lucide-react'
import { useAuthStore } from '@/stores/auth'
import { getUserById, followUser, unfollowUser } from '@/repositories/usersRepository'
import { listPostsByAuthor } from '@/repositories/postsRepository'
import { getBoard } from '@/repositories/boardsRepository'
import { getOrCreateDmChat } from '@/repositories/chatsRepository'
import type { Board, User } from '@/types'
import toast from 'react-hot-toast'
import { useAppStore } from '@/stores/appStore'
import { isMutualFollow } from '@/utils/follow'
import { DEPARTMENTS, getDepartmentById } from '@/constants/departments'
import { useDropzone } from 'react-dropzone'
import { IMAGE_ACCEPT, uploadImage } from '@/utils/storage'
import { BADGES } from '@/constants/badges'
import { useI18n } from '@/utils/i18n'

interface UserStats {
  answers: number
  thanks: number
  bestAnswers: number
}

const BIO_MAX_LENGTH = 160
const MAX_AVATAR_SIZE = 5 * 1024 * 1024

export default function ProfilePage() {
  const { userId } = useParams<{ userId?: string }>()
  const navigate = useNavigate()
  const { selectedUniversityId } = useAppStore()
  const { user, userProfile, fetchUserProfile, updateProfile } = useAuthStore()
  const { t } = useI18n()

  const [profile, setProfile] = useState<User | null>(null)
  const [stats, setStats] = useState<UserStats>({ answers: 0, thanks: 0, bestAnswers: 0 })
  const [loadingProfile, setLoadingProfile] = useState(false)
  const [loadingStats, setLoadingStats] = useState(false)
  const [saving, setSaving] = useState(false)
  const [followLoading, setFollowLoading] = useState(false)

  const [nickname, setNickname] = useState('')
  const [departmentId, setDepartmentId] = useState('')
  const [grade, setGrade] = useState('')
  const [circles, setCircles] = useState('')
  const [bio, setBio] = useState('')
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [subEmail, setSubEmail] = useState('')

  const isOwnProfile = useMemo(() => {
    if (userId) {
      return userId === user?.id
    }
    return true
  }, [user?.id, userId])

  const targetUserId = useMemo(() => {
    if (isOwnProfile) return user?.id ?? null
    return userId ?? null
  }, [isOwnProfile, user?.id, userId])

  const isFollowing = useMemo(() => {
    if (!profile || !userProfile) return false
    return (userProfile.following ?? []).includes(profile.id)
  }, [profile, userProfile])

  const isMutual = useMemo(() => {
    return isMutualFollow(userProfile, profile)
  }, [profile, userProfile])

  const trimmedNickname = nickname.trim()
  const remainingBio = BIO_MAX_LENGTH - bio.length
  const isNicknameMissing = !trimmedNickname
  const isBioOverLimit = remainingBio < 0

  const canSaveProfile = !isNicknameMissing && !isBioOverLimit

  const profileDepartmentLabel = useMemo(() => {
    if (!profile?.departmentId) return ''
    const department = getDepartmentById(profile.departmentId)
    return department ? department.nameJa : profile.departmentId
  }, [profile?.departmentId])

  const loadProfile = async () => {
    if (!targetUserId) return
    setLoadingProfile(true)
    try {
      const fetched = isOwnProfile ? await fetchUserProfile() : await getUserById(targetUserId)
      setProfile(fetched)
      if (fetched) {
        setNickname(fetched.nickname || '')
        setDepartmentId(fetched.departmentId || '')
        setGrade(fetched.grade || '')
        setCircles((fetched.circles || []).join(', '))
        setBio(fetched.bio || '')
        setSubEmail(fetched.subEmail || '')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingProfile(false)
    }
  }

  const loadStats = async () => {
    if (!targetUserId) return
    setLoadingStats(true)
    try {
      const posts = await listPostsByAuthor(targetUserId)
      const answers = posts.length
      const thanks = posts.reduce((sum, post) => sum + (post.thanksCount ?? 0), 0)
      const boardIds = Array.from(new Set(posts.map((p) => p.boardId)))
      const boards = await Promise.all(boardIds.map((id) => getBoard(id)))
      const boardMap: Record<string, Board> = {}
      boards.forEach((b) => {
        if (b) boardMap[b.id] = b
      })
      const bestAnswers = posts.filter((post) => boardMap[post.boardId]?.bestAnswerPostId === post.id).length
      setStats({ answers, thanks, bestAnswers })
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingStats(false)
    }
  }

  useEffect(() => {
    loadProfile()
  }, [targetUserId, isOwnProfile])

  useEffect(() => {
    loadStats()
  }, [targetUserId])

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

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isOwnProfile || !profile) return
    if (isNicknameMissing) {
      toast.error('表示名を設定してください')
      return
    }
    if (isBioOverLimit) {
      toast.error(`自己紹介は${BIO_MAX_LENGTH}文字以内で入力してください`)
      return
    }
    setSaving(true)
    try {
      const circlesArray = circles
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean)
      let nextAvatarUrl: string | undefined
      if (avatarFile && user) {
        nextAvatarUrl = await uploadImage(avatarFile, `avatars/${user.id}/${Date.now()}_${avatarFile.name}`, MAX_AVATAR_SIZE)
      }

      await updateProfile({
        nickname: trimmedNickname,
        departmentId: departmentId || undefined,
        grade,
        circles: circlesArray,
        bio,
        subEmail: subEmail || undefined,
        avatarUrl: nextAvatarUrl,
      })
      await loadProfile()
      toast.success('プロフィールを更新しました')
    } catch (error) {
      const errorCode = (error as { code?: string; message?: string }).code
      const errorMessage = (error as { code?: string; message?: string }).message
      console.error('Profile update failed', { code: errorCode, message: errorMessage, error })
      let message = 'プロフィールの更新に失敗しました'
      if (errorCode === 'permission-denied') {
        message = '権限がありません。ログインし直してください'
      } else if (errorCode === 'unauthenticated') {
        message = '認証情報が見つかりません。ログインし直してください'
      } else if (errorCode === 'unavailable') {
        message = 'サーバーに接続できません。インターネット接続を確認してください'
      } else if (errorCode === 'deadline-exceeded') {
        message = 'リクエストがタイムアウトしました。再試行してください'
      } else if (errorMessage === 'No Firebase user' || errorMessage === 'No user logged in') {
        message = '認証情報が見つかりません。ログインし直してください'
      }
      toast.error(message)
    } finally {
      setSaving(false)
    }
  }

  const handleFollowToggle = async () => {
    if (!profile || !user) return
    setFollowLoading(true)
    try {
      if (isFollowing) {
        await unfollowUser(user.id, profile.id)
        toast.success('フォローを解除しました')
      } else {
        await followUser(user.id, profile.id)
        toast.success('フォローしました')
      }
      await fetchUserProfile()
      const refreshed = await getUserById(profile.id)
      setProfile(refreshed)
    } catch (error) {
      console.error(error)
      toast.error('フォロー操作に失敗しました')
    } finally {
      setFollowLoading(false)
    }
  }

  const handleStartDm = async () => {
    if (!profile || !user) return
    try {
      const chat = await getOrCreateDmChat({
        universityId: selectedUniversityId,
        userId: user.id,
        otherUserId: profile.id,
      })
      navigate(`/messages/${chat.id}`)
    } catch (error) {
      console.error(error)
      toast.error('メッセージの開始に失敗しました')
    }
  }

  if (!targetUserId) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-foreground">
        <p>ユーザー情報を取得できませんでした。</p>
      </div>
    )
  }

  if (loadingProfile && !profile) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-foreground">
        <p>プロフィールを読み込み中...</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-semibold">
            {profile?.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.nickname} className="w-full h-full rounded-full object-cover" />
            ) : (
              (profile?.nickname?.charAt(0)?.toUpperCase() ?? '?')
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2"><h1 className="text-2xl font-bold text-foreground">{profile?.nickname || 'ユーザー'}</h1>{profile?.role === 'admin' && <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 text-xs font-semibold">管理人</span>}</div>
            <p className="text-muted-foreground text-sm">{profile?.bio || '自己紹介はまだありません'}</p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {profileDepartmentLabel && <span className="px-2 py-1 bg-muted rounded-full">{profileDepartmentLabel}</span>}
              {profile?.grade && <span className="px-2 py-1 bg-muted rounded-full">{profile.grade}</span>}
              {profile?.circles && profile.circles.length > 0 && (
                <span className="px-2 py-1 bg-muted rounded-full">{profile.circles.join(', ')}</span>
              )}
            </div>
          </div>
        </div>
        {!isOwnProfile && profile && (
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleFollowToggle}
              disabled={followLoading}
              className={`btn ${isFollowing ? 'btn-outline' : 'btn-primary'} min-w-[140px]`}
            >
              {followLoading ? '処理中...' : isFollowing ? 'フォロー中' : 'フォローする'}
            </button>
            {isMutual && (
              <button className="btn btn-secondary min-w-[140px]" onClick={handleStartDm}>
                <MessageCircle className="h-4 w-4 mr-1" /> メッセージを送る
              </button>
            )}
          </div>
        )}
      </div>



      {profile && (
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-foreground">{t('points.title')}</h2>
          <div className="text-4xl font-bold text-primary">{profile.points ?? 0}<span className="text-base ml-2 text-muted-foreground">pt</span></div>
          <div className="flex flex-wrap gap-2">
            {(profile.badges ?? []).length === 0 ? (
              <span className="text-sm text-muted-foreground">-</span>
            ) : (
              (profile.badges ?? []).map((badgeId) => {
                const badge = BADGES.find((item) => item.id === badgeId)
                return (
                  <span key={badgeId} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs">
                    🏅 {badge ? t(`${badge.key}.name`) : badgeId}
                  </span>
                )
              })
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={<BookOpen className="h-4 w-4" />} label="回答数" value={stats.answers} loading={loadingStats} />
        <StatCard icon={<ThumbsUp className="h-4 w-4" />} label="Thanks" value={stats.thanks} loading={loadingStats} />
        <StatCard icon={<Crown className="h-4 w-4" />} label="ベストアンサー" value={stats.bestAnswers} loading={loadingStats} />
        <StatCard
          icon={<Users className="h-4 w-4" />}
          label="フォロー / フォロワー"
          value={`${profile?.following?.length ?? 0} / ${profile?.followers?.length ?? 0}`}
          loading={loadingStats}
        />
      </div>

      {profile && (
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-foreground">
            <Edit2 className="h-4 w-4" />
            <h2 className="text-lg font-semibold">プロフィール詳細</h2>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>{profile.nickname}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{profileDepartmentLabel || '学科未設定'}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{profile.grade || '学年未設定'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{profile.circles && profile.circles.length > 0 ? profile.circles.join(', ') : '所属サークル未設定'}</span>
            </div>
            <p className="text-foreground whitespace-pre-wrap">{profile.bio || '自己紹介はまだありません'}</p>
            {profile.subEmail && <p className="text-xs">サブメール: {profile.subEmail}</p>}
          </div>
        </div>
      )}

      {isOwnProfile && profile && (
        <form onSubmit={handleSave} className="bg-card border border-border rounded-lg p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-foreground">
            <Edit2 className="h-4 w-4" />
            <h2 className="text-lg font-semibold">プロフィールを編集</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">ニックネーム</label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="input w-full"
                required
              />
              {isNicknameMissing && (
                <p className="text-xs text-destructive">表示名を設定してください。</p>
              )}
              {!isNicknameMissing && (
                <p className="text-xs text-muted-foreground">回答や投稿に表示される名前です。</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">学科</label>
              <select
                value={departmentId}
                onChange={(e) => setDepartmentId(e.target.value)}
                className="input w-full"
                required
              >
                <option value="">学科が未設定です。選択してください</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.nameJa}
                  </option>
                ))}
              </select>
              {!departmentId && <p className="text-xs text-destructive">学科が未設定です。選択してください。</p>}
            </div>
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">学年</label>
              <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} className="input w-full" />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">所属サークル（カンマ区切り）</label>
              <input type="text" value={circles} onChange={(e) => setCircles(e.target.value)} className="input w-full" />
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="text-sm text-muted-foreground">通知用メールアドレス（任意）</label>
              <input type="email" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} className="input w-full" placeholder="Gmail / iCloud など" />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">アバター画像</label>
              <div {...getRootProps()} className="rounded-md border-2 border-dashed border-border p-3 cursor-pointer hover:border-primary/60">
                <input {...getInputProps()} />
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <ImagePlus className="h-4 w-4" />
                  画像をドロップ、またはクリックして選択（5MB以下）
                </div>
              </div>
            </div>
            <div className="space-y-1 md:col-span-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">自己紹介</label>
                <span className={`text-xs ${isBioOverLimit ? 'text-destructive' : 'text-muted-foreground'}`}>
                  残り {Math.max(remainingBio, 0)} 文字
                </span>
              </div>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="textarea w-full"
                rows={4}
                placeholder="自己紹介を入力してください"
                maxLength={BIO_MAX_LENGTH}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">アイコンプレビュー</label>
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border">
                {avatarFile ? (
                  <img src={URL.createObjectURL(avatarFile)} alt="アイコンプレビュー" className="w-full h-full object-cover" />
                ) : profile?.avatarUrl ? (
                  <img src={profile.avatarUrl} alt="アイコンプレビュー" className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="h-8 w-8 text-muted-foreground" />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary flex items-center gap-2" disabled={saving || !canSaveProfile}>
              {saving && <Loader2 className="h-4 w-4 animate-spin" />} 保存
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  loading,
}: {
  icon: ReactNode
  label: string
  value: string | number
  loading?: boolean
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-2xl font-bold text-foreground">{loading ? <Loader2 className="h-5 w-5 animate-spin" /> : value}</div>
    </div>
  )
}
