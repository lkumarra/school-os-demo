/**
 * Admin Admissions List
 * List and manage admission applications
 */

import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DataTable, StatusBadge } from '@/components/tables'
import { StatsCard } from '@/components/cards/StatsCard'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Admission } from '@/types'
import {
    Users,
    Plus,
    Eye,
    CheckCircle,
    XCircle,
    Clock,
    Download,
    Filter,
    Mail,
    Phone
} from 'lucide-react'

// Sample admissions data
const admissions: Admission[] = [
    {
        id: '1',
        studentName: 'Aarav Sharma',
        parentName: 'Mr. Vikram Sharma',
        class: 'Grade 1',
        submittedDate: '2024-12-15',
        status: 'pending',
        phone: '+91 9876543210',
        email: 'vikram.sharma@email.com'
    },
    {
        id: '2',
        studentName: 'Ananya Gupta',
        parentName: 'Mrs. Priya Gupta',
        class: 'Grade 3',
        submittedDate: '2024-12-14',
        status: 'pending',
        phone: '+91 9876543211',
        email: 'priya.gupta@email.com'
    },
    {
        id: '3',
        studentName: 'Rohan Mehta',
        parentName: 'Mr. Sanjay Mehta',
        class: 'Grade 6',
        submittedDate: '2024-12-13',
        status: 'approved',
        phone: '+91 9876543212',
        email: 'sanjay.mehta@email.com'
    },
    {
        id: '4',
        studentName: 'Ishita Patel',
        parentName: 'Dr. Amit Patel',
        class: 'Grade 9',
        submittedDate: '2024-12-12',
        status: 'approved',
        phone: '+91 9876543213',
        email: 'amit.patel@email.com'
    },
    {
        id: '5',
        studentName: 'Arjun Singh',
        parentName: 'Mr. Rajinder Singh',
        class: 'Grade 5',
        submittedDate: '2024-12-11',
        status: 'rejected',
        phone: '+91 9876543214',
        email: 'rajinder.singh@email.com'
    },
    {
        id: '6',
        studentName: 'Kavya Reddy',
        parentName: 'Mrs. Lakshmi Reddy',
        class: 'Grade 2',
        submittedDate: '2024-12-10',
        status: 'waitlisted',
        phone: '+91 9876543215',
        email: 'lakshmi.reddy@email.com'
    }
]

export function AdminAdmissionsList() {
    const columns = [
        {
            key: 'studentName',
            header: 'Student',
            render: (item: Admission) => (
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarFallback className="text-xs bg-[var(--primary)] text-white">
                            {item.studentName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium text-sm">{item.studentName}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Applying for {item.class}</p>
                    </div>
                </div>
            )
        },
        {
            key: 'parentName',
            header: 'Parent/Guardian',
            render: (item: Admission) => (
                <div>
                    <p className="text-sm">{item.parentName}</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mt-0.5">
                        <Phone className="h-3 w-3" />
                        {item.phone}
                    </div>
                </div>
            )
        },
        {
            key: 'class',
            header: 'Class',
            render: (item: Admission) => (
                <Badge variant="outline">{item.class}</Badge>
            )
        },
        {
            key: 'submittedDate',
            header: 'Submitted',
            render: (item: Admission) => (
                <span className="text-sm text-[var(--muted-foreground)]">
                    {new Date(item.submittedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
            )
        },
        {
            key: 'status',
            header: 'Status',
            render: (item: Admission) => <StatusBadge status={item.status} />
        }
    ]

    const stats = {
        total: admissions.length,
        pending: admissions.filter(a => a.status === 'pending').length,
        approved: admissions.filter(a => a.status === 'approved').length,
        rejected: admissions.filter(a => a.status === 'rejected').length
    }

    return (
        <MainLayout
            title="Admissions"
            description="Manage admission applications and enrollments"
            permissions={['View', 'Create', 'Edit']}
            actions={
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                    </Button>
                    <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        New Application
                    </Button>
                </div>
            }
        >
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard
                    title="Total Applications"
                    value={stats.total}
                    icon={<Users className="h-5 w-5" />}
                />
                <StatsCard
                    title="Pending Review"
                    value={stats.pending}
                    icon={<Clock className="h-5 w-5 text-[var(--color-warning-500)]" />}
                />
                <StatsCard
                    title="Approved"
                    value={stats.approved}
                    icon={<CheckCircle className="h-5 w-5 text-[var(--color-success-500)]" />}
                />
                <StatsCard
                    title="Rejected"
                    value={stats.rejected}
                    icon={<XCircle className="h-5 w-5 text-[var(--color-danger-500)]" />}
                />
            </div>

            {/* Applications Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Applications</CardTitle>
                    <CardDescription>
                        Review and process admission applications
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="all">
                        <TabsList>
                            <TabsTrigger value="all">All ({admissions.length})</TabsTrigger>
                            <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
                            <TabsTrigger value="approved">Approved ({stats.approved})</TabsTrigger>
                            <TabsTrigger value="rejected">Rejected ({stats.rejected})</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="mt-4">
                            <DataTable
                                columns={columns}
                                data={admissions}
                                keyExtractor={(item) => item.id}
                                searchPlaceholder="Search applications..."
                                filters={[
                                    {
                                        key: 'class',
                                        label: 'Class',
                                        options: [
                                            { value: 'nursery', label: 'Nursery' },
                                            { value: 'grade1-5', label: 'Grade 1-5' },
                                            { value: 'grade6-8', label: 'Grade 6-8' },
                                            { value: 'grade9-12', label: 'Grade 9-12' }
                                        ]
                                    }
                                ]}
                                actions={(item) => (
                                    <div className="flex items-center gap-1">
                                        <Button size="sm" variant="ghost">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="ghost">
                                            <Mail className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            />
                        </TabsContent>

                        <TabsContent value="pending" className="mt-4">
                            <DataTable
                                columns={columns}
                                data={admissions.filter(a => a.status === 'pending')}
                                keyExtractor={(item) => item.id}
                                actions={(item) => (
                                    <div className="flex items-center gap-1">
                                        <Button size="sm" variant="ghost">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="default" className="bg-[var(--color-success-500)]">
                                            <CheckCircle className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive">
                                            <XCircle className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            />
                        </TabsContent>

                        <TabsContent value="approved" className="mt-4">
                            <DataTable
                                columns={columns}
                                data={admissions.filter(a => a.status === 'approved')}
                                keyExtractor={(item) => item.id}
                            />
                        </TabsContent>

                        <TabsContent value="rejected" className="mt-4">
                            <DataTable
                                columns={columns}
                                data={admissions.filter(a => a.status === 'rejected')}
                                keyExtractor={(item) => item.id}
                            />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
