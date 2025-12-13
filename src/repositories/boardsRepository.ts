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
  where,
  type DocumentData,
  type DocumentSnapshot,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Board } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const boardsCollection = collection(db, 'boards')

function assertData(
  data: DocumentData | undefined,
  id: string,
): asserts data is DocumentData {
  if (!data) {
    throw new Error(`Board document ${id} has no data`)
  }
}

const toDate = (value: unknown, fallback: Date | null = null): Date | null => {
  if (value instanceof Timestamp) return value.toDate()
  if (value instanceof Date) return value
  if (value === null || value === undefined) return fallback
  const parsed = new Date(value as string)
  return Number.isNaN(parsed.getTime()) ? fallback : parsed
}

const toBoard = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Board => {
  const data = snapshot.data()
  assertData(data, snapshot.id)

  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    topicId: data.topicId,
    title: data.title,
    createdAt: toDate(data.createdAt, new Date())!,
    updatedAt: toDate(data.updatedAt, new Date())!,
    createdBy: data.createdBy,
    postCount: data.postCount ?? 0,
    latestPostAt: toDate(data.latestPostAt, null),
    yearCreated: data.yearCreated ?? new Date().getFullYear(),
  }
}

export const listBoards = async (params?: {
  topicId?: string
  universityId?: string
}): Promise<Board[]> => {
  const constraints = []

  if (params?.topicId) {
    constraints.push(where('topicId', '==', params.topicId))
  }

  if (params?.universityId) {
    constraints.push(where('universityId', '==', params.universityId))
  }

  const boardsQuery = query(boardsCollection, ...constraints, orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(boardsQuery)
  return snapshot.docs.map((docSnapshot) => toBoard(docSnapshot))
}

export const listBoardsByTopic = async (
  topicId: string,
  universityId: string = DEFAULT_UNIVERSITY_ID,
): Promise<Board[]> => listBoards({ topicId, universityId })

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
  createdBy: string
  universityId: string
}): Promise<Board> => {
  const now = serverTimestamp()
  const docRef = await addDoc(boardsCollection, {
    title: input.title,
    topicId: input.topicId,
    createdBy: input.createdBy,
    universityId: input.universityId || DEFAULT_UNIVERSITY_ID,
    postCount: 0,
    latestPostAt: null,
    yearCreated: new Date().getFullYear(),
    createdAt: now,
    updatedAt: now,
  })

  const createdSnapshot = await getDoc(docRef)
  return toBoard(createdSnapshot)
}
