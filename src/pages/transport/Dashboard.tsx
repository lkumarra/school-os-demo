/**
 * Transport Manager Dashboard
 * Vehicle tracking, route management, and driver coordination
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
    Bus,
    Users,
    MapPin,
    Clock,
    Search,
    Filter,
    Navigation,
    Phone,
    Fuel,
    Wrench,
    Plus,
    Route,
    Calendar,
    Sparkles,
    AlertTriangle
} from 'lucide-react'

// Mock vehicle data
const vehicleData = [
    { id: 'BUS-001', number: 'KA-01-AB-1234', route: 'Route A - Koramangala', driver: 'Rajesh Kumar', capacity: 45, current: 42, status: 'active', eta: '8:15 AM' },
    { id: 'BUS-002', number: 'KA-01-CD-5678', route: 'Route B - Indiranagar', driver: 'Suresh Patil', capacity: 45, current: 38, status: 'active', eta: '8:20 AM' },
    { id: 'BUS-003', number: 'KA-01-EF-9012', route: 'Route C - Whitefield', driver: 'Mohan Das', capacity: 50, current: 47, status: 'delayed', eta: '8:35 AM' },
    { id: 'BUS-004', number: 'KA-01-GH-3456', route: 'Route D - Electronic City', driver: 'Venkat Rao', capacity: 45, current: 40, status: 'active', eta: '8:25 AM' },
    { id: 'BUS-005', number: 'KA-01-IJ-7890', route: 'Route E - HSR Layout', driver: 'Krishna Murthy', capacity: 40, current: 0, status: 'maintenance', eta: '-' },
    { id: 'BUS-006', number: 'KA-01-KL-2345', route: 'Route F - Marathahalli', driver: 'Prakash S.', capacity: 45, current: 35, status: 'active', eta: '8:18 AM' },
]

// Route overview
const routeOverview = [
    { name: 'Route A - Koramangala', stops: 12, students: 42, distance: '18 km', duration: '45 min' },
    { name: 'Route B - Indiranagar', stops: 10, students: 38, distance: '15 km', duration: '40 min' },
    { name: 'Route C - Whitefield', stops: 15, students: 47, distance: '25 km', duration: '55 min' },
    { name: 'Route D - Electronic City', stops: 14, students: 40, distance: '22 km', duration: '50 min' },
]

// Recent alerts
const recentAlerts = [
    { type: 'delay', message: 'BUS-003 delayed by 10 mins due to traffic', time: '5 mins ago', severity: 'warning' },
    { type: 'maintenance', message: 'BUS-005 scheduled for maintenance today', time: '1 hour ago', severity: 'info' },
    { type: 'route', message: 'Route C diverted due to road work', time: '2 hours ago', severity: 'warning' },
    { type: 'fuel', message: 'BUS-007 fuel level low - refueling needed', time: '3 hours ago', severity: 'alert' },
]

// AI Insights
const aiInsights: AIInsight[] = [
    {
        id: '1',
        title: 'Route Optimization',
        description: 'Route C can save 8 mins by taking Outer Ring Road. 15 students affected would arrive earlier.',
        category: 'optimization',
        priority: 'medium',
        actionable: true
    },
    {
        id: '2',
        title: 'Maintenance Alert',
        description: 'BUS-002 due for service in 3 days. Recommend scheduling during weekend.',
        category: 'maintenance',
        priority: 'high',
        actionable: true
    }
]

// Driver schedule
const driverSchedule = [
    { name: 'Rajesh Kumar', shift: 'Morning', start: '6:30 AM', end: '9:00 AM', status: 'active' },
    { name: 'Suresh Patil', shift: 'Morning', start: '6:30 AM', end: '9:00 AM', status: 'active' },
    { name: 'Mohan Das', shift: 'Morning', start: '6:30 AM', end: '9:00 AM', status: 'active' },
    { name: 'Venkat Rao', shift: 'Evening', start: '3:00 PM', end: '5:30 PM', status: 'standby' },
]

export function TransportDashboard() {
    return (
        <MainLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Transport Dashboard</h1>
                        <p className="text-[var(--muted-foreground)]">
                            Real-time vehicle tracking and route management
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="gap-2">
                            <Calendar className="h-4 w-4" />
                            Schedule
                        </Button>
                        <Button className="gap-2 ai-gradient text-white">
                            <Plus className="h-4 w-4" />
                            Add Vehicle
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                        title="Active Vehicles"
                        value="24"
                        icon={<Bus className="h-5 w-5" />}
                        trend={{ value: 0, label: 'on route' }}
                    />
                    <StatsCard
                        title="Students Onboard"
                        value="856"
                        icon={<Users className="h-5 w-5" />}
                        trend={{ value: 2.5, label: 'currently' }}
                    />
                    <StatsCard
                        title="Routes Today"
                        value="18"
                        icon={<Route className="h-5 w-5" />}
                        trend={{ value: 0, label: 'morning + evening' }}
                    />
                    <StatsCard
                        title="Avg. On-Time"
                        value="94%"
                        icon={<Clock className="h-5 w-5" />}
                        trend={{ value: 3, label: 'this week' }}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Left Column - Vehicle Tracking */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Live Vehicle Status */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Live Vehicle Status
                                </CardTitle>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" />
                                        <Input
                                            placeholder="Search vehicle..."
                                            className="pl-9 w-48"
                                        />
                                    </div>
                                    <Button variant="outline" size="icon">
                                        <Filter className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {vehicleData.map((vehicle) => (
                                        <div
                                            key={vehicle.id}
                                            className="flex items-center gap-4 p-4 rounded-lg border bg-[var(--card)] hover:shadow-md transition-shadow"
                                        >
                                            <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${vehicle.status === 'active' ? 'bg-green-500/10 text-green-500' :
                                                    vehicle.status === 'delayed' ? 'bg-yellow-500/10 text-yellow-500' :
                                                        'bg-gray-500/10 text-gray-500'
                                                }`}>
                                                <Bus className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-semibold">{vehicle.id}</h4>
                                                    <span className="text-xs text-[var(--muted-foreground)]">{vehicle.number}</span>
                                                    <Badge
                                                        variant={vehicle.status === 'active' ? 'default' : vehicle.status === 'delayed' ? 'secondary' : 'outline'}
                                                        className={
                                                            vehicle.status === 'active' ? 'bg-green-500/20 text-green-500 border-green-500/30' :
                                                                vehicle.status === 'delayed' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' :
                                                                    ''
                                                        }
                                                    >
                                                        {vehicle.status}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                                                    <span className="flex items-center gap-1">
                                                        <Route className="h-3 w-3" />
                                                        {vehicle.route}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Users className="h-3 w-3" />
                                                        {vehicle.current}/{vehicle.capacity}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium">{vehicle.driver}</p>
                                                {vehicle.eta !== '-' && (
                                                    <p className="text-xs text-[var(--muted-foreground)]">ETA: {vehicle.eta}</p>
                                                )}
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="icon" className="h-8 w-8">
                                                    <Phone className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="icon" className="h-8 w-8">
                                                    <Navigation className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Route Overview */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Route Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {routeOverview.map((route, index) => (
                                        <div key={index} className="p-4 rounded-lg border bg-[var(--card)]">
                                            <h4 className="font-semibold mb-3">{route.name}</h4>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-[var(--muted-foreground)]" />
                                                    <span>{route.stops} stops</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-[var(--muted-foreground)]" />
                                                    <span>{route.students} students</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Route className="h-4 w-4 text-[var(--muted-foreground)]" />
                                                    <span>{route.distance}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-[var(--muted-foreground)]" />
                                                    <span>{route.duration}</span>
                                                </div>
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

                        {/* Recent Alerts */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Recent Alerts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentAlerts.map((alert, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className={`mt-0.5 p-1.5 rounded-full ${alert.severity === 'alert' ? 'bg-red-500/10 text-red-500' :
                                                    alert.severity === 'warning' ? 'bg-yellow-500/10 text-yellow-500' :
                                                        'bg-blue-500/10 text-blue-500'
                                                }`}>
                                                {alert.type === 'delay' ? <Clock className="h-3 w-3" /> :
                                                    alert.type === 'maintenance' ? <Wrench className="h-3 w-3" /> :
                                                        alert.type === 'fuel' ? <Fuel className="h-3 w-3" /> :
                                                            <AlertTriangle className="h-3 w-3" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm">{alert.message}</p>
                                                <p className="text-xs text-[var(--muted-foreground)]">{alert.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Driver Schedule */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Driver Schedule</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {driverSchedule.map((driver, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[var(--muted)]/50">
                                            <div>
                                                <p className="font-medium text-sm">{driver.name}</p>
                                                <p className="text-xs text-[var(--muted-foreground)]">
                                                    {driver.shift} • {driver.start} - {driver.end}
                                                </p>
                                            </div>
                                            <Badge
                                                variant={driver.status === 'active' ? 'default' : 'secondary'}
                                                className={driver.status === 'active' ? 'bg-green-500/20 text-green-500 border-green-500/30' : ''}
                                            >
                                                {driver.status}
                                            </Badge>
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
