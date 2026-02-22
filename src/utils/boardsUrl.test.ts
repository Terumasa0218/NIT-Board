import { describe, expect, it } from 'vitest'
import { normalizeYearParam } from './boardsUrl'

describe('normalizeYearParam', () => {
  it.each([
    ['0', 1],
    ['abc', 1],
    ['5', 4],
    ['2', 2],
  ])('normalizes %s to %d', (input, expected) => {
    expect(normalizeYearParam(input)).toBe(expected)
  })
})
