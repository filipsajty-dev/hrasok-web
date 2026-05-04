'use client'

import { useEffect, useRef } from 'react'
import { Button, Container } from '@/components/ui'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) videoRef.current.pause()
  }, [])

  return (
    <section className="relative flex min-h-[78vh] flex-col overflow-hidden bg-cream">
      {/* Full-bleed background video */}
      <video
        ref={videoRef}
        src="/videos/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay — cream gradient fades right so video shows through on the right */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(251,248,241,0.93) 0%, rgba(251,248,241,0.82) 40%, rgba(251,248,241,0.42) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: 'rgba(63,163,31,0.05)' }}
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center py-20 md:py-32">
        <Container>
          <div className="flex max-w-2xl flex-col gap-6 text-left">
            {/* Kicker — PLACEHOLDER city name */}
            <p className="hero-kicker text-xs font-semibold uppercase tracking-widest text-primary">
              Súkromná materská škola · Rovinka
            </p>

            {/* PLACEHOLDER — final copy from Slovak copywriter */}
            <h1 className="hero-headline font-heading text-4xl font-semibold leading-tight text-text md:text-5xl lg:text-[3.5rem]">
              Miesto, kde vaše dieťa rastie s{' '}
              <span className="relative inline-block">
                radosťou
                <svg
                  viewBox="0 0 120 10"
                  className="absolute -bottom-1 left-0 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 2 7 C 25 2, 50 9, 60 6 C 75 3, 95 8, 118 5"
                    fill="none"
                    stroke="#F4A88B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subhead — PLACEHOLDER */}
            <p className="hero-subhead max-w-lg text-lg leading-relaxed text-muted">
              Súkromná materská škola pre deti od 3 do 6 rokov s kvalifikovaným pedagogickým
              tímom, každodennou angličtinou a malými skupinkami plnými pozornosti.
            </p>

            {/* Trust row */}
            <p className="hero-trust flex flex-wrap items-center gap-x-2 text-sm font-medium text-muted">
              <span>Kvalifikovaní pedagógovia</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>Angličtina každý deň</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>Malé skupiny</span>
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap gap-3">
              <Button as="link" href="/kontakt" variant="primary" size="lg">
                Rezervovať návštevu
              </Button>
              <Button as="link" href="/program" variant="secondary" size="lg">
                Zistiť viac o programe
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8" aria-hidden="true">
        <div className="motion-safe:animate-bounce text-muted">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  )
}
