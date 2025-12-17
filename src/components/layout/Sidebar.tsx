import { Link, useLocation } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { cn } from '@/lib/utils'
import { roleDisplayNames } from '@/lib/constants'
import type { MenuItem, UserRole } from '@/types'
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    CalendarCheck,
    ClipboardList,
    CreditCard,
    UserCog,
    Bus,
    Building2,
    BookOpen,
    MessageSquare,
    Bot,
    Settings,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    FileText,
    BarChart3,
    CheckSquare,
    Award,
    Calendar
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// Role-specific menu configurations
const roleMenus: Record<UserRole, MenuItem[]> = {
    principal: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/principal/dashboard', roles: ['principal'] },
        { label: 'Approvals', icon: CheckSquare, href: '/principal/approvals', roles: ['principal'] },
        { label: 'Reports', icon: BarChart3, href: '/principal/reports', roles: ['principal'] },
        { label: 'Settings', icon: Settings, href: '/principal/settings', roles: ['principal'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['principal'], isAI: true },
    ],
    admin: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/principal/dashboard', roles: ['admin'] },
        { label: 'Admissions', icon: Users, href: '/admin/admissions', roles: ['admin'] },
        { label: 'Students', icon: GraduationCap, href: '/admin/students', roles: ['admin'] },
        { label: 'Certificates', icon: FileText, href: '/admin/certificates', roles: ['admin'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['admin'], isAI: true },
    ],
    teacher: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/teacher/dashboard', roles: ['teacher'] },
        { label: 'Attendance', icon: CalendarCheck, href: '/teacher/attendance', roles: ['teacher'] },
        { label: 'Lesson Plans', icon: BookOpen, href: '/teacher/lessons', roles: ['teacher'] },
        { label: 'Exams', icon: ClipboardList, href: '/teacher/exams', roles: ['teacher'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['teacher'], isAI: true },
    ],
    student: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/student/dashboard', roles: ['student'] },
        { label: 'Timetable', icon: Calendar, href: '/student/timetable', roles: ['student'] },
        { label: 'Learning', icon: BookOpen, href: '/student/learning', roles: ['student'] },
        { label: 'Results', icon: Award, href: '/student/results', roles: ['student'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['student'], isAI: true },
    ],
    parent: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/parent/dashboard', roles: ['parent'] },
        { label: 'Fee Payment', icon: CreditCard, href: '/parent/fees', roles: ['parent'] },
        { label: 'Communication', icon: MessageSquare, href: '/parent/communication', roles: ['parent'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['parent'], isAI: true },
    ],
    accountant: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/accountant/fees', roles: ['accountant'] },
        { label: 'Fee Collection', icon: CreditCard, href: '/accountant/fees', roles: ['accountant'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['accountant'], isAI: true },
    ],
    hostel_warden: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/hostel/dashboard', roles: ['hostel_warden'] },
        { label: 'Room Management', icon: Building2, href: '/hostel/dashboard', roles: ['hostel_warden'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['hostel_warden'], isAI: true },
    ],
    transport: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/transport/dashboard', roles: ['transport'] },
        { label: 'Vehicles', icon: Bus, href: '/transport/dashboard', roles: ['transport'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['transport'], isAI: true },
    ],
    librarian: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/library/dashboard', roles: ['librarian'] },
        { label: 'Books', icon: BookOpen, href: '/library/dashboard', roles: ['librarian'] },
        { label: 'AI Assistant', icon: Bot, href: '/ai-assistant', roles: ['librarian'], isAI: true },
    ],
}

export function Sidebar() {
    const { user, sidebarCollapsed, setSidebarCollapsed } = useApp()
    const location = useLocation()

    const menuItems = roleMenus[user.role] || roleMenus.principal

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 z-40 h-screen bg-[var(--sidebar-background)] border-r border-[var(--sidebar-border)] transition-all duration-300",
                sidebarCollapsed ? "w-16" : "w-64"
            )}
        >
            {/* Logo & School Name */}
            <div className="flex h-16 items-center justify-between px-4 border-b border-[var(--sidebar-border)]">
                {!sidebarCollapsed && (
                    <Link to="/role-switch" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-[var(--foreground)]">SchoolOS</span>
                    </Link>
                )}
                {sidebarCollapsed && (
                    <Link to="/role-switch" className="mx-auto">
                        <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                    </Link>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-2">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.href ||
                            (item.href !== '/ai-assistant' && location.pathname.startsWith(item.href))

                        return (
                            <li key={item.href + item.label}>
                                <Link
                                    to={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)]"
                                            : "text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]",
                                        item.isAI && "relative overflow-hidden",
                                        sidebarCollapsed && "justify-center"
                                    )}
                                >
                                    {item.isAI && (
                                        <div className="absolute inset-0 ai-gradient opacity-10" />
                                    )}
                                    <Icon className={cn(
                                        "h-5 w-5 shrink-0",
                                        item.isAI && "text-[var(--color-ai-purple)]"
                                    )} />
                                    {!sidebarCollapsed && (
                                        <>
                                            <span className="flex-1">{item.label}</span>
                                            {item.isAI && (
                                                <Sparkles className="h-3 w-3 text-[var(--color-ai-purple)]" />
                                            )}
                                            {item.badge && (
                                                <Badge variant="secondary" className="text-xs">
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </>
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Role Badge & Collapse Button */}
            <div className="border-t border-[var(--sidebar-border)] p-4">
                {!sidebarCollapsed && (
                    <div className="mb-3 text-xs text-[var(--muted-foreground)]">
                        Current Role: <span className="font-medium text-[var(--foreground)]">{roleDisplayNames[user.role]}</span>
                    </div>
                )}
                <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="flex items-center justify-center w-full h-9 rounded-lg bg-[var(--muted)] hover:bg-[var(--accent)] transition-colors"
                >
                    {sidebarCollapsed ? (
                        <ChevronRight className="h-4 w-4" />
                    ) : (
                        <ChevronLeft className="h-4 w-4" />
                    )}
                </button>
            </div>
        </aside>
    )
}
