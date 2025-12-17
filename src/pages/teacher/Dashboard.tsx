/**
 * Teacher Dashboard
 * Main dashboard for teachers with schedule, classes, and quick actions
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StatsCard } from '@/components/cards/StatsCard'
import { AISuggestion } from '@/components/cards/AIInsightCard'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
    CalendarCheck,
    Clock,
    Users,
    BookOpen,
    FileText,
    Sparkles,
    ChevronRight,
    Video,
    Bell,
    ClipboardList
} from 'lucide-react'

// Today's schedule
const todaySchedule = [
    { time: '08:30 AM', subject: 'Mathematics', class: 'Grade 8-A', status: 'completed', room: 'Room 201' },
    { time: '09:30 AM', subject: 'Mathematics', class: 'Grade 9-B', status: 'completed', room: 'Room 205' },
    { time: '10:45 AM', subject: 'Mathematics', class: 'Grade 7-A', status: 'current', room: 'Room 102' },
    { time: '11:45 AM', subject: 'Free Period', class: '-', status: 'upcoming', room: '-' },
    { time: '01:00 PM', subject: 'Mathematics', class: 'Grade 10-A', status: 'upcoming', room: 'Room 301' },
    { time: '02:00 PM', subject: 'Mathematics', class: 'Grade 6-B', status: 'upcoming', room: 'Room 105' }
]

// Quick class overview
const myClasses = [
    { class: 'Grade 6-B', students: 42, attendance: '95%', pending: 2 },
    { class: 'Grade 7-A', students: 40, attendance: '92%', pending: 5 },
    { class: 'Grade 8-A', students: 38, attendance: '94%', pending: 0 },
    { class: 'Grade 9-B', students: 45, attendance: '91%', pending: 3 },
    { class: 'Grade 10-A', students: 35, attendance: '96%', pending: 1 }
]

// Recent assignments
const recentAssignments = [
    { title: 'Algebra Practice Set', class: 'Grade 8-A', dueDate: '2024-12-18', submissions: 32, total: 38 },
    { title: 'Geometry Quiz', class: 'Grade 9-B', dueDate: '2024-12-17', submissions: 45, total: 45 },
    { title: 'Numbers Worksheet', class: 'Grade 6-B', dueDate: '2024-12-19', submissions: 28, total: 42 }
]

export function TeacherDashboard() {
    return (
        <MainLayout
            title="Dashboard"
            description="Good morning, Mr. Anil Sharma"
            permissions={['View', 'Create', 'Edit']}
        >
            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard
                    title="My Classes"
                    value="5"
                    icon={<BookOpen className="h-5 w-5" />}
                />
                <StatsCard
                    title="Total Students"
                    value="200"
                    icon={<Users className="h-5 w-5" />}
                />
                <StatsCard
                    title="Today's Classes"
                    value="5"
                    icon={<Clock className="h-5 w-5" />}
                />
                <StatsCard
                    title="Pending Tasks"
                    value="11"
                    icon={<FileText className="h-5 w-5" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Schedule */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Today's Schedule */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Today's Schedule</CardTitle>
                                <CardDescription>
                                    {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
                                </CardDescription>
                            </div>
                            <Button variant="outline" size="sm">
                                View Full Timetable
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {todaySchedule.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between p-4 rounded-xl transition-all ${item.status === 'current'
                                                ? 'bg-[var(--primary)]/10 border-2 border-[var(--primary)]'
                                                : item.status === 'completed'
                                                    ? 'bg-[var(--muted)] opacity-60'
                                                    : 'bg-[var(--muted)] hover:bg-[var(--accent)]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-center min-w-[70px]">
                                                <p className="text-sm font-medium">{item.time}</p>
                                                {item.status === 'current' && (
                                                    <Badge variant="default" className="mt-1 text-xs">Now</Badge>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium">{item.subject}</p>
                                                {item.class !== '-' && (
                                                    <p className="text-sm text-[var(--muted-foreground)]">
                                                        {item.class} • {item.room}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {item.status === 'current' && (
                                            <div className="flex items-center gap-2">
                                                <Button size="sm" variant="outline">
                                                    <CalendarCheck className="h-4 w-4 mr-2" />
                                                    Mark Attendance
                                                </Button>
                                                <Button size="sm">
                                                    <Video className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        )}
                                        {item.status === 'upcoming' && item.class !== '-' && (
                                            <Badge variant="secondary">Upcoming</Badge>
                                        )}
                                        {item.status === 'completed' && (
                                            <Badge variant="outline">Done</Badge>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* My Classes Overview */}
                    <Card>
                        <CardHeader>
                            <CardTitle>My Classes</CardTitle>
                            <CardDescription>Quick overview of your assigned classes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {myClasses.map((cls, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <Badge variant="outline">{cls.class}</Badge>
                                            {cls.pending > 0 && (
                                                <Badge variant="warning">{cls.pending} pending</Badge>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <p className="text-[var(--muted-foreground)]">Students</p>
                                                <p className="font-medium">{cls.students}</p>
                                            </div>
                                            <div>
                                                <p className="text-[var(--muted-foreground)]">Attendance</p>
                                                <p className="font-medium">{cls.attendance}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Assignments */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Recent Assignments</CardTitle>
                                <CardDescription>Track submission status</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm">
                                View All
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentAssignments.map((assignment, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg bg-[var(--muted)]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-[var(--card)] flex items-center justify-center">
                                                <ClipboardList className="h-5 w-5 text-[var(--muted-foreground)]" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{assignment.title}</p>
                                                <p className="text-xs text-[var(--muted-foreground)]">
                                                    {assignment.class} • Due: {new Date(assignment.dueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium">{assignment.submissions}/{assignment.total}</p>
                                            <p className="text-xs text-[var(--muted-foreground)]">submitted</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                <CalendarCheck className="h-5 w-5" />
                                <span className="text-xs">Attendance</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                <FileText className="h-5 w-5" />
                                <span className="text-xs">Assignment</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                <BookOpen className="h-5 w-5" />
                                <span className="text-xs">Lesson Plan</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                <Bell className="h-5 w-5" />
                                <span className="text-xs">Notify</span>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* AI Suggestions */}
                    <Card className="border-[var(--color-ai-purple)]/20">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-[var(--color-ai-purple)]" />
                                AI Teaching Assistant
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <AISuggestion
                                title="Generate Quiz"
                                description="Create a quiz based on recent topics"
                                icon={<ClipboardList className="h-5 w-5 text-white" />}
                            />
                            <AISuggestion
                                title="Lesson Plan Ideas"
                                description="Get AI suggestions for next class"
                                icon={<BookOpen className="h-5 w-5 text-white" />}
                            />
                        </CardContent>
                    </Card>

                    {/* Upcoming Events */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Upcoming Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--muted)]">
                                    <div className="h-10 w-10 rounded-lg bg-[var(--color-warning-500)]/10 flex items-center justify-center">
                                        <Clock className="h-5 w-5 text-[var(--color-warning-500)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Parent Meeting</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">Tomorrow, 4:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--muted)]">
                                    <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                                        <FileText className="h-5 w-5 text-[var(--primary)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Unit Test - Grade 8</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">Dec 20, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
