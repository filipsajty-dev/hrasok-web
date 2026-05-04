import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import { cn } from '@/lib/utils'
import { Container, CTABand, RevealOnScroll, SectionHeader } from '@/components/ui'

export const metadata: Metadata = {
  title: '[PLACEHOLDER: Priestory — Hrášok]',
  description:
    '[PLACEHOLDER: Prezrite si priestory MŠ Hrášok — svetlé triedy, záhradu, herňu a jedáleň.]',
}

interface Space {
  id: string
  name: string
  eyebrowNumber: string
  description: string
  imageCount: 2 | 3
}

const spaces: Space[] = [
  {
    id: 'hlavna-trieda',
    name: 'Hlavná trieda',
    eyebrowNumber: '01',
    description:
      '[PLACEHOLDER: Svetlá, vzdušná trieda vybavená rozmanitými kútikmi na hru, tvorivosť a objavovanie. Každý kútik je navrhnutý tak, aby podporoval samostatné učenie. 2–3 vety.]',
    imageCount: 3,
  },
  {
    id: 'zahrada',
    name: 'Záhrada',
    eyebrowNumber: '02',
    description:
      '[PLACEHOLDER: Priestranná záhrada s hracími prvkami, pieskoviskom, bylinkovou záhradkou a tienistými stromami. Deti trávia vonku čo najviac času. 2–3 vety.]',
    imageCount: 3,
  },
  {
    id: 'herna',
    name: 'Herňa',
    eyebrowNumber: '03',
    description:
      '[PLACEHOLDER: Pohybová herňa so stavebnicovými kútikmi, mäkkými preliezačkami a detskou knižnicou. Ideálne miesto pre voľnú hru a pohyb. 2–3 vety.]',
    imageCount: 2,
  },
  {
    id: 'jedalena',
    name: 'Jedáleň',
    eyebrowNumber: '04',
    description:
      '[PLACEHOLDER: Príjemná jedáleň, kde sa deti učia stolové návyky a vychutnávajú domácu stravu. Stravujeme sa spoločne, v pokoji a bez zhonu. 2–3 vety.]',
    imageCount: 2,
  },
  {
    id: 'odpocivaren',
    name: 'Odpočiváreň',
    eyebrowNumber: '05',
    description:
      '[PLACEHOLDER: Tichá, zatemnená odpočiváreň s pohodlnými postieľkami a jemnou hudbou. Pre deti, ktoré poludňajší oddych nepotrebujú, máme tichú alternatívu. 2–3 vety.]',
    imageCount: 2,
  },
  {
    id: 'satna',
    name: 'Vchod a šatňa',
    eyebrowNumber: '06',
    description:
      '[PLACEHOLDER: Bezpečný príjem detí s osobnými skrinkami, detskými prezúvkami a výtvarnými prácami, ktoré zdobia steny šatne. Prvé miesto, kde deti každý deň začínajú. 2–3 vety.]',
    imageCount: 2,
  },
]

function SpaceSection({
  space,
  reverse,
  bg,
}: {
  space: Space
  reverse: boolean
  bg: 'cream' | 'surface'
}) {
  return (
    <section
      id={space.id}
      className={cn('py-10 md:py-14', bg === 'cream' ? 'bg-cream' : 'bg-surface')}
    >
      <Container>
        <RevealOnScroll>
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* Image grid — moves to right column when reverse */}
            <div className={cn(reverse && 'md:order-2')}>
              {space.imageCount === 3 ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 flex aspect-[16/9] items-end justify-start rounded-[var(--radius-lg)] bg-border p-3">
                    <span className="text-xs text-muted">
                      [PLACEHOLDER: {space.name} — foto 1]
                    </span>
                  </div>
                  <div className="flex aspect-[4/3] items-end justify-start rounded-[var(--radius-lg)] bg-border p-3">
                    <span className="text-xs text-muted">
                      [PLACEHOLDER: {space.name} — foto 2]
                    </span>
                  </div>
                  <div className="flex aspect-[4/3] items-end justify-start rounded-[var(--radius-lg)] bg-border p-3">
                    <span className="text-xs text-muted">
                      [PLACEHOLDER: {space.name} — foto 3]
                    </span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex aspect-[4/3] items-end justify-start rounded-[var(--radius-lg)] bg-border p-3">
                    <span className="text-xs text-muted">
                      [PLACEHOLDER: {space.name} — foto 1]
                    </span>
                  </div>
                  <div className="flex aspect-[4/3] items-end justify-start rounded-[var(--radius-lg)] bg-border p-3">
                    <span className="text-xs text-muted">
                      [PLACEHOLDER: {space.name} — foto 2]
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Text — moves to left column when reverse */}
            <div className={cn(reverse && 'md:order-1')}>
              <SectionHeader
                eyebrow={`Priestory · ${space.eyebrowNumber}`}
                heading={space.name}
                headingLevel={2}
                intro={space.description}
              />
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

export default function PriestoryPage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        <section className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll>
              <SectionHeader
                eyebrow="Priestory"
                eyebrowAccent="sprout"
                heading="Miesto, kde sa deti cítia ako doma"
                headingLevel={1}
                intro="[PLACEHOLDER: Krátky úvod — veľkorysé, bezpečné a inšpirujúce prostredie, kde každý kútik slúži konkrétnemu účelu. 1–2 vety.]"
              />
            </RevealOnScroll>
          </Container>
        </section>

        {spaces.map((space, i) => (
          <SpaceSection
            key={space.id}
            space={space}
            reverse={i % 2 !== 0}
            bg={i % 2 === 0 ? 'surface' : 'cream'}
          />
        ))}

        <CTABand
          heading="Chcete vidieť priestory naživo?"
          subhead="Príďte na otvorený deň — radi vás prevedieme každým kútikom."
          primaryCTA={{ label: 'Rezervovať návštevu', href: '/kontakt' }}
          secondaryCTA={{ label: 'Kontaktujte nás', href: '/kontakt' }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
