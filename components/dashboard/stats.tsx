// components/dashboard/stats.tsx
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from '@/components/locale-provider'
import { Users, Home, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function DashboardStats() {
  const { t } = useLocale()

  const stats = [
    {
      title: t('cards.todayAmir'),
      value: 'Abdur Rahman',
      icon: User,
      change: '+1 from yesterday',
      color: 'bg-blue-500',
    },
    {
      title: t('cards.attendance'),
      value: '42',
      icon: Users,
      change: '↗︎ +8 from yesterday',
      color: 'bg-emerald-500',
    },
    {
      title: t('cards.ghoreTalim'),
      value: t('status.yes'),
      subtitle: '5 homes',
      icon: Home,
      color: 'bg-purple-500',
    },
    {
      title: t('cards.mehnat'),
      value: t('status.yes'),
      subtitle: 'Completed',
      icon: Clock,
      color: 'bg-amber-500',
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-4">{t('dashboard.todaySnapshot')}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    {stat.change && (
                      <Badge variant="outline" className="text-xs">
                        {stat.change}
                      </Badge>
                    )}
                  </div>
                  {stat.subtitle && (
                    <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                  )}
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}