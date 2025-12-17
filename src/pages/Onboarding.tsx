/**
 * Onboarding Page
 * First-time setup wizard for new schools
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '@/components/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    GraduationCap,
    Building,
    Users,
    Settings,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Sparkles,
    Upload
} from 'lucide-react'

const steps = [
    { id: 1, title: 'School Details', icon: Building },
    { id: 2, title: 'Admin Setup', icon: Users },
    { id: 3, title: 'Configuration', icon: Settings },
    { id: 4, title: 'Complete', icon: CheckCircle2 }
]

export function OnboardingPage() {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1)

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        } else {
            // After onboarding, go to login for demo flow
            navigate('/login')
        }
    }

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <AuthLayout>
            <div className="w-full max-w-2xl">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl ai-gradient ai-glow mb-4">
                        <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-[var(--foreground)]">Welcome to SchoolOS</h1>
                    <p className="text-[var(--muted-foreground)] mt-1">
                        Let's set up your school in just a few steps
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const isActive = currentStep === step.id
                        const isCompleted = currentStep > step.id

                        return (
                            <div key={step.id} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${isActive
                                            ? 'ai-gradient text-white ai-glow'
                                            : isCompleted
                                                ? 'bg-[var(--color-success-500)] text-white'
                                                : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ) : (
                                            <Icon className="h-5 w-5" />
                                        )}
                                    </div>
                                    <span className={`text-xs mt-2 ${isActive ? 'text-[var(--foreground)] font-medium' : 'text-[var(--muted-foreground)]'
                                        }`}>
                                        {step.title}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`w-16 h-0.5 mx-2 ${currentStep > step.id ? 'bg-[var(--color-success-500)]' : 'bg-[var(--muted)]'
                                            }`}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Step Content */}
                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle>
                            {currentStep === 1 && 'Enter School Details'}
                            {currentStep === 2 && 'Set Up Admin Account'}
                            {currentStep === 3 && 'Configure Your School'}
                            {currentStep === 4 && 'Setup Complete!'}
                        </CardTitle>
                        <CardDescription>
                            {currentStep === 1 && 'Basic information about your school'}
                            {currentStep === 2 && 'Create the primary administrator account'}
                            {currentStep === 3 && 'Customize your platform settings'}
                            {currentStep === 4 && 'Your school is ready to use'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* Step 1: School Details */}
                        {currentStep === 1 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">School Name</label>
                                    <Input placeholder="Delhi Public School" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Affiliation Board</label>
                                    <Input placeholder="CBSE / ICSE / State Board" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">City</label>
                                        <Input placeholder="New Delhi" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">State</label>
                                        <Input placeholder="Delhi" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">School Logo</label>
                                    <div className="border-2 border-dashed border-[var(--border)] rounded-lg p-6 text-center hover:border-[var(--primary)] transition-colors cursor-pointer">
                                        <Upload className="h-8 w-8 mx-auto text-[var(--muted-foreground)] mb-2" />
                                        <p className="text-sm text-[var(--muted-foreground)]">
                                            Click to upload or drag and drop
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Admin Setup */}
                        {currentStep === 2 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Admin Name</label>
                                    <Input placeholder="Dr. Rajesh Kumar" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <Input type="email" placeholder="admin@school.edu.in" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <Input placeholder="+91 9876543210" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Create Password</label>
                                    <Input type="password" placeholder="••••••••" />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Configuration */}
                        {currentStep === 3 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Academic Year</label>
                                    <Input placeholder="2024-25" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Session Start</label>
                                        <Input type="date" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Session End</label>
                                        <Input type="date" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Modules to Enable</label>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        {['Admissions', 'Academics', 'Fees', 'Transport', 'Hostel', 'Library'].map((module) => (
                                            <label key={module} className="flex items-center gap-2 p-3 rounded-lg border border-[var(--border)] cursor-pointer hover:bg-[var(--muted)] transition-colors">
                                                <input type="checkbox" defaultChecked className="rounded" />
                                                <span className="text-sm">{module}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Complete */}
                        {currentStep === 4 && (
                            <div className="text-center py-6">
                                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[var(--color-success-500)] text-white mb-4">
                                    <CheckCircle2 className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">You're All Set!</h3>
                                <p className="text-[var(--muted-foreground)] mb-6">
                                    Your school has been successfully configured. You can now start using SchoolOS.
                                </p>
                                <Badge variant="ai" className="gap-1">
                                    <Sparkles className="h-3 w-3" />
                                    AI features are ready
                                </Badge>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--border)]">
                            <Button
                                variant="ghost"
                                onClick={handlePrev}
                                disabled={currentStep === 1}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Previous
                            </Button>
                            <Button onClick={handleNext}>
                                {currentStep === 4 ? 'Go to Login' : 'Continue'}
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthLayout>
    )
}
