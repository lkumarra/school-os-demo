/**
 * Student Learning Materials
 * Access study materials, notes, and resources
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    BookOpen,
    FileText,
    Video,
    Link,
    Download,
    Search,
    Play,
    Eye,
    Sparkles,
    Clock,
    Star
} from 'lucide-react'

// Learning materials
const materials = {
    notes: [
        { id: 1, title: 'Quadratic Equations - Complete Notes', subject: 'Mathematics', chapter: 'Ch 4', size: '2.5 MB', type: 'PDF', date: '2024-12-10' },
        { id: 2, title: 'Photosynthesis Process', subject: 'Science', chapter: 'Ch 6', size: '1.8 MB', type: 'PDF', date: '2024-12-08' },
        { id: 3, title: 'French Revolution Summary', subject: 'Social Studies', chapter: 'Ch 3', size: '1.2 MB', type: 'PDF', date: '2024-12-05' },
        { id: 4, title: 'Parts of Speech', subject: 'English', chapter: 'Grammar', size: '0.8 MB', type: 'PDF', date: '2024-12-03' }
    ],
    videos: [
        { id: 1, title: 'Introduction to Algebra', subject: 'Mathematics', duration: '15:30', views: '1.2K', thumbnail: null },
        { id: 2, title: 'Cell Structure & Function', subject: 'Science', duration: '20:45', views: '980', thumbnail: null },
        { id: 3, title: 'Indian Independence Movement', subject: 'Social Studies', duration: '25:00', views: '756', thumbnail: null }
    ],
    assignments: [
        { id: 1, title: 'Algebra Practice Set', subject: 'Mathematics', dueDate: '2024-12-18', status: 'pending' },
        { id: 2, title: 'Science Lab Report', subject: 'Science', dueDate: '2024-12-19', status: 'pending' },
        { id: 3, title: 'Essay Writing', subject: 'English', dueDate: '2024-12-20', status: 'pending' },
        { id: 4, title: 'Hindi Grammar Exercise', subject: 'Hindi', dueDate: '2024-12-15', status: 'submitted' }
    ]
}

const subjects = [
    { name: 'Mathematics', icon: '📐', resources: 12, color: 'bg-blue-500' },
    { name: 'Science', icon: '🔬', resources: 10, color: 'bg-purple-500' },
    { name: 'English', icon: '📚', resources: 8, color: 'bg-green-500' },
    { name: 'Hindi', icon: '📖', resources: 6, color: 'bg-orange-500' },
    { name: 'Social Studies', icon: '🌍', resources: 7, color: 'bg-yellow-500' }
]

export function StudentLearning() {
    return (
        <MainLayout
            title="Learning Materials"
            description="Access study resources, notes, and videos"
            permissions={['View', 'Download']}
        >
            {/* Subject Quick Access */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {subjects.map(subject => (
                    <Card key={subject.name} className="cursor-pointer hover:border-[var(--primary)] hover:shadow-md transition-all group">
                        <CardContent className="pt-4 pb-4 text-center">
                            <div className="text-3xl mb-2">{subject.icon}</div>
                            <p className="font-medium text-sm group-hover:text-[var(--primary)] transition-colors">{subject.name}</p>
                            <p className="text-xs text-[var(--muted-foreground)]">{subject.resources} resources</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Search */}
            <Card className="mb-6">
                <CardContent className="pt-4 pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                        <Input placeholder="Search for notes, videos, or assignments..." className="pl-10" />
                    </div>
                </CardContent>
            </Card>

            {/* Main Content */}
            <Card>
                <CardHeader>
                    <CardTitle>Browse Resources</CardTitle>
                    <CardDescription>Notes, videos, and assignments from your teachers</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="notes">
                        <TabsList>
                            <TabsTrigger value="notes" className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                Notes
                            </TabsTrigger>
                            <TabsTrigger value="videos" className="flex items-center gap-2">
                                <Video className="h-4 w-4" />
                                Videos
                            </TabsTrigger>
                            <TabsTrigger value="assignments" className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                Assignments
                            </TabsTrigger>
                        </TabsList>

                        {/* Notes Tab */}
                        <TabsContent value="notes" className="mt-4">
                            <div className="space-y-3">
                                {materials.notes.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between p-4 rounded-xl bg-[var(--muted)] hover:bg-[var(--accent)] transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-lg bg-[var(--card)] flex items-center justify-center">
                                                <FileText className="h-6 w-6 text-[var(--color-danger-500)]" />
                                            </div>
                                            <div>
                                                <p className="font-medium">{item.title}</p>
                                                <p className="text-sm text-[var(--muted-foreground)]">
                                                    {item.subject} • {item.chapter} • {item.size}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline">{item.type}</Badge>
                                            <Button size="sm" variant="ghost">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button size="sm" variant="ghost">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Videos Tab */}
                        <TabsContent value="videos" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {materials.videos.map(item => (
                                    <Card key={item.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                                        <div className="aspect-video bg-[var(--muted)] flex items-center justify-center relative">
                                            <div className="h-16 w-16 rounded-full bg-[var(--primary)]/80 flex items-center justify-center">
                                                <Play className="h-8 w-8 text-white fill-white ml-1" />
                                            </div>
                                            <div className="absolute bottom-2 right-2">
                                                <Badge variant="secondary">{item.duration}</Badge>
                                            </div>
                                        </div>
                                        <CardContent className="pt-3">
                                            <p className="font-medium text-sm">{item.title}</p>
                                            <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                                {item.subject} • {item.views} views
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Assignments Tab */}
                        <TabsContent value="assignments" className="mt-4">
                            <div className="space-y-3">
                                {materials.assignments.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${item.status === 'pending' ? 'bg-[var(--color-warning-500)]/10' : 'bg-[var(--color-success-500)]/10'
                                                }`}>
                                                <BookOpen className={`h-6 w-6 ${item.status === 'pending' ? 'text-[var(--color-warning-500)]' : 'text-[var(--color-success-500)]'
                                                    }`} />
                                            </div>
                                            <div>
                                                <p className="font-medium">{item.title}</p>
                                                <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-2">
                                                    {item.subject}
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        Due: {new Date(item.dueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant={item.status === 'pending' ? 'warning' : 'success'}>
                                                {item.status}
                                            </Badge>
                                            {item.status === 'pending' && (
                                                <Button size="sm">Submit</Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>

            {/* AI Study Assistant */}
            <Card className="mt-6 border-[var(--color-ai-purple)]/20">
                <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-xl ai-gradient flex items-center justify-center ai-glow">
                            <Sparkles className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">AI Study Assistant</h3>
                            <p className="text-sm text-[var(--muted-foreground)]">
                                Get personalized help with any topic or subject
                            </p>
                        </div>
                        <Button variant="ai">
                            Ask AI
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
