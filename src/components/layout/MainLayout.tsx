import type { ReactNode } from 'react'
import { useApp } from '@/context/AppContext'
import { Sidebar } from './Sidebar'
import { TopNav } from './TopNav'
import { cn } from '@/lib/utils'
import { roleDisplayNames } from '@/lib/constants'

interface MainLayoutProps {
    children: ReactNode
    title?: string
    description?: string
    actions?: ReactNode
    showPermissionLabel?: boolean
    permissions?: string[]
}

export function MainLayout({
    children,
    title,
    description,
    actions,
    showPermissionLabel = true,
    permissions = ['View']
}: MainLayoutProps) {
    const { sidebarCollapsed, user } = useApp()

    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Sidebar />
            <TopNav />

            <main
                className={cn(
                    "pt-16 min-h-screen transition-all duration-300",
                    sidebarCollapsed ? "pl-16" : "pl-64"
                )}
            >
                <div className="p-6">
                    {/* Page Header */}
                    {(title || showPermissionLabel) && (
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                {title && (
                                    <h1 className="text-2xl font-semibold text-[var(--foreground)]">
                                        {title}
                                    </h1>
                                )}
                                {description && (
                                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                                        {description}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Permission Label */}
                                {showPermissionLabel && (
                                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                                        <span>Role: <strong>{roleDisplayNames[user.role]}</strong></span>
                                        <span className="text-[var(--border)]">|</span>
                                        <span>Access: {permissions.join(', ')}</span>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                {actions}
                            </div>
                        </div>
                    )}

                    {/* Page Content */}
                    {children}
                </div>
            </main>
        </div>
    )
}

// Layout for pages without sidebar (Login, Onboarding)
interface AuthLayoutProps {
    children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
            {children}
        </div>
    )
}
