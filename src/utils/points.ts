import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { BadgeId } from '@/constants/badges'

export type PointAction = 'post_created' | 'thanks_received' | 'best_answer' | 'profile_setup' | 'circle_created'

const usersCollection = collection(db, 'users')
const pointHistoryCollection = collection(db, 'pointHistory')

const HELPER_THRESHOLD = 50
const EXPERT_THRESHOLD = 5
const CONTRIBUTOR_THRESHOLD = 100

const countPointActions = async (userId: string, action: PointAction, take: number): Promise<number> => {
  const historyQuery = query(
    pointHistoryCollection,
    where('userId', '==', userId),
    where('action', '==', action),
    orderBy('createdAt', 'desc'),
    limit(take),
  )
  const snapshot = await getDocs(historyQuery)
  return snapshot.size
}

const resolveEarnedBadges = async (userId: string, nextPoints: number, action: PointAction): Promise<BadgeId[]> => {
  const badges: BadgeId[] = []

  if (action === 'post_created') {
    badges.push('first-post')
  }

  if (action === 'circle_created') {
    badges.push('circle-leader')
  }

  if (nextPoints >= CONTRIBUTOR_THRESHOLD) {
    badges.push('contributor')
  }

  if (action === 'best_answer') {
    const bestAnswerCount = await countPointActions(userId, 'best_answer', EXPERT_THRESHOLD)
    if (bestAnswerCount >= EXPERT_THRESHOLD) {
      badges.push('expert')
    }
  }

  if (action === 'thanks_received') {
    const thanksCount = await countPointActions(userId, 'thanks_received', HELPER_THRESHOLD)
    if (thanksCount >= HELPER_THRESHOLD) {
      badges.push('helper')
    }
  }

  return badges
}

export const addPoints = async (userId: string, action: PointAction, points: number, refId?: string): Promise<void> => {
  const userRef = doc(usersCollection, userId)

  let nextPoints = points
  await runTransaction(db, async (transaction) => {
    const userSnapshot = await transaction.get(userRef)
    if (!userSnapshot.exists()) {
      throw new Error('User not found')
    }

    const currentPoints = typeof userSnapshot.data().points === 'number' ? userSnapshot.data().points : 0
    nextPoints = currentPoints + points

    transaction.update(userRef, {
      points: increment(points),
      updatedAt: serverTimestamp(),
    })

    const historyRef = doc(pointHistoryCollection)
    transaction.set(historyRef, {
      userId,
      action,
      points,
      refId: refId ?? null,
      createdAt: serverTimestamp(),
    })
  })

  const earnedBadges = await resolveEarnedBadges(userId, nextPoints, action)
  if (earnedBadges.length > 0) {
    await updateDoc(userRef, {
      badges: arrayUnion(...earnedBadges),
      updatedAt: serverTimestamp(),
    })
  }
}
