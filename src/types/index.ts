export interface User {
  id: string
  email: string
  nickname: string
  role?: 'admin' | 'user'
  universityId?: string
  avatarUrl?: string
  suspendedUntil?: Date
  departmentId?: string
  department?: string
  grade?: string
  circles?: string[]
  bio?: string
  followers: string[]
  following: string[]
  preferredLocale: 'ja' | 'en'
  points?: number
  badges?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Department {
  id: string
  universityId: string
  nameJa: string
  nameEn: string
  programType: 'advanced' | 'creative' | 'core'
}

export interface Topic {
  id: string
  universityId?: string
  departmentId: string
  nameJa: string
  nameEn: string
  slug: string
  isActive: boolean
}

export interface Board {
  id: string
  universityId: string
  departmentId?: string
  year?: number
  topicId: string
  title: string
  description?: string
  boardType: 'qa' | 'event'
  eventStartAt?: Date
  eventEndAt?: Date
  location?: string
  organizerName?: string
  organizerType?: 'circle' | 'student_group' | 'company' | 'other'
  registrationUrl?: string
  createdAt: Date
  updatedAt: Date
  createdBy: string
  postCount: number
  latestPostAt: Date | null
  yearCreated: number
  bestAnswerPostId?: string | null
  relatedCircleId?: string
}

export type CircleCategory = 'sports' | 'culture' | 'academic' | 'other'

export interface Circle {
  id: string
  name: string
  category: CircleCategory
  description: string
  imageUrl?: string
  schedule: string
  location: string
  memberCount: number
  contactInfo: string
  welcomeMessage?: string
  createdBy: string
  universityId: string
  isActive: boolean
  questionBoardId?: string
  createdAt: Date
  updatedAt: Date
}

export interface Post {
  id: string
  universityId?: string
  boardId: string
  authorId: string
  authorName?: string
  authorAvatarUrl?: string
  text: string
  imageUrls: string[]
  createdAt: Date
  updatedAt: Date
  thanksCount: number
  likeCount: number
  isBestAnswer?: boolean
}

export interface Like {
  postId: string
  userId: string
  universityId: string
  createdAt: Date
}

export interface Follow {
  followerId: string
  followeeId: string
  universityId: string
  createdAt: Date
}

export type ChatType = 'dm'

export interface Chat {
  id: string
  type?: ChatType
  participantIds: [string, string] | string[]
  createdBy?: string
  universityId?: string
  createdAt: Date
  updatedAt?: Date
  lastMessageAt?: Date | null
  lastMessageText?: string
}

export interface Message {
  id: string
  chatId: string
  authorId: string
  text: string
  imageUrls?: string[]
  createdAt: Date
  updatedAt?: Date
  reportedBy: string[]
}

export interface Report {
  id: string
  targetType: 'post' | 'message' | 'user'
  targetId: string
  reporterId: string
  reason: string
  createdAt: Date
  status: 'pending' | 'resolved' | 'dismissed'
  universityId: string
}

export interface Event {
  id: string
  universityId: string
  title: string
  body: string
  imageUrls: string[]
  createdAt: Date
  createdBy: string
}

export interface Feedback {
  id: string
  authorId: string
  universityId: string
  body: string
  createdAt: Date
  visibleTo: 'admin'
}

export interface Notification {
  id: string
  userId: string
  universityId: string
  type: 'new_post' | 'new_follower' | 'new_like' | 'new_message'
  refIds: Record<string, string>
  isRead: boolean
  createdAt: Date
}

export interface Archive {
  id: string
  boardId: string
  universityId: string
  folderName: string
  keywords: string[]
  year: number
  imageRefs: string[]
  createdAt: Date
}

export interface UserPreferences {
  starredBoards: string[]
  notificationBoards: string[]
  theme: 'light' | 'dark' | 'system'
}

export type Locale = 'ja' | 'en'

export interface AuthState {
  user: User | null
  userProfile: User | null
  isGuest: boolean
  loading: boolean
}

export interface AppState {
  currentDepartment: Department | null
  currentTopic: Topic | null
  currentBoard: Board | null
  locale: Locale
  theme: 'light' | 'dark' | 'system'
}
