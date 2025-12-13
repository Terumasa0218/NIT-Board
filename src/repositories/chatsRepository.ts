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
import type { Chat, ChatType } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const chatsCollection = collection(db, 'chats')

const toChat = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Chat => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('Chat data is missing')
  }

  const participantIds: string[] = Array.isArray(data.participantIds) ? (data.participantIds as string[]) : []

  return {
    id: snapshot.id,
    type: (data.type ?? 'dm') as ChatType,
    participantIds,
    createdBy: data.createdBy,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
    lastMessageAt:
      data.lastMessageAt instanceof Timestamp
        ? data.lastMessageAt.toDate()
        : data.lastMessageAt ?? null,
  }
}

export const getChat = async (chatId: string): Promise<Chat | null> => {
  const chatRef = doc(chatsCollection, chatId)
  const snapshot = await getDoc(chatRef)
  if (!snapshot.exists()) return null
  return toChat(snapshot)
}

export const listChatsByUser = async (userId: string): Promise<Chat[]> => {
  const chatsQuery = query(chatsCollection, where('participantIds', 'array-contains', userId), orderBy('updatedAt', 'desc'))
  const snapshot = await getDocs(chatsQuery)
  return snapshot.docs.map((docSnapshot) => toChat(docSnapshot))
}

export const createDmChat = async (currentUserId: string, targetUserId: string): Promise<Chat> => {
  const participantIds = Array.from(new Set([currentUserId, targetUserId]))
  const now = serverTimestamp()

  const docRef = await addDoc(chatsCollection, {
    type: 'dm',
    participantIds,
    createdBy: currentUserId,
    universityId: DEFAULT_UNIVERSITY_ID,
    createdAt: now,
    updatedAt: now,
    lastMessageAt: now,
  })

  const createdSnapshot = await getDoc(docRef)
  return toChat(createdSnapshot)
}
