import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
  endAt,
  where,
  Timestamp,
  type QueryConstraint,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Board, Circle, Post } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const SEARCH_RESULT_LIMIT = 100

const toDate = (value: unknown): Date => {
  if (value instanceof Timestamp) return value.toDate()
  if (value instanceof Date) return value
  if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) return parsed
  }
  return new Date()
}

const toBoard = (snapshot: QueryDocumentSnapshot<DocumentData>): Board => {
  const data = snapshot.data()
  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    topicId: data.topicId,
    departmentId: typeof data.departmentId === 'string' ? data.departmentId : undefined,
    year: typeof data.year === 'number' ? data.year : undefined,
    title: data.title,
    description: data.description,
    boardType: data.boardType || 'qa',
    eventStartAt: data.eventStartAt ? toDate(data.eventStartAt) : undefined,
    eventEndAt: data.eventEndAt ? toDate(data.eventEndAt) : undefined,
    location: data.location ?? undefined,
    organizerName: data.organizerName ?? undefined,
    organizerType: data.organizerType ?? undefined,
    registrationUrl: data.registrationUrl ?? undefined,
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
    createdBy: data.createdBy,
    postCount: data.postCount ?? 0,
    latestPostAt: data.latestPostAt === null ? null : toDate(data.latestPostAt),
    yearCreated: data.yearCreated ?? new Date().getFullYear(),
    bestAnswerPostId: data.bestAnswerPostId ?? null,
  }
}

const toPost = (snapshot: QueryDocumentSnapshot<DocumentData>): Post => {
  const data = snapshot.data()
  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    boardId: data.boardId,
    authorId: data.authorId,
    authorName: data.authorName,
    authorAvatarUrl: data.authorAvatarUrl,
    text: data.text,
    imageUrls: data.imageUrls || [],
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
    thanksCount: data.thanksCount ?? data.likeCount ?? 0,
    likeCount: data.likeCount ?? 0,
    isBestAnswer: data.isBestAnswer ?? false,
  }
}

const toCircle = (snapshot: QueryDocumentSnapshot<DocumentData>): Circle => {
  const data = snapshot.data()
  return {
    id: snapshot.id,
    name: data.name,
    category: data.category,
    description: data.description,
    imageUrl: data.imageUrl ?? undefined,
    schedule: data.schedule,
    location: data.location,
    memberCount: data.memberCount ?? 0,
    contactInfo: data.contactInfo,
    welcomeMessage: data.welcomeMessage ?? undefined,
    createdBy: data.createdBy,
    universityId: data.universityId,
    isActive: data.isActive ?? true,
    questionBoardId: data.questionBoardId ?? undefined,
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
  }
}

const buildPrefixQuery = (collectionName: 'boards' | 'posts' | 'circles', field: string, keyword: string, universityId: string) => {
  const constraints: QueryConstraint[] = [where('universityId', '==', universityId), orderBy(field), startAt(keyword), endAt(`${keyword}\uf8ff`), limit(SEARCH_RESULT_LIMIT)]
  if (collectionName === 'circles') {
    constraints.splice(1, 0, where('isActive', '==', true))
  }
  return query(collection(db, collectionName), ...constraints)
}

const includesIgnoreCase = (value: string | undefined, keyword: string) =>
  (value || '').toLocaleLowerCase().includes(keyword.toLocaleLowerCase())

export type SearchBoardFilters = {
  period?: 'week' | 'month' | 'all'
  sort?: 'postCount' | 'latestPost' | 'createdAt'
  hasBestAnswer?: boolean
}

const filterBoardByPeriod = (board: Board, period: SearchBoardFilters['period']) => {
  if (!period || period === 'all') return true
  const now = Date.now()
  const from = period === 'week' ? now - 7 * 24 * 60 * 60 * 1000 : now - 30 * 24 * 60 * 60 * 1000
  return board.createdAt.getTime() >= from
}

export const searchBoards = async (
  keyword: string,
  universityId: string,
  filters?: SearchBoardFilters,
): Promise<Board[]> => {
  const trimmed = keyword.trim()
  if (!trimmed) return []

  const snapshot = await getDocs(buildPrefixQuery('boards', 'title', trimmed, universityId))
  let boards = snapshot.docs.map((docSnapshot) => toBoard(docSnapshot))
  boards = boards.filter((board) => includesIgnoreCase(board.title, trimmed))

  if (filters?.hasBestAnswer) {
    boards = boards.filter((board) => !!board.bestAnswerPostId)
  }

  boards = boards.filter((board) => filterBoardByPeriod(board, filters?.period))

  if (filters?.sort === 'postCount') {
    boards.sort((a, b) => b.postCount - a.postCount)
  } else if (filters?.sort === 'latestPost') {
    boards.sort((a, b) => (b.latestPostAt?.getTime() || 0) - (a.latestPostAt?.getTime() || 0))
  } else {
    boards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  return boards
}

export const searchPosts = async (keyword: string, universityId: string): Promise<Post[]> => {
  const trimmed = keyword.trim()
  if (!trimmed) return []

  const snapshot = await getDocs(buildPrefixQuery('posts', 'text', trimmed, universityId))
  return snapshot.docs
    .map((docSnapshot) => toPost(docSnapshot))
    .filter((post) => includesIgnoreCase(post.text, trimmed))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export const searchCircles = async (keyword: string, universityId: string): Promise<Circle[]> => {
  const trimmed = keyword.trim()
  if (!trimmed) return []

  const snapshot = await getDocs(buildPrefixQuery('circles', 'name', trimmed, universityId))
  return snapshot.docs
    .map((docSnapshot) => toCircle(docSnapshot))
    .filter((circle) => includesIgnoreCase(circle.name, trimmed))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}
