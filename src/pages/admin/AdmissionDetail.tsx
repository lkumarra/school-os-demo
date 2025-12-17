/**
 * Admin Admission Detail View
 * Full admission application details
 */

import { MainLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    ArrowLeft,
    CheckCircle,
    XCircle,
    Mail,
    Phone,
    MapPin,
    Calendar,
    FileText,
    Download,
    MessageSquare,
    User,
    GraduationCap,
    Building
} from 'lucide-react'

export function AdminAdmissionDetail() {
    // Sample admission data
    const admission = {
        id: '1',
        studentName: 'Aarav Sharma',
        photo: null,
        dob: '2018-05-15',
        gender: 'Male',
        bloodGroup: 'B+',
        applyingFor: 'Grade 1',
        previousSchool: 'ABC Montessori School',
        address: '45, Sector 15, Dwarka, New Delhi - 110078',
        father: {
            name: 'Mr. Vikram Sharma',
            occupation: 'Software Engineer',
            phone: '+91 9876543210',
            email: 'vikram.sharma@email.com'
        },
        mother: {
            name: 'Mrs. Neha Sharma',
            occupation: 'Doctor',
            phone: '+91 9876543220',
            email: 'neha.sharma@email.com'
        },
        submittedDate: '2024-12-15',
        status: 'pending',
        documents: [
            { name: 'Birth Certificate', status: 'verified' },
            { name: 'Previous School TC', status: 'pending' },
            { name: 'Passport Photos', status: 'verified' },
            { name: 'Address Proof', status: 'verified' },
            { name: 'Parent ID Proof', status: 'pending' }
        ],
        timeline: [
            { date: '2024-12-15', event: 'Application Submitted', by: 'Parent' },
            { date: '2024-12-16', event: 'Documents Received', by: 'Admin' },
            { date: '2024-12-17', event: 'Under Review', by: 'System' }
        ]
    }

    return (
        <MainLayout
            title="Admission Application"
            description={`Application #${admission.id} - ${admission.studentName}`}
            permissions={['View', 'Edit', 'Approve']}
            actions={
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message Parent
                    </Button>
                    <Button variant="destructive" size="sm">
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                    </Button>
                    <Button size="sm" className="bg-[var(--color-success-500)] hover:bg-[var(--color-success-600)]">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                    </Button>
                </div>
            }
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Student Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Student Basic Info */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarFallback className="text-xl bg-[var(--primary)] text-white">
                                            {admission.studentName.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-xl">{admission.studentName}</CardTitle>
                                        <CardDescription>
                                            Applying for {admission.applyingFor}
                                        </CardDescription>
                                        <Badge variant="warning" className="mt-2">
                                            {admission.status}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-xs text-[var(--muted-foreground)]">Date of Birth</p>
                                    <p className="text-sm font-medium mt-1">
                                        {new Date(admission.dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--muted-foreground)]">Gender</p>
                                    <p className="text-sm font-medium mt-1">{admission.gender}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--muted-foreground)]">Blood Group</p>
                                    <p className="text-sm font-medium mt-1">{admission.bloodGroup}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--muted-foreground)]">Previous School</p>
                                    <p className="text-sm font-medium mt-1">{admission.previousSchool}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[var(--border)]">
                                <p className="text-xs text-[var(--muted-foreground)]">Address</p>
                                <p className="text-sm font-medium mt-1 flex items-start gap-2">
                                    <MapPin className="h-4 w-4 text-[var(--muted-foreground)] shrink-0 mt-0.5" />
                                    {admission.address}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Parent Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5" />
                                Parent Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Father */}
                                <div className="p-4 rounded-xl bg-[var(--muted)]">
                                    <h4 className="font-medium mb-3">Father</h4>
                                    <div className="space-y-2">
                                        <p className="text-sm">{admission.father.name}</p>
                                        <p className="text-sm text-[var(--muted-foreground)]">{admission.father.occupation}</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Phone className="h-4 w-4 text-[var(--muted-foreground)]" />
                                            {admission.father.phone}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Mail className="h-4 w-4 text-[var(--muted-foreground)]" />
                                            {admission.father.email}
                                        </div>
                                    </div>
                                </div>

                                {/* Mother */}
                                <div className="p-4 rounded-xl bg-[var(--muted)]">
                                    <h4 className="font-medium mb-3">Mother</h4>
                                    <div className="space-y-2">
                                        <p className="text-sm">{admission.mother.name}</p>
                                        <p className="text-sm text-[var(--muted-foreground)]">{admission.mother.occupation}</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Phone className="h-4 w-4 text-[var(--muted-foreground)]" />
                                            {admission.mother.phone}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Mail className="h-4 w-4 text-[var(--muted-foreground)]" />
                                            {admission.mother.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Documents */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                Documents
                            </CardTitle>
                            <CardDescription>
                                Uploaded documents and verification status
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {admission.documents.map((doc, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg bg-[var(--muted)]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-5 w-5 text-[var(--muted-foreground)]" />
                                            <span className="text-sm font-medium">{doc.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant={doc.status === 'verified' ? 'success' : 'warning'}>
                                                {doc.status}
                                            </Badge>
                                            <Button variant="ghost" size="sm">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Timeline & Actions */}
                <div className="space-y-6">
                    {/* Status Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Application Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-12 w-12 rounded-full bg-[var(--color-warning-50)] flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-[var(--color-warning-500)]" />
                                </div>
                                <div>
                                    <p className="font-medium">Under Review</p>
                                    <p className="text-sm text-[var(--muted-foreground)]">
                                        Submitted {new Date(admission.submittedDate).toLocaleDateString('en-IN')}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Button variant="outline" className="w-full">
                                    Schedule Interview
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Request Documents
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Timeline */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Activity Timeline</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {admission.timeline.map((event, index) => (
                                    <div key={index} className="flex gap-3">
                                        <div className="flex flex-col items-center">
                                            <div className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                                            {index < admission.timeline.length - 1 && (
                                                <div className="w-0.5 h-full bg-[var(--border)]" />
                                            )}
                                        </div>
                                        <div className="pb-4">
                                            <p className="text-sm font-medium">{event.event}</p>
                                            <p className="text-xs text-[var(--muted-foreground)]">
                                                {new Date(event.date).toLocaleDateString('en-IN')} • {event.by}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Notes */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Admin Notes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <textarea
                                className="w-full h-24 p-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                                placeholder="Add notes about this application..."
                            />
                            <Button variant="outline" size="sm" className="mt-2">
                                Save Note
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}
