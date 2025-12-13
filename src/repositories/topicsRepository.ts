import { doc, getDoc, type DocumentData, type DocumentSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import type { Topic } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const toTopic = (snapshot: DocumentSnapshot<DocumentData>): Topic => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('Topic data is missing')
  }

  return {
    id: snapshot.id,
    universityId: data.universityId || DEFAULT_UNIVERSITY_ID,
    departmentId: data.departmentId,
    nameJa: data.nameJa,
    nameEn: data.nameEn,
    slug: data.slug,
    isActive: data.isActive ?? true,
  }
}

export const getTopicById = async (topicId: string): Promise<Topic | null> => {
  const topicRef = doc(db, 'topics', topicId)
  const snapshot = await getDoc(topicRef)
  if (!snapshot.exists()) {
    return null
  }
  return toTopic(snapshot)
}
