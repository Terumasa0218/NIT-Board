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

const toPost = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Post => {
  const data = snapshot.data()

  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    boardId: data.boardId,
    authorId: data.authorId,
    text: data.text,
    imageUrls: data.imageUrls || [],
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
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

  const boardData = boardSnapshot.data() as DocumentData
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
