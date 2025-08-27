import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-transparent border-none text-sm font-medium text-foreground focus:outline-none focus:ring-0"
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}
