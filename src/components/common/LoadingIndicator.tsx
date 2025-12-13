import type { FC } from 'react'

interface LoadingIndicatorProps {
  message?: string
}

const LoadingIndicator: FC<LoadingIndicatorProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="w-full flex items-center justify-center py-10 text-muted-foreground">
      <div className="flex items-center gap-3">
        <span className="h-5 w-5 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin" />
        <span>{message}</span>
      </div>
    </div>
  )
}

export default LoadingIndicator
