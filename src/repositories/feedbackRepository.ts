import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'

const feedbackCollection = collection(db, 'feedback')

export const createFeedback = async (input: { authorId: string; universityId: string; body: string }): Promise<void> => {
  await addDoc(feedbackCollection, {
    authorId: input.authorId,
    universityId: input.universityId,
    body: input.body,
    visibleTo: 'admin',
    createdAt: serverTimestamp(),
  })
}
