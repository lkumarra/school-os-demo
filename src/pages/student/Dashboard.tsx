/**
 * Student Dashboard
 * Main dashboard for students with classes, assignments, and announcements
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
    Calendar,
    BookOpen,
    ClipboardList,
    Bell,
    Clock,
    TrendingUp,
    Award,
    FileText,
    Sparkles,
    ChevronRight
} from 'lucide-react'

// Today's classes
const todayClasses = [
    { time: '08:30 AM', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', status: 'completed' },
    { time: '09:30 AM', subject: 'English', teacher: 'Ms. Patel', room: 'Room 105', status: 'completed' },
    { time: '10:45 AM', subject: 'Science', teacher: 'Dr. Gupta', room: 'Lab 2', status: 'current' },
    { time: '11:45 AM', subject: 'Hindi', teacher: 'Mrs. Verma', room: 'Room 201', status: 'upcoming' },
    { time: '01:00 PM', subject: 'Social Studies', teacher: 'Mr. Singh', room: 'Room 301', status: 'upcoming' }
]

// Pending assignments
const pendingAssignments = [
    { subject: 'Mathematics', title: 'Algebra Practice Set', dueDate: '2024-12-18', priority: 'high' },
    { subject: 'Science', title: 'Lab Report - Photosynthesis', dueDate: '2024-12-19', priority: 'medium' },
    { subject: 'English', title: 'Essay Writing', dueDate: '2024-12-20', priority: 'low' }
]

// Announcements
const announcements = [
    { title: 'Winter Break Schedule', date: '2024-12-15', type: 'info' },
    { title: 'Sports Day Practice', date: '2024-12-14', type: 'event' },
    { title: 'Fee Payment Reminder', date: '2024-12-13', type: 'important' }
]

export function StudentDashboard() {
    return (
        <MainLayout
            title="Dashboard"
            description="Welcome back, Aarav Sharma"
            permissions={['View']}
        >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-[var(--primary)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">85%</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Overall Score</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-success-500)]/10 flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-[var(--color-success-500)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">94%</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Attendance</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-warning-500)]/10 flex items-center justify-center">
                                <ClipboardList className="h-5 w-5 text-[var(--color-warning-500)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">3</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Pending Tasks</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-ai-purple)]/10 flex items-center justify-center">
                                <Award className="h-5 w-5 text-[var(--color-ai-purple)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">12</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Badges Earned</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Today's Schedule */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Today's Classes</CardTitle>
                                <CardDescription>
                                    {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
                                </CardDescription>
                            </div>
                            <Button variant="outline" size="sm">
                                View Timetable
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {todayClasses.map((cls, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between p-3 rounded-xl transition-all ${cls.status === 'current'
                                                ? 'bg-[var(--primary)]/10 border-2 border-[var(--primary)]'
                                                : cls.status === 'completed'
                                                    ? 'bg-[var(--muted)] opacity-60'
                                                    : 'bg-[var(--muted)]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-center min-w-[60px]">
                                                <p className="text-sm font-medium">{cls.time}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">{cls.subject}</p>
                                                <p className="text-sm text-[var(--muted-foreground)]">
                                                    {cls.teacher} • {cls.room}
                                                </p>
                                            </div>
                                        </div>
                                        {cls.status === 'current' && (
                                            <Badge variant="default">Now</Badge>
                                        )}
                                        {cls.status === 'completed' && (
                                            <Badge variant="outline">Done</Badge>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pending Assignments */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Pending Assignments</CardTitle>
                                <CardDescription>Complete before due date</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm">
                                View All
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {pendingAssignments.map((assignment, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${assignment.priority === 'high' ? 'bg-[var(--color-danger-500)]/10' :
                                                    assignment.priority === 'medium' ? 'bg-[var(--color-warning-500)]/10' :
                                                        'bg-[var(--muted)]'
                                                }`}>
                                                <FileText className={`h-5 w-5 ${assignment.priority === 'high' ? 'text-[var(--color-danger-500)]' :
                                                        assignment.priority === 'medium' ? 'text-[var(--color-warning-500)]' :
                                                            'text-[var(--muted-foreground)]'
                                                    }`} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{assignment.title}</p>
                                                <p className="text-xs text-[var(--muted-foreground)]">{assignment.subject}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <Badge variant={
                                                assignment.priority === 'high' ? 'destructive' :
                                                    assignment.priority === 'medium' ? 'warning' :
                                                        'secondary'
                                            }>
                                                Due: {new Date(assignment.dueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Student Profile Card */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="text-center">
                                <Avatar className="h-16 w-16 mx-auto mb-3">
                                    <AvatarFallback className="text-xl bg-[var(--primary)] text-white">AS</AvatarFallback>
                                </Avatar>
                                <h3 className="font-semibold">Aarav Sharma</h3>
                                <p className="text-sm text-[var(--muted-foreground)]">Grade 8 - Section A</p>
                                <p className="text-xs text-[var(--muted-foreground)] mt-1">Roll No: 2024001</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="text-center p-3 rounded-lg bg-[var(--muted)]">
                                    <p className="text-lg font-bold">5th</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">Class Rank</p>
                                </div>
                                <div className="text-center p-3 rounded-lg bg-[var(--muted)]">
                                    <p className="text-lg font-bold">A+</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">Last Grade</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Announcements */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Bell className="h-4 w-4" />
                                Announcements
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {announcements.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-3 rounded-lg bg-[var(--muted)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between">
                                            <p className="text-sm font-medium">{item.title}</p>
                                            {item.type === 'important' && (
                                                <Badge variant="destructive" className="text-xs">!</Badge>
                                            )}
                                        </div>
                                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                            {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* AI Study Assistant */}
                    <Card className="border-[var(--color-ai-purple)]/20">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-[var(--color-ai-purple)]" />
                                AI Study Assistant
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-[var(--muted-foreground)] mb-4">
                                Get help with your studies and homework
                            </p>
                            <Button variant="ai" className="w-full">
                                <Sparkles className="h-4 w-4 mr-2" />
                                Start Learning
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
