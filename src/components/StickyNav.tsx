'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Program', href: '/program' },
  { label: 'Skupiny', href: '/skupiny' },
  { label: 'Tím', href: '/tim' },
  { label: 'Priestory', href: '/priestory' },
  { label: 'Cenník', href: '/cennik' },
  { label: 'Aktuality', href: '/aktuality' },
  { label: 'Kontakt', href: '/kontakt' },
]

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'nav-scrolled border-b border-border bg-surface/85 backdrop-blur-md'
          : 'border-b border-transparent bg-surface'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* PLACEHOLDER — replace with SVG logo once available */}
        <Link href="/" className="font-heading text-3xl font-bold text-primary">
          Hrášok
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-text transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/kontakt"
          className="rounded-[var(--radius-button)] bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 motion-safe:hover:scale-[1.02] hover:bg-primary-hover hover:shadow-md"
        >
          Rezervovať návštevu
        </Link>
      </nav>
    </header>
  )
}
