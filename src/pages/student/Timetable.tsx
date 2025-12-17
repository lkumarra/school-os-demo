/**
 * Student Timetable
 * Weekly class schedule view
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Download, Clock } from 'lucide-react'

// Timetable data
const weeklySchedule = {
    Monday: [
        { time: '08:30 - 09:20', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201' },
        { time: '09:20 - 10:10', subject: 'English', teacher: 'Ms. Patel', room: 'Room 105' },
        { time: '10:30 - 11:20', subject: 'Science', teacher: 'Dr. Gupta', room: 'Lab 2' },
        { time: '11:20 - 12:10', subject: 'Hindi', teacher: 'Mrs. Verma', room: 'Room 201' },
        { time: '12:50 - 01:40', subject: 'Social Studies', teacher: 'Mr. Singh', room: 'Room 301' },
        { time: '01:40 - 02:30', subject: 'Computer', teacher: 'Ms. Rao', room: 'Comp Lab' }
    ],
    Tuesday: [
        { time: '08:30 - 09:20', subject: 'English', teacher: 'Ms. Patel', room: 'Room 105' },
        { time: '09:20 - 10:10', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201' },
        { time: '10:30 - 11:20', subject: 'Hindi', teacher: 'Mrs. Verma', room: 'Room 201' },
        { time: '11:20 - 12:10', subject: 'Science', teacher: 'Dr. Gupta', room: 'Lab 2' },
        { time: '12:50 - 01:40', subject: 'Physical Education', teacher: 'Mr. Kumar', room: 'Ground' },
        { time: '01:40 - 02:30', subject: 'Art', teacher: 'Ms. Iyer', room: 'Art Room' }
    ],
    Wednesday: [
        { time: '08:30 - 09:20', subject: 'Science', teacher: 'Dr. Gupta', room: 'Lab 2' },
        { time: '09:20 - 10:10', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201' },
        { time: '10:30 - 11:20', subject: 'English', teacher: 'Ms. Patel', room: 'Room 105' },
        { time: '11:20 - 12:10', subject: 'Social Studies', teacher: 'Mr. Singh', room: 'Room 301' },
        { time: '12:50 - 01:40', subject: 'Hindi', teacher: 'Mrs. Verma', room: 'Room 201' },
        { time: '01:40 - 02:30', subject: 'Music', teacher: 'Ms. Desai', room: 'Music Room' }
    ],
    Thursday: [
        { time: '08:30 - 09:20', subject: 'Hindi', teacher: 'Mrs. Verma', room: 'Room 201' },
        { time: '09:20 - 10:10', subject: 'Science', teacher: 'Dr. Gupta', room: 'Lab 2' },
        { time: '10:30 - 11:20', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201' },
        { time: '11:20 - 12:10', subject: 'English', teacher: 'Ms. Patel', room: 'Room 105' },
        { time: '12:50 - 01:40', subject: 'Computer', teacher: 'Ms. Rao', room: 'Comp Lab' },
        { time: '01:40 - 02:30', subject: 'Library', teacher: 'Ms. Joshi', room: 'Library' }
    ],
    Friday: [
        { time: '08:30 - 09:20', subject: 'Social Studies', teacher: 'Mr. Singh', room: 'Room 301' },
        { time: '09:20 - 10:10', subject: 'Hindi', teacher: 'Mrs. Verma', room: 'Room 201' },
        { time: '10:30 - 11:20', subject: 'Science', teacher: 'Dr. Gupta', room: 'Lab 2' },
        { time: '11:20 - 12:10', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201' },
        { time: '12:50 - 01:40', subject: 'English', teacher: 'Ms. Patel', room: 'Room 105' },
        { time: '01:40 - 02:30', subject: 'Physical Education', teacher: 'Mr. Kumar', room: 'Ground' }
    ],
    Saturday: [
        { time: '08:30 - 09:20', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201' },
        { time: '09:20 - 10:10', subject: 'English', teacher: 'Ms. Patel', room: 'Room 105' },
        { time: '10:30 - 11:20', subject: 'Science', teacher: 'Dr. Gupta', room: 'Lab 2' },
        { time: '11:20 - 12:10', subject: 'Activity Period', teacher: '-', room: '-' }
    ]
}

const subjectColors: Record<string, string> = {
    'Mathematics': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    'English': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    'Science': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    'Hindi': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    'Social Studies': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    'Computer': 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    'Physical Education': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    'Art': 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
    'Music': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    'Library': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    'Activity Period': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
}

export function StudentTimetable() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
    const isWeekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(today)

    return (
        <MainLayout
            title="Timetable"
            description="Grade 8 - Section A | Weekly Schedule"
            permissions={['View']}
            actions={
                <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                </Button>
            }
        >
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Weekly Class Schedule
                    </CardTitle>
                    <CardDescription>
                        Academic Year 2024-25 | Session: April - March
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue={isWeekday ? today : 'Monday'}>
                        <TabsList className="grid grid-cols-6 mb-4">
                            {Object.keys(weeklySchedule).map(day => (
                                <TabsTrigger key={day} value={day} className="text-xs md:text-sm">
                                    {day.slice(0, 3)}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {Object.entries(weeklySchedule).map(([day, classes]) => (
                            <TabsContent key={day} value={day}>
                                <div className="space-y-3">
                                    {classes.map((cls, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-[var(--muted)] hover:bg-[var(--accent)] transition-colors"
                                        >
                                            <div className="min-w-[120px] text-center">
                                                <div className="flex items-center justify-center gap-1 text-sm font-medium">
                                                    <Clock className="h-4 w-4 text-[var(--muted-foreground)]" />
                                                    <span>{cls.time.split(' - ')[0]}</span>
                                                </div>
                                                <p className="text-xs text-[var(--muted-foreground)]">
                                                    to {cls.time.split(' - ')[1]}
                                                </p>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Badge className={subjectColors[cls.subject] || 'bg-gray-100'}>
                                                        {cls.subject}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-[var(--muted-foreground)]">
                                                    {cls.teacher !== '-' ? `${cls.teacher} • ${cls.room}` : 'Free Period'}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Break Indicator */}
                                <div className="mt-4 p-3 rounded-lg border-2 border-dashed border-[var(--border)] text-center">
                                    <p className="text-sm text-[var(--muted-foreground)]">
                                        <strong>Lunch Break:</strong> 12:10 PM - 12:50 PM
                                    </p>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
