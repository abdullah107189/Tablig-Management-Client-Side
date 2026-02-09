// components/dashboard/quick-actions.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/locale-provider'
import { 
  Plus, 
  CalendarDays, 
  Moon, 
  MapPin, 
  UserPlus,
  ArrowRight 
} from 'lucide-react'

export function QuickActions() {
  const { t } = useLocale()

  const actions = [
    {
      title: t('actions.talimEntry'),
      description: t('actions.addUpdate'),
      icon: Plus,
      color: 'bg-primary/10 text-primary',
      href: '/talim/add',
    },
    {
      title: t('actions.threeDaysKhuruj'),
      description: t('actions.addMonthly'),
      icon: CalendarDays,
      color: 'bg-emerald-500/10 text-emerald-600',
      href: '/khuruj/3days',
    },
    {
      title: t('actions.shabgujari'),
      description: t('actions.addWeekly'),
      icon: Moon,
      color: 'bg-purple-500/10 text-purple-600',
      href: '/khuruj/shabgujari',
    },
    {
      title: t('actions.activeKhuruj'),
      description: t('actions.addLong'),
      icon: MapPin,
      color: 'bg-amber-500/10 text-amber-600',
      href: '/khuruj/active',
    },
    {
      title: t('actions.addSathi'),
      description: t('actions.addMember'),
      icon: UserPlus,
      color: 'bg-blue-500/10 text-blue-600',
      href: '/sathi/add',
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('dashboard.quickActions')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start justify-start gap-3 hover:border-primary hover:bg-primary/5 transition-all"
              asChild
            >
              <a href={action.href}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">{action.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}