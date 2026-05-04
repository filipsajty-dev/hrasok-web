'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="flex flex-col divide-y divide-border">
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              aria-controls={`faq-${item.id}`}
              className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-text transition-colors hover:text-primary"
            >
              {item.question}
              <span
                className={cn(
                  'shrink-0 text-primary transition-transform duration-200',
                  open && 'rotate-180',
                )}
                aria-hidden="true"
              >
                ↓
              </span>
            </button>
            <div id={`faq-${item.id}`} role="region" hidden={!open}>
              <p className="pb-4 text-sm leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
