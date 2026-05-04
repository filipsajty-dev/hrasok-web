'use client'

import { useId, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

export function Tabs({ items, className }: { items: TabItem[]; className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const uid = useId()

  function activate(index: number) {
    setActiveIndex(index)
    listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[index]?.focus()
  }

  function handleKeyDown(e: React.KeyboardEvent, i: number) {
    const last = items.length - 1
    if (e.key === 'ArrowRight') { e.preventDefault(); activate((i + 1) % items.length) }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); activate((i - 1 + items.length) % items.length) }
    else if (e.key === 'Home') { e.preventDefault(); activate(0) }
    else if (e.key === 'End') { e.preventDefault(); activate(last) }
  }

  return (
    <div className={cn(className)}>
      <div role="tablist" ref={listRef} className="flex gap-1 border-b border-border">
        {items.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            id={`${uid}-tab-${tab.id}`}
            aria-controls={`${uid}-panel-${tab.id}`}
            aria-selected={i === activeIndex}
            tabIndex={i === activeIndex ? 0 : -1}
            onClick={() => activate(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={cn(
              'px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              i === activeIndex
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted hover:text-text',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {items.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${uid}-panel-${tab.id}`}
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={i !== activeIndex}
          className="pt-6"
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
