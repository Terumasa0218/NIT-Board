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

const toBoard = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Board => {
  const data = snapshot.data()

  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    topicId: data.topicId,
    title: data.title,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
    createdBy: data.createdBy,
    postCount: data.postCount ?? 0,
    latestPostAt: data.latestPostAt instanceof Timestamp ? data.latestPostAt.toDate() : data.latestPostAt ?? null,
    yearCreated: data.yearCreated ?? new Date().getFullYear(),
  }
}

export const listBoardsByTopic = async (topicId: string): Promise<Board[]> => {
  const boardsQuery = query(
    boardsCollection,
    where('topicId', '==', topicId),
    where('universityId', '==', DEFAULT_UNIVERSITY_ID),
    orderBy('createdAt', 'desc'),
  )

  const snapshot = await getDocs(boardsQuery)
  return snapshot.docs.map((docSnapshot) => toBoard(docSnapshot))
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
