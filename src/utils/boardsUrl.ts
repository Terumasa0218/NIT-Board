const MIN_YEAR = 1
const MAX_YEAR = 4

export const normalizeYearParam = (value?: string | null): number => {
  const parsed = Number.parseInt(value ?? '', 10)
  if (Number.isNaN(parsed)) return MIN_YEAR
  if (parsed < MIN_YEAR) return MIN_YEAR
  if (parsed > MAX_YEAR) return MAX_YEAR
  return parsed
}
