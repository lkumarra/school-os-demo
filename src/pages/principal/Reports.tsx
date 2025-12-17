/**
 * Principal Reports & Analytics
 * Comprehensive reports and analytics dashboard
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    BarChart3,
    Download,
    FileText,
    TrendingUp,
    TrendingDown,
    Users,
    GraduationCap,
    CreditCard,
    Calendar,
    PieChart,
    LineChart,
    Sparkles
} from 'lucide-react'

// Sample report cards
const reports = [
    { name: 'Attendance Report', type: 'Daily', icon: Calendar, downloads: 45 },
    { name: 'Fee Collection Report', type: 'Monthly', icon: CreditCard, downloads: 32 },
    { name: 'Academic Performance', type: 'Term', icon: GraduationCap, downloads: 28 },
    { name: 'Staff Performance', type: 'Monthly', icon: Users, downloads: 15 }
]

const metrics = [
    { label: 'Overall Performance', value: '87.5%', change: '+2.3%', trend: 'up' },
    { label: 'Student Pass Rate', value: '94.2%', change: '+1.8%', trend: 'up' },
    { label: 'Fee Recovery', value: '89.7%', change: '-0.5%', trend: 'down' },
    { label: 'Staff Attendance', value: '96.1%', change: '+0.3%', trend: 'up' }
]

export function PrincipalReports() {
    return (
        <MainLayout
            title="Reports & Analytics"
            description="Comprehensive insights into school performance"
            permissions={['View', 'Export']}
            actions={
                <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Export All
                </Button>
            }
        >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric) => (
                    <Card key={metric.label}>
                        <CardContent className="pt-6">
                            <p className="text-sm text-[var(--muted-foreground)]">{metric.label}</p>
                            <div className="flex items-baseline gap-2 mt-1">
                                <span className="text-2xl font-bold">{metric.value}</span>
                                <span className={`text-sm flex items-center gap-0.5 ${metric.trend === 'up' ? 'text-[var(--color-success-500)]' : 'text-[var(--color-danger-500)]'
                                    }`}>
                                    {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                    {metric.change}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Charts Area */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LineChart className="h-5 w-5" />
                                Performance Trends
                            </CardTitle>
                            <CardDescription>Last 12 months overview</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="academics">
                                <TabsList>
                                    <TabsTrigger value="academics">Academics</TabsTrigger>
                                    <TabsTrigger value="attendance">Attendance</TabsTrigger>
                                    <TabsTrigger value="fees">Fee Collection</TabsTrigger>
                                </TabsList>
                                <TabsContent value="academics" className="mt-4">
                                    <div className="h-72 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                        <div className="text-center">
                                            <LineChart className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                            <p className="text-sm text-[var(--muted-foreground)]">Academic performance trend line</p>
                                            <p className="text-xs text-[var(--muted-foreground)] mt-1">Grade-wise analysis</p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="attendance" className="mt-4">
                                    <div className="h-72 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                        <div className="text-center">
                                            <BarChart3 className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                            <p className="text-sm text-[var(--muted-foreground)]">Attendance comparison chart</p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="fees" className="mt-4">
                                    <div className="h-72 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                        <div className="text-center">
                                            <PieChart className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                            <p className="text-sm text-[var(--muted-foreground)]">Fee collection breakdown</p>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                {/* Distribution Charts */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Student Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-40 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                <PieChart className="h-10 w-10 text-[var(--muted-foreground)]" />
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                                        Primary (1-5)
                                    </span>
                                    <span className="font-medium">45%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-[var(--color-ai-purple)]" />
                                        Middle (6-8)
                                    </span>
                                    <span className="font-medium">30%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-[var(--color-success-500)]" />
                                        Senior (9-12)
                                    </span>
                                    <span className="font-medium">25%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-[var(--color-ai-purple)]/20">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-[var(--color-ai-purple)]" />
                                AI Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-[var(--muted-foreground)]">
                                Based on current trends, fee collection is projected to reach 95% by end of term.
                                Consider sending reminders to 127 pending parents.
                            </p>
                            <Button variant="ghost" size="sm" className="mt-3 px-0 text-[var(--color-ai-purple)]">
                                View Full Analysis
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Download Reports */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Downloadable Reports
                    </CardTitle>
                    <CardDescription>Generate and download various reports</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {reports.map((report) => {
                            const Icon = report.icon
                            return (
                                <div
                                    key={report.name}
                                    className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all cursor-pointer group"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="h-10 w-10 rounded-lg bg-[var(--muted)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <Badge variant="secondary">{report.type}</Badge>
                                    </div>
                                    <h4 className="font-medium text-sm mb-1">{report.name}</h4>
                                    <p className="text-xs text-[var(--muted-foreground)]">
                                        {report.downloads} downloads this month
                                    </p>
                                    <Button variant="ghost" size="sm" className="mt-3 w-full">
                                        <Download className="h-4 w-4 mr-2" />
                                        Download
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
