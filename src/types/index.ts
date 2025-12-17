// App-wide types for SchoolOS

export type UserRole =
    | 'principal'
    | 'admin'
    | 'teacher'
    | 'student'
    | 'parent'
    | 'accountant'
    | 'hostel_warden'
    | 'transport'
    | 'librarian'

export interface User {
    id: string
    name: string
    email: string
    role: UserRole
    avatar?: string
}

export interface School {
    id: string
    name: string
    logo?: string
    academicYear: string
}

export interface Student {
    id: string
    name: string
    rollNo: string
    class: string
    section: string
    parentName: string
    parentPhone: string
    photo?: string
}

export interface Teacher {
    id: string
    name: string
    employeeId: string
    department: string
    subjects: string[]
    classes: string[]
    photo?: string
}

export interface Admission {
    id: string
    studentName: string
    parentName: string
    class: string
    submittedDate: string
    status: 'pending' | 'approved' | 'rejected' | 'waitlisted'
    phone: string
    email: string
}

export interface FeeRecord {
    id: string
    studentId: string
    studentName: string
    class: string
    feeHead: string
    amount: number
    dueDate: string
    status: 'paid' | 'pending' | 'overdue' | 'partial'
    paidAmount?: number
}

export interface Attendance {
    date: string
    present: number
    absent: number
    late: number
    total: number
}

export interface ExamResult {
    examName: string
    subject: string
    maxMarks: number
    obtainedMarks: number
    grade: string
}

export interface Notification {
    id: string
    title: string
    message: string
    type: 'info' | 'warning' | 'success' | 'error'
    timestamp: string
    read: boolean
}

export interface AIInsight {
    id: string
    title: string
    description: string
    category: 'academic' | 'attendance' | 'fee' | 'general' | 'maintenance' | 'inventory' | 'optimization' | 'overdue' | 'transport' | 'hostel' | 'library'
    priority: 'high' | 'medium' | 'low'
    actionable: boolean
}

export interface MenuItem {
    label: string
    icon: React.ComponentType<{ className?: string }>
    href: string
    roles: UserRole[]
    badge?: string
    isAI?: boolean
}
