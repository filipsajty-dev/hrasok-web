'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export interface TOCEntry {
  id: string
  label: string
}

export function StickyTOC({
  entries,
  className,
}: {
  entries: TOCEntry[]
  className?: string
}) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (obs) => {
        const visible = obs.filter((o) => o.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )
    entries.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [entries])

  return (
    <nav
      aria-label="Obsah stránky"
      className={cn('hidden lg:block', className)}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">Obsah</p>
      <ul className="flex flex-col gap-1 border-l border-border pl-4">
        {entries.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                'block py-0.5 text-sm transition-colors duration-150',
                activeId === id ? 'font-medium text-primary' : 'text-muted hover:text-text',
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
