import {
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
  updateDoc,
  where,
  type DocumentData,
  type DocumentSnapshot,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Post } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const postsCollection = collection(db, 'posts')
const boardsCollection = collection(db, 'boards')

const toPost = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Post => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('Post data is missing')
  }

  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    boardId: data.boardId,
    authorId: data.authorId,
    text: data.text,
    imageUrls: data.imageUrls || [],
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
    thanksCount: data.thanksCount ?? data.likeCount ?? 0,
    likeCount: data.likeCount,
    isBestAnswer: data.isBestAnswer ?? false,
  }
}

export const listPostsByBoard = async (boardId: string): Promise<Post[]> => {
  const postsQuery = query(postsCollection, where('boardId', '==', boardId), orderBy('createdAt', 'asc'))
  const snapshot = await getDocs(postsQuery)
  return snapshot.docs.map((docSnapshot) => toPost(docSnapshot))
}

export const listPostsByAuthor = async (authorId: string): Promise<Post[]> => {
  const postsQuery = query(postsCollection, where('authorId', '==', authorId), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(postsQuery)
  return snapshot.docs.map((docSnapshot) => toPost(docSnapshot))
}

export const createPost = async (input: { boardId: string; authorId: string; text: string }): Promise<Post> => {
  const postRef = doc(postsCollection)
  const boardRef = doc(boardsCollection, input.boardId)

  await runTransaction(db, async (transaction) => {
    const boardSnapshot = await transaction.get(boardRef)
    if (!boardSnapshot.exists()) {
      throw new Error('Board not found')
    }

    const boardData = boardSnapshot.data() as DocumentData
    const now = serverTimestamp()

    transaction.set(postRef, {
      boardId: input.boardId,
      authorId: input.authorId,
      text: input.text,
      imageUrls: [],
      thanksCount: 0,
      universityId: boardData.universityId || DEFAULT_UNIVERSITY_ID,
      createdAt: now,
      updatedAt: now,
    })

    transaction.update(boardRef, {
      postCount: increment(1),
      latestPostAt: now,
      updatedAt: now,
    })
  })

  const createdSnapshot = await getDoc(postRef)
  return toPost(createdSnapshot)
}

export const incrementThanks = async (postId: string): Promise<void> => {
  const postRef = doc(postsCollection, postId)
  await updateDoc(postRef, {
    thanksCount: increment(1),
    updatedAt: serverTimestamp(),
  })
}
