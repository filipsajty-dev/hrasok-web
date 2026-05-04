import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import { ContactForm } from '@/components/sections/ContactForm'
import { MapSection } from '@/components/sections/MapSection'
import { FAQAccordion, type FAQItem } from '@/components/FAQAccordion'
import { Container, CTABand, FeatureCard, KickerLabel, RevealOnScroll } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Kontakt — Hrášok',
  description:
    'Kontaktujte Súkromnú materskú školu Hrášok v Rovinke. Adresa: Slivková 18, telefón: 0905 345 222, e-mail: info@skolkahrasok.sk. Napíšte nám alebo príďte osobne.',
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqItems: FAQItem[] = [
  {
    id: 'auto',
    question: 'Ako k vám prísť autom a kde zaparkovať?',
    answer: '[PLACEHOLDER: smer z Bratislavy (D1/D4, exit Rovinka), orientačné body, bezplatné parkovanie pred budovou škôlky.]',
  },
  {
    id: 'mhd',
    question: 'Ako sa k vám dostať MHD?',
    answer: '[PLACEHOLDER: autobusová linka (napr. č. X z Bratislavy, zastávka Rovinka námestie), doba chôdze od zastávky (~5 min).]',
  },
  {
    id: 'prva-navsteva',
    question: 'Čo si máme priniesť na prvú návštevu?',
    answer: '[PLACEHOLDER: nie je nutné nič špeciálne — stačí prísť. Voliteľne: otázky, ktoré vás zaujímajú, a dobré naladenie :-)]',
  },
  {
    id: 'bez-objednania',
    question: 'Môžeme prísť aj bez objednania?',
    answer: '[PLACEHOLDER: odporúčame dohodnúť si termín, aby sme vám mohli venovať dostatok času. V urgentných prípadoch volajte priamo na 0905 345 222.]',
  },
  {
    id: 'obed',
    question: 'Sme tu na obed — viete nám niekde odporučiť?',
    answer: '[PLACEHOLDER: tipy na reštaurácie v okolí Rovinky; pri zápisných stretnutiach ponúkame kávu a čaj priamo v škôlke.]',
  },
]

// ── Travel icons ──────────────────────────────────────────────────────────────
function IconCar() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <rect x="5" y="13" width="14" height="6" rx="1" />
      <circle cx="7.5" cy="19" r="1.5" /><circle cx="16.5" cy="19" r="1.5" />
      <path d="M5 9l2-4h10l2 4" />
    </svg>
  )
}

function IconBus() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 6v6M16 6v6M2 12h20M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
      <circle cx="8" cy="18" r="1" /><circle cx="16" cy="18" r="1" />
    </svg>
  )
}

function IconBike() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 0 0-1-1h-1l-3 7h6" />
      <path d="M5.5 17.5L10 7" /><path d="M10 7h5" />
    </svg>
  )
}

// ── Contact info icons ─────────────────────────────────────────────────────────
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function ContactInfoCard() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-sm lg:p-8">
      <p className="mb-6 font-heading text-xl font-semibold text-text">Spojte sa s nami</p>

      <div className="flex flex-col gap-6">
        {/* Address */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-primary"><IconPin /></span>
          <div>
            <p className="text-sm font-medium text-text">Súkromná materská škola Hrášok</p>
            <p className="text-sm text-muted">Slivková 18, 900 41 Rovinka</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-primary"><IconPhone /></span>
          <div className="flex flex-col gap-0.5">
            <a href="tel:+421905345222" className="text-sm font-semibold text-text transition-colors hover:text-primary">
              0905 345 222
            </a>
            <span className="text-xs text-muted">Ing. Jana Šajtyová, konateľka</span>
            <a href="tel:+421238103645" className="mt-1.5 text-sm text-muted transition-colors hover:text-primary">
              02 / 3810 3645
            </a>
            <span className="text-xs text-muted">kancelária</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-primary"><IconMail /></span>
          <a href="mailto:info@skolkahrasok.sk" className="text-sm text-muted transition-colors hover:text-primary">
            info@skolkahrasok.sk
          </a>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-primary"><IconClock /></span>
          <div>
            <p className="text-sm text-text">Pondelok – Piatok</p>
            <p className="text-sm text-muted">7:00 – 17:00</p>
          </div>
        </div>

        {/* Director */}
        <div className="border-t border-border pt-4 text-sm">
          <p className="text-muted">Riaditeľka</p>
          <p className="font-medium text-text">Mgr. Andrea Vargová</p>
        </div>
      </div>

      {/* Social */}
      <div className="mt-6 flex gap-3 border-t border-border pt-5">
        <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary">
          <IconInstagram />
        </a>
        <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary">
          <IconFacebook />
        </a>
      </div>
    </div>
  )
}

export default function KontaktPage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        {/* 2a — Hero */}
        <section className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll>
              <KickerLabel>Kontakt</KickerLabel>
              <h1 className="mt-3 font-heading text-4xl font-semibold text-text md:text-5xl">
                Sme tu pre vás
              </h1>
              <p className="mt-4 max-w-xl text-muted">
                Sme tu pre vás každý pracovný deň. Napíšte nám, zavolajte alebo príďte osobne —
                radi vás privítame a odpovieme na všetky otázky o škôlke.
              </p>
            </RevealOnScroll>
          </Container>
        </section>

        {/* 2b — Form + Info card */}
        <section className="bg-surface py-10 md:py-14" id="napiste-nam">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
              {/* Left: form — Suspense required for useSearchParams */}
              <Suspense
                fallback={
                  <div className="h-[520px] animate-pulse rounded-[var(--radius-lg)] bg-border/20" />
                }
              >
                <ContactForm />
              </Suspense>

              {/* Right: info card */}
              <RevealOnScroll>
                <ContactInfoCard />
              </RevealOnScroll>
            </div>
          </Container>
        </section>

        {/* 2c — Map */}
        <MapSection />

        {/* 2d — Travel info */}
        <section className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-10">
              <p className="font-heading text-2xl font-semibold text-text">Ako sa k nám dostať</p>
            </RevealOnScroll>
            <div className="grid gap-8 md:grid-cols-3">
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconCar />}
                  heading="Autom"
                  body="[PLACEHOLDER: smer z Bratislavy po D1/D4, exit Rovinka, orientačné body v obci; parkovanie zadarmo pred budovou škôlky.]"
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconBus />}
                  heading="MHD"
                  body="[PLACEHOLDER: autobusová linka číslo X zo zastávky Y v Bratislave, prestup / priamy spoj, zastávka Rovinka, chôdza ~5 min.]"
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconBike />}
                  heading="Bicyklom"
                  body="[PLACEHOLDER: cyklotrasa z Bratislavy, orientačná vzdialenosť a čas; stojany na bicykle k dispozícii pred vchodom.]"
                />
              </RevealOnScroll>
            </div>
          </Container>
        </section>

        {/* 2e — FAQ */}
        <section className="bg-surface py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-8">
              <p className="font-heading text-2xl font-semibold text-text">
                Najčastejšie otázky pred návštevou
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <FAQAccordion items={faqItems} />
            </RevealOnScroll>
          </Container>
        </section>

        {/* 2f — CTABand */}
        <CTABand
          heading="Najlepší spôsob, ako spoznať Hrášok, je prísť k nám"
          subhead="Radi vás privítame. Stačí dať vedieť, kedy sa vám to hodí."
          primaryCTA={{ label: 'Rezervovať návštevu', href: '#napiste-nam' }}
          secondaryCTA={{ label: 'Zavolať: 0905 345 222', href: 'tel:+421905345222' }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
