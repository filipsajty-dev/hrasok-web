'use client'

// Cookie-consent gate for Google Maps embed.
// Currently uses a standalone localStorage key `hrašok-consent-maps`.
// TODO: replace with Klaro consent check for category "google-maps" once Klaro is configured.

import { useState, useEffect } from 'react'

const CONSENT_KEY = 'hrašok-consent-maps'
const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Slivkov%C3%A1+18%2C+900+41+Rovinka%2C+Slovakia&output=embed&z=16'
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Slivkov%C3%A1+18%2C+900+41+Rovinka%2C+Slovakia'

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function MapSection() {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    setConsent(localStorage.getItem(CONSENT_KEY) === 'granted')
  }, [])

  function grantConsent() {
    localStorage.setItem(CONSENT_KEY, 'granted')
    setConsent(true)
  }

  return (
    <section className="bg-surface py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {consent === null ? (
          // Hydration skeleton — matches placeholder height
          <div className="h-[300px] animate-pulse rounded-[var(--radius-lg)] bg-border/30 md:h-[400px]" />
        ) : consent ? (
          <iframe
            src={MAPS_EMBED_URL}
            title="Poloha Škôlky Hrášok na mape"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="block w-full rounded-[var(--radius-lg)] border-0 shadow-sm md:h-[400px]"
            style={{ height: '400px' }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] bg-cream py-16 text-center">
            <span className="text-muted"><IconPin /></span>
            <p className="font-heading text-lg font-semibold text-text">Mapa</p>
            <p className="text-sm text-muted">Slivková 18, 900 41 Rovinka</p>
            <p className="max-w-sm text-sm text-muted">
              Pre zobrazenie mapy musíme povoliť cookies tretích strán.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={grantConsent}
                className="rounded-[var(--radius-button)] bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-primary-hover hover:shadow-md motion-safe:hover:scale-[1.02]"
              >
                Povoliť mapu
              </button>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--radius-button)] border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
              >
                Otvoriť v Google Mapách →
              </a>
            </div>
          </div>
        )}

        <div className="mt-3 text-right">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-colors hover:text-primary"
          >
            Otvoriť v Google Mapách →
          </a>
        </div>
      </div>
    </section>
  )
}
