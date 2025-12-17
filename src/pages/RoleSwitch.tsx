/**
 * Role Switch Page
 * Demo role selector for investors and internal reviews
 */

import { useNavigate } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { AuthLayout } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { roleDisplayNames, roleColors } from '@/lib/constants'
import type { UserRole } from '@/types'
import {
    GraduationCap,
    Crown,
    Shield,
    BookOpen,
    Users,
    Wallet,
    Building2,
    Bus,
    Library,
    Sparkles,
    ArrowLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const roleIcons: Record<UserRole, React.ComponentType<{ className?: string }>> = {
    principal: Crown,
    admin: Shield,
    teacher: BookOpen,
    student: GraduationCap,
    parent: Users,
    accountant: Wallet,
    hostel_warden: Building2,
    transport: Bus,
    librarian: Library
}

const roleDescriptions: Record<UserRole, string> = {
    principal: 'Full access to all modules, approvals, and analytics',
    admin: 'Manage admissions, students, staff, and daily operations',
    teacher: 'Attendance, lesson planning, exams, and gradebook',
    student: 'View timetable, assignments, results, and materials',
    parent: 'Track children\'s progress, fees, and communication',
    accountant: 'Fee configuration, collections, and financial reports',
    hostel_warden: 'Room allocation, leave management, and incidents',
    transport: 'Route management, vehicle tracking, and student mapping',
    librarian: 'Book management, issue/return, and inventory'
}

// Map roles to their dashboard URLs
const roleDashboards: Record<UserRole, string> = {
    principal: '/principal/dashboard',
    admin: '/admin/admissions',
    teacher: '/teacher/dashboard',
    student: '/student/dashboard',
    parent: '/parent/dashboard',
    accountant: '/accountant/fees',
    hostel_warden: '/hostel/dashboard',
    transport: '/transport/dashboard',
    librarian: '/library/dashboard'
}

export function RoleSwitchPage() {
    const navigate = useNavigate()
    const { setRole } = useApp()

    const handleRoleSelect = (role: UserRole) => {
        setRole(role)
        navigate(roleDashboards[role])
    }

    const roles: UserRole[] = [
        'principal',
        'admin',
        'teacher',
        'student',
        'parent',
        'accountant',
        'hostel_warden',
        'transport',
        'librarian'
    ]

    return (
        <AuthLayout>
            <div className="w-full max-w-4xl">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={() => navigate('/login')}
                    className="mb-6"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Login
                </Button>

                {/* Header */}
                <div className="text-center mb-8">
                    <Badge variant="ai" className="gap-1 mb-4">
                        <Sparkles className="h-3 w-3" />
                        Demo Mode
                    </Badge>
                    <h1 className="text-3xl font-bold text-[var(--foreground)]">
                        Select a Role to Explore
                    </h1>
                    <p className="text-[var(--muted-foreground)] mt-2 max-w-lg mx-auto">
                        Experience SchoolOS from different perspectives. Each role has unique dashboards and permissions.
                    </p>
                </div>

                {/* Role Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {roles.map((role) => {
                        const Icon = roleIcons[role]
                        return (
                            <Card
                                key={role}
                                className="cursor-pointer hover:border-[var(--primary)] hover:shadow-lg transition-all duration-200 group"
                                onClick={() => handleRoleSelect(role)}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${roleColors[role]}`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                                                {roleDisplayNames[role]}
                                            </h3>
                                            <p className="text-sm text-[var(--muted-foreground)] mt-1 line-clamp-2">
                                                {roleDescriptions[role]}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Footer Note */}
                <p className="text-center text-sm text-[var(--muted-foreground)] mt-8">
                    This is a demo environment. All data shown is sample data for demonstration purposes.
                </p>
            </div>
        </AuthLayout>
    )
}
