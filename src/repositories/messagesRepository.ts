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
  updateDoc,
  where,
  type DocumentData,
  type DocumentSnapshot,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Message } from '@/types'

const messagesCollection = collection(db, 'messages')
const chatsCollection = collection(db, 'chats')

const toMessage = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Message => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('Message data is missing')
  }

  return {
    id: snapshot.id,
    chatId: data.chatId,
    authorId: data.authorId,
    text: data.text,
    imageUrls: data.imageUrls || [],
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
    reportedBy: data.reportedBy || [],
  }
}

export const listMessagesByChat = async (chatId: string): Promise<Message[]> => {
  const messagesQuery = query(messagesCollection, where('chatId', '==', chatId), orderBy('createdAt', 'asc'))
  const snapshot = await getDocs(messagesQuery)
  return snapshot.docs.map((docSnapshot) => toMessage(docSnapshot))
}

export const sendMessage = async (input: { chatId: string; authorId: string; text: string }): Promise<Message> => {
  const now = serverTimestamp()
  const docRef = await addDoc(messagesCollection, {
    chatId: input.chatId,
    authorId: input.authorId,
    text: input.text,
    imageUrls: [],
    createdAt: now,
    updatedAt: now,
    reportedBy: [],
  })

  const chatRef = doc(chatsCollection, input.chatId)
  await updateDoc(chatRef, {
    updatedAt: now,
    lastMessageAt: now,
  })

  const snapshot = await getDoc(docRef)
  return toMessage(snapshot)
}
