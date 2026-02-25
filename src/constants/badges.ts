export const BADGE_IDS = ['first-post', 'contributor', 'expert', 'helper', 'circle-leader'] as const

export type BadgeId = (typeof BADGE_IDS)[number]

export interface BadgeDefinition {
  id: BadgeId
  key: string
}

export const BADGES: BadgeDefinition[] = BADGE_IDS.map((id) => ({
  id,
  key: `badges.${id}`,
}))
