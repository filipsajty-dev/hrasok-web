import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQAccordion, type FAQItem } from '@/components/FAQAccordion'
import { Container, CTABand, RevealOnScroll, SectionHeader } from '@/components/ui'

export const metadata: Metadata = {
  title: '[PLACEHOLDER: Cenník — Hrášok]',
  description:
    '[PLACEHOLDER: Prehľad poplatkov, zahrnutých služieb a informácie o zápise do MŠ Hrášok.]',
}

const pricingTiers = [
  {
    id: 'poldnovy',
    name: 'Poldeň',
    hours: '7:00 – 12:00',
    price: '[PLACEHOLDER]',
    currency: '€/mesiac',
    highlight: false,
    features: [
      { label: 'Ranný program', included: true },
      { label: 'Raňajky + desiata', included: true },
      { label: 'Angličtina', included: true },
      { label: 'Výlety', included: true },
      { label: 'Obed', included: false },
      { label: 'Popoludňajší program', included: false },
      { label: 'Oddych', included: false },
      { label: 'Starostlivosť do 18:00', included: false },
    ],
  },
  {
    id: 'cely-den',
    name: 'Celý deň',
    hours: '7:00 – 17:00',
    price: '[PLACEHOLDER]',
    currency: '€/mesiac',
    highlight: true,
    features: [
      { label: 'Ranný program', included: true },
      { label: 'Raňajky + desiata', included: true },
      { label: 'Angličtina', included: true },
      { label: 'Výlety', included: true },
      { label: 'Obed', included: true },
      { label: 'Popoludňajší program', included: true },
      { label: 'Oddych', included: true },
      { label: 'Starostlivosť do 18:00', included: false },
    ],
  },
  {
    id: 'predlzeny',
    name: 'Predĺžený deň',
    hours: '7:00 – 18:00',
    price: '[PLACEHOLDER]',
    currency: '€/mesiac',
    highlight: false,
    features: [
      { label: 'Ranný program', included: true },
      { label: 'Raňajky + desiata', included: true },
      { label: 'Angličtina', included: true },
      { label: 'Výlety', included: true },
      { label: 'Obed', included: true },
      { label: 'Popoludňajší program', included: true },
      { label: 'Oddych', included: true },
      { label: 'Starostlivosť do 18:00', included: true },
    ],
  },
]

const faqItems: FAQItem[] = [
  {
    id: 'vek',
    question: 'Od akého veku prijímate deti?',
    answer:
      '[PLACEHOLDER: Prijímame deti od 2 rokov. Adaptácia prebieha postupne — prvé dni prichádza dieťa len na pár hodín.]',
  },
  {
    id: 'pocet',
    question: 'Koľko detí je v jednej skupine?',
    answer:
      '[PLACEHOLDER: Každá skupina má maximálne X detí. Vždy sú prítomní aspoň 2 pedagógovia, aby sme zaistili individuálnu pozornosť.]',
  },
  {
    id: 'choroba',
    question: 'Je školné vratné ak dieťa ochorie?',
    answer:
      '[PLACEHOLDER: Ak je dieťa choré dlhšie ako X dní po sebe, poskytujeme alikvotný odpočet za preukázanú neprítomnosť.]',
  },
  {
    id: 'adaptacia',
    question: 'Ako prebieha adaptácia nového dieťaťa?',
    answer:
      '[PLACEHOLDER: Adaptácia trvá zvyčajne 1–2 týždne. Prvé dni prichádza dieťa len na 2–3 hodiny a postupne predlžujeme čas podľa jeho komfortu.]',
  },
  {
    id: 'zahrnute',
    question: 'Čo je zahrnuté v školnom?',
    answer:
      '[PLACEHOLDER: V školnom sú zahrnuté — strava (podľa variantu), výlety, výtvarné pomôcky, angličtina a pedagogická starostlivosť. Nie sú zahrnuté: fotenie, divadelné vystúpenia.]',
  },
  {
    id: 'zapis',
    question: 'Kedy a ako prebieha zápis?',
    answer:
      '[PLACEHOLDER: Zápis prebieha každý rok v marci–apríli na nasledujúci školský rok. Prihlášku môžete podať aj mimo termínu zápisu — ak máme voľné miesta, radi vás zaradíme.]',
  },
  {
    id: 'strava',
    question: 'Môžeme doniesť vlastnú stravu?',
    answer:
      '[PLACEHOLDER: Z hygienických a organizačných dôvodov prosíme o použitie našej školskej kuchyne. Alergénom a diéte sa prispôsobíme po dohode s kuchárkou.]',
  },
]

export default function CennikPage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        <section className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll>
              <SectionHeader
                eyebrow="Cenník"
                eyebrowAccent="pea"
                heading="Transparentné ceny, žiadne skryté poplatky"
                headingLevel={1}
                intro="[PLACEHOLDER: Krátky úvod — čo je v cene zahrnúté, ako si vybrať správny variant. 1–2 vety.]"
              />
            </RevealOnScroll>
          </Container>
        </section>

        <section className="bg-surface py-10 md:py-14">
          <Container>
            <RevealOnScroll>
              <div className="grid gap-6 md:grid-cols-3">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`flex flex-col rounded-[var(--radius-lg)] border p-6 ${
                      tier.highlight
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border bg-surface shadow-sm'
                    }`}
                  >
                    {tier.highlight && (
                      <p className="mb-3 self-start rounded-[var(--radius-pill)] bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                        Najpopulárnejšie
                      </p>
                    )}
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {tier.hours}
                    </p>
                    <p className="mt-1 font-heading text-2xl font-semibold text-text">{tier.name}</p>
                    <p className="mt-4 font-heading text-3xl font-bold text-text">
                      {tier.price}{' '}
                      <span className="text-base font-normal text-muted">{tier.currency}</span>
                    </p>
                    <ul className="mt-6 flex flex-col gap-2">
                      {tier.features.map((f) => (
                        <li key={f.label} className="flex items-center gap-2 text-sm">
                          <span
                            className={f.included ? 'text-primary' : 'text-muted/40'}
                            aria-hidden="true"
                          >
                            {f.included ? '✓' : '×'}
                          </span>
                          <span className={f.included ? 'text-text' : 'text-muted/60'}>
                            {f.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <a
                        href="/kontakt"
                        className={`block w-full rounded-[var(--radius-button)] py-2.5 text-center text-sm font-medium transition-all duration-150 ${
                          tier.highlight
                            ? 'bg-primary text-white hover:bg-primary-hover'
                            : 'border border-primary text-primary hover:bg-primary hover:text-white'
                        }`}
                      >
                        Mám záujem
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </Container>
        </section>

        <section className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll className="mb-10">
              <SectionHeader eyebrow="Časté otázky" heading="Máte otázky? Máme odpovede" />
            </RevealOnScroll>
            <RevealOnScroll>
              <FAQAccordion items={faqItems} />
            </RevealOnScroll>
          </Container>
        </section>

        <CTABand
          heading="Zaujíma vás zápis do Hrášku?"
          subhead="Rezervujte si návštevu — radi vám všetko ukážeme a vysvetlíme."
          primaryCTA={{ label: 'Rezervovať návštevu', href: '/kontakt' }}
          secondaryCTA={{ label: 'Kontaktujte nás', href: '/kontakt' }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
