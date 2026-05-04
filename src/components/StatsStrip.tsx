'use client'

import { useEffect, useRef, useState } from 'react'
import { StatBlock, Container } from '@/components/ui'

const stats: Array<{ value: number | string; suffix?: string; label: string }> = [
  { value: 100, suffix: '%', label: 'Kvalifikovaní pedagógovia' },
  { value: '1:6', label: 'Pomer učiteľ / dieťa' },
  { value: 5, suffix: '+', label: 'Výletov mesačne' },
  { value: 'Denne', label: 'Hodiny angličtiny' },
]

export function StatsStrip() {
  const [triggered, setTriggered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="border-y border-border bg-cream py-8 md:py-10">
      <Container>
        <dl className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              trigger={triggered}
            />
          ))}
        </dl>
      </Container>
    </section>
  )
}
