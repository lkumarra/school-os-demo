/**
 * Library Dashboard
 * Book management, issue/return tracking, and inventory management
 */

import { MainLayout } from '@/components/layout/MainLayout'
import { StatsCard } from '@/components/cards/StatsCard'
import { AIInsightCard } from '@/components/cards/AIInsightCard'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import type { AIInsight } from '@/types'
import {
    BookOpen,
    Users,
    Clock,
    Search,
    Filter,
    Plus,
    MoreVertical,
    BookMarked,
    BookX,
    RefreshCw,
    Sparkles,
    AlertCircle,
    TrendingUp,
    Barcode
} from 'lucide-react'

// Mock book data
const recentBooks = [
    { id: 'BK001', title: 'Introduction to Physics', author: 'H.C. Verma', category: 'Science', isbn: '978-81-7709-001-6', copies: 5, available: 2, status: 'available' },
    { id: 'BK002', title: 'Mathematics for Class 10', author: 'R.D. Sharma', category: 'Mathematics', isbn: '978-81-7709-002-3', copies: 8, available: 0, status: 'unavailable' },
    { id: 'BK003', title: 'English Grammar & Composition', author: 'Wren & Martin', category: 'English', isbn: '978-81-7709-003-0', copies: 10, available: 4, status: 'available' },
    { id: 'BK004', title: 'History of Modern India', author: 'Bipan Chandra', category: 'History', isbn: '978-81-7709-004-7', copies: 6, available: 6, status: 'available' },
    { id: 'BK005', title: 'Computer Science with Python', author: 'Sumita Arora', category: 'Computer', isbn: '978-81-7709-005-4', copies: 12, available: 3, status: 'available' },
]

// Recent transactions
const recentTransactions = [
    { id: 1, type: 'issue', book: 'Introduction to Physics', student: 'Rahul Sharma', class: '10-A', date: '17 Dec 2024', dueDate: '31 Dec 2024' },
    { id: 2, type: 'return', book: 'English Grammar', student: 'Priya Singh', class: '9-B', date: '17 Dec 2024', dueDate: '-' },
    { id: 3, type: 'issue', book: 'Mathematics for Class 10', student: 'Amit Kumar', class: '10-B', date: '16 Dec 2024', dueDate: '30 Dec 2024' },
    { id: 4, type: 'overdue', book: 'History of Modern India', student: 'Neha Gupta', class: '11-A', date: '01 Dec 2024', dueDate: '15 Dec 2024' },
    { id: 5, type: 'return', book: 'Computer Science', student: 'Vijay Patel', class: '12-A', date: '16 Dec 2024', dueDate: '-' },
]

// AI Insights
const aiInsights: AIInsight[] = [
    {
        id: '1',
        title: 'Popular Books Alert',
        description: 'Mathematics for Class 10 has high demand. Consider ordering 5 more copies to reduce wait time.',
        category: 'inventory',
        priority: 'high',
        actionable: true
    },
    {
        id: '2',
        title: 'Overdue Pattern Detected',
        description: '3 students from Class 11-A have consistently overdue books. Consider sending reminders.',
        category: 'overdue',
        priority: 'medium',
        actionable: true
    }
]

// Category stats
const categoryStats = [
    { name: 'Science', count: 245, issued: 89 },
    { name: 'Mathematics', count: 312, issued: 156 },
    { name: 'English', count: 189, issued: 45 },
    { name: 'History', count: 167, issued: 34 },
    { name: 'Computer', count: 98, issued: 67 },
]

// Overdue books
const overdueBooks = [
    { book: 'Biology Class 11', student: 'Neha Gupta', class: '11-A', dueDate: '10 Dec 2024', daysOverdue: 7 },
    { book: 'Chemistry Practical', student: 'Ravi Kumar', class: '12-B', dueDate: '12 Dec 2024', daysOverdue: 5 },
    { book: 'Hindi Literature', student: 'Anita Sharma', class: '10-C', dueDate: '14 Dec 2024', daysOverdue: 3 },
]

export function LibraryDashboard() {
    return (
        <MainLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Library Dashboard</h1>
                        <p className="text-[var(--muted-foreground)]">
                            Manage books, track issues, and monitor inventory
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="gap-2">
                            <Barcode className="h-4 w-4" />
                            Scan Book
                        </Button>
                        <Button className="gap-2 ai-gradient text-white">
                            <Plus className="h-4 w-4" />
                            Add Book
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                        title="Total Books"
                        value="2,456"
                        icon={<BookOpen className="h-5 w-5" />}
                        trend={{ value: 5, label: 'new this month' }}
                    />
                    <StatsCard
                        title="Books Issued"
                        value="342"
                        icon={<BookMarked className="h-5 w-5" />}
                        trend={{ value: 12, label: 'this week' }}
                    />
                    <StatsCard
                        title="Overdue Returns"
                        value="23"
                        icon={<Clock className="h-5 w-5" />}
                        trend={{ value: -8, label: 'from last week' }}
                    />
                    <StatsCard
                        title="Active Members"
                        value="1,876"
                        icon={<Users className="h-5 w-5" />}
                        trend={{ value: 3.2, label: 'this month' }}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Left Column - Book Catalog & Transactions */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Book Catalog */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-semibold">Book Catalog</CardTitle>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" />
                                        <Input
                                            placeholder="Search books..."
                                            className="pl-9 w-64"
                                        />
                                    </div>
                                    <Button variant="outline" size="icon">
                                        <Filter className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {recentBooks.map((book) => (
                                        <div
                                            key={book.id}
                                            className="flex items-center gap-4 p-4 rounded-lg border bg-[var(--card)] hover:shadow-md transition-shadow"
                                        >
                                            <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${book.available > 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                                }`}>
                                                <BookOpen className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-semibold truncate">{book.title}</h4>
                                                    <Badge variant="outline" className="text-xs">{book.category}</Badge>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                                                    <span>{book.author}</span>
                                                    <span>ISBN: {book.isbn}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium">{book.available}/{book.copies}</p>
                                                <p className="text-xs text-[var(--muted-foreground)]">Available</p>
                                            </div>
                                            <Badge
                                                variant={book.available > 0 ? 'default' : 'destructive'}
                                                className={book.available > 0 ? 'bg-green-500/20 text-green-500 border-green-500/30' : ''}
                                            >
                                                {book.available > 0 ? 'Available' : 'All Issued'}
                                            </Badge>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-4">
                                    View All Books
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Recent Transactions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {recentTransactions.map((tx) => (
                                        <div key={tx.id} className="flex items-center gap-4 p-3 rounded-lg bg-[var(--muted)]/50">
                                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${tx.type === 'issue' ? 'bg-blue-500/10 text-blue-500' :
                                                tx.type === 'return' ? 'bg-green-500/10 text-green-500' :
                                                    'bg-red-500/10 text-red-500'
                                                }`}>
                                                {tx.type === 'issue' ? <BookMarked className="h-5 w-5" /> :
                                                    tx.type === 'return' ? <RefreshCw className="h-5 w-5" /> :
                                                        <BookX className="h-5 w-5" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm">{tx.book}</p>
                                                <p className="text-xs text-[var(--muted-foreground)]">
                                                    {tx.student} • {tx.class}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <Badge
                                                    variant={tx.type === 'issue' ? 'default' : tx.type === 'return' ? 'secondary' : 'destructive'}
                                                    className={
                                                        tx.type === 'issue' ? 'bg-blue-500/20 text-blue-500 border-blue-500/30' :
                                                            tx.type === 'return' ? 'bg-green-500/20 text-green-500 border-green-500/30' :
                                                                ''
                                                    }
                                                >
                                                    {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                                                </Badge>
                                                <p className="text-xs text-[var(--muted-foreground)] mt-1">{tx.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* AI Insights */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <Sparkles className="h-5 w-5 text-[var(--color-ai-purple)]" />
                                        AI Insights
                                    </CardTitle>
                                    <CardDescription>Smart recommendations</CardDescription>
                                </div>
                                <Badge variant="ai">Powered by AI</Badge>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {aiInsights.map((insight) => (
                                    <AIInsightCard key={insight.id} insight={insight} />
                                ))}
                            </CardContent>
                        </Card>

                        {/* Overdue Books */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5 text-red-500" />
                                    Overdue Books
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {overdueBooks.map((item, index) => (
                                        <div key={index} className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                                            <div className="flex items-start justify-between mb-2">
                                                <p className="font-medium text-sm">{item.book}</p>
                                                <Badge variant="destructive" className="text-xs">
                                                    {item.daysOverdue} days
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-[var(--muted-foreground)]">
                                                {item.student} • {item.class}
                                            </p>
                                            <p className="text-xs text-red-500 mt-1">
                                                Due: {item.dueDate}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-4 text-red-500 border-red-500/30 hover:bg-red-500/10">
                                    Send Reminders
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Category Distribution */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5" />
                                    Category Stats
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {categoryStats.map((cat, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-24 text-sm font-medium">{cat.name}</div>
                                                <div className="flex-1 h-2 bg-[var(--muted)] rounded-full w-24 overflow-hidden">
                                                    <div
                                                        className="h-full bg-[var(--color-ai-purple)] rounded-full"
                                                        style={{ width: `${(cat.issued / cat.count) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-xs text-[var(--muted-foreground)]">
                                                {cat.issued}/{cat.count}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
