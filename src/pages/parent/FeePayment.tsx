/**
 * Parent Fee Payment
 * View fees and make payments
 */

import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    CreditCard,
    Download,
    Check,
    Clock,
    AlertCircle,
    Calendar,
    Receipt,
    IndianRupee
} from 'lucide-react'

// Children data
const children = [
    { id: 1, name: 'Aarav Sharma', class: 'Grade 8-A' },
    { id: 2, name: 'Anvi Sharma', class: 'Grade 5-B' }
]

// Fee data by child
const feeData = {
    1: {
        totalFee: 150000,
        paid: 125000,
        pending: 25000,
        dueDate: '2024-12-31',
        feeBreakdown: [
            { head: 'Tuition Fee', amount: 80000, paid: 80000, status: 'paid' },
            { head: 'Development Fund', amount: 20000, paid: 20000, status: 'paid' },
            { head: 'Lab Fee', amount: 15000, paid: 15000, status: 'paid' },
            { head: 'Transport Fee', amount: 25000, paid: 10000, status: 'partial' },
            { head: 'Activity Fee', amount: 10000, paid: 0, status: 'pending' }
        ],
        transactions: [
            { id: 'TXN001', date: '2024-04-15', amount: 75000, method: 'Online', receipt: 'RCP001' },
            { id: 'TXN002', date: '2024-07-20', amount: 50000, method: 'Cheque', receipt: 'RCP002' }
        ]
    },
    2: {
        totalFee: 120000,
        paid: 120000,
        pending: 0,
        dueDate: null,
        feeBreakdown: [
            { head: 'Tuition Fee', amount: 70000, paid: 70000, status: 'paid' },
            { head: 'Development Fund', amount: 15000, paid: 15000, status: 'paid' },
            { head: 'Activity Fee', amount: 10000, paid: 10000, status: 'paid' },
            { head: 'Transport Fee', amount: 25000, paid: 25000, status: 'paid' }
        ],
        transactions: [
            { id: 'TXN003', date: '2024-04-10', amount: 60000, method: 'Online', receipt: 'RCP003' },
            { id: 'TXN004', date: '2024-07-15', amount: 60000, method: 'Online', receipt: 'RCP004' }
        ]
    }
}

export function ParentFeePayment() {
    const [selectedChild, setSelectedChild] = useState(children[0])
    const data = feeData[selectedChild.id as keyof typeof feeData]

    return (
        <MainLayout
            title="Fee Payment"
            description="View and pay school fees"
            permissions={['View']}
        >
            {/* Child Selector */}
            <Card className="mb-6">
                <CardContent className="pt-4 pb-4">
                    <div className="flex items-center gap-6">
                        <span className="text-sm font-medium text-[var(--muted-foreground)]">Select Child:</span>
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

            {/* Fee Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                                <IndianRupee className="h-6 w-6 text-[var(--primary)]" />
                            </div>
                            <div>
                                <p className="text-sm text-[var(--muted-foreground)]">Total Fee</p>
                                <p className="text-2xl font-bold">₹{data.totalFee.toLocaleString()}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-[var(--color-success-500)]/10 flex items-center justify-center">
                                <Check className="h-6 w-6 text-[var(--color-success-500)]" />
                            </div>
                            <div>
                                <p className="text-sm text-[var(--muted-foreground)]">Paid Amount</p>
                                <p className="text-2xl font-bold text-[var(--color-success-500)]">₹{data.paid.toLocaleString()}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className={data.pending > 0 ? 'border-[var(--color-warning-500)]' : ''}>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${data.pending > 0 ? 'bg-[var(--color-warning-500)]/10' : 'bg-[var(--color-success-500)]/10'
                                }`}>
                                {data.pending > 0 ? (
                                    <Clock className="h-6 w-6 text-[var(--color-warning-500)]" />
                                ) : (
                                    <Check className="h-6 w-6 text-[var(--color-success-500)]" />
                                )}
                            </div>
                            <div>
                                <p className="text-sm text-[var(--muted-foreground)]">Pending Amount</p>
                                <p className={`text-2xl font-bold ${data.pending > 0 ? 'text-[var(--color-warning-500)]' : 'text-[var(--color-success-500)]'}`}>
                                    {data.pending > 0 ? `₹${data.pending.toLocaleString()}` : 'Nil'}
                                </p>
                                {data.dueDate && (
                                    <p className="text-xs text-[var(--color-danger-500)] mt-1">
                                        Due: {new Date(data.dueDate).toLocaleDateString('en-IN')}
                                    </p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Pay Now Button */}
            {data.pending > 0 && (
                <Card className="mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--color-ai-purple)] text-white">
                    <CardContent className="pt-6 pb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">Pay Pending Fees</h3>
                                <p className="text-white/80 text-sm">Complete your payment before {new Date(data.dueDate!).toLocaleDateString('en-IN')}</p>
                            </div>
                            <Button variant="secondary" size="lg">
                                <CreditCard className="h-5 w-5 mr-2" />
                                Pay ₹{data.pending.toLocaleString()}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Fee Details */}
            <Card>
                <CardHeader>
                    <CardTitle>Fee Details</CardTitle>
                    <CardDescription>Academic Year 2024-25</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="breakdown">
                        <TabsList>
                            <TabsTrigger value="breakdown">Fee Breakdown</TabsTrigger>
                            <TabsTrigger value="transactions">Payment History</TabsTrigger>
                        </TabsList>

                        <TabsContent value="breakdown" className="mt-4">
                            <div className="space-y-3">
                                {data.feeBreakdown.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 rounded-xl bg-[var(--muted)]"
                                    >
                                        <div>
                                            <p className="font-medium">{item.head}</p>
                                            <p className="text-sm text-[var(--muted-foreground)]">
                                                Paid: ₹{item.paid.toLocaleString()} / ₹{item.amount.toLocaleString()}
                                            </p>
                                        </div>
                                        <Badge variant={
                                            item.status === 'paid' ? 'success' :
                                                item.status === 'partial' ? 'warning' :
                                                    'destructive'
                                        }>
                                            {item.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="transactions" className="mt-4">
                            <div className="space-y-3">
                                {data.transactions.map((txn) => (
                                    <div
                                        key={txn.id}
                                        className="flex items-center justify-between p-4 rounded-xl bg-[var(--muted)]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-lg bg-[var(--card)] flex items-center justify-center">
                                                <Receipt className="h-5 w-5 text-[var(--muted-foreground)]" />
                                            </div>
                                            <div>
                                                <p className="font-medium">₹{txn.amount.toLocaleString()}</p>
                                                <p className="text-sm text-[var(--muted-foreground)]">
                                                    {new Date(txn.date).toLocaleDateString('en-IN')} • {txn.method}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-[var(--muted-foreground)]">{txn.receipt}</span>
                                            <Button variant="ghost" size="sm">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
