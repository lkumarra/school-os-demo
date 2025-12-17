/**
 * Admin Student Master (SIS)
 * Student Information System - manage all students
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DataTable, StatusBadge } from '@/components/tables'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import type { Student } from '@/types'
import {
    Users,
    Plus,
    Download,
    Upload,
    Eye,
    Edit,
    MoreHorizontal,
    GraduationCap
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Sample students data
const students: (Student & { status: string })[] = [
    { id: '1', name: 'Aarav Sharma', rollNo: '2024001', class: 'Grade 5', section: 'A', parentName: 'Mr. Vikram Sharma', parentPhone: '+91 9876543210', status: 'active' },
    { id: '2', name: 'Ananya Patel', rollNo: '2024002', class: 'Grade 5', section: 'A', parentName: 'Mrs. Priya Patel', parentPhone: '+91 9876543211', status: 'active' },
    { id: '3', name: 'Rohan Gupta', rollNo: '2024003', class: 'Grade 5', section: 'B', parentName: 'Mr. Rahul Gupta', parentPhone: '+91 9876543212', status: 'active' },
    { id: '4', name: 'Ishita Singh', rollNo: '2024004', class: 'Grade 6', section: 'A', parentName: 'Mr. Karan Singh', parentPhone: '+91 9876543213', status: 'active' },
    { id: '5', name: 'Arjun Reddy', rollNo: '2024005', class: 'Grade 6', section: 'B', parentName: 'Dr. Vijay Reddy', parentPhone: '+91 9876543214', status: 'active' },
    { id: '6', name: 'Kavya Mehta', rollNo: '2024006', class: 'Grade 7', section: 'A', parentName: 'Mrs. Meena Mehta', parentPhone: '+91 9876543215', status: 'inactive' },
    { id: '7', name: 'Vihaan Kumar', rollNo: '2024007', class: 'Grade 7', section: 'B', parentName: 'Mr. Suresh Kumar', parentPhone: '+91 9876543216', status: 'active' },
    { id: '8', name: 'Aanya Joshi', rollNo: '2024008', class: 'Grade 8', section: 'A', parentName: 'Mr. Prakash Joshi', parentPhone: '+91 9876543217', status: 'active' },
    { id: '9', name: 'Reyansh Verma', rollNo: '2024009', class: 'Grade 8', section: 'B', parentName: 'Mrs. Sunita Verma', parentPhone: '+91 9876543218', status: 'active' },
    { id: '10', name: 'Myra Kapoor', rollNo: '2024010', class: 'Grade 9', section: 'A', parentName: 'Mr. Raj Kapoor', parentPhone: '+91 9876543219', status: 'active' }
]

export function AdminStudentMaster() {
    const columns = [
        {
            key: 'rollNo',
            header: 'Roll No',
            render: (item: typeof students[0]) => (
                <span className="font-mono text-sm">{item.rollNo}</span>
            )
        },
        {
            key: 'name',
            header: 'Student',
            render: (item: typeof students[0]) => (
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-[var(--primary)] text-white">
                            {item.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{item.name}</span>
                </div>
            )
        },
        {
            key: 'class',
            header: 'Class',
            render: (item: typeof students[0]) => (
                <Badge variant="outline">{item.class} - {item.section}</Badge>
            )
        },
        {
            key: 'parentName',
            header: 'Parent/Guardian',
            render: (item: typeof students[0]) => (
                <div>
                    <p className="text-sm">{item.parentName}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{item.parentPhone}</p>
                </div>
            )
        },
        {
            key: 'status',
            header: 'Status',
            render: (item: typeof students[0]) => <StatusBadge status={item.status} />
        }
    ]

    const stats = {
        total: students.length,
        active: students.filter(s => s.status === 'active').length,
        byClass: {
            'Grade 5': students.filter(s => s.class === 'Grade 5').length,
            'Grade 6': students.filter(s => s.class === 'Grade 6').length,
            'Grade 7': students.filter(s => s.class === 'Grade 7').length,
            'Grade 8': students.filter(s => s.class === 'Grade 8').length,
            'Grade 9': students.filter(s => s.class === 'Grade 9').length
        }
    }

    return (
        <MainLayout
            title="Student Master"
            description="Student Information System (SIS)"
            permissions={['View', 'Create', 'Edit', 'Delete']}
            actions={
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Import
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                    </Button>
                    <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Student
                    </Button>
                </div>
            }
        >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                <Card>
                    <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                                <Users className="h-5 w-5 text-[var(--primary)]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{stats.total}</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Total</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {Object.entries(stats.byClass).map(([className, count]) => (
                    <Card key={className}>
                        <CardContent className="pt-4 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                    <GraduationCap className="h-5 w-5 text-[var(--muted-foreground)]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{count}</p>
                                    <p className="text-xs text-[var(--muted-foreground)]">{className}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Students Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Students</CardTitle>
                    <CardDescription>
                        {stats.total} students enrolled ({stats.active} active)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={students}
                        keyExtractor={(item) => item.id}
                        searchPlaceholder="Search by name, roll no, parent..."
                        filters={[
                            {
                                key: 'class',
                                label: 'Class',
                                options: [
                                    { value: 'grade5', label: 'Grade 5' },
                                    { value: 'grade6', label: 'Grade 6' },
                                    { value: 'grade7', label: 'Grade 7' },
                                    { value: 'grade8', label: 'Grade 8' },
                                    { value: 'grade9', label: 'Grade 9' }
                                ]
                            },
                            {
                                key: 'section',
                                label: 'Section',
                                options: [
                                    { value: 'a', label: 'Section A' },
                                    { value: 'b', label: 'Section B' },
                                    { value: 'c', label: 'Section C' }
                                ]
                            }
                        ]}
                        actions={(_item) => (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Eye className="h-4 w-4 mr-2" />
                                        View Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Download className="h-4 w-4 mr-2" />
                                        Download ID Card
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    />
                </CardContent>
            </Card>
        </MainLayout>
    )
}
