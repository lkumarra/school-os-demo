import { useNavigate } from 'react-router-dom'
import { useApp } from '@/context/AppContext'
import { currentSchool, academicYears, roleDisplayNames } from '@/lib/constants'
import { cn, getInitials } from '@/lib/utils'
import {
    Bell,
    Sun,
    Moon,
    ChevronDown,
    LogOut,
    User,
    Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

export function TopNav() {
    const { user, theme, toggleTheme, sidebarCollapsed } = useApp()
    const navigate = useNavigate()

    return (
        <header
            className={cn(
                "fixed top-0 right-0 z-30 h-16 bg-[var(--card)] border-b border-[var(--border)] transition-all duration-300",
                sidebarCollapsed ? "left-16" : "left-64"
            )}
        >
            <div className="flex h-full items-center justify-between px-6">
                {/* Left: School Name & Academic Year */}
                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="text-lg font-semibold text-[var(--foreground)]">
                            {currentSchool.name}
                        </h1>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                                    Academic Year: {currentSchool.academicYear}
                                    <ChevronDown className="h-3 w-3" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuLabel>Select Academic Year</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {academicYears.map((year) => (
                                    <DropdownMenuItem key={year}>
                                        {year}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3">
                    {/* Role Badge */}
                    <Badge variant="secondary" className="hidden md:flex">
                        {roleDisplayNames[user.role]}
                    </Badge>

                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    >
                        {theme === 'light' ? (
                            <Moon className="h-5 w-5" />
                        ) : (
                            <Sun className="h-5 w-5" />
                        )}
                    </Button>

                    {/* Notifications */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    >
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--color-danger-500)]" />
                    </Button>

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[var(--accent)] transition-colors">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback className="text-xs">
                                        {getInitials(user.name)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="hidden md:block text-left">
                                    <div className="text-sm font-medium text-[var(--foreground)]">
                                        {user.name}
                                    </div>
                                    <div className="text-xs text-[var(--muted-foreground)]">
                                        {user.email}
                                    </div>
                                </div>
                                <ChevronDown className="h-4 w-4 text-[var(--muted-foreground)]" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => navigate('/role-switch')}>
                                <ChevronDown className="mr-2 h-4 w-4" />
                                Switch Role (Demo)
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-[var(--destructive)]">
                                <LogOut className="mr-2 h-4 w-4" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
