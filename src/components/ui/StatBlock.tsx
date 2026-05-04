'use client'

import { useEffect, useRef, useState } from 'react'

export function StatBlock({
  value,
  suffix = '',
  label,
  trigger = false,
}: {
  /** Pass a number for count-up animation; string for fade-in */
  value: number | string
  suffix?: string
  label: string
  trigger?: boolean
}) {
  const isNumeric = typeof value === 'number'
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!trigger || !isNumeric) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(value as number)
      return
    }
    const duration = 1200
    const startTime = performance.now()
    const end = value as number
    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 2) // ease-out quadratic
      setCount(Math.round(eased * end))
      if (progress < 1) frameRef.current = requestAnimationFrame(step)
    }
    frameRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameRef.current)
  }, [trigger, isNumeric, value])

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="font-heading text-4xl font-bold text-primary md:text-5xl">
        {isNumeric ? (
          <span>
            {count}
            {suffix}
          </span>
        ) : (
          <span
            className="transition-opacity duration-700"
            style={{ opacity: trigger ? 1 : 0 }}
          >
            {value}
          </span>
        )}
      </p>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</p>
    </div>
  )
}
