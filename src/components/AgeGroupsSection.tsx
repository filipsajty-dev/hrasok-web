import Link from 'next/link'
import { Container, SectionHeader, RevealOnScroll } from '@/components/ui'

const ageGroups = [
  {
    range: '2 – 3',
    heading: 'Najmenší škôlkári',
    description:
      '[Popis skupiny pre deti vo veku 2–3 roky: čo sa učia, na čo sa zameriavame, prečo je táto skupina výnimočná.]',
    imageLabel: 'Fotografia skupiny 2–3 roky',
  },
  {
    range: '3 – 4',
    heading: 'Pokročilí škôlkári',
    description:
      '[Popis skupiny pre deti vo veku 3–4 roky: rozvoj reči, kreativity, spolupráce a dennej rutiny.]',
    imageLabel: 'Fotografia skupiny 3–4 roky',
  },
  {
    range: '5 – 6',
    heading: 'Predškoláci',
    description:
      '[Popis skupiny pre deti vo veku 5–6 rokov: intenzívna príprava na základnú školu — čítanie, počty, angličtina.]',
    imageLabel: 'Fotografia skupiny 5–6 roky',
  },
]

export function AgeGroupsSection() {
  return (
    <section className="bg-cream py-10 md:py-14">
      <Container>
        <RevealOnScroll className="mb-10">
          <SectionHeader
            eyebrow="Vekové skupiny"
            eyebrowAccent="pea"
            heading="Naše vekové skupiny"
            intro="Každá skupinka je malá a zámerná — každé dieťa patrí len k deťom rovnakého veku."
          />
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {ageGroups.map((group) => (
            <RevealOnScroll key={group.range}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-surface shadow-sm transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-1">
                {/* Image — PLACEHOLDER: replace with real photo (parental consent required) */}
                <div className="aspect-[3/2] overflow-hidden">
                  <div className="flex h-full w-full items-center justify-center bg-border transition-transform duration-[400ms] ease-in-out motion-safe:group-hover:scale-[1.04]">
                    <span className="text-xs text-muted">{group.imageLabel}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Vek {group.range} roky
                  </p>
                  <h3 className="font-heading text-2xl font-semibold text-text">{group.heading}</h3>
                  <p className="grow text-muted">{group.description}</p>
                  <Link
                    href="/skupiny"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Zistiť viac
                    <span
                      className="transition-transform duration-200 ease-in-out motion-safe:group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
