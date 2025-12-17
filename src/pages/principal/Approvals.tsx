/**
 * Principal Approvals Center
 * Manage pending approvals across all departments
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DataTable, StatusBadge } from '@/components/tables'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
    CheckCircle,
    XCircle,
    Clock,
    Eye,
    Filter,
    FileText
} from 'lucide-react'

// Sample approvals data
const approvals = [
    {
        id: '1',
        type: 'Leave Request',
        category: 'hr',
        requestedBy: 'Mr. Anil Sharma',
        role: 'Math Teacher',
        description: 'Personal leave for 3 days (Dec 20-22)',
        submittedDate: '2024-12-15',
        status: 'pending',
        priority: 'normal'
    },
    {
        id: '2',
        type: 'Fee Waiver',
        category: 'finance',
        requestedBy: 'Arjun Singh (Grade 9-A)',
        role: 'Student',
        description: '50% fee waiver request due to financial hardship',
        submittedDate: '2024-12-14',
        status: 'pending',
        priority: 'high'
    },
    {
        id: '3',
        type: 'Budget Request',
        category: 'finance',
        requestedBy: 'Sports Department',
        role: 'Department',
        description: 'Annual sports day budget - ₹2,50,000',
        submittedDate: '2024-12-13',
        status: 'pending',
        priority: 'normal'
    },
    {
        id: '4',
        type: 'Transport Change',
        category: 'transport',
        requestedBy: 'Mrs. Gupta (Parent)',
        role: 'Parent',
        description: 'Route change request for Priya Gupta to Route 5',
        submittedDate: '2024-12-12',
        status: 'pending',
        priority: 'low'
    },
    {
        id: '5',
        type: 'Leave Request',
        category: 'hr',
        requestedBy: 'Ms. Priya Patel',
        role: 'English Teacher',
        description: 'Medical leave for 5 days',
        submittedDate: '2024-12-11',
        status: 'approved',
        priority: 'normal'
    },
    {
        id: '6',
        type: 'Admission',
        category: 'admission',
        requestedBy: 'Rohan Mehta',
        role: 'New Student',
        description: 'Admission to Grade 6-B',
        submittedDate: '2024-12-10',
        status: 'approved',
        priority: 'normal'
    }
]

const stats = [
    { label: 'Pending', value: 4, icon: Clock, color: 'text-[var(--color-warning-500)]' },
    { label: 'Approved Today', value: 2, icon: CheckCircle, color: 'text-[var(--color-success-500)]' },
    { label: 'Rejected Today', value: 0, icon: XCircle, color: 'text-[var(--color-danger-500)]' },
    { label: 'Total This Week', value: 12, icon: FileText, color: 'text-[var(--primary)]' }
]

export function PrincipalApprovals() {
    const columns = [
        {
            key: 'requestedBy',
            header: 'Requested By',
            render: (item: typeof approvals[0]) => (
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                            {item.requestedBy.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium text-sm">{item.requestedBy}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">{item.role}</p>
                    </div>
                </div>
            )
        },
        {
            key: 'type',
            header: 'Type',
            render: (item: typeof approvals[0]) => (
                <Badge variant="outline">{item.type}</Badge>
            )
        },
        {
            key: 'description',
            header: 'Description',
            className: 'max-w-xs',
            render: (item: typeof approvals[0]) => (
                <p className="text-sm truncate">{item.description}</p>
            )
        },
        {
            key: 'priority',
            header: 'Priority',
            render: (item: typeof approvals[0]) => (
                <Badge variant={item.priority === 'high' ? 'destructive' : item.priority === 'low' ? 'secondary' : 'default'}>
                    {item.priority}
                </Badge>
            )
        },
        {
            key: 'submittedDate',
            header: 'Submitted',
            render: (item: typeof approvals[0]) => (
                <span className="text-sm text-[var(--muted-foreground)]">
                    {new Date(item.submittedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </span>
            )
        },
        {
            key: 'status',
            header: 'Status',
            render: (item: typeof approvals[0]) => <StatusBadge status={item.status} />
        }
    ]

    const pendingApprovals = approvals.filter(a => a.status === 'pending')

    return (
        <MainLayout
            title="Approvals Center"
            description="Review and manage pending approval requests"
            permissions={['View', 'Approve', 'Reject']}
            actions={
                <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                </Button>
            }
        >
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.label}>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                    <div className={`h-10 w-10 rounded-lg bg-[var(--muted)] flex items-center justify-center ${stat.color}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{stat.value}</p>
                                        <p className="text-sm text-[var(--muted-foreground)]">{stat.label}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Approvals Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Approvals</CardTitle>
                    <CardDescription>
                        {pendingApprovals.length} pending approval{pendingApprovals.length !== 1 ? 's' : ''} require your attention
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="pending">
                        <TabsList>
                            <TabsTrigger value="pending">
                                Pending ({pendingApprovals.length})
                            </TabsTrigger>
                            <TabsTrigger value="approved">Approved</TabsTrigger>
                            <TabsTrigger value="rejected">Rejected</TabsTrigger>
                            <TabsTrigger value="all">All</TabsTrigger>
                        </TabsList>

                        <TabsContent value="pending" className="mt-4">
                            <DataTable
                                columns={columns}
                                data={pendingApprovals}
                                keyExtractor={(item) => item.id}
                                searchPlaceholder="Search approvals..."
                                actions={(_item) => (
                                    <div className="flex items-center gap-2">
                                        <Button size="sm" variant="ghost">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="default" className="bg-[var(--color-success-500)] hover:bg-[var(--color-success-600)]">
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
                                data={approvals.filter(a => a.status === 'approved')}
                                keyExtractor={(item) => item.id}
                                searchPlaceholder="Search approved..."
                            />
                        </TabsContent>

                        <TabsContent value="rejected" className="mt-4">
                            <div className="text-center py-12 text-[var(--muted-foreground)]">
                                No rejected approvals
                            </div>
                        </TabsContent>

                        <TabsContent value="all" className="mt-4">
                            <DataTable
                                columns={columns}
                                data={approvals}
                                keyExtractor={(item) => item.id}
                                searchPlaceholder="Search all..."
                            />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
