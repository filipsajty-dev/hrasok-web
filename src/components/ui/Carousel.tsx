'use client'

import { useCallback, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Carousel({
  slides,
  className,
}: {
  slides: React.ReactNode[]
  className?: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const count = slides.length

  const scrollTo = useCallback(
    (index: number) => {
      const el = scrollRef.current
      if (!el) return
      el.scrollTo({ left: index * el.offsetWidth, behavior: 'smooth' })
      setActiveIndex(index)
    },
    [],
  )

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    setActiveIndex(Math.round(el.scrollLeft / el.offsetWidth))
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowRight') scrollTo(Math.min(activeIndex + 1, count - 1))
    else if (e.key === 'ArrowLeft') scrollTo(Math.max(activeIndex - 1, 0))
  }

  return (
    <div className={cn('relative', className)}>
      {/* Slides */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Prezentácia snímok"
        className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-start"
            role="group"
            aria-roledescription="snímka"
            aria-label={`Snímka ${i + 1} z ${count}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollTo(Math.max(activeIndex - 1, 0))}
            disabled={activeIndex === 0}
            aria-label="Predchádzajúca snímka"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-lg shadow-md transition-all hover:bg-surface disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollTo(Math.min(activeIndex + 1, count - 1))}
            disabled={activeIndex === count - 1}
            aria-label="Nasledujúca snímka"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-lg shadow-md transition-all hover:bg-surface disabled:opacity-30"
          >
            →
          </button>
        </>
      )}

      {/* Pagination dots */}
      {count > 1 && (
        <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Prejsť na snímku ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-200',
                i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
