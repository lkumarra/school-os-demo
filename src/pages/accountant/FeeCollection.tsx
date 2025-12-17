/**
 * Accountant Fee Collection
 * Fee management and collection dashboard
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DataTable, StatusBadge } from '@/components/tables'
import { StatsCard } from '@/components/cards/StatsCard'
import { AIInsightCard } from '@/components/cards/AIInsightCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    CreditCard,
    Download,
    IndianRupee,
    TrendingUp,
    Clock,
    Users,
    Send,
    Sparkles,
    PieChart
} from 'lucide-react'

// Fee collection stats
const stats = {
    totalExpected: 25000000, // 2.5 Cr
    collected: 22500000, // 2.25 Cr
    pending: 2500000, // 25 L
    collectionRate: 90
}

// Recent transactions
const transactions = [
    { id: 'TXN001', student: 'Aarav Sharma', class: 'Grade 8-A', amount: 25000, method: 'Online', date: '2024-12-17', status: 'completed' },
    { id: 'TXN002', student: 'Ananya Patel', class: 'Grade 5-B', amount: 18000, method: 'Cash', date: '2024-12-17', status: 'completed' },
    { id: 'TXN003', student: 'Rohan Gupta', class: 'Grade 10-A', amount: 45000, method: 'Cheque', date: '2024-12-16', status: 'pending' },
    { id: 'TXN004', student: 'Ishita Singh', class: 'Grade 7-B', amount: 22000, method: 'Online', date: '2024-12-16', status: 'completed' },
    { id: 'TXN005', student: 'Kavya Reddy', class: 'Grade 9-A', amount: 35000, method: 'UPI', date: '2024-12-15', status: 'completed' }
]

// Pending defaulters
const defaulters = [
    { student: 'Arjun Mehta', class: 'Grade 8-B', pending: 45000, dueDate: '2024-12-01', overdueDays: 16 },
    { student: 'Priya Kumar', class: 'Grade 6-A', pending: 25000, dueDate: '2024-12-10', overdueDays: 7 },
    { student: 'Rahul Verma', class: 'Grade 10-B', pending: 55000, dueDate: '2024-11-30', overdueDays: 17 }
]

export function AccountantFeeCollection() {
    const columns = [
        {
            key: 'id',
            header: 'Transaction ID',
            render: (item: typeof transactions[0]) => (
                <span className="font-mono text-sm">{item.id}</span>
            )
        },
        {
            key: 'student',
            header: 'Student',
            render: (item: typeof transactions[0]) => (
                <div>
                    <p className="font-medium text-sm">{item.student}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{item.class}</p>
                </div>
            )
        },
        {
            key: 'amount',
            header: 'Amount',
            render: (item: typeof transactions[0]) => (
                <span className="font-medium">₹{item.amount.toLocaleString()}</span>
            )
        },
        {
            key: 'method',
            header: 'Method',
            render: (item: typeof transactions[0]) => (
                <Badge variant="outline">{item.method}</Badge>
            )
        },
        {
            key: 'date',
            header: 'Date',
            render: (item: typeof transactions[0]) => (
                <span className="text-sm text-[var(--muted-foreground)]">
                    {new Date(item.date).toLocaleDateString('en-IN')}
                </span>
            )
        },
        {
            key: 'status',
            header: 'Status',
            render: (item: typeof transactions[0]) => <StatusBadge status={item.status} />
        }
    ]

    return (
        <MainLayout
            title="Fee Collection"
            description="Manage fee collection and payments"
            permissions={['View', 'Create', 'Edit']}
            actions={
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                    </Button>
                    <Button size="sm">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Record Payment
                    </Button>
                </div>
            }
        >
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard
                    title="Total Expected"
                    value={`₹${(stats.totalExpected / 10000000).toFixed(1)}Cr`}
                    icon={<IndianRupee className="h-5 w-5" />}
                />
                <StatsCard
                    title="Collected"
                    value={`₹${(stats.collected / 10000000).toFixed(2)}Cr`}
                    icon={<TrendingUp className="h-5 w-5 text-[var(--color-success-500)]" />}
                    trend={{ value: 8.5, label: 'vs last month' }}
                />
                <StatsCard
                    title="Pending"
                    value={`₹${(stats.pending / 100000).toFixed(0)}L`}
                    icon={<Clock className="h-5 w-5 text-[var(--color-warning-500)]" />}
                />
                <StatsCard
                    title="Collection Rate"
                    value={`${stats.collectionRate}%`}
                    icon={<PieChart className="h-5 w-5 text-[var(--color-ai-purple)]" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Transactions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>Latest fee payments received</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <DataTable
                                columns={columns}
                                data={transactions}
                                keyExtractor={(item) => item.id}
                                searchPlaceholder="Search transactions..."
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* AI Insights */}
                    <Card className="border-[var(--color-ai-purple)]/20">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-[var(--color-ai-purple)]" />
                                AI Collection Insights
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="p-3 rounded-lg bg-[var(--muted)]">
                                <p className="text-sm font-medium">Optimal Reminder Day</p>
                                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                    Send reminders on 5th for 23% faster collection
                                </p>
                            </div>
                            <div className="p-3 rounded-lg bg-[var(--muted)]">
                                <p className="text-sm font-medium">127 Parents</p>
                                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                    Have overdue payments. Send bulk reminder?
                                </p>
                            </div>
                            <Button variant="ai" size="sm" className="w-full">
                                <Send className="h-4 w-4 mr-2" />
                                Send AI Reminders
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Defaulters */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2 text-[var(--color-danger-500)]">
                                <Clock className="h-4 w-4" />
                                Overdue Payments
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {defaulters.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-3 rounded-lg bg-[var(--color-danger-50)] border border-[var(--color-danger-200)]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium text-sm">{item.student}</p>
                                            <Badge variant="destructive">{item.overdueDays}d overdue</Badge>
                                        </div>
                                        <p className="text-xs text-[var(--muted-foreground)]">{item.class}</p>
                                        <p className="text-sm font-bold mt-1">₹{item.pending.toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
