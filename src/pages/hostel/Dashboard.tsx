/**
 * Hostel Warden Dashboard
 * Overview of hostel operations with room management and student tracking
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
    Building2,
    Users,
    BedDouble,
    Clock,
    Search,
    Filter,
    UserCheck,
    UserX,
    Plus,
    MoreVertical,
    Moon,
    Utensils,
    Sparkles
} from 'lucide-react'

// Mock room data
const roomData = [
    { roomNo: 'A-101', floor: 'Ground', capacity: 4, occupied: 4, students: ['Rahul S.', 'Amit K.', 'Vijay P.', 'Suresh M.'], status: 'full' },
    { roomNo: 'A-102', floor: 'Ground', capacity: 4, occupied: 3, students: ['Priya R.', 'Neha S.', 'Kavita M.'], status: 'available' },
    { roomNo: 'A-103', floor: 'Ground', capacity: 4, occupied: 4, students: ['Ravi K.', 'Sanjay T.', 'Deepak R.', 'Arun V.'], status: 'full' },
    { roomNo: 'B-201', floor: 'First', capacity: 4, occupied: 2, students: ['Meera P.', 'Anjali S.'], status: 'available' },
    { roomNo: 'B-202', floor: 'First', capacity: 4, occupied: 0, students: [], status: 'vacant' },
    { roomNo: 'B-203', floor: 'First', capacity: 4, occupied: 4, students: ['Kiran D.', 'Mohan L.', 'Prakash S.', 'Ganesh R.'], status: 'full' },
]

// Today's attendance summary
const attendanceData = {
    present: 418,
    onLeave: 10,
    absent: 4,
    total: 432
}

// Recent activities
const recentActivities = [
    { type: 'leave', student: 'Rahul Sharma', action: 'requested leave for Dec 20-22', time: '10 mins ago', status: 'pending' },
    { type: 'checkin', student: 'Priya Reddy', action: 'checked in from leave', time: '1 hour ago', status: 'completed' },
    { type: 'complaint', student: 'Room A-103', action: 'reported water heater issue', time: '2 hours ago', status: 'pending' },
    { type: 'visitor', student: 'Amit Kumar', action: 'parent visit scheduled for tomorrow', time: '3 hours ago', status: 'approved' },
]

// AI Insights
const aiInsights: AIInsight[] = [
    {
        id: '1',
        title: 'Attendance Pattern Alert',
        description: 'Room B-201 students have irregular check-in times this week. Consider scheduling a wellness check.',
        category: 'attendance',
        priority: 'high',
        actionable: true
    },
    {
        id: '2',
        title: 'Maintenance Prediction',
        description: 'Based on usage patterns, A-Block bathrooms may need maintenance in 2 weeks.',
        category: 'maintenance',
        priority: 'medium',
        actionable: true
    }
]

// Mess schedule
const messSchedule = [
    { meal: 'Breakfast', time: '7:00 - 9:00 AM', menu: 'Idli, Vada, Sambar, Tea' },
    { meal: 'Lunch', time: '12:30 - 2:00 PM', menu: 'Rice, Dal, Sabzi, Roti, Curd' },
    { meal: 'Snacks', time: '4:30 - 5:30 PM', menu: 'Samosa, Tea' },
    { meal: 'Dinner', time: '7:30 - 9:00 PM', menu: 'Rice, Dal, Paneer, Roti, Salad' },
]

export function HostelDashboard() {
    return (
        <MainLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Hostel Dashboard</h1>
                        <p className="text-[var(--muted-foreground)]">
                            Monitor hostel operations and student welfare
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="gap-2">
                            <Moon className="h-4 w-4" />
                            Night Roll Call
                        </Button>
                        <Button className="gap-2 ai-gradient text-white">
                            <Plus className="h-4 w-4" />
                            New Admission
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                        title="Total Rooms"
                        value="120"
                        icon={<Building2 className="h-5 w-5" />}
                        trend={{ value: 0, label: 'no change' }}
                    />
                    <StatsCard
                        title="Occupied Beds"
                        value="432 / 480"
                        icon={<BedDouble className="h-5 w-5" />}
                        trend={{ value: 2, label: 'from last week' }}
                    />
                    <StatsCard
                        title="Students Present"
                        value="418"
                        icon={<UserCheck className="h-5 w-5" />}
                        trend={{ value: 3.2, label: 'today' }}
                    />
                    <StatsCard
                        title="Leave Requests"
                        value="12"
                        icon={<Clock className="h-5 w-5" />}
                        trend={{ value: -5, label: 'pending' }}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Left Column - Room Overview */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Room Management */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-semibold">Room Overview</CardTitle>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" />
                                        <Input
                                            placeholder="Search room..."
                                            className="pl-9 w-48"
                                        />
                                    </div>
                                    <Button variant="outline" size="icon">
                                        <Filter className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3 md:grid-cols-2">
                                    {roomData.map((room) => (
                                        <div
                                            key={room.roomNo}
                                            className="p-4 rounded-lg border bg-[var(--card)] hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 className="font-semibold text-lg">{room.roomNo}</h4>
                                                    <p className="text-sm text-[var(--muted-foreground)]">{room.floor} Floor</p>
                                                </div>
                                                <Badge
                                                    variant={room.status === 'full' ? 'default' : room.status === 'available' ? 'secondary' : 'outline'}
                                                    className={room.status === 'vacant' ? 'border-green-500 text-green-500' : ''}
                                                >
                                                    {room.status === 'full' ? 'Full' : room.status === 'available' ? `${room.capacity - room.occupied} Bed${room.capacity - room.occupied > 1 ? 's' : ''} Free` : 'Vacant'}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <BedDouble className="h-4 w-4 text-[var(--muted-foreground)]" />
                                                <span className="text-sm">{room.occupied}/{room.capacity} Occupied</span>
                                            </div>
                                            {room.students.length > 0 && (
                                                <div className="flex flex-wrap gap-1">
                                                    {room.students.slice(0, 3).map((student, i) => (
                                                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-[var(--muted)]">
                                                            {student}
                                                        </span>
                                                    ))}
                                                    {room.students.length > 3 && (
                                                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--muted)]">
                                                            +{room.students.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-4">
                                    View All Rooms
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Today's Attendance */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Today's Attendance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 gap-4 mb-4">
                                    <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                        <UserCheck className="h-6 w-6 text-green-500 mx-auto mb-2" />
                                        <p className="text-2xl font-bold text-green-500">{attendanceData.present}</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">Present</p>
                                    </div>
                                    <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                        <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                                        <p className="text-2xl font-bold text-blue-500">{attendanceData.onLeave}</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">On Leave</p>
                                    </div>
                                    <div className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                        <UserX className="h-6 w-6 text-red-500 mx-auto mb-2" />
                                        <p className="text-2xl font-bold text-red-500">{attendanceData.absent}</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">Absent</p>
                                    </div>
                                    <div className="text-center p-4 rounded-lg bg-[var(--muted)]">
                                        <Users className="h-6 w-6 text-[var(--foreground)] mx-auto mb-2" />
                                        <p className="text-2xl font-bold">{attendanceData.total}</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">Total</p>
                                    </div>
                                </div>
                                <div className="h-2 rounded-full bg-[var(--muted)] overflow-hidden">
                                    <div
                                        className="h-full bg-green-500"
                                        style={{ width: `${(attendanceData.present / attendanceData.total) * 100}%` }}
                                    />
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

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivities.map((activity, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className={`mt-1 h-2 w-2 rounded-full ${activity.status === 'pending' ? 'bg-yellow-500' :
                                                    activity.status === 'completed' ? 'bg-green-500' :
                                                        'bg-blue-500'
                                                }`} />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm">
                                                    <span className="font-medium">{activity.student}</span>
                                                    {' '}{activity.action}
                                                </p>
                                                <p className="text-xs text-[var(--muted-foreground)]">{activity.time}</p>
                                            </div>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Mess Schedule */}
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Utensils className="h-5 w-5 text-[var(--color-ai-purple)]" />
                                <CardTitle className="text-lg font-semibold">Today's Mess Menu</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {messSchedule.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--muted)]/50">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-medium text-sm">{item.meal}</span>
                                                    <span className="text-xs text-[var(--muted-foreground)]">{item.time}</span>
                                                </div>
                                                <p className="text-xs text-[var(--muted-foreground)]">{item.menu}</p>
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
