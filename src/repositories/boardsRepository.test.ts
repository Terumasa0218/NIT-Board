import { describe, it, expect, beforeEach, vi } from 'vitest'
import { listBoardsByTopic } from './boardsRepository'
import { DEFAULT_UNIVERSITY_ID } from '@/constants/university'

const { mockGetDocs, mockQuery, mockWhere, mockOrderBy } = vi.hoisted(() => ({
  mockGetDocs: vi.fn(),
  mockQuery: vi.fn((...args: unknown[]) => args),
  mockWhere: vi.fn(),
  mockOrderBy: vi.fn(),
}))

vi.mock('firebase/firestore', () => {
  class MockTimestamp {
    private date: Date

    constructor(date: Date) {
      this.date = date
    }

    toDate() {
      return this.date
    }
  }

  return {
    collection: vi.fn(),
    getDocs: mockGetDocs,
    query: mockQuery,
    where: mockWhere,
    orderBy: mockOrderBy,
    Timestamp: MockTimestamp,
  }
})

vi.mock('@/firebase', () => ({
  db: {},
}))

describe('boardsRepository', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('converts timestamp fields to Date objects', async () => {
    const { Timestamp } = await import('firebase/firestore')
    const createdAt = new Date('2024-01-01T00:00:00Z')
    const latestPostAt = new Date('2024-01-02T12:00:00Z')

    mockGetDocs.mockResolvedValue({
      docs: [
        {
          id: 'board-1',
          data: () => ({
            title: 'Test Board',
            topicId: 'assignments',
            createdBy: 'user-1',
            postCount: 3,
            latestPostAt: new Timestamp(latestPostAt),
            createdAt: new Timestamp(createdAt),
            updatedAt: new Timestamp(createdAt),
            universityId: DEFAULT_UNIVERSITY_ID,
            yearCreated: 2024,
          }),
        },
      ],
    })

    const results = await listBoardsByTopic('assignments', DEFAULT_UNIVERSITY_ID)

    expect(mockWhere).toHaveBeenCalledWith('topicId', '==', 'assignments')
    expect(results).toHaveLength(1)
    expect(results[0].createdAt).toEqual(createdAt)
    expect(results[0].latestPostAt).toEqual(latestPostAt)
    expect(results[0].universityId).toBe(DEFAULT_UNIVERSITY_ID)
  })
})
