You are a Senior Product Designer + Frontend Architect.

I am building an AI-powered School Management Platform for Indian schools
(Day schools + Boarding schools).

Your task:
Convert the provided wireframe structure into FULLY DEFINED STATIC UI PAGES
(no backend logic, no API calls) that visually represent the entire product.

The output must feel:
- Premium
- AI-powered
- Future-ready (2025+)
- Clean, minimal, enterprise-grade
- Suitable for investor demos and internal reviews

--------------------------------------------------------------------
1️⃣ TECH STACK (STRICT)
--------------------------------------------------------------------
- React (TypeScript)
- Tailwind CSS
- Shadcn UI (Cards, Tables, Tabs, Modals, Dropdowns)
- Lucide Icons
- Responsive (Desktop + Tablet + Mobile)
- Dark + Light mode support

DO NOT:
- Add backend logic
- Add authentication
- Add dummy APIs
- Add placeholder lorem text only — use realistic school data labels

--------------------------------------------------------------------
2️⃣ DESIGN LANGUAGE
--------------------------------------------------------------------
- Modern SaaS layout (Notion + Linear + Stripe inspiration)
- Soft shadows, rounded-xl cards
- Premium typography hierarchy
- Calm education-friendly color palette
- Subtle AI accents (glow, gradient, badges)
- Clear spacing & alignment

Fonts:
- Headings: Inter / Satoshi
- Body: Inter

--------------------------------------------------------------------
3️⃣ GLOBAL LAYOUT (ALL SCREENS)
--------------------------------------------------------------------
Create a shared layout with:

- Left Sidebar (Collapsible)
  - Dashboard
  - Admissions
  - Academics
  - Attendance
  - Exams
  - Fees
  - HR
  - Transport
  - Hostel
  - Library
  - Communication
  - AI Assistant 🤖
  - Settings

- Top Navigation Bar
  - School Name
  - Academic Year selector
  - Notification Bell
  - Profile Dropdown (Role, Logout)

--------------------------------------------------------------------
4️⃣ ROLE-BASED UI (RBAC VISUALIZATION)
--------------------------------------------------------------------
Visually represent permissions:

- Hide menu items user cannot access
- Disable buttons user cannot click
- Show “Approval Required” badges
- Read-only fields for parents/students
- Admin-only configuration screens

Include a permission label on every screen:
Example:
"Role: Teacher | Access: View, Create"

--------------------------------------------------------------------
5️⃣ REQUIRED SCREENS (CREATE ALL)
--------------------------------------------------------------------

### COMMON
- Login Page
- First-time Onboarding
- Role Switch (for demo)

### PRINCIPAL
- Dashboard (KPIs + AI insights)
- Approvals Center
- Reports & Analytics
- School Settings

### ADMIN / OFFICE
- Admissions List
- Admission Detail View
- Student Master (SIS)
- Certificate Generation

### TEACHER
- Teacher Dashboard
- Attendance Marking
- Lesson Planning
- Exams & Evaluation

### STUDENT
- Student Dashboard
- Timetable
- Learning Materials
- Exam Results

### PARENT
- Parent Dashboard (multi-child)
- Fee Payment Page
- Attendance & Results
- Communication

### ACCOUNTANT
- Fee Configuration
- Collections Dashboard
- Reports

### HOSTEL WARDEN
- Hostel Dashboard
- Room Allocation
- Leave Requests
- Incident Logs

### TRANSPORT
- Transport Dashboard
- Route Management
- Student Mapping

### LIBRARY
- Library Dashboard
- Book Issue / Return
- Overdue List

### AI MODULE 🤖
- AI Chat Panel
- AI Insights Dashboard
- AI Suggestions Cards
- Prompt History View (Read-only)

--------------------------------------------------------------------
6️⃣ MICRO-INTERACTIONS (STATIC ONLY)
--------------------------------------------------------------------
Even though pages are static, visually include:
- Hover states
- Disabled states
- Empty states
- Success & warning banners
- Skeleton loaders (visual only)
- AI “Thinking…” indicators

--------------------------------------------------------------------
7️⃣ DATA REPRESENTATION
--------------------------------------------------------------------
Use realistic school-like data labels:
- Class: Grade 8 – Section B
- Student Name
- Roll No
- Fee Head: Tuition, Transport
- Exam: Unit Test 1

Tables must include:
- Search
- Filters
- Pagination UI (non-functional)

--------------------------------------------------------------------
8️⃣ FILE STRUCTURE EXPECTATION
--------------------------------------------------------------------
Generate components in a clean structure:

/components
  /layout
  /cards
  /tables
  /modals
/pages
  /principal
  /teacher
  /student
  /parent
  /admin
  /ai

Each page must be reusable and scalable.

--------------------------------------------------------------------
9️⃣ OUTPUT FORMAT
--------------------------------------------------------------------
- Generate React TSX components
- Include Tailwind classes
- Use Shadcn UI components
- Include comments explaining purpose of each screen
- Ensure code is readable and demo-ready

--------------------------------------------------------------------
🔟 IMPORTANT
--------------------------------------------------------------------
This UI is NOT a demo toy.
It must look like:
- A funded SaaS product
- Something that can be shown to investors
- Something schools will trust

Do NOT simplify.
Do NOT skip screens.
Do NOT combine roles.

Build ALL screens mentioned above.
--------------------------------------------------------------------

Start by generating:
1. Global Layout
2. Sidebar Component
3. Top Navbar
4. Then each role screen one by one

Acknowledge before starting.
