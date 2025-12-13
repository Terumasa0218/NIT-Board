import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  Timestamp,
  where,
  type DocumentData,
  type DocumentSnapshot,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Post } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const postsCollection = collection(db, 'posts')

function assertData(
  data: DocumentData | undefined,
  id: string,
): asserts data is DocumentData {
  if (!data) {
    throw new Error(`Post document ${id} has no data`)
  }
}

const toDate = (value: unknown, fallback: Date = new Date()): Date => {
  if (value instanceof Timestamp) return value.toDate()
  if (value instanceof Date) return value
  if (value === null || value === undefined) return fallback
  const parsed = new Date(value as string)
  return Number.isNaN(parsed.getTime()) ? fallback : parsed
}

const toPost = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Post => {
  const data = snapshot.data()
  assertData(data, snapshot.id)

  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    boardId: data.boardId,
    authorId: data.authorId,
    text: data.text,
    imageUrls: data.imageUrls || [],
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
    likeCount: data.likeCount ?? 0,
  }
}

export const listPostsByBoard = async (boardId: string): Promise<Post[]> => {
  const postsQuery = query(postsCollection, where('boardId', '==', boardId), orderBy('createdAt', 'asc'))
  const snapshot = await getDocs(postsQuery)
  return snapshot.docs.map((docSnapshot) => toPost(docSnapshot))
}

export const createPost = async (input: {
  boardId: string
  authorId: string
  text: string
  imageUrls?: string[]
}): Promise<Post> => {
  const boardRef = doc(db, 'boards', input.boardId)
  const boardSnapshot = await getDoc(boardRef)

  if (!boardSnapshot.exists()) {
    throw new Error('Board not found')
  }

  const boardData = boardSnapshot.data()

  if (!boardData) {
    throw new Error('Board data is missing')
  }
  const now = serverTimestamp()

  const postRef = await addDoc(postsCollection, {
    boardId: input.boardId,
    authorId: input.authorId,
    text: input.text,
    imageUrls: input.imageUrls ?? [],
    likeCount: 0,
    universityId: boardData.universityId || DEFAULT_UNIVERSITY_ID,
    createdAt: now,
    updatedAt: now,
  })

  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(boardRef)
    if (!snapshot.exists()) {
      throw new Error('Board not found during update')
    }

    transaction.update(boardRef, {
      postCount: increment(1),
      latestPostAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
  })

  const createdSnapshot = await getDoc(postRef)
  return toPost(createdSnapshot)
}
