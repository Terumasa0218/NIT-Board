import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader2, MessageSquare, Send } from 'lucide-react'
import { listDmChatsForUser } from '@/repositories/chatsRepository'
import { listMessages, sendMessage } from '@/repositories/messagesRepository'
import { getUserById } from '@/repositories/usersRepository'
import type { Chat, Message, User } from '@/types'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/appStore'
import { useI18n } from '@/utils/i18n'
import toast from 'react-hot-toast'

const ChatListItem = ({
  chat,
  isActive,
  otherUser,
  onSelect,
}: {
  chat: Chat
  isActive: boolean
  otherUser?: User
  onSelect: (chatId: string) => void
}) => {
  const lastMessageTime = chat.lastMessageAt?.toLocaleString() ?? ''
  return (
    <button
      onClick={() => onSelect(chat.id)}
      className={`w-full text-left p-3 rounded-lg border border-transparent hover:border-border hover:bg-muted/40 transition flex flex-col gap-1 ${
        isActive ? 'border-border bg-muted/50' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-foreground truncate">{otherUser?.nickname ?? 'ユーザー'}</span>
        <span className="text-xs text-muted-foreground whitespace-nowrap">{lastMessageTime}</span>
      </div>
      <p className="text-sm text-muted-foreground truncate">{chat.lastMessageText || 'メッセージなし'}</p>
    </button>
  )
}

const MessageBubble = ({ message, isOwn }: { message: Message; isOwn: boolean }) => (
  <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[80%] rounded-lg px-4 py-2 text-sm shadow-sm ${
        isOwn ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground border border-border'
      }`}
    >
      <p className="whitespace-pre-wrap leading-relaxed break-words">{message.text}</p>
      <span className="block text-[11px] text-muted-foreground mt-1 text-right">{message.createdAt.toLocaleString()}</span>
    </div>
  </div>
)

export default function MessagesPage() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const { chatId: routeChatId } = useParams<{ chatId?: string }>()
  const { user } = useAuthStore()
  const { selectedUniversityId } = useAppStore()

  const [chats, setChats] = useState<Chat[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [usersMap, setUsersMap] = useState<Record<string, User>>({})
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)
  const [loadingChats, setLoadingChats] = useState(false)
  const [loadingMessages, setLoadingMessages] = useState(false)
  const [sending, setSending] = useState(false)
  const [messageText, setMessageText] = useState('')

  const currentUserId = user?.id ?? null

  const selectedChat = useMemo(() => chats.find((chat) => chat.id === selectedChatId) || null, [chats, selectedChatId])

  const otherUserId = useMemo(() => {
    if (!selectedChat || !currentUserId) return null
    return selectedChat.participantIds.find((id) => id !== currentUserId) ?? null
  }, [currentUserId, selectedChat])

  const otherUser = otherUserId ? usersMap[otherUserId] : undefined

  const fetchUsers = async (ids: string[]) => {
    const uniqueIds = Array.from(new Set(ids))
    const result: Record<string, User> = {}
    await Promise.all(
      uniqueIds.map(async (id) => {
        if (usersMap[id]) {
          result[id] = usersMap[id]
          return
        }
        const fetched = await getUserById(id)
        if (fetched) result[id] = fetched
      }),
    )
    setUsersMap((prev) => ({ ...prev, ...result }))
  }

  const fetchChats = async () => {
    if (!currentUserId) return
    setLoadingChats(true)
    try {
      const data = await listDmChatsForUser({ universityId: selectedUniversityId, userId: currentUserId })
      setChats(data)
      const candidateChatId = routeChatId ?? data[0]?.id ?? null
      setSelectedChatId(candidateChatId)
      const ids = data.map((chat) => chat.participantIds.find((id) => id !== currentUserId)).filter(Boolean) as string[]
      await fetchUsers(ids)
    } catch (error) {
      console.error(error)
      toast.error('チャット一覧の取得に失敗しました')
    } finally {
      setLoadingChats(false)
    }
  }

  const fetchMessages = async (chatId: string) => {
    setLoadingMessages(true)
    try {
      const data = await listMessages({ chatId })
      setMessages(data)
    } catch (error) {
      console.error(error)
      toast.error('メッセージの取得に失敗しました')
    } finally {
      setLoadingMessages(false)
    }
  }

  useEffect(() => {
    fetchChats()
     
  }, [currentUserId, selectedUniversityId, routeChatId])

  useEffect(() => {
    if (selectedChatId) {
      fetchMessages(selectedChatId)
    } else {
      setMessages([])
    }
  }, [selectedChatId])

  const handleSelectChat = async (chatId: string) => {
    setSelectedChatId(chatId)
    navigate(`/messages/${chatId}`)
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedChatId || !currentUserId || !messageText.trim()) return
    setSending(true)
    try {
      const message = await sendMessage({ chatId: selectedChatId, authorId: currentUserId, text: messageText.trim() })
      setMessages((prev) => [...prev, message])
      setMessageText('')
      setChats((prev) => {
        const updated = prev.map((chat) =>
          chat.id === selectedChatId
            ? {
                ...chat,
                lastMessageAt: message.createdAt,
                lastMessageText: message.text,
              }
            : chat,
        )
        return updated.sort((a, b) => (b.lastMessageAt?.getTime() || 0) - (a.lastMessageAt?.getTime() || 0))
      })
    } catch (error) {
      console.error(error)
      toast.error('メッセージ送信に失敗しました')
    } finally {
      setSending(false)
    }
  }

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
      <MessageSquare className="h-12 w-12 mb-4" />
      <p>メッセージがありません</p>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-160px)] max-w-6xl mx-auto p-4">
      <div className="bg-card border border-border rounded-lg p-4 flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">{t('common.messages')}</h2>
          {loadingChats && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
        </div>
        <div className="flex-1 overflow-y-auto space-y-2">
          {chats.length === 0 && !loadingChats && renderEmptyState()}
          {chats.map((chat) => {
            const otherId = chat.participantIds.find((id) => id !== currentUserId) ?? ''
            return (
              <ChatListItem
                key={chat.id}
                chat={chat}
                isActive={chat.id === selectedChatId}
                otherUser={usersMap[otherId]}
                onSelect={handleSelectChat}
              />
            )
          })}
        </div>
      </div>

      <div className="md:col-span-2 bg-card border border-border rounded-lg p-4 flex flex-col h-full">
        {selectedChat ? (
          <>
            <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
              <div>
                <p className="text-sm text-muted-foreground">DM</p>
                <p className="text-lg font-semibold text-foreground">{otherUser?.nickname ?? 'ユーザー'}</p>
              </div>
              {loadingMessages && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />}
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {messages.length === 0 && !loadingMessages && <div className="text-muted-foreground text-center mt-10">まだメッセージがありません</div>}
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} isOwn={message.authorId === currentUserId} />
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="mt-4 border-t border-border pt-3 flex gap-3">
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-1 textarea textarea-bordered bg-background text-foreground"
                rows={2}
                placeholder="メッセージを入力"
              />
              <button
                type="submit"
                className="btn btn-primary self-end"
                disabled={!messageText.trim() || sending || !selectedChatId}
              >
                {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">チャットを選択してください</div>
        )}
      </div>
    </div>
  )
}
