import { Loader2 } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-nit-600 dark:text-nit-400" />
        <p className="text-muted-foreground">読み込み中...</p>
      </div>
    </div>
  )
}
