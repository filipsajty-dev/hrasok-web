import { cn } from '@/lib/utils'

export type CardVariant = 'default' | 'image-top' | 'feature'

export function Card({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode
  variant?: CardVariant
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)] bg-surface shadow-sm transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-1',
        variant === 'image-top' && 'flex flex-col overflow-hidden',
        className,
      )}
    >
      {children}
    </div>
  )
}
