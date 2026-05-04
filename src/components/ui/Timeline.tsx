import { cn } from '@/lib/utils'

export interface TimelineEntry {
  time: string
  heading: string
  description?: string
  icon?: React.ReactNode
}

export function Timeline({
  entries,
  className,
}: {
  entries: TimelineEntry[]
  className?: string
}) {
  return (
    <ol className={cn('relative flex flex-col', className)}>
      {entries.map((entry, i) => (
        <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
          {/* Node + connector */}
          <div className="flex flex-col items-center">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              {entry.icon ?? (
                <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
              )}
            </div>
            {i < entries.length - 1 && <div className="mt-1 w-px flex-1 bg-border" />}
          </div>
          {/* Content */}
          <div className="pb-2 pt-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
              {entry.time}
            </p>
            <p className="font-heading text-base font-semibold text-text">{entry.heading}</p>
            {entry.description && (
              <p className="mt-1 text-sm leading-relaxed text-muted">{entry.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
