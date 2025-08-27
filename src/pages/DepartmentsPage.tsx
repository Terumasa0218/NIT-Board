import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '@/utils/i18n'
import { getDepartmentsByProgram } from '@/constants/departments'
import { ChevronRight, GraduationCap } from 'lucide-react'

export default function DepartmentsPage() {
  const { t, currentLocale } = useI18n()
  const navigate = useNavigate()

  const handleDepartmentSelect = (departmentId: string) => {
    navigate(`/topics?department=${departmentId}`)
  }

  const advancedDepartments = getDepartmentsByProgram('advanced')
  const creativeDepartments = getDepartmentsByProgram('creative')
  const coreDepartments = getDepartmentsByProgram('core')

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {t('departments.title')}
        </h1>
        <p className="text-muted-foreground">
          学科・コースを選択して掲示板を閲覧してください
        </p>
      </div>

      <div className="space-y-6">
        {/* 高度工学教育課程 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            {currentLocale === 'ja' ? '高度工学教育課程' : 'Advanced Engineering Education Program'}
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {advancedDepartments.map((dept, index) => (
              <div key={dept.id}>
                <button
                  onClick={() => handleDepartmentSelect(dept.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-accent transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground">
                      {currentLocale === 'ja' ? dept.nameJa : dept.nameEn}
                    </p>
                    {currentLocale === 'ja' && dept.nameEn && (
                      <p className="text-sm text-muted-foreground">
                        {dept.nameEn}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
                {index < advancedDepartments.length - 1 && (
                  <div className="border-b border-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 創造工学教育課程（6年一貫） */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            {currentLocale === 'ja' ? '創造工学教育課程（6年一貫）' : 'Creative Engineering Education Program (6-year integrated)'}
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {creativeDepartments.map((dept, index) => (
              <div key={dept.id}>
                <button
                  onClick={() => handleDepartmentSelect(dept.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-accent transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground">
                      {currentLocale === 'ja' ? dept.nameJa : dept.nameEn}
                    </p>
                    {currentLocale === 'ja' && dept.nameEn && (
                      <p className="text-sm text-muted-foreground">
                        {dept.nameEn}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
                {index < creativeDepartments.length - 1 && (
                  <div className="border-b border-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 基幹工学教育課程（夜間主）5年課程 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            {currentLocale === 'ja' ? '基幹工学教育課程（夜間主）5年課程' : 'Core Engineering Education Program (Evening, 5-year)'}
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {coreDepartments.map((dept, index) => (
              <div key={dept.id}>
                <button
                  onClick={() => handleDepartmentSelect(dept.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-accent transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground">
                      {currentLocale === 'ja' ? dept.nameJa : dept.nameEn}
                    </p>
                    {currentLocale === 'ja' && dept.nameEn && (
                      <p className="text-sm text-muted-foreground">
                        {dept.nameEn}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
                {index < coreDepartments.length - 1 && (
                  <div className="border-b border-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* All Topics Link */}
      <div className="mt-8 text-center">
        <Link
          to="/topics"
          className="btn btn-outline"
        >
          すべてのトピックを表示
        </Link>
      </div>
    </div>
  )
}
