import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, Crown, MapPin, MessageSquare, RefreshCw, Send, ThumbsUp, User as UserIcon } from 'lucide-react'
import { getBoard, setBestAnswer } from '@/repositories/boardsRepository'
import { createPost, incrementThanks, listPostsByBoard } from '@/repositories/postsRepository'
import { getTopicById } from '@/repositories/topicsRepository'
import { getUsersByIds } from '@/repositories/usersRepository'
import type { Board, Post, Topic, User } from '@/types'
import { useAuthStore } from '@/stores/auth'

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

export default function BoardPage() {
  const { boardId } = useParams<{ boardId: string }>()
  const authUserId = useAuthStore((state) => state.user?.id ?? null)

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

  const isBoardOwner = useMemo(() => {
    if (!board || !authUserId) return false
    return board.createdBy === authUserId
  }, [authUserId, board])

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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!boardId || !authUserId || !newPostText.trim()) return

    setIsSubmitting(true)
    setErrorPosts(null)
    try {
      const created = await createPost({ boardId, authorId: authUserId, text: newPostText.trim() })
      setNewPostText('')
      setPosts((prev) => applyBestAnswerFlag(board, [...prev, created]))
      await fetchUsers([authUserId])
    } catch (error) {
      console.error(error)
      setErrorPosts('Failed to submit post')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleIncrementThanks = async (postId: string) => {
    if (pendingThanksPostIds.has(postId)) return
    setPendingThanksPostIds((prev) => {
      const next = new Set(prev)
      next.add(postId)
      return next
    })
    try {
      await incrementThanks(postId)
      setPosts((prev) => prev.map((post) => (post.id === postId ? { ...post, thanksCount: (post.thanksCount ?? 0) + 1 } : post)))
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

  const handleSetBestAnswer = async (postId: string) => {
    if (!boardId) return
    try {
      await setBestAnswer(boardId, postId)
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

  const renderUserInfo = (userId: string) => {
    const user = usersMap[userId]
    return (
      <div className="flex items-center gap-3">
        <Avatar user={user} />
        <div className="flex flex-col">
          <Link to={`/users/${userId}`} className="text-sm font-semibold text-foreground hover:underline">
            {user?.nickname ?? 'Unknown User'}
          </Link>
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
                      {renderUserInfo(post.authorId)}
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
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button
                    className="inline-flex items-center gap-1 px-3 py-1 rounded bg-primary/10 text-primary text-sm disabled:opacity-50"
                    onClick={() => handleIncrementThanks(post.id)}
                    disabled={pendingThanksPostIds.has(post.id)}
                  >
                    <ThumbsUp className="h-4 w-4" /> Thanks {post.thanksCount ?? 0}
                  </button>
                  {isBoardOwner && !post.isBestAnswer && (
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1 rounded bg-emerald-500/10 text-emerald-600 text-sm hover:bg-emerald-500/20"
                      onClick={() => handleSetBestAnswer(post.id)}
                    >
                      <Crown className="h-4 w-4" /> ベストアンサーにする
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <div className="sticky bottom-0 bg-background/80 backdrop-blur border border-border rounded-lg p-4 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm text-muted-foreground">回答を入力</label>
          <textarea
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            className="w-full rounded-md border border-border bg-card/60 text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
            placeholder="質問への回答を入力してください"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!newPostText.trim() || isSubmitting || !authUserId}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
            >
              <Send className="h-4 w-4" /> {isSubmitting ? '送信中...' : '送信'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
