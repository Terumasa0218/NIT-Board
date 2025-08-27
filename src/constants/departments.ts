import type { Department, Topic } from '@/types'

export const DEPARTMENTS: Department[] = [
  // 高度工学教育課程
  {
    id: 'life-science-chemistry',
    nameJa: '生命・応用化学科',
    nameEn: 'Life Science and Applied Chemistry',
    programType: 'advanced',
  },
  {
    id: 'physical-engineering',
    nameJa: '物理工学科',
    nameEn: 'Physical Science and Engineering',
    programType: 'advanced',
  },
  {
    id: 'electrical-mechanical',
    nameJa: '電気・機械工学科',
    nameEn: 'Electrical and Mechanical Engineering',
    programType: 'advanced',
  },
  {
    id: 'computer-science',
    nameJa: '情報工学科',
    nameEn: 'Computer Science',
    programType: 'advanced',
  },
  {
    id: 'social-engineering',
    nameJa: '社会工学科',
    nameEn: 'Architecture, Civil Engineering, and Industrial Management Engineering',
    programType: 'advanced',
  },
  
  // 創造工学教育課程（6年一貫）
  {
    id: 'materials-energy',
    nameJa: '材料エネルギーコース',
    nameEn: 'Materials and Energy',
    programType: 'creative',
  },
  {
    id: 'computer-social',
    nameJa: '情報・社会コース',
    nameEn: 'Computer and Social Engineering',
    programType: 'creative',
  },
  
  // 基幹工学教育課程（夜間主）5年課程
  {
    id: 'electrical-mechanical-evening',
    nameJa: '電気・機械工学コース',
    nameEn: 'Electrical and Mechanical Engineering',
    programType: 'core',
  },
  {
    id: 'environmental-urban',
    nameJa: '環境都市工学コース',
    nameEn: 'Environmental and Urban Engineering',
    programType: 'core',
  },
]

export const TOPICS: Topic[] = [
  {
    id: 'assignments',
    departmentId: 'all',
    nameJa: '授業課題',
    nameEn: 'Assignments',
    slug: 'assignments',
    isActive: true,
  },
  {
    id: 'lab-work',
    departmentId: 'all',
    nameJa: '実験課題',
    nameEn: 'Lab Work',
    slug: 'lab-work',
    isActive: true,
  },
  {
    id: 'midterm',
    departmentId: 'all',
    nameJa: '中間試験',
    nameEn: 'Midterm Exams',
    slug: 'midterm',
    isActive: true,
  },
  {
    id: 'final',
    departmentId: 'all',
    nameJa: '期末試験',
    nameEn: 'Final Exams',
    slug: 'final',
    isActive: true,
  },
  {
    id: 'graduate-exam',
    departmentId: 'all',
    nameJa: '大学院試験',
    nameEn: 'Graduate Exams',
    slug: 'graduate-exam',
    isActive: true,
  },
  {
    id: 'job-hunting',
    departmentId: 'all',
    nameJa: '就職活動',
    nameEn: 'Job Hunting',
    slug: 'job-hunting',
    isActive: true,
  },
  {
    id: 'other',
    departmentId: 'all',
    nameJa: 'その他',
    nameEn: 'Other',
    slug: 'other',
    isActive: true,
  },
]

export const getDepartmentsByProgram = (programType: Department['programType']) => {
  return DEPARTMENTS.filter(dept => dept.programType === programType)
}

export const getDepartmentById = (id: string) => {
  return DEPARTMENTS.find(dept => dept.id === id)
}

export const getTopicBySlug = (slug: string) => {
  return TOPICS.find(topic => topic.slug === slug)
}

export const getActiveTopics = () => {
  return TOPICS.filter(topic => topic.isActive)
}
