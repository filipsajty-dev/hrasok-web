import { cn } from '@/lib/utils'

/**
 * Wraps content in an animate-on-scroll div.
 * Uses CSS scroll-driven animation (animation-timeline: view()) — no JS needed.
 * Gracefully degrades: browsers without support show content immediately.
 * Respects prefers-reduced-motion via the global CSS media query.
 */
export function RevealOnScroll({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('animate-on-scroll', className)}>{children}</div>
}
