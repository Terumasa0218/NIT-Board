import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
  type DocumentData,
  type DocumentSnapshot,
  type QueryConstraint,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Board } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import { getTopicQueryIds } from '@/constants/departments'

const boardsCollection = collection(db, 'boards')

const toDate = (value: unknown): Date | undefined => {
  if (value instanceof Timestamp) return value.toDate()
  if (value instanceof Date) return value
  if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) return parsed
  }
  return undefined
}

const toBoard = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Board => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('Board data is missing')
  }

  const eventStartAt = toDate(data.eventStartAt)
  const eventEndAt = toDate(data.eventEndAt)

  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    topicId: data.topicId,
    departmentId: typeof data.departmentId === 'string' ? data.departmentId : undefined,
    year: typeof data.year === 'number' ? data.year : undefined,
    title: data.title,
    description: data.description,
    boardType: data.boardType || 'qa',
    eventStartAt,
    eventEndAt,
    location: data.location ?? undefined,
    organizerName: data.organizerName ?? undefined,
    organizerType: data.organizerType ?? undefined,
    registrationUrl: data.registrationUrl ?? undefined,
    createdAt: toDate(data.createdAt) ?? new Date(),
    updatedAt: toDate(data.updatedAt) ?? new Date(),
    createdBy: data.createdBy,
    postCount: data.postCount ?? 0,
    latestPostAt: data.latestPostAt === null ? null : toDate(data.latestPostAt) ?? null,
    yearCreated: data.yearCreated ?? new Date().getFullYear(),
    bestAnswerPostId: data.bestAnswerPostId ?? null,
  }
}

type ListBoardsOptions = {
  universityId: string
  topicId?: string
  boardType?: Board['boardType']
  orderByField?: 'createdAt' | 'updatedAt' | 'eventStartAt'
  orderDirection?: 'asc' | 'desc'
}

export const listBoards = async (options: ListBoardsOptions): Promise<Board[]> => {
  const { universityId, topicId, boardType, orderByField = 'createdAt', orderDirection = 'desc' } = options

  const constraints: QueryConstraint[] = [where('universityId', '==', universityId)]

  if (topicId) {
    constraints.push(where('topicId', '==', topicId))
  }

  if (boardType) {
    constraints.push(where('boardType', '==', boardType))
  }

  constraints.push(orderBy(orderByField, orderDirection))

  const boardsQuery = query(boardsCollection, ...constraints)

  const snapshot = await getDocs(boardsQuery)
  return snapshot.docs.map((docSnapshot) => toBoard(docSnapshot))
}

export const listBoardsByTopic = async (topicId: string, universityId = DEFAULT_UNIVERSITY_ID): Promise<Board[]> => {
  return listBoards({ topicId, universityId, orderByField: 'createdAt', orderDirection: 'desc' })
}

export const listBoardsByDeptYearTopic = async (input: {
  universityId: string
  departmentId: string
  year: number
  topicId: string
}): Promise<Board[]> => {
  const constraints: QueryConstraint[] = [
    where('universityId', '==', input.universityId),
    where('departmentId', '==', input.departmentId),
    where('year', '==', input.year),
    where('topicId', '==', input.topicId),
    orderBy('createdAt', 'desc'),
  ]

  const boardsQuery = query(boardsCollection, ...constraints)
  const snapshot = await getDocs(boardsQuery)
  return snapshot.docs.map((docSnapshot) => toBoard(docSnapshot))
}

export const listBoardsByDeptYearTopicWithFallback = async (input: {
  universityId: string
  departmentId: string
  year: number
  topicId: string
}): Promise<Board[]> => {
  const topicQueryIds = getTopicQueryIds(input.topicId)
  const primaryResults = await Promise.all(
    topicQueryIds.map((topicId) =>
      listBoardsByDeptYearTopic({
        universityId: input.universityId,
        departmentId: input.departmentId,
        year: input.year,
        topicId,
      }),
    ),
  )

  const fallbackResults = await Promise.all(
    topicQueryIds.map(async (topicId) => {
      const legacyQuery = query(
        boardsCollection,
        where('universityId', '==', input.universityId),
        where('topicId', '==', topicId),
        orderBy('createdAt', 'desc'),
      )
      const snapshot = await getDocs(legacyQuery)
      return snapshot.docs.map((docSnapshot) => toBoard(docSnapshot))
    }),
  )

  const mergedBoards = [...primaryResults.flat(), ...fallbackResults.flat()]
  const uniqueBoards = Array.from(new Map(mergedBoards.map((board) => [board.id, board])).values())

  return uniqueBoards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export const listEventBoards = async (universityId: string): Promise<Board[]> => {
  return listBoards({
    universityId,
    boardType: 'event',
    orderByField: 'eventStartAt',
    orderDirection: 'asc',
  })
}

export const getBoard = async (boardId: string): Promise<Board | null> => {
  const boardRef = doc(boardsCollection, boardId)
  const snapshot = await getDoc(boardRef)
  if (!snapshot.exists()) {
    return null
  }
  return toBoard(snapshot)
}

export const createBoard = async (input: {
  title: string
  topicId: string
  departmentId: string
  year: number
  createdBy: string
  universityId: string
  description?: string
  boardType?: 'qa' | 'event'
  eventStartAt?: Date
  eventEndAt?: Date
  location?: string
  organizerName?: string
  organizerType?: 'circle' | 'student_group' | 'company' | 'other'
  registrationUrl?: string
}): Promise<Board> => {
  const now = serverTimestamp()
  const docRef = await addDoc(boardsCollection, {
    title: input.title,
    topicId: input.topicId,
    createdBy: input.createdBy,
    universityId: input.universityId || DEFAULT_UNIVERSITY_ID,
    departmentId: input.departmentId,
    year: input.year,
    description: input.description ?? '',
    boardType: input.boardType ?? 'qa',
    eventStartAt: input.eventStartAt ? Timestamp.fromDate(input.eventStartAt) : null,
    eventEndAt: input.eventEndAt ? Timestamp.fromDate(input.eventEndAt) : null,
    location: input.location ?? null,
    organizerName: input.organizerName ?? null,
    organizerType: input.organizerType ?? null,
    registrationUrl: input.registrationUrl ?? null,
    postCount: 0,
    latestPostAt: null,
    yearCreated: new Date().getFullYear(),
    createdAt: now,
    updatedAt: now,
    bestAnswerPostId: null,
  })

  const createdSnapshot = await getDoc(docRef)
  return toBoard(createdSnapshot)
}

export const setBestAnswer = async (boardId: string, postId: string | null): Promise<void> => {
  const boardRef = doc(boardsCollection, boardId)
  await updateDoc(boardRef, {
    bestAnswerPostId: postId ?? null,
    updatedAt: serverTimestamp(),
  })
}
