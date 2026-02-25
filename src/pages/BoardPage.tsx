import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Calendar, Crown, ImagePlus, MapPin, MessageSquare, RefreshCw, Send, ThumbsUp, User as UserIcon, X, MoreHorizontal } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { deleteBoard, getBoard, setBestAnswer, updateBoard } from '@/repositories/boardsRepository'
import { createPost, deletePost, getThankedPostIds, listPostsByBoard, toggleThanks, updatePost } from '@/repositories/postsRepository'
import { getTopicById } from '@/repositories/topicsRepository'
import { getUsersByIds } from '@/repositories/usersRepository'
import type { Board, Post, Topic, User } from '@/types'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from '@/utils/i18n'
import ImageModal from '@/components/ImageModal'
import { IMAGE_ACCEPT, uploadMultipleImages } from '@/utils/storage'
import { addPoints } from '@/utils/points'

const MAX_POST_IMAGES = 4
const MAX_BOARD_IMAGE_SIZE = 10 * 1024 * 1024

const Avatar = ({ user }: { user?: User }) => {
  const initial = user?.nickname?.charAt(0)?.toUpperCase() ?? '?'
  return (
    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
      {user?.avatarUrl ? (
        <img src={user.avatarUrl} alt={user.nickname} className="w-full h-full rounded-full object-cover" />
      ) : (
        initial
      )}
    </div>
  )
}

const PostImageGrid = ({ imageUrls, onOpen }: { imageUrls: string[]; onOpen: (index: number) => void }) => {
  if (imageUrls.length === 0) return null

  if (imageUrls.length === 1) {
    return (
      <button type="button" className="mt-3 w-full" onClick={() => onOpen(0)}>
        <img src={imageUrls[0]} alt="post-image-1" className="w-full max-h-80 object-cover rounded-lg border border-border" />
      </button>
    )
  }

  const gridCols = imageUrls.length === 2 ? 'grid-cols-2' : 'grid-cols-2'
  return (
    <div className={`mt-3 grid ${gridCols} gap-2`}>
      {imageUrls.slice(0, 4).map((url, index) => (
        <button key={`${url}-${index}`} type="button" onClick={() => onOpen(index)}>
          <img src={url} alt={`post-image-${index + 1}`} className="w-full h-36 object-cover rounded-lg border border-border" />
        </button>
      ))}
    </div>
  )
}

export default function BoardPage() {
  const { boardId } = useParams<{ boardId: string }>()
  const authUser = useAuthStore((state) => state.user)
  const isGuest = useAuthStore((state) => state.isGuest)
  const { t } = useI18n()
  const navigate = useNavigate()
  const authUserId = authUser?.id ?? null

  const [board, setBoard] = useState<Board | null>(null)
  const [topic, setTopic] = useState<Topic | null>(null)
  const [usersMap, setUsersMap] = useState<Record<string, User>>({})
  const [posts, setPosts] = useState<Post[]>([])
  const [loadingBoard, setLoadingBoard] = useState(false)
  const [loadingPosts, setLoadingPosts] = useState(false)
  const [errorBoard, setErrorBoard] = useState<string | null>(null)
  const [errorPosts, setErrorPosts] = useState<string | null>(null)
  const [newPostText, setNewPostText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pendingThanksPostIds, setPendingThanksPostIds] = useState<Set<string>>(new Set())
  const [thankedPostIds, setThankedPostIds] = useState<Set<string>>(new Set())
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploadingImages, setUploadingImages] = useState(false)

  const [modalImages, setModalImages] = useState<string[]>([])
  const [modalIndex, setModalIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const canManageBoard = useMemo(() => {
    if (!board || !authUserId) return false
    return board.createdBy === authUserId || authUser?.role === 'admin'
  }, [authUser, authUserId, board])

  const updateRecentBoards = (id: string) => {
    const key = 'recentBoardIds'
    const raw = localStorage.getItem(key)
    const current = raw ? (JSON.parse(raw) as string[]) : []
    const next = [id, ...current.filter((item) => item !== id)].slice(0, 10)
    localStorage.setItem(key, JSON.stringify(next))
  }

  const applyBestAnswerFlag = (currentBoard: Board | null, currentPosts: Post[]): Post[] => {
    if (!currentBoard) return currentPosts
    return currentPosts.map((post) => ({
      ...post,
      isBestAnswer: currentBoard.bestAnswerPostId === post.id,
    }))
  }

  const fetchBoard = async (id: string) => {
    setLoadingBoard(true)
    setErrorBoard(null)
    try {
      const result = await getBoard(id)
      if (!result) {
        setErrorBoard('Board not found')
        setBoard(null)
      } else {
        setBoard(result)
        updateRecentBoards(result.id)
      }
    } catch (error) {
      console.error(error)
      setErrorBoard('Failed to load board')
      setBoard(null)
    } finally {
      setLoadingBoard(false)
    }
  }

  const fetchTopic = async (topicId: string) => {
    try {
      const fetchedTopic = await getTopicById(topicId)
      setTopic(fetchedTopic)
    } catch (error) {
      console.error(error)
      setTopic(null)
    }
  }

  const fetchUsers = async (ids: string[]) => {
    try {
      const users = await getUsersByIds(ids)
      setUsersMap((prev) => ({ ...prev, ...users }))
    } catch (error) {
      console.error(error)
    }
  }

  const fetchPosts = async (id: string, currentBoard: Board | null) => {
    setLoadingPosts(true)
    setErrorPosts(null)
    try {
      const result = await listPostsByBoard(id)
      setPosts(applyBestAnswerFlag(currentBoard, result))
      const authorIds = result.map((post) => post.authorId)
      const boardOwnerId = currentBoard?.createdBy ? [currentBoard.createdBy] : []
      await fetchUsers([...authorIds, ...boardOwnerId])
      if (authUserId) {
        const thanked = await getThankedPostIds(authUserId, result.map((post) => post.id))
        setThankedPostIds(thanked)
      }
    } catch (error) {
      console.error(error)
      setErrorPosts('Failed to load posts')
      setPosts([])
    } finally {
      setLoadingPosts(false)
    }
  }

  useEffect(() => {
    if (!boardId) return
    fetchBoard(boardId)
  }, [boardId])

  useEffect(() => {
    if (board?.topicId) {
      fetchTopic(board.topicId)
    }
  }, [board?.topicId])

  useEffect(() => {
    if (boardId && board) {
      fetchPosts(boardId, board)
    }
  }, [boardId, board])

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: { file: File }[]) => {
      if (fileRejections.length > 0) {
        toast.error(t('images.errors.invalidTypeOrSize'))
      }

      const nextFiles = [...selectedFiles, ...acceptedFiles]
      if (nextFiles.length > MAX_POST_IMAGES) {
        toast.error(t('images.errors.maxCount', { count: MAX_POST_IMAGES }))
        return
      }

      setSelectedFiles(nextFiles)
    },
    [selectedFiles, t],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: IMAGE_ACCEPT,
    maxSize: MAX_BOARD_IMAGE_SIZE,
    maxFiles: MAX_POST_IMAGES,
    multiple: true,
  })

  const removeSelectedFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const openImageModal = (imageUrls: string[], index: number) => {
    setModalImages(imageUrls)
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImages([])
    setModalIndex(0)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!boardId || !authUserId || !newPostText.trim()) return

    setIsSubmitting(true)
    setErrorPosts(null)
    try {
      let uploadedImageUrls: string[] = []
      if (selectedFiles.length > 0) {
        setUploadingImages(true)
        uploadedImageUrls = await uploadMultipleImages(selectedFiles, `boards/${boardId}`, MAX_BOARD_IMAGE_SIZE)
      }

      const created = await createPost({
        boardId,
        authorId: authUserId,
        authorName: authUser?.nickname,
        authorAvatarUrl: authUser?.avatarUrl,
        text: newPostText.trim(),
        imageUrls: uploadedImageUrls,
      })
      setNewPostText('')
      setSelectedFiles([])
      setPosts((prev) => applyBestAnswerFlag(board, [...prev, created]))
      await fetchUsers([authUserId])
    } catch (error) {
      console.error(error)
      setErrorPosts('Failed to submit post')
      toast.error(t('images.errors.uploadFailed'))
    } finally {
      setUploadingImages(false)
      setIsSubmitting(false)
    }
  }

  const handleIncrementThanks = async (postId: string, postAuthorId: string) => {
    if (pendingThanksPostIds.has(postId)) return
    setPendingThanksPostIds((prev) => {
      const next = new Set(prev)
      next.add(postId)
      return next
    })
    try {
      const result = await toggleThanks(postId, authUserId!)
      if (result.thanked) {
        await addPoints(postAuthorId, 'thanks_received', 5, postId)
      }
      setThankedPostIds((prev) => {
        const next = new Set(prev)
        if (result.thanked) next.add(postId)
        else next.delete(postId)
        return next
      })
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, thanksCount: (post.thanksCount ?? 0) + (result.thanked ? 1 : -1) } : post,
        ),
      )
    } catch (error) {
      console.error(error)
      setErrorPosts('Failed to send thanks')
    } finally {
      setPendingThanksPostIds((prev) => {
        const next = new Set(prev)
        next.delete(postId)
        return next
      })
    }
  }

  const handleEditPost = async (post: Post) => {
    if (!authUserId) return
    const canManage = post.authorId === authUserId || authUser?.role === 'admin'
    if (!canManage) return
    const nextText = window.prompt(t('post.edit'), post.text)
    if (!nextText || !nextText.trim()) return
    try {
      await updatePost(post.id, { text: nextText.trim() })
      setPosts((prev) => prev.map((item) => (item.id === post.id ? { ...item, text: nextText.trim() } : item)))
      toast.success(t('post.editSave'))
    } catch (error) {
      console.error(error)
      toast.error(t('post.editCancel'))
    }
  }

  const handleDeletePost = async (post: Post) => {
    if (!authUserId) return
    const canManage = post.authorId === authUserId || authUser?.role === 'admin'
    if (!canManage) return
    if (!window.confirm(t('post.deleteConfirm'))) return
    try {
      await deletePost(post.id)
      setPosts((prev) => prev.filter((item) => item.id !== post.id))
      toast.success(t('post.delete'))
    } catch (error) {
      console.error(error)
      toast.error(t('post.delete'))
    }
  }

  const handleEditBoard = async () => {
    if (!board || !canManageBoard) return
    const title = window.prompt(t('board.edit'), board.title)
    if (!title || !title.trim()) return
    const description = window.prompt('description', board.description ?? '') ?? ''
    try {
      await updateBoard(board.id, { title: title.trim(), description: description.trim() })
      setBoard((prev) => (prev ? { ...prev, title: title.trim(), description: description.trim() } : prev))
      toast.success(t('board.edit'))
    } catch (error) {
      console.error(error)
      toast.error(t('board.edit'))
    }
  }

  const handleDeleteBoard = async () => {
    if (!board || !canManageBoard) return
    if (!window.confirm(`${t('board.deleteWarning')}
${t('board.deleteConfirm')}`)) return
    try {
      await deleteBoard(board.id)
      toast.success(t('board.delete'))
      navigate('/boards')
    } catch (error) {
      console.error(error)
      toast.error(t('board.delete'))
    }
  }

  const handleSetBestAnswer = async (postId: string, postAuthorId: string) => {
    if (!boardId) return
    try {
      await setBestAnswer(boardId, postId)
      await addPoints(postAuthorId, 'best_answer', 50, postId)
      setBoard((prev) => (prev ? { ...prev, bestAnswerPostId: postId } : prev))
      setPosts((prev) =>
        prev.map((post) => ({
          ...post,
          isBestAnswer: post.id === postId,
        })),
      )
    } catch (error) {
      console.error(error)
      setErrorPosts('Failed to set best answer')
    }
  }

  const renderLoading = () => (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto p-6">
      <div className="h-24 bg-muted rounded animate-pulse" />
      <div className="space-y-3">
        {[1, 2, 3].map((key) => (
          <div key={key} className="h-20 bg-muted rounded animate-pulse" />
        ))}
      </div>
    </div>
  )

  const renderError = (message: string, retry: () => void) => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-destructive/10 text-destructive p-4 rounded flex items-center justify-between">
        <span>{message}</span>
        <button onClick={retry} className="btn btn-outline btn-sm">
          <RefreshCw className="h-4 w-4 mr-1" /> 再読み込み
        </button>
      </div>
    </div>
  )

  const renderUserInfo = (userId: string, fallbackName?: string | null, fallbackAvatar?: string | null) => {
    const user = usersMap[userId]
    const displayName = user?.nickname ?? fallbackName ?? 'Unknown User'
    const avatarUrl = user?.avatarUrl ?? fallbackAvatar ?? undefined
    return (
      <div className="flex items-center gap-3">
        <Avatar
          user={
            avatarUrl
              ? {
                  ...user,
                  avatarUrl,
                  nickname: displayName,
                  id: userId,
                  email: user?.email ?? '',
                  followers: user?.followers ?? [],
                  following: user?.following ?? [],
                  preferredLocale: user?.preferredLocale ?? 'ja',
                  createdAt: user?.createdAt ?? new Date(),
                  updatedAt: user?.updatedAt ?? new Date(),
                }
              : user
          }
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {authUserId ? (
              <Link to={`/users/${userId}`} className="text-sm font-semibold text-foreground hover:underline">
                {displayName}
              </Link>
            ) : (
              <span className="text-sm font-semibold text-foreground">{displayName}</span>
            )}
            {user?.role === 'admin' && (
              <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 text-[10px] font-semibold">{t('admin.badge')}</span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{userId}</span>
        </div>
      </div>
    )
  }

  const formatEventTime = (start?: Date, end?: Date) => {
    if (!start) return '日時未定'
    if (end) {
      return `${start.toLocaleString()} - ${end.toLocaleString()}`
    }
    return start.toLocaleString()
  }

  const renderEventDetails = (currentBoard: Board) => {
    if ((currentBoard.boardType ?? 'qa') !== 'event') return null

    return (
      <div className="bg-muted/40 border border-border rounded-lg p-4 space-y-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatEventTime(currentBoard.eventStartAt, currentBoard.eventEndAt)}</span>
          </div>
          {currentBoard.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{currentBoard.location}</span>
            </div>
          )}
          {currentBoard.organizerName && (
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>
                {currentBoard.organizerName}
                {currentBoard.organizerType ? ` (${currentBoard.organizerType})` : ''}
              </span>
            </div>
          )}
        </div>
        {currentBoard.registrationUrl && (
          <a
            href={currentBoard.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            参加登録・詳細を見る
          </a>
        )}
      </div>
    )
  }

  if (!boardId) {
    return <div className="max-w-4xl mx-auto p-6 text-foreground">Board ID is missing.</div>
  }

  if (loadingBoard) {
    return renderLoading()
  }

  if (errorBoard) {
    return renderError(errorBoard, () => fetchBoard(boardId))
  }

  if (!board) {
    return <div className="max-w-4xl mx-auto p-6 text-foreground">Board not found.</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm border border-border space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">{topic?.nameJa ?? 'Topic'}</span>
              <span className="px-2 py-1 bg-muted rounded-full text-xs">{(board.boardType ?? 'qa').toUpperCase()}</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">{board.title}</h1>
            {board.description && <p className="text-muted-foreground whitespace-pre-wrap">{board.description}</p>}
            {canManageBoard && (
              <div className="flex gap-2">
                <button type="button" className="btn btn-outline btn-sm" onClick={handleEditBoard}>{t('board.edit')}</button>
                <button type="button" className="btn btn-outline btn-sm text-destructive" onClick={handleDeleteBoard}>{t('board.delete')}</button>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                {renderUserInfo(board.createdBy)}
              </div>
              <span className="text-xs text-muted-foreground">{board.createdAt.toLocaleString()}</span>
              {board.bestAnswerPostId && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/10 text-emerald-600 rounded text-xs font-medium">
                  <Crown className="h-4 w-4" /> ベストアンサーあり
                </span>
              )}
            </div>
          </div>
        </div>

        {renderEventDetails(board)}
      </div>

      {loadingPosts && renderLoading()}

      {errorPosts && !loadingPosts && renderError(errorPosts, () => fetchPosts(boardId, board))}

      {!loadingPosts && !errorPosts && (
        <div className="space-y-4">
          {posts.length === 0 ? (
            <div className="bg-muted/40 border border-border rounded-lg p-8 text-center text-muted-foreground">
              <MessageSquare className="h-10 w-10 mx-auto mb-3" />
              まだ回答がありません。最初の回答を投稿しましょう。
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className={`rounded-lg border border-border p-4 bg-background/60 shadow-sm ${
                  post.isBestAnswer ? 'border-emerald-400/60' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      {renderUserInfo(post.authorId, post.authorName, post.authorAvatarUrl)}
                      <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                        <span>{post.createdAt.toLocaleString()}</span>
                        {post.isBestAnswer && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/10 text-emerald-600 rounded text-xs font-medium">
                            <Crown className="h-4 w-4" /> ベストアンサー
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-foreground whitespace-pre-wrap leading-relaxed">{post.text}</p>
                    {!!post.imageUrls?.length && (
                      <PostImageGrid imageUrls={post.imageUrls} onOpen={(index) => openImageModal(post.imageUrls, index)} />
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded text-sm disabled:opacity-50 ${thankedPostIds.has(post.id) ? 'bg-emerald-500/10 text-emerald-600' : 'bg-primary/10 text-primary'}`}
                    onClick={() => handleIncrementThanks(post.id, post.authorId)}
                    disabled={pendingThanksPostIds.has(post.id) || isGuest}
                  >
                    <ThumbsUp className="h-4 w-4" /> {thankedPostIds.has(post.id) ? t('thanks.remove') : t('thanks.already')} {post.thanksCount ?? 0}
                  </button>
                  {canManageBoard && !post.isBestAnswer && (
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1 rounded bg-emerald-500/10 text-emerald-600 text-sm hover:bg-emerald-500/20"
                      onClick={() => handleSetBestAnswer(post.id, post.authorId)}
                    >
                      <Crown className="h-4 w-4" /> ベストアンサーにする
                    </button>
                  )}
                  {authUserId && (post.authorId === authUserId || authUser?.role === 'admin') && (
                    <>
                      <button className="inline-flex items-center gap-1 px-3 py-1 rounded bg-muted text-sm" onClick={() => handleEditPost(post)}><MoreHorizontal className="h-4 w-4" />{t('post.edit')}</button>
                      <button className="inline-flex items-center gap-1 px-3 py-1 rounded bg-destructive/10 text-destructive text-sm" onClick={() => handleDeletePost(post)}>{t('post.delete')}</button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {isGuest && (
        <div className="rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground flex items-center justify-between gap-3">
          <span>{t('guest.boardLoginRequired')}</span>
          <Link to="/login" className="btn btn-outline btn-sm">{t('auth.login')}</Link>
        </div>
      )}

      <div className="sticky bottom-0 bg-background/80 backdrop-blur border border-border rounded-lg p-4 shadow-sm">
        {isGuest ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{t('guest.boardLoginRequired')}</p>
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-primary btn-sm">{t('auth.login')}</Link>
              <Link to="/register" className="btn btn-outline btn-sm">{t('auth.createAccount')}</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block text-sm text-muted-foreground">回答を入力</label>
            <textarea
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              className="w-full rounded-md border border-border bg-card/60 text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
              placeholder="質問への回答を入力してください"
            />

            <div
              {...getRootProps()}
              className={`rounded-md border-2 border-dashed p-4 cursor-pointer transition ${
                isDragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/60'
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ImagePlus className="h-4 w-4" />
                <p>{t('images.dropzoneDescription')}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{t('images.limitHint', { count: MAX_POST_IMAGES, sizeMb: 10 })}</p>
            </div>

            {selectedFiles.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {selectedFiles.map((file, index) => (
                  <div key={`${file.name}-${index}`} className="relative border border-border rounded-md p-2">
                    <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-24 object-cover rounded" />
                    <button
                      type="button"
                      onClick={() => removeSelectedFile(index)}
                      className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!newPostText.trim() || isSubmitting || !authUserId || uploadingImages}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
              >
                <Send className="h-4 w-4" /> {isSubmitting || uploadingImages ? t('images.uploading') : '送信'}
              </button>
            </div>
          </form>
        )}
      </div>

      <ImageModal
        images={modalImages}
        initialIndex={modalIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNavigate={setModalIndex}
      />
    </div>
  )
}
