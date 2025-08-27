import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { MessageSquare, Send, User } from 'lucide-react'

export default function BoardPage() {
  const { boardId } = useParams()
  const { t } = useI18n()
  const [posts, setPosts] = useState<any[]>([])
  const [newPost, setNewPost] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch board and posts from Firestore
    // For now, using mock data
    const mockPosts = [
      {
        id: '1',
        content: '制御工学基礎の課題1について質問があります。',
        author: '田中太郎',
        createdAt: new Date(Date.now() - 1000 * 60 * 30),
        isSolved: false,
      },
      {
        id: '2',
        content: 'この課題は以下のように解けます。',
        author: '佐藤花子',
        createdAt: new Date(Date.now() - 1000 * 60 * 15),
        isSolved: true,
      },
    ]

    setPosts(mockPosts)
    setIsLoading(false)
  }, [boardId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.trim()) return

    // TODO: Add post to Firestore
    const newPostObj = {
      id: Date.now().toString(),
      content: newPost,
      author: '現在のユーザー',
      createdAt: new Date(),
      isSolved: false,
    }

    setPosts([newPostObj, ...posts])
    setNewPost('')
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          制御工学基礎 課題1
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>授業課題</span>
          <span>•</span>
          <span>15 投稿</span>
          <span>•</span>
          <span>30分前に更新</span>
        </div>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
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
        <div className="space-y-4 mb-6">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <div className="card-content">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-foreground">
                        {post.author}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.createdAt.toLocaleDateString()}
                      </span>
                      {post.isSolved && (
                        <span className="badge badge-success">
                          {t('boards.badges.solved')}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground">
                      {post.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
                className="textarea w-full"
                placeholder="投稿内容を入力してください..."
                rows={3}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!newPost.trim()}
                className="btn btn-primary"
              >
                <Send className="h-4 w-4 mr-2" />
                投稿
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
