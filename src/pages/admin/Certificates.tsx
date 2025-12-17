/**
 * Admin Certificates
 * Certificate generation and management
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
    FileText,
    Download,
    Printer,
    Search,
    Award,
    GraduationCap,
    UserCheck,
    Calendar,
    ArrowRight
} from 'lucide-react'

// Certificate types
const certificateTypes = [
    {
        id: 'tc',
        name: 'Transfer Certificate',
        description: 'For students leaving the school',
        icon: FileText,
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    },
    {
        id: 'character',
        name: 'Character Certificate',
        description: 'Character and conduct certification',
        icon: UserCheck,
        color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
    },
    {
        id: 'bonafide',
        name: 'Bonafide Certificate',
        description: 'Proof of enrollment at school',
        icon: Award,
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
    },
    {
        id: 'study',
        name: 'Study Certificate',
        description: 'Confirmation of study period',
        icon: GraduationCap,
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
    },
    {
        id: 'dob',
        name: 'Date of Birth Certificate',
        description: 'DOB as per school records',
        icon: Calendar,
        color: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
    }
]

// Recent certificates
const recentCertificates = [
    { id: 1, student: 'Aarav Sharma', class: 'Grade 8-A', type: 'Bonafide', date: '2024-12-15', status: 'Generated' },
    { id: 2, student: 'Ananya Patel', class: 'Grade 10-B', type: 'TC', date: '2024-12-14', status: 'Pending Approval' },
    { id: 3, student: 'Rohan Gupta', class: 'Grade 7-A', type: 'Character', date: '2024-12-13', status: 'Generated' },
    { id: 4, student: 'Ishita Singh', class: 'Grade 9-C', type: 'Study', date: '2024-12-12', status: 'Generated' }
]

export function AdminCertificates() {
    return (
        <MainLayout
            title="Certificate Generation"
            description="Generate and manage student certificates"
            permissions={['View', 'Create']}
        >
            {/* Search Student */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-lg">Generate New Certificate</CardTitle>
                    <CardDescription>
                        Search for a student to generate their certificate
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                            <Input
                                placeholder="Search student by name, roll number, or class..."
                                className="pl-10"
                            />
                        </div>
                        <Button>
                            Search
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Certificate Types */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Certificate Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {certificateTypes.map((cert) => {
                        const Icon = cert.icon
                        return (
                            <Card
                                key={cert.id}
                                className="cursor-pointer hover:border-[var(--primary)] hover:shadow-lg transition-all group"
                            >
                                <CardContent className="pt-6">
                                    <div className={`h-12 w-12 rounded-xl ${cert.color} flex items-center justify-center mb-4`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-semibold text-sm group-hover:text-[var(--primary)] transition-colors">
                                        {cert.name}
                                    </h4>
                                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                        {cert.description}
                                    </p>
                                    <Button variant="ghost" size="sm" className="mt-3 px-0">
                                        Generate
                                        <ArrowRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>

            {/* Recent Certificates */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Recent Certificates</CardTitle>
                        <CardDescription>
                            Recently generated certificates
                        </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                        View All
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {recentCertificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="flex items-center justify-between p-4 rounded-xl bg-[var(--muted)] hover:bg-[var(--accent)] transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-lg bg-[var(--card)] flex items-center justify-center">
                                        <FileText className="h-5 w-5 text-[var(--muted-foreground)]" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{cert.student}</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">
                                            {cert.class} • {cert.type} Certificate
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <Badge variant={cert.status === 'Generated' ? 'success' : 'warning'}>
                                            {cert.status}
                                        </Badge>
                                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                            {new Date(cert.date).toLocaleDateString('en-IN')}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Button variant="ghost" size="sm" disabled={cert.status !== 'Generated'}>
                                            <Download className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm" disabled={cert.status !== 'Generated'}>
                                            <Printer className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </MainLayout>
    )
}
