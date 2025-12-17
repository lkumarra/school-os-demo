/**
 * SchoolOS - AI-Powered School Management Platform
 * Main Application with React Router setup
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from '@/context/AppContext'

// Common Pages
import { LoginPage, OnboardingPage, RoleSwitchPage } from '@/pages'

// Principal Pages
import {
  PrincipalDashboard,
  PrincipalApprovals,
  PrincipalReports,
  PrincipalSettings
} from '@/pages/principal'

// Admin Pages
import {
  AdminAdmissionsList,
  AdminAdmissionDetail,
  AdminStudentMaster,
  AdminCertificates
} from '@/pages/admin'

// Teacher Pages
import {
  TeacherDashboard,
  TeacherAttendance,
  TeacherLessonPlanning,
  TeacherExams
} from '@/pages/teacher'

// Student Pages
import {
  StudentDashboard,
  StudentTimetable,
  StudentLearning,
  StudentResults
} from '@/pages/student'

// Parent Pages
import {
  ParentDashboard,
  ParentFeePayment,
  ParentCommunication
} from '@/pages/parent'

// Accountant Pages
import { AccountantFeeCollection } from '@/pages/accountant'

// Hostel Pages
import { HostelDashboard } from '@/pages/hostel'

// Transport Pages
import { TransportDashboard } from '@/pages/transport'

// Library Pages
import { LibraryDashboard } from '@/pages/library'

// AI Module
import { AIAssistant } from '@/pages/ai'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/role-switch" element={<RoleSwitchPage />} />

          {/* Principal Routes */}
          <Route path="/principal" element={<Navigate to="/principal/dashboard" replace />} />
          <Route path="/principal/dashboard" element={<PrincipalDashboard />} />
          <Route path="/principal/approvals" element={<PrincipalApprovals />} />
          <Route path="/principal/reports" element={<PrincipalReports />} />
          <Route path="/principal/settings" element={<PrincipalSettings />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Navigate to="/admin/admissions" replace />} />
          <Route path="/admin/admissions" element={<AdminAdmissionsList />} />
          <Route path="/admin/admissions/:id" element={<AdminAdmissionDetail />} />
          <Route path="/admin/students" element={<AdminStudentMaster />} />
          <Route path="/admin/certificates" element={<AdminCertificates />} />

          {/* Teacher Routes */}
          <Route path="/teacher" element={<Navigate to="/teacher/dashboard" replace />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/attendance" element={<TeacherAttendance />} />
          <Route path="/teacher/lessons" element={<TeacherLessonPlanning />} />
          <Route path="/teacher/exams" element={<TeacherExams />} />

          {/* Student Routes */}
          <Route path="/student" element={<Navigate to="/student/dashboard" replace />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/timetable" element={<StudentTimetable />} />
          <Route path="/student/learning" element={<StudentLearning />} />
          <Route path="/student/results" element={<StudentResults />} />

          {/* Parent Routes */}
          <Route path="/parent" element={<Navigate to="/parent/dashboard" replace />} />
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
          <Route path="/parent/fees" element={<ParentFeePayment />} />
          <Route path="/parent/communication" element={<ParentCommunication />} />

          {/* Accountant Routes */}
          <Route path="/accountant" element={<Navigate to="/accountant/fees" replace />} />
          <Route path="/accountant/fees" element={<AccountantFeeCollection />} />

          {/* Hostel Warden Routes */}
          <Route path="/hostel" element={<Navigate to="/hostel/dashboard" replace />} />
          <Route path="/hostel/dashboard" element={<HostelDashboard />} />

          {/* Transport Manager Routes */}
          <Route path="/transport" element={<Navigate to="/transport/dashboard" replace />} />
          <Route path="/transport/dashboard" element={<TransportDashboard />} />

          {/* Library Routes */}
          <Route path="/library" element={<Navigate to="/library/dashboard" replace />} />
          <Route path="/library/dashboard" element={<LibraryDashboard />} />

          {/* AI Module */}
          <Route path="/ai-assistant" element={<AIAssistant />} />

          {/* Default Routes - Start with onboarding for demo */}
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/dashboard" element={<Navigate to="/principal/dashboard" replace />} />

          {/* Catch all - redirect to onboarding */}
          <Route path="*" element={<Navigate to="/onboarding" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
