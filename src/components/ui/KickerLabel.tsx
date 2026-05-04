import { cn } from '@/lib/utils'

export function KickerLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('text-xs font-semibold uppercase tracking-widest text-primary', className)}>
      {children}
    </p>
  )
}
