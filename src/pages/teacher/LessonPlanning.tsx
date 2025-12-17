/**
 * Teacher Lesson Planning
 * AI-assisted lesson planning interface
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AISuggestion } from '@/components/cards/AIInsightCard'
import {
    BookOpen,
    Plus,
    Sparkles,
    Calendar,
    FileText,
    Video,
    Link,
    ChevronRight,
    Clock,
    Target,
    ListChecks,
    Lightbulb
} from 'lucide-react'

// Sample lesson plans
const lessonPlans = [
    {
        id: 1,
        title: 'Introduction to Quadratic Equations',
        class: 'Grade 10-A',
        chapter: 'Chapter 4: Quadratic Equations',
        date: '2024-12-18',
        duration: '45 mins',
        status: 'upcoming',
        objectives: ['Understand the standard form', 'Identify coefficients', 'Solve basic equations']
    },
    {
        id: 2,
        title: 'Properties of Triangles',
        class: 'Grade 8-A',
        chapter: 'Chapter 7: Triangles',
        date: '2024-12-17',
        duration: '45 mins',
        status: 'completed',
        objectives: ['Learn angle sum property', 'Identify types of triangles', 'Apply properties']
    },
    {
        id: 3,
        title: 'Algebraic Expressions',
        class: 'Grade 7-A',
        chapter: 'Chapter 3: Algebra',
        date: '2024-12-19',
        duration: '45 mins',
        status: 'draft',
        objectives: ['Define terms and coefficients', 'Simplify expressions', 'Add/subtract expressions']
    }
]

// AI suggestions
const aiSuggestions = [
    { title: 'Visual Aid: Triangle Types Poster', type: 'resource' },
    { title: 'Quick Quiz: 5 Questions on Properties', type: 'assessment' },
    { title: 'Group Activity: Triangle Hunt', type: 'activity' }
]

export function TeacherLessonPlanning() {
    return (
        <MainLayout
            title="Lesson Planning"
            description="Create and manage lesson plans with AI assistance"
            permissions={['View', 'Create', 'Edit']}
            actions={
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Lesson Plan
                </Button>
            }
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tabs */}
                    <Card>
                        <CardHeader>
                            <CardTitle>My Lesson Plans</CardTitle>
                            <CardDescription>Manage your teaching plans</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="upcoming">
                                <TabsList>
                                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                                    <TabsTrigger value="completed">Completed</TabsTrigger>
                                    <TabsTrigger value="drafts">Drafts</TabsTrigger>
                                </TabsList>

                                <TabsContent value="upcoming" className="mt-4 space-y-4">
                                    {lessonPlans.filter(p => p.status === 'upcoming').map(plan => (
                                        <div
                                            key={plan.id}
                                            className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all cursor-pointer"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 className="font-semibold">{plan.title}</h4>
                                                    <p className="text-sm text-[var(--muted-foreground)]">{plan.class} • {plan.chapter}</p>
                                                </div>
                                                <Badge variant="default">Upcoming</Badge>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(plan.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    {plan.duration}
                                                </span>
                                            </div>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {plan.objectives.slice(0, 2).map((obj, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                        <Target className="h-3 w-3 mr-1" />
                                                        {obj}
                                                    </Badge>
                                                ))}
                                                {plan.objectives.length > 2 && (
                                                    <Badge variant="secondary" className="text-xs">
                                                        +{plan.objectives.length - 2} more
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>

                                <TabsContent value="completed" className="mt-4 space-y-4">
                                    {lessonPlans.filter(p => p.status === 'completed').map(plan => (
                                        <div
                                            key={plan.id}
                                            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/50 cursor-pointer"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 className="font-semibold">{plan.title}</h4>
                                                    <p className="text-sm text-[var(--muted-foreground)]">{plan.class} • {plan.chapter}</p>
                                                </div>
                                                <Badge variant="success">Completed</Badge>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(plan.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>

                                <TabsContent value="drafts" className="mt-4 space-y-4">
                                    {lessonPlans.filter(p => p.status === 'draft').map(plan => (
                                        <div
                                            key={plan.id}
                                            className="p-4 rounded-xl border border-dashed border-[var(--border)] cursor-pointer"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 className="font-semibold">{plan.title}</h4>
                                                    <p className="text-sm text-[var(--muted-foreground)]">{plan.class} • {plan.chapter}</p>
                                                </div>
                                                <Badge variant="secondary">Draft</Badge>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Continue Editing
                                                <ChevronRight className="h-4 w-4 ml-1" />
                                            </Button>
                                        </div>
                                    ))}
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    {/* Lesson Plan Template */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                Quick Lesson Plan
                            </CardTitle>
                            <CardDescription>Create a new lesson plan from template</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Class</label>
                                    <Input placeholder="Select class" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Chapter/Topic</label>
                                    <Input placeholder="e.g., Chapter 4: Quadratic Equations" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Lesson Title</label>
                                <Input placeholder="Enter lesson title" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Learning Objectives</label>
                                <textarea
                                    className="w-full h-24 p-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                                    placeholder="Enter learning objectives (one per line)"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <Button>
                                    Save as Draft
                                </Button>
                                <Button variant="ai">
                                    <Sparkles className="h-4 w-4 mr-2" />
                                    Generate with AI
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - AI Assistant */}
                <div className="space-y-6">
                    {/* AI Lesson Assistant */}
                    <Card className="border-[var(--color-ai-purple)]/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-[var(--color-ai-purple)]" />
                                AI Lesson Assistant
                            </CardTitle>
                            <CardDescription>
                                Get AI-powered suggestions for your lessons
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <AISuggestion
                                title="Generate Lesson Plan"
                                description="AI creates complete plan from topic"
                                icon={<BookOpen className="h-5 w-5 text-white" />}
                            />
                            <AISuggestion
                                title="Create Quiz Questions"
                                description="Auto-generate assessment questions"
                                icon={<ListChecks className="h-5 w-5 text-white" />}
                            />
                            <AISuggestion
                                title="Activity Ideas"
                                description="Get engaging classroom activities"
                                icon={<Lightbulb className="h-5 w-5 text-white" />}
                            />
                        </CardContent>
                    </Card>

                    {/* Resource Library */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Resource Library</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" className="w-full justify-start">
                                <Video className="h-4 w-4 mr-2" />
                                Video Resources
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <FileText className="h-4 w-4 mr-2" />
                                Worksheets
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Link className="h-4 w-4 mr-2" />
                                External Links
                            </Button>
                        </CardContent>
                    </Card>

                    {/* AI Suggestions for current topic */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Lightbulb className="h-4 w-4 text-[var(--color-warning-500)]" />
                                Suggested Resources
                            </CardTitle>
                            <CardDescription>For "Properties of Triangles"</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {aiSuggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg bg-[var(--muted)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                                    >
                                        <span className="text-sm">{suggestion.title}</span>
                                        <Badge variant="outline" className="text-xs">{suggestion.type}</Badge>
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
