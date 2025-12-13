import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { MessageSquare, Send, User } from 'lucide-react'
import type { Board, Post } from '@/types'
import { getBoard } from '@/repositories/boardsRepository'
import { createPost, listPostsByBoard } from '@/repositories/postsRepository'
import LoadingIndicator from '@/components/common/LoadingIndicator'
import ErrorMessage from '@/components/common/ErrorMessage'
import { useAuthStore } from '@/stores/auth'

export default function BoardPage() {
  const { boardId } = useParams<{ boardId: string }>()
  const { t } = useI18n()
  const { user } = useAuthStore()

  const [board, setBoard] = useState<Board | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState('')
  const [loadingBoard, setLoadingBoard] = useState(true)
  const [loadingPosts, setLoadingPosts] = useState(true)
  const [errorBoard, setErrorBoard] = useState<string | null>(null)
  const [errorPosts, setErrorPosts] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fetchBoard = useCallback(async () => {
    if (!boardId) return
    setLoadingBoard(true)
    setErrorBoard(null)
    try {
      const result = await getBoard(boardId)
      if (!result) {
        setBoard(null)
        setErrorBoard('スレッドが見つかりません')
      } else {
        setBoard(result)
      }
    } catch (err) {
      console.error('Failed to fetch board', err)
      setErrorBoard('掲示板の取得に失敗しました')
    } finally {
      setLoadingBoard(false)
    }
  }, [boardId])

  const fetchPosts = useCallback(async () => {
    if (!boardId) return
    setLoadingPosts(true)
    setErrorPosts(null)
    try {
      const result = await listPostsByBoard(boardId)
      setPosts(result)
    } catch (err) {
      console.error('Failed to fetch posts', err)
      setErrorPosts('投稿の取得に失敗しました')
    } finally {
      setLoadingPosts(false)
    }
  }, [boardId])

  useEffect(() => {
    fetchBoard()
    fetchPosts()
  }, [fetchBoard, fetchPosts])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!boardId || !user) return
    if (!newPost.trim()) {
      setSubmitError('投稿内容を入力してください')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const created = await createPost({
        boardId,
        authorId: user.id,
        text: newPost.trim(),
      })
      setPosts((prev) => [created, ...prev])
      setNewPost('')
    } catch (err) {
      console.error('Failed to create post', err)
      setSubmitError('投稿に失敗しました。時間をおいて再試行してください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loadingBoard) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <LoadingIndicator message="Loading board..." />
      </div>
    )
  }

  if (errorBoard) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-4">
        <ErrorMessage message={errorBoard} onRetry={fetchBoard} />
      </div>
    )
  }

  if (!board) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-4">
        <ErrorMessage message="スレッドが見つかりません" />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {board.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>投稿数: {board.postCount}</span>
          <span>作成者: {board.createdBy}</span>
          <span>作成日: {board.createdAt.toLocaleString()}</span>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          投稿一覧
        </h2>

        {loadingPosts ? (
          <LoadingIndicator message="Loading posts..." />
        ) : errorPosts ? (
          <ErrorMessage message={errorPosts} onRetry={fetchPosts} />
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              {t('empty.posts')}
            </h3>
            <p className="text-muted-foreground">
              最初の投稿をしてみましょう
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="card">
                <div className="card-content">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-medium text-foreground">
                          {post.authorId}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {post.createdAt.toLocaleString()}
                        </span>
                        {post.likeCount > 0 && (
                          <span className="badge badge-outline">
                            {post.likeCount} likes
                          </span>
                        )}
                      </div>
                      <p className="text-foreground whitespace-pre-wrap">
                        {post.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Post Form */}
      <div className="card">
        <div className="card-content">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="newPost" className="block text-sm font-medium text-foreground mb-2">
                新しい投稿
              </label>
              <textarea
                id="newPost"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="textarea w-full bg-background text-foreground border-border"
                placeholder="投稿内容を入力してください..."
                rows={3}
              />
            </div>
            {submitError && (
              <p className="text-sm text-destructive">{submitError}</p>
            )}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!newPost.trim() || isSubmitting}
                className="btn btn-primary"
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? '送信中...' : '投稿'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
