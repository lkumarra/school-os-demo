/**
 * AI Assistant Module
 * Central AI assistant with multiple capabilities
 */

import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
    Sparkles,
    Send,
    MessageSquare,
    BookOpen,
    Calendar,
    CreditCard,
    Users,
    FileText,
    Lightbulb,
    Search,
    Zap,
    Brain
} from 'lucide-react'

// AI capabilities
const capabilities = [
    { id: 'chat', name: 'Ask Anything', description: 'General queries about school operations', icon: MessageSquare, color: 'bg-blue-500' },
    { id: 'lesson', name: 'Lesson Planning', description: 'AI-generated lesson plans and activities', icon: BookOpen, color: 'bg-green-500' },
    { id: 'schedule', name: 'Smart Scheduling', description: 'Optimize timetables and meetings', icon: Calendar, color: 'bg-purple-500' },
    { id: 'fees', name: 'Fee Analytics', description: 'Collection predictions and insights', icon: CreditCard, color: 'bg-orange-500' },
    { id: 'students', name: 'Student Insights', description: 'Performance analysis and predictions', icon: Users, color: 'bg-pink-500' },
    { id: 'reports', name: 'Report Generation', description: 'Auto-generate comprehensive reports', icon: FileText, color: 'bg-teal-500' }
]

// Quick prompts
const quickPrompts = [
    'Generate a lesson plan for Chapter 4 - Quadratic Equations',
    'Show students with low attendance this month',
    'What is the fee collection rate for December?',
    'Suggest activities for Science Day',
    'Analyze Grade 8 performance trends'
]

// Sample conversation
const sampleConversation = [
    { role: 'user', content: 'What is the attendance rate for Grade 8-A today?' },
    { role: 'ai', content: 'The attendance rate for Grade 8-A today is **92.5%**. Out of 40 students, 37 are present and 3 are absent (Arjun Sharma - sick leave, Priya Patel - family event, Rohan Gupta - not informed). Would you like me to send a notification to the absent students\' parents?' },
    { role: 'user', content: 'Yes, please send notifications to their parents.' },
    { role: 'ai', content: 'I\'ve sent attendance notifications to the parents of:\n- **Arjun Sharma** - SMS + App notification\n- **Priya Patel** - SMS + App notification\n- **Rohan Gupta** - SMS + App notification (marked as urgent since no prior information)\n\nNotifications were sent at 10:45 AM. Would you like me to follow up if they don\'t respond by noon?' }
]

export function AIAssistant() {
    const [inputValue, setInputValue] = useState('')

    return (
        <MainLayout
            title="AI Assistant"
            description="Your intelligent school management companion"
            permissions={['View']}
        >
            {/* Hero Section */}
            <Card className="mb-6 overflow-hidden">
                <div className="relative">
                    <div className="absolute inset-0 ai-gradient opacity-10" />
                    <CardContent className="pt-8 pb-8 relative">
                        <div className="text-center max-w-2xl mx-auto">
                            <div className="h-16 w-16 mx-auto rounded-2xl ai-gradient flex items-center justify-center ai-glow mb-4">
                                <Brain className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">SchoolOS AI</h2>
                            <p className="text-[var(--muted-foreground)] mb-6">
                                Powered by advanced AI to help you manage your school more efficiently
                            </p>
                            <div className="flex items-center gap-3 max-w-lg mx-auto">
                                <div className="relative flex-1">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--muted-foreground)]" />
                                    <Input
                                        placeholder="Ask me anything about your school..."
                                        className="pl-12 h-12 text-base"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                </div>
                                <Button size="lg" variant="ai">
                                    <Send className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>

            {/* Quick Prompts */}
            <div className="mb-6">
                <h3 className="text-sm font-medium text-[var(--muted-foreground)] mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Quick Prompts
                </h3>
                <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((prompt, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => setInputValue(prompt)}
                        >
                            {prompt}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Capabilities */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Zap className="h-4 w-4 text-[var(--color-ai-purple)]" />
                                AI Capabilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {capabilities.map((cap) => {
                                    const Icon = cap.icon
                                    return (
                                        <div
                                            key={cap.id}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--muted)] transition-colors cursor-pointer"
                                        >
                                            <div className={`h-10 w-10 rounded-lg ${cap.color} flex items-center justify-center`}>
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{cap.name}</p>
                                                <p className="text-xs text-[var(--muted-foreground)]">{cap.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Conversation */}
                <div className="lg:col-span-2">
                    <Card className="h-full flex flex-col">
                        <CardHeader className="border-b border-[var(--border)]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl ai-gradient flex items-center justify-center">
                                        <Sparkles className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base">AI Conversation</CardTitle>
                                        <CardDescription>Chat with your AI assistant</CardDescription>
                                    </div>
                                </div>
                                <Badge variant="ai">Online</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col p-0">
                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {sampleConversation.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                                            {msg.role === 'ai' && (
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="h-6 w-6 rounded-lg ai-gradient flex items-center justify-center">
                                                        <Sparkles className="h-3 w-3 text-white" />
                                                    </div>
                                                    <span className="text-xs font-medium text-[var(--color-ai-purple)]">AI Assistant</span>
                                                </div>
                                            )}
                                            <div className={`p-3 rounded-2xl ${msg.role === 'user'
                                                    ? 'bg-[var(--primary)] text-white rounded-br-sm'
                                                    : 'bg-[var(--muted)] rounded-bl-sm'
                                                }`}>
                                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t border-[var(--border)]">
                                <div className="flex items-center gap-3">
                                    <Input
                                        placeholder="Type your message..."
                                        className="flex-1"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                    <Button variant="ai">
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
