/**
 * Principal Dashboard
 * Main dashboard for the principal role with KPIs, AI insights, and quick actions
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StatsCard } from '@/components/cards/StatsCard'
import { AIInsightCard, AISuggestion } from '@/components/cards/AIInsightCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { AIInsight } from '@/types'
import {
    Users,
    GraduationCap,
    CreditCard,
    TrendingUp,
    Calendar,
    Bell,
    FileText,
    CheckCircle,
    Clock,
    AlertTriangle,
    Sparkles,
    BarChart3,
    ArrowRight,
    BookOpen,
    Bus
} from 'lucide-react'

// Sample AI insights
const aiInsights: AIInsight[] = [
    {
        id: '1',
        title: 'Attendance Pattern Detected',
        description: 'Grade 8-B shows 15% lower attendance on Mondays. Consider investigating possible causes.',
        category: 'attendance',
        priority: 'high',
        actionable: true
    },
    {
        id: '2',
        title: 'Fee Collection Optimized',
        description: 'Sending reminders on 5th of month resulted in 23% faster collection. Keep this pattern.',
        category: 'fee',
        priority: 'medium',
        actionable: false
    },
    {
        id: '3',
        title: 'Academic Performance Alert',
        description: 'Math scores in Grade 10 decreased by 8% compared to last term. Review needed.',
        category: 'academic',
        priority: 'high',
        actionable: true
    }
]

// Pending approvals
const pendingApprovals = [
    { id: 1, type: 'Leave Request', from: 'Mr. Sharma - Math Teacher', time: '2 hours ago' },
    { id: 2, type: 'Fee Waiver', from: 'Arjun Singh - Grade 9', time: '4 hours ago' },
    { id: 3, type: 'Budget Request', from: 'Sports Department', time: '1 day ago' },
    { id: 4, type: 'Transport Change', from: 'Parent - Priya Gupta', time: '1 day ago' }
]

// Recent activities
const recentActivities = [
    { id: 1, text: 'New admission application received', time: '10 min ago', icon: Users },
    { id: 2, text: 'Fee payment of ₹45,000 received', time: '25 min ago', icon: CreditCard },
    { id: 3, text: 'Attendance marked for Grade 5', time: '1 hour ago', icon: CheckCircle },
    { id: 4, text: 'Parent meeting scheduled', time: '2 hours ago', icon: Calendar }
]

export function PrincipalDashboard() {
    return (
        <MainLayout
            title="Dashboard"
            description="Welcome back, Dr. Rajesh Kumar"
            permissions={['View', 'Create', 'Edit', 'Delete', 'Approve']}
        >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard
                    title="Total Students"
                    value="2,456"
                    icon={<GraduationCap className="h-5 w-5" />}
                    trend={{ value: 5.2, label: 'from last year' }}
                />
                <StatsCard
                    title="Total Staff"
                    value="156"
                    icon={<Users className="h-5 w-5" />}
                    trend={{ value: 2.1, label: 'from last year' }}
                />
                <StatsCard
                    title="Today's Attendance"
                    value="94.2%"
                    icon={<CheckCircle className="h-5 w-5" />}
                    trend={{ value: -0.8, label: 'from yesterday' }}
                />
                <StatsCard
                    title="Fee Collection"
                    value="₹45.2L"
                    icon={<CreditCard className="h-5 w-5" />}
                    trend={{ value: 12.5, label: 'this month' }}
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - 2 cols */}
                <div className="lg:col-span-2 space-y-6">
                    {/* AI Insights Section */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-[var(--color-ai-purple)]" />
                                    AI Insights
                                </CardTitle>
                                <CardDescription>
                                    Smart recommendations based on school data
                                </CardDescription>
                            </div>
                            <Badge variant="ai">Powered by AI</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {aiInsights.map((insight) => (
                                    <AIInsightCard key={insight.id} insight={insight} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                            <CardDescription>Common tasks and shortcuts</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                    <Users className="h-5 w-5" />
                                    <span className="text-xs">New Admission</span>
                                </Button>
                                <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                    <FileText className="h-5 w-5" />
                                    <span className="text-xs">Generate Report</span>
                                </Button>
                                <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                    <Bell className="h-5 w-5" />
                                    <span className="text-xs">Send Notice</span>
                                </Button>
                                <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                                    <Calendar className="h-5 w-5" />
                                    <span className="text-xs">Schedule Meeting</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Analytics Tabs */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5" />
                                Analytics Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="attendance">
                                <TabsList>
                                    <TabsTrigger value="attendance">Attendance</TabsTrigger>
                                    <TabsTrigger value="academics">Academics</TabsTrigger>
                                    <TabsTrigger value="fees">Fees</TabsTrigger>
                                </TabsList>
                                <TabsContent value="attendance" className="mt-4">
                                    {/* Placeholder Chart */}
                                    <div className="h-64 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                        <div className="text-center">
                                            <BarChart3 className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                            <p className="text-sm text-[var(--muted-foreground)]">Attendance trend chart</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-4">
                                        <div className="text-center p-3 rounded-lg bg-[var(--muted)]">
                                            <p className="text-2xl font-bold text-[var(--color-success-500)]">94.2%</p>
                                            <p className="text-xs text-[var(--muted-foreground)]">Today</p>
                                        </div>
                                        <div className="text-center p-3 rounded-lg bg-[var(--muted)]">
                                            <p className="text-2xl font-bold">93.8%</p>
                                            <p className="text-xs text-[var(--muted-foreground)]">This Week</p>
                                        </div>
                                        <div className="text-center p-3 rounded-lg bg-[var(--muted)]">
                                            <p className="text-2xl font-bold">92.5%</p>
                                            <p className="text-xs text-[var(--muted-foreground)]">This Month</p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="academics" className="mt-4">
                                    <div className="h-64 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                        <div className="text-center">
                                            <BookOpen className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                            <p className="text-sm text-[var(--muted-foreground)]">Academic performance chart</p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="fees" className="mt-4">
                                    <div className="h-64 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                        <div className="text-center">
                                            <CreditCard className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                            <p className="text-sm text-[var(--muted-foreground)]">Fee collection chart</p>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - 1 col */}
                <div className="space-y-6">
                    {/* Pending Approvals */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-[var(--color-warning-500)]" />
                                Pending Approvals
                            </CardTitle>
                            <Badge variant="warning">{pendingApprovals.length}</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {pendingApprovals.map((item) => (
                                    <div
                                        key={item.id}
                                        className="p-3 rounded-lg bg-[var(--muted)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-medium">{item.type}</p>
                                            <Badge variant="outline" className="text-xs">{item.time}</Badge>
                                        </div>
                                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                            {item.from}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <Button variant="ghost" className="w-full mt-4">
                                View All Approvals
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity) => {
                                    const Icon = activity.icon
                                    return (
                                        <div key={activity.id} className="flex items-start gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[var(--muted)] flex items-center justify-center shrink-0">
                                                <Icon className="h-4 w-4 text-[var(--muted-foreground)]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-[var(--foreground)]">
                                                    {activity.text}
                                                </p>
                                                <p className="text-xs text-[var(--muted-foreground)]">
                                                    {activity.time}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* AI Suggestions */}
                    <Card className="border-[var(--color-ai-purple)]/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-[var(--color-ai-purple)]" />
                                AI Suggestions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <AISuggestion
                                title="Optimize Class Schedule"
                                description="AI can analyze and suggest better timetable arrangements"
                                icon={<Calendar className="h-5 w-5 text-white" />}
                            />
                            <AISuggestion
                                title="Fee Reminder Campaign"
                                description="Send targeted reminders to improve collection"
                                icon={<CreditCard className="h-5 w-5 text-white" />}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
