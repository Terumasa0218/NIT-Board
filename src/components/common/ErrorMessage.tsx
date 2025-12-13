import type { FC } from 'react'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="w-full rounded-md border border-destructive/40 bg-destructive/10 text-destructive px-4 py-3 flex items-center justify-between gap-4">
      <span>{message}</span>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="btn btn-sm btn-outline"
        >
          再試行
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
