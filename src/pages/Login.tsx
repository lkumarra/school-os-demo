/**
 * Login Page
 * Premium login page with school branding and modern design
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
    Mail,
    Lock,
    Eye,
    EyeOff,
    Sparkles,
    ArrowRight
} from 'lucide-react'

export function LoginPage() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // For demo, navigate to role switch to select a role
        navigate('/role-switch')
    }

    return (
        <AuthLayout>
            <div className="w-full max-w-md">
                {/* Logo & Title */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl ai-gradient ai-glow mb-4">
                        <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-[var(--foreground)]">SchoolOS</h1>
                    <p className="text-[var(--muted-foreground)] mt-2">
                        AI-Powered School Management Platform
                    </p>
                </div>

                {/* Login Card */}
                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle>Welcome back</CardTitle>
                        <CardDescription>
                            Sign in to your account to continue
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--foreground)]">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                                    <Input
                                        type="email"
                                        placeholder="you@school.edu.in"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--foreground)]">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-sm text-[var(--primary)] hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" className="w-full" size="lg">
                                Sign In
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[var(--border)]" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-[var(--card)] px-4 text-[var(--muted-foreground)]">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Demo Access */}
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => navigate('/role-switch')}
                        >
                            <Sparkles className="h-4 w-4 mr-2 text-[var(--color-ai-purple)]" />
                            Demo Access (All Roles)
                        </Button>
                    </CardContent>
                </Card>

                {/* AI Badge */}
                <div className="mt-6 flex justify-center">
                    <Badge variant="ai" className="gap-1">
                        <Sparkles className="h-3 w-3" />
                        Powered by AI
                    </Badge>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-[var(--muted-foreground)] mt-6">
                    By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </AuthLayout>
    )
}
