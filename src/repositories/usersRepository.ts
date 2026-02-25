import {
  collection,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  where,
  query,
  orderBy,
  limit,
  documentId,
  type DocumentData,
  type DocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { User } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import { DEPARTMENTS } from '@/constants/departments'

const usersCollection = collection(db, 'users')
const DEPARTMENT_IDS = new Set(DEPARTMENTS.map(dept => dept.id))

const normalizeDepartmentId = (data: DocumentData): string | undefined => {
  const candidates = [data.departmentId, data.department, data.dept]

  for (const candidate of candidates) {
    if (typeof candidate !== 'string') continue
    const trimmed = candidate.trim()
    if (DEPARTMENT_IDS.has(trimmed)) {
      return trimmed
    }
  }

  return undefined
}

const toUser = (snapshot: DocumentSnapshot<DocumentData>): User => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('User data is missing')
  }

  const departmentId = normalizeDepartmentId(data)

  return {
    id: snapshot.id,
    email: data.email,
    nickname: data.nickname,
    role: data.role === 'admin' ? 'admin' : 'user',
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    avatarUrl: data.avatarUrl,
    suspendedUntil: data.suspendedUntil?.toDate(),
    departmentId,
    department: departmentId,
    grade: data.grade,
    circles: data.circles || [],
    bio: data.bio,
    followers: data.followers || [],
    following: data.following || [],
    preferredLocale: data.preferredLocale || 'ja',
    points: data.points ?? 0,
    badges: data.badges || [],
    subEmail: data.subEmail ?? undefined,
    createdAt: data.createdAt?.toDate() || new Date(),
    updatedAt: data.updatedAt?.toDate() || new Date(),
  }
}

export const getUserById = async (userId: string): Promise<User | null> => {
  const userRef = doc(usersCollection, userId)
  const snapshot = await getDoc(userRef)
  if (!snapshot.exists()) {
    return null
  }
  return toUser(snapshot)
}

const USERS_IDS_IN_LIMIT = 30

const chunkArray = <T,>(items: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }
  return chunks
}

export const getUsersByIds = async (userIds: string[]): Promise<Record<string, User>> => {
  if (userIds.length === 0) return {}

  const result: Record<string, User> = {}
  const uniqueIds = Array.from(new Set(userIds.filter(Boolean)))
  if (uniqueIds.length === 0) return result

  const idChunks = chunkArray(uniqueIds, USERS_IDS_IN_LIMIT)
  const snapshots = await Promise.all(
    idChunks.map((ids) => getDocs(query(usersCollection, where(documentId(), 'in', ids)))),
  )

  snapshots.forEach((snapshot) => {
    snapshot.docs.forEach((docSnapshot) => {
      result[docSnapshot.id] = toUser(docSnapshot)
    })
  })

  return result
}

export const updateUserProfile = async (
  userId: string,
  input: {
    nickname?: string
    departmentId?: string | null
    department?: string | null
    grade?: string
    circles?: string[]
    bio?: string
    avatarUrl?: string | null
    subEmail?: string | null
  },
): Promise<void> => {
  const userRef = doc(usersCollection, userId)
  const updateData: Record<string, unknown> = {
    updatedAt: serverTimestamp(),
  }

  if (input.nickname !== undefined) updateData.nickname = input.nickname
  if (input.departmentId !== undefined) {
    const normalized = input.departmentId && DEPARTMENT_IDS.has(input.departmentId) ? input.departmentId : null
    updateData.departmentId = normalized
    updateData.department = normalized
  } else if (input.department !== undefined) {
    updateData.department = input.department
  }
  if (input.grade !== undefined) updateData.grade = input.grade
  if (input.circles !== undefined) updateData.circles = input.circles
  if (input.bio !== undefined) updateData.bio = input.bio
  if (input.avatarUrl !== undefined) updateData.avatarUrl = input.avatarUrl ?? null
  if (input.subEmail !== undefined) updateData.subEmail = input.subEmail ?? null

  await updateDoc(userRef, updateData)
}

export const followUser = async (currentUserId: string, targetUserId: string): Promise<void> => {
  const currentRef = doc(usersCollection, currentUserId)
  const targetRef = doc(usersCollection, targetUserId)

  await runTransaction(db, async (transaction) => {
    const [currentSnap, targetSnap] = await Promise.all([transaction.get(currentRef), transaction.get(targetRef)])

    if (!currentSnap.exists() || !targetSnap.exists()) {
      throw new Error('User not found')
    }

    const currentData = currentSnap.data() as DocumentData
    const targetData = targetSnap.data() as DocumentData

    const currentFollowing = new Set<string>(currentData.following || [])
    const targetFollowers = new Set<string>(targetData.followers || [])

    if (!currentFollowing.has(targetUserId)) {
      currentFollowing.add(targetUserId)
      transaction.update(currentRef, {
        following: Array.from(currentFollowing),
        updatedAt: serverTimestamp(),
      })
    }

    if (!targetFollowers.has(currentUserId)) {
      targetFollowers.add(currentUserId)
      transaction.update(targetRef, {
        followers: Array.from(targetFollowers),
        updatedAt: serverTimestamp(),
      })
    }
  })
}

export const unfollowUser = async (currentUserId: string, targetUserId: string): Promise<void> => {
  const currentRef = doc(usersCollection, currentUserId)
  const targetRef = doc(usersCollection, targetUserId)

  await runTransaction(db, async (transaction) => {
    const [currentSnap, targetSnap] = await Promise.all([transaction.get(currentRef), transaction.get(targetRef)])

    if (!currentSnap.exists() || !targetSnap.exists()) {
      throw new Error('User not found')
    }

    const currentData = currentSnap.data() as DocumentData
    const targetData = targetSnap.data() as DocumentData

    const currentFollowing = new Set<string>(currentData.following || [])
    const targetFollowers = new Set<string>(targetData.followers || [])

    if (currentFollowing.has(targetUserId)) {
      currentFollowing.delete(targetUserId)
      transaction.update(currentRef, {
        following: Array.from(currentFollowing),
        updatedAt: serverTimestamp(),
      })
    }

    if (targetFollowers.has(currentUserId)) {
      targetFollowers.delete(currentUserId)
      transaction.update(targetRef, {
        followers: Array.from(targetFollowers),
        updatedAt: serverTimestamp(),
      })
    }
  })
}


export const listTopUsersByPoints = async (limitCount = 20, departmentId?: string): Promise<User[]> => {
  const usersQuery = departmentId
    ? query(usersCollection, where('departmentId', '==', departmentId), orderBy('points', 'desc'), limit(limitCount))
    : query(usersCollection, orderBy('points', 'desc'), limit(limitCount))
  const snapshot = await getDocs(usersQuery)
  return snapshot.docs.map((docSnapshot) => toUser(docSnapshot))
}

export const getUserRankByPoints = async (userId: string, departmentId?: string): Promise<number | null> => {
  const current = await getUserById(userId)
  if (!current) return null

  const base = departmentId ? query(usersCollection, where('departmentId', '==', departmentId)) : usersCollection
  const rankQuery = query(base, where('points', '>', current.points ?? 0))
  const snapshot = await getDocs(rankQuery)
  return snapshot.size + 1
}



export const deleteUserById = async (userId: string): Promise<void> => {
  await deleteDoc(doc(usersCollection, userId))
}

export const getUserBySubEmail = async (email: string): Promise<User | null> => {
  const usersQuery = query(usersCollection, where('subEmail', '==', email), limit(1))
  const snapshot = await getDocs(usersQuery)
  if (snapshot.empty) return null
  return toUser(snapshot.docs[0])
}
