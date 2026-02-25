import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit as limitQuery,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
  writeBatch,
  doc,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Notification } from '@/types'

const notificationsCollection = collection(db, 'notifications')

const toNotification = (snapshot: QueryDocumentSnapshot<DocumentData>): Notification => {
  const data = snapshot.data()
  return {
    id: snapshot.id,
    userId: data.userId,
    type: data.type,
    refId: data.refId,
    actorId: data.actorId,
    actorName: data.actorName,
    actorAvatarUrl: data.actorAvatarUrl ?? undefined,
    message: data.message,
    isRead: Boolean(data.isRead),
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
  }
}

type NotificationType = Notification['type']

const buildMessage = (type: NotificationType, actorName: string): string => {
  switch (type) {
    case 'thanks_received':
      return `${actorName}さんがあなたの投稿にThanksしました`
    case 'best_answer':
      return `${actorName}さんがあなたの投稿をベストアンサーに選びました`
    case 'new_follower':
      return `${actorName}さんがあなたをフォローしました`
    case 'new_post_by_following':
      return `${actorName}さんが新しい投稿を作成しました`
    case 'new_message':
      return `${actorName}さんから新しいメッセージが届きました`
    default:
      return `${actorName}さんから新しい通知があります`
  }
}

export const createNotification = async (data: {
  userId: string
  type: NotificationType
  refId: string
  actorId: string
  actorName: string
  actorAvatarUrl?: string
  message?: string
}): Promise<void> => {
  await addDoc(notificationsCollection, {
    userId: data.userId,
    type: data.type,
    refId: data.refId,
    actorId: data.actorId,
    actorName: data.actorName,
    actorAvatarUrl: data.actorAvatarUrl ?? null,
    message: data.message ?? buildMessage(data.type, data.actorName),
    isRead: false,
    createdAt: serverTimestamp(),
  })
}

export const getNotifications = async (userId: string, limit = 50): Promise<Notification[]> => {
  const notificationsQuery = query(
    notificationsCollection,
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
    limitQuery(limit),
  )

  const snapshot = await getDocs(notificationsQuery)
  return snapshot.docs.map((docSnapshot) => toNotification(docSnapshot))
}

export const getUnreadCount = async (userId: string): Promise<number> => {
  const unreadQuery = query(notificationsCollection, where('userId', '==', userId), where('isRead', '==', false))
  const snapshot = await getCountFromServer(unreadQuery)
  return snapshot.data().count
}

export const markAsRead = async (notificationId: string): Promise<void> => {
  await updateDoc(doc(notificationsCollection, notificationId), {
    isRead: true,
  })
}

export const markAllAsRead = async (userId: string): Promise<void> => {
  const unreadQuery = query(notificationsCollection, where('userId', '==', userId), where('isRead', '==', false), limitQuery(200))
  const snapshot = await getDocs(unreadQuery)
  if (snapshot.empty) return

  const batch = writeBatch(db)
  snapshot.docs.forEach((item) => {
    batch.update(item.ref, { isRead: true })
  })
  await batch.commit()
}
