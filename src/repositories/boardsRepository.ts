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
  deleteDoc,
  where,
  documentId,
  type DocumentData,
  type DocumentSnapshot,
  type QueryConstraint,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Board } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import { getTopicQueryIds } from '@/constants/departments'

const getBoardsCollection = () => collection(db, 'boards')

export type CreateBoardInput = {
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
}

type BoardCreateNow = Date | ReturnType<typeof serverTimestamp>

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

  const boardsQuery = query(getBoardsCollection(), ...constraints)

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

  const boardsQuery = query(getBoardsCollection(), ...constraints)
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
        getBoardsCollection(),
        where('universityId', '==', input.universityId),
        where('topicId', '==', topicId),
        orderBy('createdAt', 'desc'),
      )
      const snapshot = await getDocs(legacyQuery)
      return snapshot.docs.map((docSnapshot) => toBoard(docSnapshot))
    }),
  )

  return mergeAndDedupeBoards(primaryResults.flat(), fallbackResults.flat())
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
  const boardRef = doc(getBoardsCollection(), boardId)
  const snapshot = await getDoc(boardRef)
  if (!snapshot.exists()) {
    return null
  }
  return toBoard(snapshot)
}

const BOARD_IDS_IN_LIMIT = 30

const chunkArray = <T,>(items: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }
  return chunks
}

export const getBoardsByIds = async (boardIds: string[]): Promise<Board[]> => {
  const uniqueIds = Array.from(new Set(boardIds.filter(Boolean)))
  if (uniqueIds.length === 0) return []

  const idChunks = chunkArray(uniqueIds, BOARD_IDS_IN_LIMIT)
  const snapshots = await Promise.all(
    idChunks.map((ids) => getDocs(query(getBoardsCollection(), where(documentId(), 'in', ids)))),
  )

  return snapshots.flatMap((snapshot) => snapshot.docs.map((docSnapshot) => toBoard(docSnapshot)))
}

export const buildBoardCreateDoc = (input: CreateBoardInput, now: BoardCreateNow) => {
  const yearCreated = now instanceof Date ? now.getFullYear() : new Date().getFullYear()

  return {
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
    yearCreated,
    createdAt: now,
    updatedAt: now,
    bestAnswerPostId: null,
  }
}

export const mergeAndDedupeBoards = (primary: Board[], fallback: Board[]): Board[] => {
  const mergedBoards = [...primary, ...fallback]
  const uniqueBoards = Array.from(new Map(mergedBoards.map((board) => [board.id, board])).values())

  return uniqueBoards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export const createBoard = async (input: CreateBoardInput): Promise<Board> => {
  const now = serverTimestamp()
  const docRef = await addDoc(getBoardsCollection(), buildBoardCreateDoc(input, now))

  const createdSnapshot = await getDoc(docRef)
  return toBoard(createdSnapshot)
}


export const updateBoard = async (boardId: string, input: { title: string; description?: string }): Promise<void> => {
  const boardRef = doc(getBoardsCollection(), boardId)
  await updateDoc(boardRef, {
    title: input.title,
    description: input.description ?? '',
    updatedAt: serverTimestamp(),
  })
}

export const deleteBoard = async (boardId: string): Promise<void> => {
  const boardRef = doc(getBoardsCollection(), boardId)
  await deleteDoc(boardRef)
}
export const setBestAnswer = async (boardId: string, postId: string | null): Promise<void> => {
  const boardRef = doc(getBoardsCollection(), boardId)
  await updateDoc(boardRef, {
    bestAnswerPostId: postId ?? null,
    updatedAt: serverTimestamp(),
  })
}
