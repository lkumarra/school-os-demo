/**
 * Parent Communication
 * Message teachers and view announcements
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    MessageSquare,
    Bell,
    Send,
    Search,
    Plus,
    Phone,
    Mail,
    ChevronRight
} from 'lucide-react'

// Teachers data
const teachers = [
    { id: 1, name: 'Mr. Anil Sharma', subject: 'Mathematics', lastMessage: 'Thank you for your feedback', time: '2 hours ago', unread: 0 },
    { id: 2, name: 'Ms. Priya Patel', subject: 'English', lastMessage: 'Please check the assignment...', time: '1 day ago', unread: 2 },
    { id: 3, name: 'Dr. Vijay Gupta', subject: 'Science', lastMessage: 'Lab report submitted', time: '3 days ago', unread: 0 }
]

// Announcements
const announcements = [
    { id: 1, title: 'Parent-Teacher Meeting', description: 'PTM scheduled for Grade 8 on December 20, 2024. Please confirm your attendance.', date: '2024-12-15', priority: 'high', read: false },
    { id: 2, title: 'Winter Break Schedule', description: 'School will remain closed from December 23 to January 2. Classes resume on January 3, 2025.', date: '2024-12-14', priority: 'normal', read: false },
    { id: 3, title: 'Sports Day Practice', description: 'Students selected for sports day events should attend practice sessions from 3 PM to 5 PM.', date: '2024-12-12', priority: 'normal', read: true },
    { id: 4, title: 'Annual Day Rehearsals', description: 'Rehearsals for annual day program will begin from January 5, 2025.', date: '2024-12-10', priority: 'normal', read: true }
]

// Sample conversation
const conversation = [
    { sender: 'teacher', message: 'Good evening, Mrs. Sharma. I wanted to discuss Aarav\'s performance in the recent test.', time: '10:30 AM' },
    { sender: 'parent', message: 'Good evening Sir. Yes, please go ahead.', time: '10:32 AM' },
    { sender: 'teacher', message: 'Aarav has shown great improvement in algebra. However, he needs to focus more on geometry questions.', time: '10:35 AM' },
    { sender: 'parent', message: 'Thank you for the feedback. We will work on geometry at home.', time: '10:38 AM' },
    { sender: 'teacher', message: 'That would be helpful. I am also sending some practice worksheets.', time: '10:40 AM' }
]

export function ParentCommunication() {
    return (
        <MainLayout
            title="Communication"
            description="Message teachers and view school announcements"
            permissions={['View', 'Create']}
        >
            <Tabs defaultValue="messages">
                <TabsList className="mb-6">
                    <TabsTrigger value="messages" className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Messages
                    </TabsTrigger>
                    <TabsTrigger value="announcements" className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        Announcements
                        <Badge variant="destructive" className="ml-1 text-xs">2</Badge>
                    </TabsTrigger>
                </TabsList>

                {/* Messages Tab */}
                <TabsContent value="messages">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Teacher List */}
                        <Card>
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-base">Teachers</CardTitle>
                                    <Button size="sm" variant="ghost">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="relative mt-2">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                                    <Input placeholder="Search teachers..." className="pl-9" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {teachers.map((teacher, index) => (
                                        <div
                                            key={teacher.id}
                                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${index === 0 ? 'bg-[var(--primary)]/10 border border-[var(--primary)]/20' : 'hover:bg-[var(--muted)]'
                                                }`}
                                        >
                                            <Avatar className="h-10 w-10">
                                                <AvatarFallback className="text-xs">
                                                    {teacher.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <p className="font-medium text-sm truncate">{teacher.name}</p>
                                                    <span className="text-xs text-[var(--muted-foreground)]">{teacher.time}</span>
                                                </div>
                                                <p className="text-xs text-[var(--muted-foreground)]">{teacher.subject}</p>
                                                <p className="text-xs text-[var(--muted-foreground)] truncate mt-0.5">{teacher.lastMessage}</p>
                                            </div>
                                            {teacher.unread > 0 && (
                                                <Badge variant="destructive" className="text-xs">{teacher.unread}</Badge>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Conversation */}
                        <Card className="lg:col-span-2">
                            <CardHeader className="border-b border-[var(--border)]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback>AS</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-base">Mr. Anil Sharma</CardTitle>
                                            <CardDescription>Mathematics Teacher</CardDescription>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="sm">
                                            <Phone className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Mail className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                {/* Messages */}
                                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                                    {conversation.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${msg.sender === 'parent' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-[70%] p-3 rounded-2xl ${msg.sender === 'parent'
                                                    ? 'bg-[var(--primary)] text-white rounded-br-sm'
                                                    : 'bg-[var(--muted)] rounded-bl-sm'
                                                }`}>
                                                <p className="text-sm">{msg.message}</p>
                                                <p className={`text-xs mt-1 ${msg.sender === 'parent' ? 'text-white/70' : 'text-[var(--muted-foreground)]'}`}>
                                                    {msg.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Input */}
                                <div className="p-4 border-t border-[var(--border)]">
                                    <div className="flex items-center gap-3">
                                        <Input placeholder="Type your message..." className="flex-1" />
                                        <Button>
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Announcements Tab */}
                <TabsContent value="announcements">
                    <div className="space-y-4">
                        {announcements.map((item) => (
                            <Card
                                key={item.id}
                                className={`cursor-pointer hover:shadow-md transition-shadow ${!item.read ? 'border-l-4 border-l-[var(--primary)]' : ''
                                    }`}
                            >
                                <CardContent className="pt-4 pb-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${item.priority === 'high' ? 'bg-[var(--color-danger-500)]/10' : 'bg-[var(--muted)]'
                                                }`}>
                                                <Bell className={`h-5 w-5 ${item.priority === 'high' ? 'text-[var(--color-danger-500)]' : 'text-[var(--muted-foreground)]'
                                                    }`} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-semibold">{item.title}</h4>
                                                    {!item.read && <Badge variant="default" className="text-xs">New</Badge>}
                                                    {item.priority === 'high' && <Badge variant="destructive" className="text-xs">Important</Badge>}
                                                </div>
                                                <p className="text-sm text-[var(--muted-foreground)] mt-1">{item.description}</p>
                                                <p className="text-xs text-[var(--muted-foreground)] mt-2">
                                                    {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-[var(--muted-foreground)] shrink-0" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </MainLayout>
    )
}
