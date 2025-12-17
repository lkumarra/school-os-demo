import type { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatsCardProps {
    title: string
    value: string | number
    icon?: ReactNode
    trend?: {
        value: number
        label: string
    }
    className?: string
}

export function StatsCard({ title, value, icon, trend, className }: StatsCardProps) {
    return (
        <Card className={cn("relative overflow-hidden", className)}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-[var(--muted-foreground)]">
                    {title}
                </CardTitle>
                {icon && (
                    <div className="h-8 w-8 rounded-lg bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)]">
                        {icon}
                    </div>
                )}
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold text-[var(--foreground)]">{value}</div>
                {trend && (
                    <div className="flex items-center gap-1 mt-1">
                        {trend.value > 0 ? (
                            <TrendingUp className="h-4 w-4 text-[var(--color-success-500)]" />
                        ) : trend.value < 0 ? (
                            <TrendingDown className="h-4 w-4 text-[var(--color-danger-500)]" />
                        ) : (
                            <Minus className="h-4 w-4 text-[var(--muted-foreground)]" />
                        )}
                        <span className={cn(
                            "text-xs font-medium",
                            trend.value > 0 && "text-[var(--color-success-500)]",
                            trend.value < 0 && "text-[var(--color-danger-500)]",
                            trend.value === 0 && "text-[var(--muted-foreground)]"
                        )}>
                            {trend.value > 0 ? '+' : ''}{trend.value}% {trend.label}
                        </span>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
