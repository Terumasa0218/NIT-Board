import { useEffect, useMemo, useState } from 'react'
import { Award, Trophy } from 'lucide-react'
import { DEPARTMENTS } from '@/constants/departments'
import { listTopUsersByPoints, getUserRankByPoints } from '@/repositories/usersRepository'
import { useAuthStore } from '@/stores/auth'
import type { User } from '@/types'
import { useI18n } from '@/utils/i18n'

export default function RankingPage() {
  const { t } = useI18n()
  const authUser = useAuthStore((state) => state.user)
  const [departmentId, setDepartmentId] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [myRank, setMyRank] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const rankingTitle = departmentId ? t('ranking.byDepartment') : t('ranking.overall')

  const badgeCountMap = useMemo(() => {
    const map: Record<string, number> = {}
    users.forEach((u) => {
      map[u.id] = u.badges?.length ?? 0
    })
    return map
  }, [users])

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const [topUsers, rank] = await Promise.all([
          listTopUsersByPoints(20, departmentId || undefined),
          authUser?.id ? getUserRankByPoints(authUser.id, departmentId || undefined) : Promise.resolve(null),
        ])
        setUsers(topUsers)
        setMyRank(rank)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [authUser?.id, departmentId])

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Trophy className="h-6 w-6 text-amber-500" />
        <h1 className="text-2xl font-bold">{t('ranking.title')}</h1>
      </div>

      <div className="bg-card border border-border rounded-lg p-4">
        <label className="text-sm text-muted-foreground">{t('ranking.byDepartment')}</label>
        <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} className="input w-full mt-2">
          <option value="">{t('ranking.overall')}</option>
          {DEPARTMENTS.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.nameJa}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-card border border-border rounded-lg p-4">
        <h2 className="font-semibold mb-3">{rankingTitle}</h2>
        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : users.length === 0 ? (
          <p className="text-muted-foreground">No users.</p>
        ) : (
          <div className="space-y-2">
            {users.map((user, index) => {
              const isMe = authUser?.id === user.id
              return (
                <div
                  key={user.id}
                  className={`flex items-center justify-between rounded-md border px-3 py-2 ${isMe ? 'border-primary bg-primary/5' : 'border-border'}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-semibold w-8">#{index + 1}</span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center">
                      {user.avatarUrl ? <img src={user.avatarUrl} alt={user.nickname} className="w-full h-full object-cover" /> : user.nickname?.[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium truncate">{user.nickname}</div>
                      <div className="text-xs text-muted-foreground">{user.departmentId || '-'}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-semibold">{user.points ?? 0} pt</div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Award className="h-4 w-4" />
                      <span className="text-xs">{badgeCountMap[user.id]}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {authUser && myRank && (
        <div className="text-sm text-muted-foreground">{t('ranking.thisMonth')}: #{myRank}</div>
      )}
    </div>
  )
}
