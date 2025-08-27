import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import locale files
import commonJa from '../locales/ja/common.json'
import authJa from '../locales/ja/auth.json'
import boardsJa from '../locales/ja/boards.json'

import commonEn from '../locales/en/common.json'
import authEn from '../locales/en/auth.json'
import boardsEn from '../locales/en/boards.json'

const resources = {
  ja: {
    common: commonJa,
    auth: authJa,
    boards: boardsJa,
  },
  en: {
    common: commonEn,
    auth: authEn,
    boards: boardsEn,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    debug: false, // 開発環境でもデバッグを無効化
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'nitech-board-locale',
    },
    
    defaultNS: 'common',
    ns: ['common', 'auth', 'boards'],
    
    react: {
      useSuspense: false, // do not block the UI
    },
    
    // 翻訳キーが見つからない場合の警告を無効化
    saveMissing: false,
    missingKeyHandler: false,
  })

export default i18n
