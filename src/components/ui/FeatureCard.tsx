import { cn } from '@/lib/utils'

export function FeatureCard({
  icon,
  heading,
  body,
  className,
}: {
  icon: React.ReactNode
  heading: string
  body: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center gap-4 text-center md:items-start md:text-left', className)}>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-text">{heading}</h3>
      <p className="text-muted">{body}</p>
    </div>
  )
}
