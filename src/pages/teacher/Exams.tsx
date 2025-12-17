/**
 * Teacher Exams & Evaluation
 * Create exams, enter marks, and evaluate students
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DataTable } from '@/components/tables'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import {
    ClipboardList,
    Plus,
    FileText,
    Calendar,
    Users,
    BarChart3,
    Download,
    Edit,
    Eye,
    Sparkles
} from 'lucide-react'

// Sample exams
const exams = [
    { id: 1, name: 'Unit Test 1', class: 'Grade 8-A', subject: 'Mathematics', date: '2024-12-20', maxMarks: 25, status: 'upcoming' },
    { id: 2, name: 'Mid-Term', class: 'Grade 10-A', subject: 'Mathematics', date: '2024-12-15', maxMarks: 80, status: 'grading' },
    { id: 3, name: 'Weekly Quiz', class: 'Grade 7-A', subject: 'Mathematics', date: '2024-12-10', maxMarks: 10, status: 'completed' },
    { id: 4, name: 'Practice Test', class: 'Grade 9-B', subject: 'Mathematics', date: '2024-12-08', maxMarks: 20, status: 'completed' }
]

// Sample student results for grading
const studentResults = [
    { id: 1, name: 'Aarav Sharma', rollNo: '01', marks: 72, maxMarks: 80, grade: 'A' },
    { id: 2, name: 'Ananya Patel', rollNo: '02', marks: 68, maxMarks: 80, grade: 'B+' },
    { id: 3, name: 'Arjun Gupta', rollNo: '03', marks: null, maxMarks: 80, grade: null },
    { id: 4, name: 'Diya Singh', rollNo: '04', marks: 75, maxMarks: 80, grade: 'A' },
    { id: 5, name: 'Ishaan Kumar', rollNo: '05', marks: 58, maxMarks: 80, grade: 'B' },
    { id: 6, name: 'Kavya Reddy', rollNo: '06', marks: null, maxMarks: 80, grade: null }
]

export function TeacherExams() {
    const columns = [
        {
            key: 'name',
            header: 'Student',
            render: (item: typeof studentResults[0]) => (
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                            {item.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Roll No: {item.rollNo}</p>
                    </div>
                </div>
            )
        },
        {
            key: 'marks',
            header: 'Marks',
            render: (item: typeof studentResults[0]) => (
                item.marks !== null ? (
                    <span className="font-medium">{item.marks}/{item.maxMarks}</span>
                ) : (
                    <Input
                        type="number"
                        placeholder="Enter marks"
                        className="w-24 h-8"
                        max={item.maxMarks}
                    />
                )
            )
        },
        {
            key: 'percentage',
            header: 'Percentage',
            render: (item: typeof studentResults[0]) => (
                item.marks !== null ? (
                    <span className={`font-medium ${(item.marks / item.maxMarks * 100) >= 75 ? 'text-[var(--color-success-500)]' :
                            (item.marks / item.maxMarks * 100) >= 50 ? 'text-[var(--color-warning-500)]' :
                                'text-[var(--color-danger-500)]'
                        }`}>
                        {((item.marks / item.maxMarks) * 100).toFixed(0)}%
                    </span>
                ) : (
                    <span className="text-[var(--muted-foreground)]">-</span>
                )
            )
        },
        {
            key: 'grade',
            header: 'Grade',
            render: (item: typeof studentResults[0]) => (
                item.grade ? (
                    <Badge variant={item.grade.startsWith('A') ? 'success' : item.grade.startsWith('B') ? 'default' : 'secondary'}>
                        {item.grade}
                    </Badge>
                ) : (
                    <Badge variant="outline">Pending</Badge>
                )
            )
        }
    ]

    return (
        <MainLayout
            title="Exams & Evaluation"
            description="Create exams and manage student evaluations"
            permissions={['View', 'Create', 'Edit']}
            actions={
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Exam
                </Button>
            }
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Exams List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>My Exams</CardTitle>
                            <CardDescription>Manage exams and assessments</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="all">
                                <TabsList>
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                                    <TabsTrigger value="grading">Grading</TabsTrigger>
                                    <TabsTrigger value="completed">Completed</TabsTrigger>
                                </TabsList>

                                <TabsContent value="all" className="mt-4 space-y-3">
                                    {exams.map(exam => (
                                        <div
                                            key={exam.id}
                                            className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${exam.status === 'upcoming' ? 'bg-[var(--primary)]/10' :
                                                        exam.status === 'grading' ? 'bg-[var(--color-warning-500)]/10' :
                                                            'bg-[var(--color-success-500)]/10'
                                                    }`}>
                                                    <ClipboardList className={`h-6 w-6 ${exam.status === 'upcoming' ? 'text-[var(--primary)]' :
                                                            exam.status === 'grading' ? 'text-[var(--color-warning-500)]' :
                                                                'text-[var(--color-success-500)]'
                                                        }`} />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">{exam.name}</h4>
                                                    <p className="text-sm text-[var(--muted-foreground)]">
                                                        {exam.class} • {exam.subject} • Max: {exam.maxMarks} marks
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <Badge variant={
                                                        exam.status === 'upcoming' ? 'default' :
                                                            exam.status === 'grading' ? 'warning' :
                                                                'success'
                                                    }>
                                                        {exam.status}
                                                    </Badge>
                                                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                                        {new Date(exam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Button size="sm" variant="ghost">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                    <Button size="sm" variant="ghost">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>

                                {['upcoming', 'grading', 'completed'].map(status => (
                                    <TabsContent key={status} value={status} className="mt-4 space-y-3">
                                        {exams.filter(e => e.status === status).map(exam => (
                                            <div
                                                key={exam.id}
                                                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)]"
                                            >
                                                <div>
                                                    <h4 className="font-semibold">{exam.name}</h4>
                                                    <p className="text-sm text-[var(--muted-foreground)]">
                                                        {exam.class} • {exam.subject}
                                                    </p>
                                                </div>
                                                <Badge variant={status === 'grading' ? 'warning' : status === 'completed' ? 'success' : 'default'}>
                                                    {status}
                                                </Badge>
                                            </div>
                                        ))}
                                        {exams.filter(e => e.status === status).length === 0 && (
                                            <p className="text-center py-8 text-[var(--muted-foreground)]">No {status} exams</p>
                                        )}
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </CardContent>
                    </Card>

                    {/* Marks Entry */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Enter Marks - Mid-Term (Grade 10-A)</CardTitle>
                                <CardDescription>2 of 6 students pending</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                    <Download className="h-4 w-4 mr-2" />
                                    Export
                                </Button>
                                <Button size="sm">
                                    Save Marks
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <DataTable
                                columns={columns}
                                data={studentResults}
                                keyExtractor={(item) => item.id.toString()}
                                searchPlaceholder="Search students..."
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Quick Stats */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Quick Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 rounded-lg bg-[var(--muted)]">
                                <p className="text-2xl font-bold">{exams.length}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Total Exams</p>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-[var(--muted)]">
                                <p className="text-2xl font-bold text-[var(--color-warning-500)]">
                                    {exams.filter(e => e.status === 'grading').length}
                                </p>
                                <p className="text-xs text-[var(--muted-foreground)]">Pending Grading</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* AI Analysis */}
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
                                    <p className="text-sm font-medium">Class Average: 72%</p>
                                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                        5% improvement from last test
                                    </p>
                                </div>
                                <div className="p-3 rounded-lg bg-[var(--muted)]">
                                    <p className="text-sm font-medium">Weak Areas Detected</p>
                                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                        Algebra word problems need attention
                                    </p>
                                </div>
                                <Button variant="ghost" size="sm" className="w-full text-[var(--color-ai-purple)]">
                                    View Full Analysis
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" className="w-full justify-start">
                                <FileText className="h-4 w-4 mr-2" />
                                Generate Report Card
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <BarChart3 className="h-4 w-4 mr-2" />
                                View Analytics
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Users className="h-4 w-4 mr-2" />
                                Notify Parents
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
