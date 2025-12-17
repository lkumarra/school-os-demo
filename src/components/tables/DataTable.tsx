import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Search,
    Filter,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    ChevronDown
} from 'lucide-react'

interface Column<T> {
    key: string
    header: string
    render?: (item: T) => React.ReactNode
    className?: string
}

interface DataTableProps<T> {
    columns: Column<T>[]
    data: T[]
    searchPlaceholder?: string
    filters?: {
        key: string
        label: string
        options: { value: string; label: string }[]
    }[]
    actions?: (item: T) => React.ReactNode
    onRowClick?: (item: T) => void
    keyExtractor: (item: T) => string
    emptyMessage?: string
    className?: string
}

export function DataTable<T>({
    columns,
    data,
    searchPlaceholder = 'Search...',
    filters,
    actions,
    onRowClick,
    keyExtractor,
    emptyMessage = 'No data available',
    className
}: DataTableProps<T>) {
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    // Pagination
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className={cn("space-y-4", className)}>
            {/* Search & Filters */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <Input
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                    />
                </div>

                {filters && filters.length > 0 && (
                    <div className="flex items-center gap-2">
                        {filters.map((filter) => (
                            <DropdownMenu key={filter.key}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <Filter className="h-4 w-4 mr-2" />
                                        {filter.label}
                                        <ChevronDown className="h-4 w-4 ml-2" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>{filter.label}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {filter.options.map((option) => (
                                        <DropdownMenuItem key={option.value}>
                                            {option.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ))}
                    </div>
                )}
            </div>

            {/* Table */}
            <div className="rounded-xl border border-[var(--border)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[var(--muted)]">
                            <tr>
                                {columns.map((column) => (
                                    <th
                                        key={column.key}
                                        className={cn(
                                            "px-4 py-3 text-left text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider",
                                            column.className
                                        )}
                                    >
                                        {column.header}
                                    </th>
                                ))}
                                {actions && (
                                    <th className="px-4 py-3 text-right text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
                                        Actions
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={columns.length + (actions ? 1 : 0)}
                                        className="px-4 py-12 text-center text-[var(--muted-foreground)]"
                                    >
                                        {emptyMessage}
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map((item) => (
                                    <tr
                                        key={keyExtractor(item)}
                                        onClick={() => onRowClick?.(item)}
                                        className={cn(
                                            "transition-colors",
                                            onRowClick && "cursor-pointer hover:bg-[var(--muted)]"
                                        )}
                                    >
                                        {columns.map((column) => (
                                            <td
                                                key={column.key}
                                                className={cn(
                                                    "px-4 py-3 text-sm text-[var(--foreground)]",
                                                    column.className
                                                )}
                                            >
                                                {column.render
                                                    ? column.render(item)
                                                    : (item as Record<string, unknown>)[column.key] as React.ReactNode
                                                }
                                            </td>
                                        ))}
                                        {actions && (
                                            <td className="px-4 py-3 text-right">
                                                {actions(item)}
                                            </td>
                                        )}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between">
                    <p className="text-sm text-[var(--muted-foreground)]">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, data.length)} of {data.length} results
                    </p>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .slice(Math.max(0, currentPage - 3), currentPage + 2)
                                .map((page) => (
                                    <Button
                                        key={page}
                                        variant={page === currentPage ? 'default' : 'ghost'}
                                        size="sm"
                                        onClick={() => setCurrentPage(page)}
                                        className="w-8"
                                    >
                                        {page}
                                    </Button>
                                ))}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

// Status badge helper
export function StatusBadge({ status }: { status: string }) {
    const variants: Record<string, 'default' | 'secondary' | 'success' | 'warning' | 'destructive'> = {
        active: 'success',
        approved: 'success',
        paid: 'success',
        present: 'success',
        pending: 'warning',
        partial: 'warning',
        review: 'warning',
        waitlisted: 'secondary',
        absent: 'destructive',
        rejected: 'destructive',
        overdue: 'destructive',
        inactive: 'secondary'
    }

    return (
        <Badge variant={variants[status.toLowerCase()] || 'default'}>
            {status}
        </Badge>
    )
}
