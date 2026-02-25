import {
  addDoc,
  collection,
  deleteDoc,
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
  type QueryConstraint,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/firebase'
import type { Circle, CircleCategory } from '@/types'

const circlesCollection = collection(db, 'circles')

const toDate = (value: unknown): Date => {
  if (value instanceof Timestamp) return value.toDate()
  if (value instanceof Date) return value
  return new Date()
}

const toCircle = (snapshot: QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData>): Circle => {
  const data = snapshot.data()
  if (!data) {
    throw new Error('Circle data is missing')
  }

  return {
    id: snapshot.id,
    name: data.name,
    category: data.category,
    description: data.description,
    imageUrl: data.imageUrl ?? undefined,
    schedule: data.schedule,
    location: data.location,
    memberCount: data.memberCount ?? 0,
    contactInfo: data.contactInfo,
    welcomeMessage: data.welcomeMessage ?? undefined,
    createdBy: data.createdBy,
    universityId: data.universityId,
    isActive: data.isActive ?? true,
    questionBoardId: data.questionBoardId ?? undefined,
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
  }
}

export const getCircles = async (universityId: string, category?: CircleCategory): Promise<Circle[]> => {
  const constraints: QueryConstraint[] = [
    where('universityId', '==', universityId),
    where('isActive', '==', true),
    orderBy('createdAt', 'desc'),
  ]

  if (category) {
    constraints.splice(1, 0, where('category', '==', category))
  }

  const snapshot = await getDocs(query(circlesCollection, ...constraints))
  return snapshot.docs.map((docSnapshot) => toCircle(docSnapshot))
}

export const getCircle = async (circleId: string): Promise<Circle | null> => {
  const snapshot = await getDoc(doc(circlesCollection, circleId))
  if (!snapshot.exists()) {
    return null
  }
  return toCircle(snapshot)
}

export const createCircle = async (data: Omit<Circle, 'id' | 'createdAt' | 'updatedAt'>): Promise<Circle> => {
  const now = serverTimestamp()
  const ref = await addDoc(circlesCollection, {
    ...data,
    createdAt: now,
    updatedAt: now,
  })
  const created = await getDoc(ref)
  return toCircle(created)
}

export const updateCircle = async (circleId: string, data: Partial<Omit<Circle, 'id' | 'createdAt' | 'createdBy'>>): Promise<void> => {
  const payload: Record<string, unknown> = {
    ...data,
    updatedAt: serverTimestamp(),
  }
  await updateDoc(doc(circlesCollection, circleId), payload)
}

export const deleteCircle = async (circleId: string): Promise<void> => {
  await deleteDoc(doc(circlesCollection, circleId))
}
