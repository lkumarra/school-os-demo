import type { UserRole, User, School } from '@/types'

// Current user context for demo
export const currentUser: User = {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    email: 'principal@demoschool.edu.in',
    role: 'principal',
    avatar: undefined
}

// Current school context
export const currentSchool: School = {
    id: '1',
    name: 'Delhi Public School',
    logo: undefined,
    academicYear: '2024-25'
}

// Role display names
export const roleDisplayNames: Record<UserRole, string> = {
    principal: 'Principal',
    admin: 'Admin / Office',
    teacher: 'Teacher',
    student: 'Student',
    parent: 'Parent',
    accountant: 'Accountant',
    hostel_warden: 'Hostel Warden',
    transport: 'Transport Manager',
    librarian: 'Librarian'
}

// Role colors for badges
export const roleColors: Record<UserRole, string> = {
    principal: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    admin: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    teacher: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    student: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    parent: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    accountant: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    hostel_warden: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
    transport: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    librarian: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300'
}

// Academic years for selector
export const academicYears = [
    '2024-25',
    '2023-24',
    '2022-23'
]

// Classes
export const classes = [
    'Nursery', 'LKG', 'UKG',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
    'Grade 11 - Science', 'Grade 11 - Commerce', 'Grade 11 - Arts',
    'Grade 12 - Science', 'Grade 12 - Commerce', 'Grade 12 - Arts'
]

// Sections
export const sections = ['A', 'B', 'C', 'D']

// Subjects
export const subjects = [
    'English',
    'Hindi',
    'Mathematics',
    'Science',
    'Social Studies',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Physical Education',
    'Art',
    'Music'
]

// Fee Heads
export const feeHeads = [
    'Tuition Fee',
    'Transport Fee',
    'Library Fee',
    'Lab Fee',
    'Sports Fee',
    'Exam Fee',
    'Annual Fee',
    'Hostel Fee',
    'Mess Fee'
]
