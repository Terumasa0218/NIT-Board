import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/firebase'

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
const DEFAULT_MAX_FILE_SIZE = 10 * 1024 * 1024

const validateImageFile = (file: File, maxFileSize: number) => {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new Error('invalid-image-type')
  }

  if (file.size > maxFileSize) {
    throw new Error('image-too-large')
  }
}

export const uploadImage = async (file: File, storagePath: string, maxFileSize = DEFAULT_MAX_FILE_SIZE): Promise<string> => {
  validateImageFile(file, maxFileSize)

  const imageRef = ref(storage, storagePath)
  const snapshot = await uploadBytes(imageRef, file, {
    contentType: file.type,
  })

  return getDownloadURL(snapshot.ref)
}

export const uploadMultipleImages = async (
  files: File[],
  basePath: string,
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
): Promise<string[]> => {
  const uploadTasks = files.map((file, index) => {
    const timestamp = Date.now() + index
    const safeFilename = file.name.replace(/\s+/g, '_')
    const storagePath = `${basePath}/${timestamp}_${safeFilename}`
    return uploadImage(file, storagePath, maxFileSize)
  })

  return Promise.all(uploadTasks)
}

export const IMAGE_ACCEPT = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
  'image/webp': ['.webp'],
}
