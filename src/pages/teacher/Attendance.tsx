/**
 * Teacher Attendance Marking
 * Mark attendance for classes
 */

import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import {
    CalendarCheck,
    Search,
    Check,
    X,
    Clock,
    UserCheck,
    UserX,
    Save,
    ChevronDown
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Sample students for attendance
const classStudents = [
    { id: 1, name: 'Aarav Sharma', rollNo: '01', status: 'present' },
    { id: 2, name: 'Ananya Patel', rollNo: '02', status: 'present' },
    { id: 3, name: 'Arjun Gupta', rollNo: '03', status: 'absent' },
    { id: 4, name: 'Diya Singh', rollNo: '04', status: 'present' },
    { id: 5, name: 'Ishaan Kumar', rollNo: '05', status: 'present' },
    { id: 6, name: 'Kavya Reddy', rollNo: '06', status: 'late' },
    { id: 7, name: 'Manav Joshi', rollNo: '07', status: 'present' },
    { id: 8, name: 'Nisha Verma', rollNo: '08', status: 'present' },
    { id: 9, name: 'Pranav Mehta', rollNo: '09', status: 'present' },
    { id: 10, name: 'Riya Kapoor', rollNo: '10', status: 'absent' },
    { id: 11, name: 'Sahil Agarwal', rollNo: '11', status: 'present' },
    { id: 12, name: 'Tanvi Sharma', rollNo: '12', status: 'present' }
]

const myClasses = [
    { id: 1, name: 'Grade 6-B', subject: 'Mathematics', students: 42 },
    { id: 2, name: 'Grade 7-A', subject: 'Mathematics', students: 40 },
    { id: 3, name: 'Grade 8-A', subject: 'Mathematics', students: 38 },
    { id: 4, name: 'Grade 9-B', subject: 'Mathematics', students: 45 },
    { id: 5, name: 'Grade 10-A', subject: 'Mathematics', students: 35 }
]

export function TeacherAttendance() {
    const [selectedClass, setSelectedClass] = useState(myClasses[0])
    const [students, setStudents] = useState(classStudents)
    const [searchQuery, setSearchQuery] = useState('')

    const stats = {
        present: students.filter(s => s.status === 'present').length,
        absent: students.filter(s => s.status === 'absent').length,
        late: students.filter(s => s.status === 'late').length,
        total: students.length
    }

    const toggleStatus = (studentId: number, newStatus: string) => {
        setStudents(prev =>
            prev.map(s =>
                s.id === studentId ? { ...s, status: newStatus } : s
            )
        )
    }

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.rollNo.includes(searchQuery)
    )

    return (
        <MainLayout
            title="Attendance"
            description="Mark student attendance for your classes"
            permissions={['View', 'Create']}
            actions={
                <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Attendance
                </Button>
            }
        >
            {/* Class Selector & Date */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="min-w-[200px] justify-between">
                                {selectedClass.name} - {selectedClass.subject}
                                <ChevronDown className="h-4 w-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {myClasses.map(cls => (
                                <DropdownMenuItem
                                    key={cls.id}
                                    onClick={() => setSelectedClass(cls)}
                                >
                                    {cls.name} - {cls.subject}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Badge variant="secondary">
                        <CalendarCheck className="h-3 w-3 mr-1" />
                        {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </Badge>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-success-500)]/10 flex items-center justify-center">
                                <UserCheck className="h-5 w-5 text-[var(--color-success-500)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[var(--color-success-500)]">{stats.present}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Present</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-danger-500)]/10 flex items-center justify-center">
                                <UserX className="h-5 w-5 text-[var(--color-danger-500)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[var(--color-danger-500)]">{stats.absent}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Absent</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--color-warning-500)]/10 flex items-center justify-center">
                                <Clock className="h-5 w-5 text-[var(--color-warning-500)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[var(--color-warning-500)]">{stats.late}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Late</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                                <CalendarCheck className="h-5 w-5 text-[var(--primary)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{((stats.present + stats.late) / stats.total * 100).toFixed(0)}%</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Attendance</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Student List */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <CardTitle>Student List</CardTitle>
                            <CardDescription>{selectedClass.students} students</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                                <Input
                                    placeholder="Search students..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <Button variant="outline" size="sm" onClick={() => setStudents(prev => prev.map(s => ({ ...s, status: 'present' })))}>
                                Mark All Present
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {filteredStudents.map((student) => (
                            <div
                                key={student.id}
                                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${student.status === 'present'
                                        ? 'border-[var(--color-success-500)]/30 bg-[var(--color-success-50)]'
                                        : student.status === 'absent'
                                            ? 'border-[var(--color-danger-500)]/30 bg-[var(--color-danger-50)]'
                                            : 'border-[var(--color-warning-500)]/30 bg-[var(--color-warning-50)]'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="text-xs">
                                            {student.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-sm">{student.name}</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">Roll No: {student.rollNo}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Button
                                        size="sm"
                                        variant={student.status === 'present' ? 'default' : 'ghost'}
                                        className={student.status === 'present' ? 'bg-[var(--color-success-500)]' : ''}
                                        onClick={() => toggleStatus(student.id, 'present')}
                                    >
                                        <Check className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant={student.status === 'late' ? 'default' : 'ghost'}
                                        className={student.status === 'late' ? 'bg-[var(--color-warning-500)]' : ''}
                                        onClick={() => toggleStatus(student.id, 'late')}
                                    >
                                        <Clock className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant={student.status === 'absent' ? 'default' : 'ghost'}
                                        className={student.status === 'absent' ? 'bg-[var(--color-danger-500)]' : ''}
                                        onClick={() => toggleStatus(student.id, 'absent')}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
