import {
  collection,
  deleteDoc,
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
import { getUserById } from '@/repositories/usersRepository'
import { createNotification } from '@/repositories/notificationsRepository'
import type { Post } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import { addPoints } from '@/utils/points'

const postsCollection = collection(db, 'posts')
const boardsCollection = collection(db, 'boards')
const likesCollection = collection(db, 'likes')


const NOTIFY_FOLLOWER_LIMIT = 50

const notifyFollowersForNewPost = async (postId: string, authorId: string, authorName?: string, authorAvatarUrl?: string) => {
  const author = await getUserById(authorId)
  if (!author) return

  const followers = (author.followers ?? []).filter((id) => id && id !== authorId).slice(0, NOTIFY_FOLLOWER_LIMIT)
  if (followers.length === 0) return

  await Promise.all(
    followers.map((followerId) =>
      createNotification({
        userId: followerId,
        type: 'new_post_by_following',
        refId: postId,
        actorId: authorId,
        actorName: authorName || author.nickname || 'Unknown User',
        actorAvatarUrl: authorAvatarUrl || author.avatarUrl,
      }),
    ),
  )
}

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
    authorName: data.authorName,
    authorAvatarUrl: data.authorAvatarUrl,
    text: data.text,
    imageUrls: data.imageUrls || [],
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
    thanksCount: data.thanksCount ?? data.likeCount ?? 0,
    likeCount: data.likeCount ?? 0,
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

export const createPost = async (input: {
  boardId: string
  authorId: string
  authorName?: string
  authorAvatarUrl?: string
  text: string
  imageUrls?: string[]
}): Promise<Post> => {
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
      authorName: input.authorName ?? null,
      authorAvatarUrl: input.authorAvatarUrl ?? null,
      text: input.text,
      imageUrls: input.imageUrls ?? [],
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

  await addPoints(input.authorId, 'post_created', 10, postRef.id)

  void notifyFollowersForNewPost(postRef.id, input.authorId, input.authorName, input.authorAvatarUrl).catch((error) => {
    console.error('Failed to create new post notifications', error)
  })

  const createdSnapshot = await getDoc(postRef)
  return toPost(createdSnapshot)
}

export const toggleThanks = async (postId: string, userId: string): Promise<{ thanked: boolean }> => {
  const postRef = doc(postsCollection, postId)
  const likeRef = doc(likesCollection, `${userId}_${postId}`)

  return runTransaction(db, async (transaction) => {
    const [postSnapshot, likeSnapshot] = await Promise.all([transaction.get(postRef), transaction.get(likeRef)])

    if (!postSnapshot.exists()) {
      throw new Error('Post not found')
    }

    if (likeSnapshot.exists()) {
      transaction.delete(likeRef)
      transaction.update(postRef, {
        thanksCount: increment(-1),
        updatedAt: serverTimestamp(),
      })
      return { thanked: false }
    }

    const postData = postSnapshot.data() as DocumentData
    transaction.set(likeRef, {
      postId,
      userId,
      universityId: postData.universityId || DEFAULT_UNIVERSITY_ID,
      createdAt: serverTimestamp(),
    })
    transaction.update(postRef, {
      thanksCount: increment(1),
      updatedAt: serverTimestamp(),
    })
    return { thanked: true }
  })
}

export const getThankedPostIds = async (userId: string, postIds: string[]): Promise<Set<string>> => {
  if (postIds.length === 0) return new Set<string>()
  const checks = await Promise.all(postIds.map((postId) => getDoc(doc(likesCollection, `${userId}_${postId}`))))
  return new Set(checks.filter((snap) => snap.exists()).map((snap) => (snap.data()?.postId as string) ?? snap.id.replace(`${userId}_`, '')))
}

export const updatePost = async (postId: string, input: { text: string }): Promise<void> => {
  await updateDoc(doc(postsCollection, postId), {
    text: input.text,
    updatedAt: serverTimestamp(),
  })
}

export const deletePost = async (postId: string): Promise<void> => {
  const postRef = doc(postsCollection, postId)
  await runTransaction(db, async (transaction) => {
    const postSnapshot = await transaction.get(postRef)
    if (!postSnapshot.exists()) {
      return
    }

    const data = postSnapshot.data() as DocumentData
    const boardId = data.boardId

    if (boardId) {
      const boardRef = doc(boardsCollection, boardId)
      transaction.update(boardRef, {
        postCount: increment(-1),
        updatedAt: serverTimestamp(),
      })
    }

    transaction.delete(postRef)
  })
}

export const removeLikeById = async (likeId: string): Promise<void> => {
  await deleteDoc(doc(likesCollection, likeId))
}
