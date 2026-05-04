import { cn } from '@/lib/utils'

export function NumberedSection({
  number,
  children,
  className,
}: {
  /** e.g. "01", "02", "03" */
  number: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative', className)}>
      <span
        className="pointer-events-none absolute -left-2 -top-10 select-none font-heading text-[7rem] font-bold leading-none text-primary/[0.07] md:-left-4 md:text-[9rem]"
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="relative">{children}</div>
    </div>
  )
}
