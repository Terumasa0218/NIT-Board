import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import locale files
import ja from '../locales/ja/translation.json'
import en from '../locales/en/translation.json'

const resources = {
  ja: {
    translation: ja,
  },
  en: {
    translation: en,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lang',
    },
    
    react: {
      useSuspense: false,
    },
    
    saveMissing: false,
    missingKeyHandler: false,
  })

export default i18n
