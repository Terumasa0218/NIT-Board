import { describe, expect, it } from 'vitest'
import type { Board } from '@/types'
import { buildBoardCreateDoc, mergeAndDedupeBoards } from './boardsRepository'

describe('buildBoardCreateDoc', () => {
  it('includes required fields and timestamps', () => {
    const now = new Date('2025-01-02T03:04:05.000Z')
    const doc = buildBoardCreateDoc(
      {
        title: 'Board title',
        topicId: 'topic-1',
        departmentId: 'dept-1',
        year: 2,
        createdBy: 'user-1',
        universityId: 'uni-1',
      },
      now,
    )

    expect(doc).toMatchObject({
      topicId: 'topic-1',
      departmentId: 'dept-1',
      year: 2,
      createdBy: 'user-1',
      universityId: 'uni-1',
      yearCreated: 2025,
      createdAt: now,
      updatedAt: now,
    })
  })
})

describe('mergeAndDedupeBoards', () => {
  it('dedupes by id and sorts by createdAt desc', () => {
    const board = (id: string, iso: string): Board => ({
      id,
      universityId: 'uni-1',
      topicId: 'topic-1',
      departmentId: 'dept-1',
      year: 2,
      title: id,
      description: '',
      boardType: 'qa',
      createdAt: new Date(iso),
      updatedAt: new Date(iso),
      createdBy: 'user-1',
      postCount: 0,
      latestPostAt: null,
      yearCreated: 2025,
      bestAnswerPostId: null,
    })

    const result = mergeAndDedupeBoards(
      [board('a', '2025-01-02T00:00:00.000Z'), board('b', '2025-01-04T00:00:00.000Z')],
      [board('a', '2025-01-03T00:00:00.000Z'), board('c', '2025-01-01T00:00:00.000Z')],
    )

    expect(result).toHaveLength(3)
    expect(result.map((item) => item.id)).toEqual(['b', 'a', 'c'])
  })
})
