import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Loader2 } from 'lucide-react'

interface I18nGateProps {
  children: ReactNode
}

export default function I18nGate({ children }: I18nGateProps) {
  const { ready } = useTranslation()

  if (!ready) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading translations...</span>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
