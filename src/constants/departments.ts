import type { Department, Topic } from '@/types'
import { DEFAULT_UNIVERSITY_ID } from './university'

export const DEPARTMENTS: Department[] = [
  // 高度工学教育課程
  {
    id: 'life-science-chemistry',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '生命・応用化学科',
    nameEn: 'Life Science and Applied Chemistry',
    programType: 'advanced',
  },
  {
    id: 'physical-engineering',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '物理工学科',
    nameEn: 'Physical Science and Engineering',
    programType: 'advanced',
  },
  {
    id: 'electrical-mechanical',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '電気・機械工学科',
    nameEn: 'Electrical and Mechanical Engineering',
    programType: 'advanced',
  },
  {
    id: 'computer-science',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '情報工学科',
    nameEn: 'Computer Science',
    programType: 'advanced',
  },
  {
    id: 'social-engineering',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '社会工学科',
    nameEn: 'Architecture, Civil Engineering, and Industrial Management Engineering',
    programType: 'advanced',
  },

  // 創造工学教育課程（6年一貫）
  {
    id: 'materials-energy',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '材料エネルギーコース',
    nameEn: 'Materials and Energy',
    programType: 'creative',
  },
  {
    id: 'computer-social',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '情報・社会コース',
    nameEn: 'Computer and Social Engineering',
    programType: 'creative',
  },

  // 基幹工学教育課程（夜間主）5年課程
  {
    id: 'electrical-mechanical-evening',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '電気・機械工学コース',
    nameEn: 'Electrical and Mechanical Engineering',
    programType: 'core',
  },
  {
    id: 'environmental-urban',
    universityId: DEFAULT_UNIVERSITY_ID,
    nameJa: '環境都市工学コース',
    nameEn: 'Environmental and Urban Engineering',
    programType: 'core',
  },
]

export const TOPICS: Topic[] = [
  {
    id: 'assignments',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: '授業課題',
    nameEn: 'Assignments',
    slug: 'assignments',
    isActive: true,
  },
  {
    id: 'lab-work',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: '実験課題',
    nameEn: 'Lab Work',
    slug: 'lab-work',
    isActive: true,
  },
  {
    id: 'midterm',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: '中間試験',
    nameEn: 'Midterm Exams',
    slug: 'midterm',
    isActive: true,
  },
  {
    id: 'final',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: '期末試験',
    nameEn: 'Final Exams',
    slug: 'final',
    isActive: true,
  },
  {
    id: 'graduate-exam',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: '大学院試験',
    nameEn: 'Graduate Exams',
    slug: 'graduate-exam',
    isActive: true,
  },
  {
    id: 'job-hunting',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: '就職活動',
    nameEn: 'Job Hunting',
    slug: 'job-hunting',
    isActive: true,
  },
  {
    id: 'other',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: 'その他',
    nameEn: 'Other',
    slug: 'other',
    isActive: true,
  },
  {
    id: 'admin-qa',
    universityId: DEFAULT_UNIVERSITY_ID,
    departmentId: 'all',
    nameJa: '管理人Q&A',
    nameEn: 'Admin Q&A',
    slug: 'admin-qa',
    isActive: true,
  }
]

const TOPIC_ID_ALIAS_MAP: Record<string, string> = {
  graduate: 'graduate-exam',
  graduate_exam: 'graduate-exam',
  graduateexam: 'graduate-exam',
}

const TOPIC_QUERY_ALIASES: Record<string, string[]> = {
  'graduate-exam': ['graduate'],
}

export const getDepartmentsByProgram = (programType: Department['programType']) => {
  return DEPARTMENTS.filter(dept => dept.programType === programType)
}

export const getDepartmentById = (id: string) => {
  return DEPARTMENTS.find(dept => dept.id === id)
}

export const getTopicBySlug = (slug: string) => {
  return TOPICS.find(topic => topic.slug === slug)
}

export const normalizeTopicId = (input?: string | null): string | undefined => {
  if (!input) return undefined
  const trimmed = input.trim()
  if (!trimmed) return undefined

  const canonical = TOPIC_ID_ALIAS_MAP[trimmed] ?? trimmed
  return TOPICS.some(topic => topic.id === canonical) ? canonical : undefined
}

export const getTopicQueryIds = (input?: string | null): string[] => {
  const canonicalTopicId = normalizeTopicId(input)
  if (!canonicalTopicId) return []

  return [canonicalTopicId, ...(TOPIC_QUERY_ALIASES[canonicalTopicId] ?? [])]
}

export const getActiveTopics = () => {
  return TOPICS.filter(topic => topic.isActive)
}
