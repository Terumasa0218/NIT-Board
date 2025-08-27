import { useTranslation } from 'react-i18next'
import { format, formatDistanceToNow } from 'date-fns'
import { ja, enUS } from 'date-fns/locale'
import type { Locale } from '@/types'

const dateLocales = {
  ja,
  en: enUS,
}

export const useI18n = () => {
  const { t, i18n } = useTranslation()
  
  const changeLanguage = (locale: Locale) => {
    i18n.changeLanguage(locale)
    localStorage.setItem('nitech-board-locale', locale)
    document.documentElement.lang = locale
  }
  
  const currentLocale = i18n.language as Locale
  
  const formatDate = (date: Date, formatStr?: string) => {
    const locale = dateLocales[currentLocale] || dateLocales.ja
    return format(date, formatStr || 'yyyy年M月d日', { locale })
  }
  
  const formatRelativeTime = (date: Date) => {
    const locale = dateLocales[currentLocale] || dateLocales.ja
    return formatDistanceToNow(date, { 
      addSuffix: true, 
      locale 
    })
  }
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(currentLocale).format(num)
  }
  
  return {
    t,
    currentLocale,
    changeLanguage,
    formatDate,
    formatRelativeTime,
    formatNumber,
  }
}

export const getLocaleDisplayName = (locale: Locale) => {
  switch (locale) {
    case 'ja':
      return '日本語'
    case 'en':
      return 'English'
    default:
      return '日本語'
  }
}

export const getLocaleFlag = (locale: Locale) => {
  switch (locale) {
    case 'ja':
      return '🇯🇵'
    case 'en':
      return '🇺🇸'
    default:
      return '🇯🇵'
  }
}
