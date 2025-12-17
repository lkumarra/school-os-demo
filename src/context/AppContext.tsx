import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { UserRole, User } from '@/types'
import { currentUser as defaultUser } from '@/lib/constants'

interface AppContextType {
    user: User
    setRole: (role: UserRole) => void
    sidebarCollapsed: boolean
    setSidebarCollapsed: (collapsed: boolean) => void
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(defaultUser)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme) {
            setTheme(savedTheme)
        } else if (systemPrefersDark) {
            setTheme('dark')
        }
    }, [])

    useEffect(() => {
        // Apply theme class to document
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const setRole = (role: UserRole) => {
        setUser(prev => ({ ...prev, role }))
    }

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <AppContext.Provider value={{
            user,
            setRole,
            sidebarCollapsed,
            setSidebarCollapsed,
            theme,
            toggleTheme
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useApp must be used within an AppProvider')
    }
    return context
}
