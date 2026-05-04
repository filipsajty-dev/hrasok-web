import { Container, FeatureCard, SectionHeader, RevealOnScroll } from '@/components/ui'

function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5.5 6.5-1.7 8.9A5.5 5.5 0 0 1 11 20z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
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

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const reasons = [
  {
    icon: <IconLeaf />,
    heading: 'Profesionálny tím',
    body: 'Všetci naši pedagógovia majú vysokoškolské vzdelanie v odbore predškolskej pedagogiky a pravidelne sa ďalej vzdelávajú. Spolupracujeme s logopédom, detským psychológom a špeciálnym pedagógom.',
  },
  {
    icon: <IconBubble />,
    heading: 'Angličtina každý deň',
    body: 'Angličtina je súčasťou každodenných aktivít — nie len jednej hodiny. Deti ju spoznávajú prirodzene, hrou, piesňami a ranným kruhom od útleho veku.',
  },
  {
    icon: <IconMapPin />,
    heading: 'Časté výlety',
    body: 'Minimálne 5 výletov mesačne — do prírody, múzeí, divadla i fariem. Učenie mimo triedy je neoddeliteľnou súčasťou nášho programu.',
  },
]

export function WhyUsSection() {
  return (
    <section className="bg-cream py-10 md:py-14">
      <Container>
        <RevealOnScroll className="mb-14">
          <SectionHeader
            eyebrow="Naše výhody"
            eyebrowAccent="sprout"
            heading="Prečo si rodičia vyberajú Hrášok"
          />
        </RevealOnScroll>

        <div className="grid gap-10 md:grid-cols-3">
          {reasons.map((reason) => (
            <RevealOnScroll key={reason.heading}>
              <FeatureCard icon={reason.icon} heading={reason.heading} body={reason.body} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
