import {
  collection,
  doc,
  getDoc,
  getDocs,
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
import type { Chat, ChatType } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const chatsCollection = collection(db, 'chats')

const buildDmChatId = (universityId: string, userId: string, otherUserId: string): string => {
  const sorted = [userId, otherUserId].sort()
  return `dm_${universityId}_${sorted[0]}_${sorted[1]}`
}

const toChat = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Chat => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('Chat data is missing')
  }

  const participantIds: string[] = Array.isArray(data.participantIds) ? (data.participantIds as string[]) : []
  const participantIdsTuple: [string, string] = participantIds.length >= 2 
    ? [participantIds[0], participantIds[1]] 
    : ['', '']

  return {
    id: snapshot.id,
    type: (data.type ?? 'dm') as ChatType,
    participantIds: participantIdsTuple,
    createdBy: data.createdBy,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
    lastMessageAt:
      data.lastMessageAt instanceof Timestamp
        ? data.lastMessageAt.toDate()
        : data.lastMessageAt ?? null,
    lastMessageText: data.lastMessageText,
  }
}

export const getChat = async (chatId: string): Promise<Chat | null> => {
  const chatRef = doc(chatsCollection, chatId)
  const snapshot = await getDoc(chatRef)
  if (!snapshot.exists()) return null
  return toChat(snapshot)
}

export const listDmChatsForUser = async (params: { universityId: string; userId: string }): Promise<Chat[]> => {
  const chatsQuery = query(
    chatsCollection,
    where('universityId', '==', params.universityId),
    where('participantIds', 'array-contains', params.userId),
    where('type', '==', 'dm'),
    orderBy('updatedAt', 'desc'),
  )
  const snapshot = await getDocs(chatsQuery)
  return snapshot.docs.map((docSnapshot) => toChat(docSnapshot))
}

export const getOrCreateDmChat = async (params: {
  universityId: string
  userId: string
  otherUserId: string
}): Promise<Chat> => {
  const chatId = buildDmChatId(params.universityId, params.userId, params.otherUserId)
  const chatRef = doc(chatsCollection, chatId)

  await runTransaction(db, async (transaction) => {
    const existing = await transaction.get(chatRef)
    if (existing.exists()) return

    const now = serverTimestamp()
    transaction.set(chatRef, {
      id: chatId,
      type: 'dm',
      participantIds: [params.userId, params.otherUserId],
      createdBy: params.userId,
      universityId: params.universityId,
      createdAt: now,
      updatedAt: now,
      lastMessageAt: null,
      lastMessageText: '',
    })
  })

  const snapshot = await getDoc(chatRef)
  if (!snapshot.exists()) {
    throw new Error('Failed to create or retrieve chat')
  }
  return toChat(snapshot)
}

export const listChatsByUser = async (userId: string): Promise<Chat[]> => {
  return listDmChatsForUser({ universityId: DEFAULT_UNIVERSITY_ID, userId })
}

export const createDmChat = async (currentUserId: string, targetUserId: string): Promise<Chat> => {
  return getOrCreateDmChat({ universityId: DEFAULT_UNIVERSITY_ID, userId: currentUserId, otherUserId: targetUserId })
}
