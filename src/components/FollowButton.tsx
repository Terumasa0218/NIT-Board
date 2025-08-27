import { useState } from 'react'
import { useI18n } from '@/utils/i18n'
import { UserPlus, UserMinus, MessageSquare } from 'lucide-react'

interface FollowButtonProps {
  isFollowing: boolean
  isMutual: boolean
  onFollow: () => void
  onUnfollow: () => void
  onMessage: () => void
}

export default function FollowButton({
  isFollowing,
  isMutual,
  onFollow,
  onUnfollow,
  onMessage,
}: FollowButtonProps) {
  const { t } = useI18n()
  const [isLoading, setIsLoading] = useState(false)

  const handleFollow = async () => {
    setIsLoading(true)
    try {
      if (isFollowing) {
        await onUnfollow()
      } else {
        await onFollow()
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handleFollow}
        disabled={isLoading}
        className={`btn btn-sm ${isFollowing ? 'btn-outline' : 'btn-primary'}`}
      >
        {isFollowing ? (
          <UserMinus className="h-4 w-4 mr-1" />
        ) : (
          <UserPlus className="h-4 w-4 mr-1" />
        )}
        {isFollowing ? t('follow.unfollow') : t('follow.follow')}
      </button>
      
      {isMutual && (
        <button
          onClick={onMessage}
          className="btn btn-outline btn-sm"
        >
          <MessageSquare className="h-4 w-4 mr-1" />
          {t('follow.message')}
        </button>
      )}
    </div>
  )
}
