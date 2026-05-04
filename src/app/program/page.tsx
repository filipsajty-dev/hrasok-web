import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import {
  Button,
  Carousel,
  Container,
  CTABand,
  FeatureCard,
  Heading,
  KickerLabel,
  RevealOnScroll,
  SectionHeader,
  Timeline,
  type TimelineEntry,
} from '@/components/ui'
import { SproutIcon } from '@/components/ui/icons/SproutIcon'

export const metadata: Metadata = {
  // [PLACEHOLDER: update with real school name and location]
  title: 'Náš program — Hrášok',
  // [PLACEHOLDER: write final Slovak meta description ~155 chars]
  description:
    'Ako vyzerá deň v Hrášku? Bežný denný program, angličtina, výlety, čas vonku a aktivity navyše.',
}

// ── TOC entries ────────────────────────────────────────────────────────────
const tocEntries = [
  { id: 'bezny-den', label: 'Bežný deň' },
  { id: 'anglictina', label: 'Angličtina' },
  { id: 'vylety', label: 'Výlety' },
  { id: 'vonku-strava-aktivity', label: 'Vonku, strava, aktivity' },
  { id: 'pre-rodicov', label: 'Pre rodičov' },
]

// ── Daily schedule ─────────────────────────────────────────────────────────
const dailySchedule: TimelineEntry[] = [
  {
    time: '7:00 – 8:30',
    heading: 'Príchod a voľná hra',
    description: '[PLACEHOLDER: popis ranného príchodu, adaptácia, voľné hry v centrách aktivít]',
  },
  {
    time: '8:30 – 9:00',
    heading: 'Raňajky',
    description: '[PLACEHOLDER: spoločné raňajky, pestovanie stolových návykov a angličtiny pri jedle]',
  },
  {
    time: '9:00 – 9:30',
    heading: 'Ranný kruh',
    description: '[PLACEHOLDER: deň v týždni, počasie, ranná angličtina, krátke piesne a básničky]',
  },
  {
    time: '9:30 – 11:00',
    heading: 'Riadená činnosť',
    description: '[PLACEHOLDER: tematická aktivita prepojená s týždennou témou — výtvarne, pohybovo, hudobne]',
  },
  {
    time: '11:00 – 12:00',
    heading: 'Pobyt vonku',
    description: '[PLACEHOLDER: záhrada alebo park, voľný pohyb, organizované pohybové hry]',
  },
  {
    time: '12:00 – 12:30',
    heading: 'Obed',
    description: '[PLACEHOLDER: domáca strava, pestovanie vzťahu k jedlu, slovenčina pri stole]',
  },
  {
    time: '12:30 – 14:00',
    heading: 'Odpočinok / tichý čas',
    description: '[PLACEHOLDER: povinný spánok pre mladšie skupiny, tichá hra alebo čítanie pre predškolákov]',
  },
  {
    time: '14:00 – 15:00',
    heading: 'Aktivity navyše',
    description: '[PLACEHOLDER: yoga, hudba, dramatizácia — podľa dňa v týždni]',
  },
  {
    time: '15:00 – 17:00',
    heading: 'Olovrant a voľná hra',
    description: '[PLACEHOLDER: popoludňajší čas, krúžky, príchod rodičov]',
  },
]

// ── Feature icons ─────────────────────────────────────────────────────────
function IconSun() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function IconUtensils() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}

function IconMusic() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function IconBubble() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ImagePlaceholder({ label, aspectClass = 'aspect-[4/3]' }: { label: string; aspectClass?: string }) {
  return (
    <div className={`${aspectClass} flex w-full items-center justify-center rounded-[var(--radius-lg)] bg-border`}>
      <span className="text-sm text-muted">{label}</span>
    </div>
  )
}

// ── Carousel slides ────────────────────────────────────────────────────────
const tripSlides = [
  // [PLACEHOLDER: nahradiť skutočnými fotografiami výletov s rodičovským súhlasom]
  { label: 'Výlet — Návšteva farmy v Modre', caption: 'Návšteva farmy v Modre', date: 'Október 2025' },
  { label: 'Výlet — Botanická záhrada', caption: 'Botanická záhrada', date: 'September 2025' },
  { label: 'Výlet — Divadlo pre deti', caption: 'Divadlo pre deti', date: 'November 2025' },
  { label: 'Výlet — Lesný park', caption: 'Lesný park', date: 'Október 2025' },
  { label: 'Výlet — Múzeum hračiek', caption: 'Múzeum hračiek', date: 'September 2025' },
  { label: 'Výlet — Záchranná stanica', caption: 'Záchranná stanica pre zvieratá', date: 'November 2025' },
]

// ── Page ───────────────────────────────────────────────────────────────────
export default function ProgramPage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section aria-labelledby="program-hero-heading" className="bg-cream py-10 md:py-14">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-[5fr_3fr]">
              {/* Text */}
              <div className="flex flex-col gap-6">
                <KickerLabel>Náš program</KickerLabel>
                <Heading level={1} id="program-hero-heading">
                  Deň plný objavovania, jazyka a hry
                </Heading>
                {/* [PLACEHOLDER: 2–3 vety o filozofii programu] */}
                <p className="text-lg leading-relaxed text-muted">
                  [PLACEHOLDER: V Hrášku nemáme &bdquo;hodiny&ldquo; — máme riadenosti prepletené s voľnou hrou, angličtinou
                  a pohybom vonku. Každý deň je iný, ale štruktúra zostáva — pretože deti potrebujú
                  predvídateľnosť, aby mohli slobodne objavovať.]
                </p>
                <div>
                  <Button as="link" href="/kontakt" variant="primary" size="lg">
                    Rezervovať návštevu
                  </Button>
                </div>
              </div>

              {/* Single hero image — [PLACEHOLDER: fotografia z bežného dňa s rodičovským súhlasom] */}
              <ImagePlaceholder label="Foto — bežný deň v Hrášku" aspectClass="aspect-[4/3]" />
            </div>
          </Container>
        </section>

        {/* ── Horizontal TOC ─────────────────────────────────────────── */}
        <div className="border-b border-border bg-surface">
          <Container>
            <nav aria-label="Obsah stránky" className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted">
                Obsah
              </span>
              <span className="mx-2 shrink-0 text-border" aria-hidden="true">·</span>
              {tocEntries.map((entry, i) => (
                <span key={entry.id} className="flex shrink-0 items-center gap-2">
                  <a
                    href={`#${entry.id}`}
                    className="whitespace-nowrap text-sm text-muted transition-colors hover:text-primary"
                  >
                    {entry.label}
                  </a>
                  {i < tocEntries.length - 1 && (
                    <span className="text-border" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </nav>
          </Container>
        </div>

        {/* ── Section 1 — Bežný deň ──────────────────────────────────── */}
        <section id="bezny-den" aria-labelledby="bezny-den-heading" className="py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-8">
              <SectionHeader
                eyebrow="Denný rytmus"
                heading="Bežný deň v Hrášku"
                headingId="bezny-den-heading"
                intro="[PLACEHOLDER: 1–2 vety o tom, ako je deň štruktúrovaný a prečo]"
              />
            </RevealOnScroll>

            <div className="grid items-start gap-10 md:grid-cols-[3fr_2fr]">
              <RevealOnScroll>
                <Timeline entries={dailySchedule} />
              </RevealOnScroll>

              {/* 5 staggered image placeholders */}
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <RevealOnScroll>
                    <ImagePlaceholder label="Foto — ranná aktivita" aspectClass="aspect-[16/9]" />
                  </RevealOnScroll>
                </div>
                <RevealOnScroll>
                  <ImagePlaceholder label="Foto — ranný kruh" aspectClass="aspect-square" />
                </RevealOnScroll>
                <RevealOnScroll className="mt-5">
                  <ImagePlaceholder label="Foto — riadená činnosť" aspectClass="aspect-square" />
                </RevealOnScroll>
                <RevealOnScroll className="mt-5">
                  <ImagePlaceholder label="Foto — pobyt vonku" aspectClass="aspect-square" />
                </RevealOnScroll>
                <RevealOnScroll>
                  <ImagePlaceholder label="Foto — obed" aspectClass="aspect-square" />
                </RevealOnScroll>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Section 2 — Angličtina ─────────────────────────────────── */}
        <section id="anglictina" aria-labelledby="anglictina-heading" className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-8">
              <SectionHeader
                eyebrow="Jazyky"
                heading="Angličtina každý deň"
                headingId="anglictina-heading"
                intro="[PLACEHOLDER: 2 vety o prístupe k angličtine — nie hodina, ale spôsob komunikácie]"
              />
            </RevealOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconBubble />}
                  heading="Ranný kruh"
                  body="[PLACEHOLDER: každodenný anglický ranný kruh — deň, počasie, pozdravy, piesne]"
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconGlobe />}
                  heading="Tematické týždne"
                  body="[PLACEHOLDER: týždenné témy v angličtine — farmy, farby, zvieratá, príroda]"
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconStar />}
                  heading="Native speaker"
                  body="[PLACEHOLDER: týždenná návšteva rodilého hovorcu — konverzácia, piesne, hry]"
                />
              </RevealOnScroll>
            </div>

            <RevealOnScroll className="mt-10">
              <div className="flex items-start gap-4 rounded-[var(--radius-md)] border-l-4 border-primary/30 bg-surface py-6 pl-6 pr-8">
                <SproutIcon className="mt-1 h-8 w-6 shrink-0 text-primary/40" />
                {/* [PLACEHOLDER: citát alebo filozofia angličtiny v škôlke] */}
                <p className="font-heading text-lg font-semibold italic leading-snug text-primary">
                  &bdquo;[PLACEHOLDER: Angličtina sa u nás neučí — žije. Je v piesňach, hrách,
                  pozdravoch aj príbehoch. Keď deti nevnímajú hranicu medzi jazykmi, naučia sa
                  rýchlejšie.]&ldquo;
                </p>
              </div>
            </RevealOnScroll>
          </Container>
        </section>

        {/* ── Section 3 — Výlety ─────────────────────────────────────── */}
        <section id="vylety" aria-labelledby="vylety-heading" className="py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-8">
              <SectionHeader
                eyebrow="Objavovanie sveta"
                heading="Najmenej 5 výletov mesačne"
                headingId="vylety-heading"
                intro="[PLACEHOLDER: Výlety nie sú odmena — sú súčasťou programu. Každý mesiac navštívime aspoň päť miest: od fariem po múzeá, od lesov po divadlá. Deti objavujú svet mimo triedy.]"
              />
            </RevealOnScroll>

            <RevealOnScroll>
              <Carousel
                slides={tripSlides.map((slide) => (
                  <div key={slide.label} className="px-2">
                    <ImagePlaceholder label={slide.label} aspectClass="aspect-[16/9]" />
                    <div className="mt-3 px-1">
                      <p className="font-medium text-text">{slide.caption}</p>
                      <p className="text-sm text-muted">{slide.date}</p>
                    </div>
                  </div>
                ))}
              />
            </RevealOnScroll>

            <RevealOnScroll className="mt-6">
              <p className="text-sm text-muted">
                * Súčasťou každého výletu sú vždy minimálne dvaja pedagógovia.
              </p>
            </RevealOnScroll>
          </Container>
        </section>

        {/* ── Section 4 — Vonku, strava, aktivity ────────────────────── */}
        <section id="vonku-strava-aktivity" aria-labelledby="vonku-heading" className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-8">
              <SectionHeader
                eyebrow="Každý deň"
                heading="Vonku, zdravo a s radosťou"
                headingId="vonku-heading"
              />
            </RevealOnScroll>

            <div className="grid gap-10 md:grid-cols-3">
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconSun />}
                  heading="Čas vonku"
                  body="[PLACEHOLDER: každodenný pobyt vonku — vlastná záhrada a blízky park. Deti sa hýbu každý deň bez ohľadu na počasie.]"
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconUtensils />}
                  heading="Strava"
                  body="[PLACEHOLDER: filozofia stravovania — domáca kuchyňa, sezónne suroviny, pestrosť. Žiadne polotovary.]"
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <FeatureCard
                  icon={<IconMusic />}
                  heading="Aktivity navyše"
                  body="[PLACEHOLDER: týždenné aktivity — detská yoga, hudobná výchova, výtvarné ateliéry. Zahrnuté v cene.]"
                />
              </RevealOnScroll>
            </div>
          </Container>
        </section>

        {/* ── Section 5 — Pre rodičov ─────────────────────────────────── */}
        <section id="pre-rodicov" aria-labelledby="rodicovia-heading" className="py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-8">
              <SectionHeader
                eyebrow="Komunikácia"
                heading="Pre rodičov — ste súčasťou každého dňa"
                headingId="rodicovia-heading"
                intro="[PLACEHOLDER: Transparentná komunikácia je súčasťou programu. Každý deň viete, čo vaše dieťa robilo — a prečo.]"
              />
            </RevealOnScroll>

            <div className="grid items-center gap-12 md:grid-cols-2">
              <RevealOnScroll>
                {/* [PLACEHOLDER: obsah — aplikácia, denníky, mesačné stretnutia, otvorené hodiny] */}
                <p className="text-lg leading-relaxed text-muted">
                  [PLACEHOLDER: Popis komunikácie s rodičmi — napr. denné správy cez aplikáciu,
                  týždenný newsletter s prehľadom tém, mesačné rodičovské stretnutia, otvorené hodiny
                  2× ročne. Čo rodičia oceňujú na priamom kontakte s pedagógom každé ráno.]
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <ImagePlaceholder
                  label="Foto — rodič s dieťaťom pri odovzdávaní [PLACEHOLDER: s rodičovským súhlasom]"
                  aspectClass="aspect-[4/3]"
                />
              </RevealOnScroll>
            </div>
          </Container>
        </section>

        <CTABand
          heading="Príďte sa pozrieť"
          subhead="Najlepší spôsob, ako spoznať Hrášok, je prísť k nám na návštevu."
          primaryCTA={{ label: 'Rezervovať návštevu', href: '/kontakt' }}
          secondaryCTA={{ label: 'Kontaktujte nás', href: '/kontakt' }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
