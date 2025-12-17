/**
 * Principal Settings
 * School configuration and settings panel
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Settings,
    Building,
    Users,
    Bell,
    Shield,
    Palette,
    Globe,
    Mail,
    Calendar,
    Save,
    Upload,
    CheckCircle
} from 'lucide-react'

export function PrincipalSettings() {
    return (
        <MainLayout
            title="School Settings"
            description="Configure your school settings and preferences"
            permissions={['View', 'Edit']}
            actions={
                <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                </Button>
            }
        >
            <Tabs defaultValue="general" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto gap-2">
                    <TabsTrigger value="general" className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="hidden sm:inline">General</span>
                    </TabsTrigger>
                    <TabsTrigger value="academic" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="hidden sm:inline">Academic</span>
                    </TabsTrigger>
                    <TabsTrigger value="users" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span className="hidden sm:inline">Users</span>
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        <span className="hidden sm:inline">Notifications</span>
                    </TabsTrigger>
                    <TabsTrigger value="security" className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span className="hidden sm:inline">Security</span>
                    </TabsTrigger>
                    <TabsTrigger value="appearance" className="flex items-center gap-2">
                        <Palette className="h-4 w-4" />
                        <span className="hidden sm:inline">Appearance</span>
                    </TabsTrigger>
                </TabsList>

                {/* General Settings */}
                <TabsContent value="general">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>School Information</CardTitle>
                                    <CardDescription>Basic details about your school</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">School Name</label>
                                            <Input defaultValue="Delhi Public School" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">School Code</label>
                                            <Input defaultValue="DPS/DEL/001" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Affiliation Board</label>
                                            <Input defaultValue="CBSE" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Affiliation Number</label>
                                            <Input defaultValue="2730001" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Address</label>
                                        <Input defaultValue="Mathura Road, New Delhi - 110003" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">City</label>
                                            <Input defaultValue="New Delhi" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">State</label>
                                            <Input defaultValue="Delhi" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">PIN Code</label>
                                            <Input defaultValue="110003" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Phone Number</label>
                                            <Input defaultValue="+91 11 2634 6300" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input type="email" defaultValue="info@dpsmathuraroad.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Website</label>
                                        <Input defaultValue="https://www.dpsmathuraroad.com" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Logo Upload */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>School Logo</CardTitle>
                                    <CardDescription>Upload your school logo</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 text-center hover:border-[var(--primary)] transition-colors cursor-pointer">
                                        <div className="h-20 w-20 mx-auto rounded-xl bg-[var(--muted)] flex items-center justify-center mb-4">
                                            <Building className="h-10 w-10 text-[var(--muted-foreground)]" />
                                        </div>
                                        <Upload className="h-6 w-6 mx-auto text-[var(--muted-foreground)] mb-2" />
                                        <p className="text-sm font-medium">Click to upload</p>
                                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                            PNG, JPG up to 2MB
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle>Modules Enabled</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {['Academics', 'Admissions', 'Fees', 'Transport', 'Hostel', 'Library', 'HR', 'Communication'].map((module) => (
                                            <div key={module} className="flex items-center justify-between p-2 rounded-lg hover:bg-[var(--muted)]">
                                                <span className="text-sm">{module}</span>
                                                <Badge variant="success" className="gap-1">
                                                    <CheckCircle className="h-3 w-3" />
                                                    Active
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                {/* Academic Settings */}
                <TabsContent value="academic">
                    <Card>
                        <CardHeader>
                            <CardTitle>Academic Year Settings</CardTitle>
                            <CardDescription>Configure academic year and session details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Current Academic Year</label>
                                    <Input defaultValue="2024-25" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Session Start Date</label>
                                    <Input type="date" defaultValue="2024-04-01" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Session End Date</label>
                                    <Input type="date" defaultValue="2025-03-31" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Classes Offered</label>
                                    <Input defaultValue="Nursery to Grade 12" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Sections per Class</label>
                                    <Input defaultValue="A, B, C, D" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Other tabs show placeholders */}
                <TabsContent value="users">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Management</CardTitle>
                            <CardDescription>Manage user roles and permissions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                <div className="text-center">
                                    <Users className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                    <p className="text-sm text-[var(--muted-foreground)]">User management interface</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Settings</CardTitle>
                            <CardDescription>Configure notification preferences</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                <div className="text-center">
                                    <Bell className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                    <p className="text-sm text-[var(--muted-foreground)]">Notification settings interface</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="security">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                            <CardDescription>Configure security and access controls</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                <div className="text-center">
                                    <Shield className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                    <p className="text-sm text-[var(--muted-foreground)]">Security settings interface</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="appearance">
                    <Card>
                        <CardHeader>
                            <CardTitle>Appearance Settings</CardTitle>
                            <CardDescription>Customize the look and feel</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 rounded-lg bg-[var(--muted)] flex items-center justify-center">
                                <div className="text-center">
                                    <Palette className="h-12 w-12 text-[var(--muted-foreground)] mx-auto mb-2" />
                                    <p className="text-sm text-[var(--muted-foreground)]">Appearance customization interface</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </MainLayout>
    )
}
