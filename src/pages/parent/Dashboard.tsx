/**
 * Parent Dashboard
 * Multi-child view with child selector and overview
 */

import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
    Calendar,
    CreditCard,
    TrendingUp,
    Bell,
    Clock,
    BookOpen,
    Users,
    ChevronRight,
    MessageSquare,
    Bus
} from 'lucide-react'

// Children data
const children = [
    { id: 1, name: 'Aarav Sharma', class: 'Grade 8-A', rollNo: '2024001', photo: null },
    { id: 2, name: 'Anvi Sharma', class: 'Grade 5-B', rollNo: '2024045', photo: null }
]

// Child-specific data
const childData = {
    1: {
        attendance: 94,
        overallScore: 85,
        rank: 5,
        pendingFees: 25000,
        nextExam: 'Unit Test - Dec 20',
        todayClasses: 6,
        assignments: 3,
        announcements: 2
    },
    2: {
        attendance: 97,
        overallScore: 88,
        rank: 3,
        pendingFees: 0,
        nextExam: 'Mid Term - Jan 5',
        todayClasses: 5,
        assignments: 1,
        announcements: 2
    }
}

// Recent activities for child
const recentActivities = [
    { text: 'Mathematics homework submitted', time: '2 hours ago', type: 'assignment' },
    { text: 'Attendance marked present', time: 'Today', type: 'attendance' },
    { text: 'Science test result: 85%', time: 'Yesterday', type: 'result' },
    { text: 'Fee payment reminder', time: '2 days ago', type: 'fee' }
]

// Announcements
const announcements = [
    { title: 'Parent-Teacher Meeting', date: '2024-12-20', priority: 'high' },
    { title: 'Winter Break Schedule', date: '2024-12-22', priority: 'normal' }
]

export function ParentDashboard() {
    const [selectedChild, setSelectedChild] = useState(children[0])
    const data = childData[selectedChild.id as keyof typeof childData]

    return (
        <MainLayout
            title="Dashboard"
            description="Welcome, Mrs. Neha Sharma"
            permissions={['View']}
        >
            {/* Child Selector */}
            <Card className="mb-6">
                <CardContent className="pt-4 pb-4">
                    <div className="flex items-center gap-6">
                        <span className="text-sm font-medium text-[var(--muted-foreground)]">Viewing:</span>
                        <div className="flex items-center gap-3">
                            {children.map(child => (
                                <button
                                    key={child.id}
                                    onClick={() => setSelectedChild(child)}
                                    className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${selectedChild.id === child.id
                                            ? 'bg-[var(--primary)] text-white'
                                            : 'bg-[var(--muted)] hover:bg-[var(--accent)]'
                                        }`}
                                >
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className={`text-xs ${selectedChild.id === child.id ? 'bg-white/20 text-white' : ''}`}>
                                            {child.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-left">
                                        <p className="text-sm font-medium">{child.name}</p>
                                        <p className={`text-xs ${selectedChild.id === child.id ? 'text-white/70' : 'text-[var(--muted-foreground)]'}`}>
                                            {child.class}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-success-500)]/10 flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-[var(--color-success-500)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{data.attendance}%</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Attendance</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-[var(--primary)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{data.overallScore}%</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Overall Score</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-ai-purple)]/10 flex items-center justify-center">
                                <Users className="h-5 w-5 text-[var(--color-ai-purple)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{data.rank}<sup className="text-sm">th</sup></p>
                                <p className="text-xs text-[var(--muted-foreground)]">Class Rank</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className={data.pendingFees > 0 ? 'border-[var(--color-warning-500)]' : ''}>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${data.pendingFees > 0 ? 'bg-[var(--color-warning-500)]/10' : 'bg-[var(--color-success-500)]/10'
                                }`}>
                                <CreditCard className={`h-5 w-5 ${data.pendingFees > 0 ? 'text-[var(--color-warning-500)]' : 'text-[var(--color-success-500)]'
                                    }`} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">
                                    {data.pendingFees > 0 ? `₹${(data.pendingFees / 1000).toFixed(0)}K` : 'Paid'}
                                </p>
                                <p className="text-xs text-[var(--muted-foreground)]">Pending Fees</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Today's Summary */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Today's Summary</CardTitle>
                            <CardDescription>
                                {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-[var(--muted)] text-center">
                                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-[var(--primary)]" />
                                    <p className="text-2xl font-bold">{data.todayClasses}</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">Classes Today</p>
                                </div>
                                <div className="p-4 rounded-xl bg-[var(--muted)] text-center">
                                    <Clock className="h-6 w-6 mx-auto mb-2 text-[var(--color-warning-500)]" />
                                    <p className="text-2xl font-bold">{data.assignments}</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">Pending Tasks</p>
                                </div>
                                <div className="p-4 rounded-xl bg-[var(--muted)] text-center">
                                    <Bell className="h-6 w-6 mx-auto mb-2 text-[var(--color-danger-500)]" />
                                    <p className="text-2xl font-bold">{data.announcements}</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">New Notices</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Recent Activity</CardTitle>
                            <Button variant="ghost" size="sm">
                                View All
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activity.type === 'assignment' ? 'bg-[var(--primary)]/10' :
                                                activity.type === 'attendance' ? 'bg-[var(--color-success-500)]/10' :
                                                    activity.type === 'result' ? 'bg-[var(--color-ai-purple)]/10' :
                                                        'bg-[var(--color-warning-500)]/10'
                                            }`}>
                                            {activity.type === 'assignment' && <BookOpen className="h-5 w-5 text-[var(--primary)]" />}
                                            {activity.type === 'attendance' && <Calendar className="h-5 w-5 text-[var(--color-success-500)]" />}
                                            {activity.type === 'result' && <TrendingUp className="h-5 w-5 text-[var(--color-ai-purple)]" />}
                                            {activity.type === 'fee' && <CreditCard className="h-5 w-5 text-[var(--color-warning-500)]" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm">{activity.text}</p>
                                            <p className="text-xs text-[var(--muted-foreground)]">{activity.time}</p>
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
                                <CreditCard className="h-5 w-5" />
                                <span className="text-xs">Pay Fees</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                <MessageSquare className="h-5 w-5" />
                                <span className="text-xs">Message</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                <Calendar className="h-5 w-5" />
                                <span className="text-xs">Calendar</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                <Bus className="h-5 w-5" />
                                <span className="text-xs">Track Bus</span>
                            </Button>
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
                                            {item.priority === 'high' && (
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

                    {/* Upcoming */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Upcoming</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-3 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                                <p className="text-sm font-medium">{data.nextExam}</p>
                                <p className="text-xs text-[var(--muted-foreground)] mt-1">Next Examination</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
