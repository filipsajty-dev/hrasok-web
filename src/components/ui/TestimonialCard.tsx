import { cn } from '@/lib/utils'

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 32 24"
      className="h-6 w-8 text-primary/30"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 24V13.6C0 9.7 1 6.5 3.1 3.9 5.2 1.3 8.1 0 12 0v4.8c-1.9.4-3.4 1.3-4.5 2.7C6.4 8.9 5.8 10.4 5.8 12H11V24H0ZM18 24V13.6C18 9.7 19 6.5 21.1 3.9 23.2 1.3 26.1 0 30 0v4.8c-1.9.4-3.4 1.3-4.5 2.7-1.1 1.4-1.7 2.9-1.7 4.5H29V24H18Z" />
    </svg>
  )
}

export function TestimonialCard({
  quote,
  name,
  context,
  className,
}: {
  quote: string
  name: string
  context: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 rounded-[var(--radius-lg)] border border-border bg-surface p-8 shadow-sm transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-1',
        className,
      )}
    >
      <QuoteIcon />
      <p className="grow text-muted">{quote}</p>
      <div>
        <p className="font-semibold text-text">{name}</p>
        <p className="text-sm text-muted">{context}</p>
      </div>
    </div>
  )
}
