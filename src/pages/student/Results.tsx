/**
 * Student Exam Results
 * View exam results and performance analytics
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    TrendingUp,
    TrendingDown,
    Download,
    Award,
    BarChart3,
    Target,
    BookOpen,
    Sparkles
} from 'lucide-react'

// Exam results data
const examResults = {
    'Unit Test 1': [
        { subject: 'Mathematics', marks: 23, maxMarks: 25, grade: 'A+' },
        { subject: 'Science', marks: 21, maxMarks: 25, grade: 'A' },
        { subject: 'English', marks: 22, maxMarks: 25, grade: 'A' },
        { subject: 'Hindi', marks: 20, maxMarks: 25, grade: 'B+' },
        { subject: 'Social Studies', marks: 19, maxMarks: 25, grade: 'B+' }
    ],
    'Mid-Term': [
        { subject: 'Mathematics', marks: 72, maxMarks: 80, grade: 'A' },
        { subject: 'Science', marks: 68, maxMarks: 80, grade: 'B+' },
        { subject: 'English', marks: 74, maxMarks: 80, grade: 'A' },
        { subject: 'Hindi', marks: 65, maxMarks: 80, grade: 'B' },
        { subject: 'Social Studies', marks: 60, maxMarks: 80, grade: 'B' }
    ]
}

const performanceOverview = {
    classRank: 5,
    totalStudents: 40,
    overallPercentage: 85,
    attendance: 94,
    bestSubject: 'Mathematics',
    needsImprovement: 'Social Studies'
}

const subjectProgress = [
    { subject: 'Mathematics', current: 92, previous: 88, trend: 'up' },
    { subject: 'Science', current: 85, previous: 82, trend: 'up' },
    { subject: 'English', current: 90, previous: 88, trend: 'up' },
    { subject: 'Hindi', current: 81, previous: 85, trend: 'down' },
    { subject: 'Social Studies', current: 75, previous: 78, trend: 'down' }
]

export function StudentResults() {
    return (
        <MainLayout
            title="Exam Results"
            description="View your performance and analytics"
            permissions={['View']}
            actions={
                <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report Card
                </Button>
            }
        >
            {/* Performance Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-ai-purple)]/10 flex items-center justify-center">
                                <Award className="h-5 w-5 text-[var(--color-ai-purple)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{performanceOverview.classRank}<sup className="text-sm">th</sup></p>
                                <p className="text-xs text-[var(--muted-foreground)]">Class Rank</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-success-500)]/10 flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-[var(--color-success-500)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{performanceOverview.overallPercentage}%</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Overall Score</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                                <Target className="h-5 w-5 text-[var(--primary)]" />
                            </div>
                            <div>
                                <p className="text-xl font-bold truncate">{performanceOverview.bestSubject}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Best Subject</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-warning-500)]/10 flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-[var(--color-warning-500)]" />
                            </div>
                            <div>
                                <p className="text-xl font-bold truncate">{performanceOverview.needsImprovement}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Focus Area</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Results by Exam */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Exam Results</CardTitle>
                            <CardDescription>Subject-wise performance in each exam</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="Mid-Term">
                                <TabsList>
                                    {Object.keys(examResults).map(exam => (
                                        <TabsTrigger key={exam} value={exam}>{exam}</TabsTrigger>
                                    ))}
                                </TabsList>

                                {Object.entries(examResults).map(([exam, results]) => {
                                    const total = results.reduce((sum, r) => sum + r.marks, 0)
                                    const maxTotal = results.reduce((sum, r) => sum + r.maxMarks, 0)
                                    const percentage = Math.round((total / maxTotal) * 100)

                                    return (
                                        <TabsContent key={exam} value={exam} className="mt-4">
                                            {/* Summary */}
                                            <div className="p-4 rounded-xl bg-[var(--primary)]/10 mb-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium">Total Score</p>
                                                        <p className="text-2xl font-bold">{total}/{maxTotal}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-medium">Percentage</p>
                                                        <p className="text-2xl font-bold text-[var(--color-success-500)]">{percentage}%</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Subject-wise */}
                                            <div className="space-y-3">
                                                {results.map((result, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between p-4 rounded-xl bg-[var(--muted)]"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="min-w-[120px]">
                                                                <p className="font-medium">{result.subject}</p>
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="h-2 bg-[var(--border)] rounded-full w-40">
                                                                    <div
                                                                        className={`h-2 rounded-full ${(result.marks / result.maxMarks * 100) >= 80 ? 'bg-[var(--color-success-500)]' :
                                                                                (result.marks / result.maxMarks * 100) >= 60 ? 'bg-[var(--color-warning-500)]' :
                                                                                    'bg-[var(--color-danger-500)]'
                                                                            }`}
                                                                        style={{ width: `${(result.marks / result.maxMarks) * 100}%` }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <span className="font-medium">{result.marks}/{result.maxMarks}</span>
                                                            <Badge variant={
                                                                result.grade.startsWith('A') ? 'success' :
                                                                    result.grade.startsWith('B') ? 'default' :
                                                                        'warning'
                                                            }>
                                                                {result.grade}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabsContent>
                                    )
                                })}
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Subject Progress */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <BarChart3 className="h-4 w-4" />
                                Subject Progress
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {subjectProgress.map((subject, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-medium">{subject.subject}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold">{subject.current}%</span>
                                                {subject.trend === 'up' ? (
                                                    <TrendingUp className="h-4 w-4 text-[var(--color-success-500)]" />
                                                ) : (
                                                    <TrendingDown className="h-4 w-4 text-[var(--color-danger-500)]" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="h-2 bg-[var(--border)] rounded-full">
                                            <div
                                                className={`h-2 rounded-full transition-all ${subject.current >= 85 ? 'bg-[var(--color-success-500)]' :
                                                        subject.current >= 70 ? 'bg-[var(--primary)]' :
                                                            'bg-[var(--color-warning-500)]'
                                                    }`}
                                                style={{ width: `${subject.current}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* AI Insights */}
                    <Card className="border-[var(--color-ai-purple)]/20">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-[var(--color-ai-purple)]" />
                                AI Performance Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="p-3 rounded-lg bg-[var(--muted)]">
                                    <p className="text-sm font-medium text-[var(--color-success-500)]">🎯 Strength</p>
                                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                        Excellent performance in Mathematics - consistently scoring above 90%
                                    </p>
                                </div>
                                <div className="p-3 rounded-lg bg-[var(--muted)]">
                                    <p className="text-sm font-medium text-[var(--color-warning-500)]">📚 Recommendation</p>
                                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                        Focus more on Social Studies. Practice map work and date-based questions.
                                    </p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="w-full mt-3 text-[var(--color-ai-purple)]">
                                Get Study Tips
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
