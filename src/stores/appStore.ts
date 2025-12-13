import { create } from 'zustand'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'
import type { Locale } from '@/types'

type AppStore = {
  selectedUniversityId: string
  preferredLocale: Locale
  setSelectedUniversityId: (universityId: string) => void
  setPreferredLocale: (locale: Locale) => void
}

export const useAppStore = create<AppStore>((set) => ({
  selectedUniversityId: DEFAULT_UNIVERSITY_ID,
  preferredLocale: 'ja',
  setSelectedUniversityId: (universityId: string) => set({ selectedUniversityId: universityId }),
  setPreferredLocale: (locale: Locale) => set({ preferredLocale: locale }),
}))
