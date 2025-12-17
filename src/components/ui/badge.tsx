import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "ai" | "outline"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default:
                "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--color-primary-700)]",
            secondary:
                "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--color-neutral-200)] dark:hover:bg-[var(--color-neutral-700)]",
            success:
                "bg-[var(--color-success-500)] text-white hover:bg-[var(--color-success-600)]",
            warning:
                "bg-[var(--color-warning-500)] text-[var(--color-neutral-900)] hover:bg-[var(--color-warning-600)]",
            destructive:
                "bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:bg-[var(--color-danger-600)]",
            ai: "ai-gradient text-white",
            outline:
                "bg-transparent border border-[var(--border)] text-[var(--foreground)]",
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
                    variants[variant],
                    className
                )}
                {...props}
            />
        )
    }
)
Badge.displayName = "Badge"

export { Badge }
