import type { User } from '@/types'

export const isMutualFollow = (currentUser?: User | null, otherUser?: User | null): boolean => {
  if (!currentUser || !otherUser) return false
  const currentFollowing = currentUser.following ?? []
  const otherFollowing = otherUser.following ?? []
  const currentFollowers = currentUser.followers ?? []
  const otherFollowers = otherUser.followers ?? []

  const currentFollowsOther = currentFollowing.includes(otherUser.id) || currentFollowers.includes(otherUser.id)
  const otherFollowsCurrent = otherFollowing.includes(currentUser.id) || otherFollowers.includes(currentUser.id)

  return currentFollowsOther && otherFollowsCurrent
}
