import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { AIInsight } from '@/types'

interface AIInsightCardProps {
    insight: AIInsight
    onAction?: () => void
    className?: string
}

export function AIInsightCard({ insight, onAction, className }: AIInsightCardProps) {
    const priorityColors = {
        high: 'bg-[var(--color-danger-500)]',
        medium: 'bg-[var(--color-warning-500)]',
        low: 'bg-[var(--color-success-500)]'
    }

    return (
        <Card className={cn(
            "relative overflow-hidden border-[var(--color-ai-purple)]/20",
            className
        )}>
            {/* AI Gradient Background */}
            <div className="absolute inset-0 ai-gradient opacity-5" />

            <CardHeader className="relative pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
                            <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <Badge variant="ai" className="text-xs">
                            AI Insight
                        </Badge>
                    </div>
                    <div className={cn(
                        "h-2 w-2 rounded-full",
                        priorityColors[insight.priority]
                    )} />
                </div>
            </CardHeader>

            <CardContent className="relative">
                <CardTitle className="text-base mb-2">{insight.title}</CardTitle>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    {insight.description}
                </p>

                {insight.actionable && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onAction}
                        className="px-0 hover:bg-transparent text-[var(--color-ai-purple)] hover:text-[var(--color-ai-blue)]"
                    >
                        Take Action
                        <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}

// Simple AI suggestion card
interface AISuggestionProps {
    title: string
    description: string
    icon?: React.ReactNode
    onClick?: () => void
}

export function AISuggestion({ title, description, icon, onClick }: AISuggestionProps) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--color-ai-purple)]/50 hover:shadow-md transition-all duration-200 group"
        >
            <div className="flex items-start gap-3">
                {icon && (
                    <div className="h-10 w-10 rounded-lg ai-gradient flex items-center justify-center shrink-0 group-hover:ai-glow transition-shadow">
                        {icon}
                    </div>
                )}
                <div>
                    <h4 className="font-medium text-[var(--foreground)] group-hover:text-[var(--color-ai-purple)] transition-colors">
                        {title}
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
                        {description}
                    </p>
                </div>
            </div>
        </button>
    )
}
