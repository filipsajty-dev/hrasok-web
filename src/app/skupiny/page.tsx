import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import { cn } from '@/lib/utils'
import {
  Button,
  Container,
  CTABand,
  KickerLabel,
  Heading,
  RevealOnScroll,
  Timeline,
  type TimelineEntry,
} from '@/components/ui'
import { SproutIcon } from '@/components/ui/icons/SproutIcon'

export const metadata: Metadata = {
  // [PLACEHOLDER: update title with real school name and location]
  title: 'Vekové skupiny — Hrášok',
  // [PLACEHOLDER: write final Slovak meta description ~155 chars]
  description:
    'Tri vekové skupiny pre deti od 3 do 6 rokov. Malé skupinky, kvalifikovaní pedagógovia a program prispôsobený každému veku.',
}

// ── Shared timeline entries ────────────────────────────────────────────────
const schedule23: TimelineEntry[] = [
  { time: '7:00 – 8:30', heading: 'Príchod a voľná hra', description: '[PLACEHOLDER: popis rannej voľnej hry a adaptačného obdobia pre najmenších]' },
  { time: '8:30 – 9:00', heading: 'Raňajky', description: '[PLACEHOLDER: popis raňajok, stolové návyky]' },
  { time: '9:00 – 9:30', heading: 'Ranný kruh', description: '[PLACEHOLDER: ranný rituál, angličtina, deň v týždni, počasie]' },
  { time: '9:30 – 10:30', heading: 'Riadená činnosť', description: '[PLACEHOLDER: senzorická hra, motorika, kreatívne aktivity]' },
  { time: '10:30 – 12:00', heading: 'Pobyt vonku', description: '[PLACEHOLDER: záhrada alebo park, voľný pohyb]' },
  { time: '12:00 – 12:30', heading: 'Obed', description: '[PLACEHOLDER: popis obeda, stravovanie]' },
  { time: '12:30 – 14:30', heading: 'Odpočinok / spánok', description: '[PLACEHOLDER: povinný odpočinok, tichá hra pre tých, čo nespí]' },
  { time: '14:30 – 17:00', heading: 'Olovrant a voľná hra', description: '[PLACEHOLDER: popoludňajší program, vyzdvihnutie]' },
]

const schedule34: TimelineEntry[] = [
  { time: '7:00 – 8:30', heading: 'Príchod a voľná hra' },
  { time: '8:30 – 9:00', heading: 'Raňajky' },
  { time: '9:00 – 9:30', heading: 'Ranný kruh v angličtine', description: '[PLACEHOLDER: popis ranného kruhu, každodenná angličtina]' },
  { time: '9:30 – 10:45', heading: 'Tematická činnosť', description: '[PLACEHOLDER: tematické týždne, rozvoj reči a kreativity]' },
  { time: '10:45 – 12:00', heading: 'Pobyt vonku / výlet', description: '[PLACEHOLDER: záhrada, park, mesačné výlety]' },
  { time: '12:00 – 12:30', heading: 'Obed' },
  { time: '12:30 – 14:00', heading: 'Odpočinok / tichá hra' },
  { time: '14:00 – 17:00', heading: 'Tvorivé dielne a olovrant', description: '[PLACEHOLDER: výtvarné, hudobné alebo pohybové aktivity]' },
]

const schedule56: TimelineEntry[] = [
  { time: '7:00 – 8:30', heading: 'Príchod a ranné úlohy', description: '[PLACEHOLDER: self-service rutiny, pripravíme na školú]' },
  { time: '8:30 – 9:00', heading: 'Raňajky' },
  { time: '9:00 – 9:30', heading: 'Ranný kruh — angličtina + matematika', description: '[PLACEHOLDER: čísla, deň, počasie, krátky anglický dialóg]' },
  { time: '9:30 – 11:00', heading: 'Štruktúrovaná výučba', description: '[PLACEHOLDER: čítanie, písanie, počty — hravou formou]' },
  { time: '11:00 – 12:00', heading: 'Pobyt vonku', description: '[PLACEHOLDER: fyzická aktivita, rozvoj hrubej motoriky]' },
  { time: '12:00 – 12:30', heading: 'Obed' },
  { time: '12:30 – 13:30', heading: 'Tichý čas / čítanie' },
  { time: '13:30 – 17:00', heading: 'Projektové aktivity a olovrant', description: '[PLACEHOLDER: skupinové projekty, dramatizácia, príprava na ZŠ]' },
]

// ── Components ─────────────────────────────────────────────────────────────

function ImagePlaceholder({
  label,
  aspectClass = 'aspect-[5/4]',
}: {
  label: string
  aspectClass?: string
}) {
  return (
    <div
      className={cn(aspectClass, 'flex w-full items-end justify-start rounded-[var(--radius-lg)] bg-border p-3')}
    >
      <span className="text-xs text-muted">{label}</span>
    </div>
  )
}

interface GroupSectionProps {
  id: string
  number: string
  kicker: string
  heading: string
  intro: string
  imageLabel: string
  schedule: TimelineEntry[]
  reverse?: boolean
  calloutText: string
  stats: Array<{ label: string; value: string }>
}

function GroupSection({
  id,
  number,
  kicker,
  heading,
  intro,
  imageLabel,
  schedule,
  reverse = false,
  calloutText,
  stats,
}: GroupSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="py-10 md:py-14"
    >
      <Container>
        <RevealOnScroll>
          <div className={cn('grid gap-12 md:grid-cols-2', reverse && 'md:[&>*:first-child]:order-2')}>

            {/* Text column */}
            <div className="flex h-full flex-col gap-6">
              <KickerLabel>{kicker}</KickerLabel>
              <Heading level={2} id={`${id}-heading`}>
                {heading}
              </Heading>
              {/* [PLACEHOLDER: 3–4 sentence group description] */}
              <p className="text-lg leading-relaxed text-muted">{intro}</p>

              {/* Micro-stats */}
              <div className="flex flex-wrap gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Callout — border-l accent keeps text aligned with heading */}
              <div className="rounded-r-[var(--radius-md)] border-l-2 border-primary/30 bg-cream py-4 pl-4 pr-5">
                {/* [PLACEHOLDER: "Čo robí túto skupinu výnimočnou" paragraph] */}
                <p className="text-sm leading-relaxed text-muted">{calloutText}</p>
              </div>

              {/* 6 images — cascading overlap + floating leaf accents */}
              <div className="relative">
                {/* Floating pea leaves */}
                <SproutIcon
                  className="leaf-float-1 pointer-events-none absolute -left-7 top-3 z-40 h-14 w-10 text-primary/35"
                  aria-hidden="true"
                />
                <SproutIcon
                  className="leaf-float-2 pointer-events-none absolute -right-6 top-[38%] z-40 h-11 w-8 text-primary/25"
                  aria-hidden="true"
                />
                <SproutIcon
                  className="leaf-float-3 pointer-events-none absolute -left-6 bottom-8 z-40 h-16 w-11 text-primary/20"
                  aria-hidden="true"
                />

                {/* Row 1 — in front (z-30), starts with a small top gap */}
                <div className="relative z-30 mt-6 grid grid-cols-2 gap-4">
                  <ImagePlaceholder label="Foto 1 [s rodičovským súhlasom]" aspectClass="aspect-[4/3]" />
                  <div className="translate-y-4">
                    <ImagePlaceholder label="Foto 2 [s rodičovským súhlasom]" aspectClass="aspect-[4/3]" />
                  </div>
                </div>

                {/* Row 2 — behind row 1 (z-20), gentle overlap */}
                <div className="relative z-20 mt-16 grid grid-cols-2 gap-4">
                  <ImagePlaceholder label="Foto 3 [s rodičovským súhlasom]" aspectClass="aspect-[4/3]" />
                  <div className="translate-y-4">
                    <ImagePlaceholder label="Foto 4 [s rodičovským súhlasom]" aspectClass="aspect-[4/3]" />
                  </div>
                </div>

                {/* Row 3 — furthest back (z-10) */}
                <div className="relative z-10 mt-16 grid grid-cols-2 gap-4">
                  <ImagePlaceholder label="Foto 5 [s rodičovským súhlasom]" aspectClass="aspect-[4/3]" />
                  <div className="translate-y-4">
                    <ImagePlaceholder label="Foto 6 [s rodičovským súhlasom]" aspectClass="aspect-[4/3]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image + schedule column */}
            <div className="flex flex-col gap-4">
              {/* Decorative number — right-aligned when image is on right, left-aligned when on left */}
              <div
                className={cn('pointer-events-none select-none', reverse ? 'text-left' : 'text-right')}
                aria-hidden="true"
              >
                <span className="font-heading text-[7rem] font-bold leading-none text-primary/[0.07] md:text-[9rem]">
                  {number}
                </span>
              </div>

              {/* Image — always starts below the number */}
              <div className="relative">
                <ImagePlaceholder label={imageLabel} aspectClass="aspect-[5/4]" />
                <span className="absolute bottom-3 left-3 rounded-[var(--radius-sm)] bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  {kicker}
                </span>
              </div>

              {/* Daily schedule */}
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
                  Vzorový denný program
                </p>
                <Timeline entries={schedule} />
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function SkupinyPage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        {/* ── Compact hero ───────────────────────────────────────────── */}
        <section
          aria-labelledby="skupiny-hero-heading"
          className="bg-cream py-10 md:py-14"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <KickerLabel className="mb-4">Vekové skupiny</KickerLabel>
              <Heading level={1} id="skupiny-hero-heading" className="mb-6">
                Tri skupiny, jedna cesta od troch do šiestich rokov
              </Heading>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted">
                V Hrášku veríme, že každé vývojové štádium si zaslúži vlastný priestor.
                Deti sa u nás učia hravou formou, zážitkami a vlastnou skúsenosťou — tak, aby
                sme v nich prebudili prirodzený záujem učiť sa, socializovať sa a rozvíjať empatiu.
                Každá skupinka je navrhnutá tak, aby tempo, obsah aj dynamika zodpovedali práve tomu,
                kde vaše dieťa práve je.
              </p>

              {/* Anchor jump links */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: '3 – 4 roky', href: '#skupina-34' },
                  { label: '4 – 5 rokov', href: '#skupina-45' },
                  { label: '5 – 6 rokov', href: '#skupina-56' },
                ].map((link) => (
                  <Button key={link.href} as="link" href={link.href} variant="secondary" size="md">
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Age group 01: 3–4 ──────────────────────────────────────── */}
        <GroupSection
          id="skupina-34"
          number="01"
          kicker="VEK 3 – 4 ROKY"
          heading="Najmenší škôlkári"
          intro="Skupinu pre deti vo veku 3 – 4 roky vedie naša skúsená pedagogička. Pomáhame tu tým najmenším objavovať všetko nové — hravou formou, zážitkami a vlastnou skúsenosťou. Dôraz kladieme na rozvoj reči, senzorické objavovanie a budovanie bezpečného vzťahu s kolektívom."
          imageLabel="Fotografia skupiny 3–4 roky [pridať s rodičovským súhlasom]"
          schedule={schedule23}
          calloutText="Každé dieťa má priestor objavovať vo svojom tempe. Naša pedagogička buduje s každým dieťaťom individuálny vzťah a pravidelne komunikuje s rodičmi o jeho pokrokoch. V prípade potreby spolupracujeme s logopédom."
          stats={[
            { label: 'Max. veľkosť', value: '6 detí' },
            { label: 'Pomer', value: '1 : 3' },
            { label: 'Hlavná učiteľka', value: '[Meno]' },
          ]}
        />

        {/* ── Age group 02: 4–5 ──────────────────────────────────────── */}
        <div className="bg-cream">
          <GroupSection
            id="skupina-45"
            number="02"
            kicker="VEK 4 – 5 ROKOV"
            heading="Pokročilí škôlkári"
            reverse
            intro="U strednej skupiny detí vo veku 4 – 5 rokov rozvíjame kreativitu, pohybové schopnosti a sociálne zručnosti. Deti sa stávajú skutočnými členmi komunity — spolupracujú, experimentujú a vyjadrujú sa. Angličtina je súčasťou každodenných aktivít prostredníctvom piesní, hier a príbehov."
            imageLabel="Fotografia skupiny 4–5 rokov [pridať s rodičovským súhlasom]"
            schedule={schedule34}
            calloutText="Tematické týždne prepájajú slovenčinu s angličtinou prirodzenou formou. Každý mesiac podnikáme spoločné výlety, ktoré rozširujú obzory a podporujú tímovú spoluprácu. V prípade potreby spolupracujeme s detským psychológom."
            stats={[
              { label: 'Max. veľkosť', value: '8 detí' },
              { label: 'Pomer', value: '1 : 4' },
              { label: 'Hlavná učiteľka', value: '[Meno]' },
            ]}
          />
        </div>

        {/* ── Pull-quote between group 2 and 3 ──────────────────────── */}
        <RevealOnScroll>
          <section className="bg-surface py-10 md:py-12">
            <Container>
              <div className="mx-auto max-w-2xl text-center">
                <blockquote className="font-heading text-2xl font-semibold italic leading-snug text-primary md:text-3xl">
                  &bdquo;Každé dieťa rastie vo svojom tempe — našou úlohou je byť pri tom.&ldquo;
                </blockquote>
                <p className="mt-4 text-sm text-muted">
                  Jana Šajtyová, konateľka Hrášku
                </p>
              </div>
            </Container>
          </section>
        </RevealOnScroll>

        {/* ── Age group 03: 5–6 ──────────────────────────────────────── */}
        <GroupSection
          id="skupina-56"
          number="03"
          kicker="VEK 5 – 6 ROKOV"
          heading="Predškoláci"
          intro="Predškolskú skupinu detí vo veku 5 – 6 rokov plnohodnotne pripravujeme na vstup do veľkej školy. Hravou formou rozvíjame gramotnosť, matematické myslenie a samostatnosť. Deti odchádzajú do školy s radosťou, sebaistotou a pevnými základmi."
          imageLabel="Fotografia skupiny 5–6 rokov [pridať s rodičovským súhlasom]"
          schedule={schedule56}
          calloutText="Naša škôlka je akreditovaná Ministerstvom školstva SR od septembra 2015. Spolupracujeme so špeciálnym pedagógom a detským psychológom, aby sme každému predškolákovi poskytli individuálnu podporu, ktorú potrebuje."
          stats={[
            { label: 'Max. veľkosť', value: '8 detí' },
            { label: 'Pomer', value: '1 : 4' },
            { label: 'Hlavná učiteľka', value: '[Meno]' },
          ]}
        />

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
