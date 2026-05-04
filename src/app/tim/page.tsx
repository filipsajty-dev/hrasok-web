import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import { TeamGrid } from '@/components/TeamGrid'
import { Container, CTABand, RevealOnScroll, SectionHeader } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Náš tím — Hrášok',
  description:
    'Zoznámte sa s pedagogickým tímom Hrášku — kvalifikovaní pedagógovia, logopéd, detský psychológ a špeciálny pedagóg.',
}

export default function TimPage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        <section className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll>
              <SectionHeader
                eyebrow="Náš tím"
                eyebrowAccent="sprout"
                heading="Ľudia, ktorí sa starajú o vaše dieťa"
                headingLevel={1}
                intro="Náš tím tvoria kvalifikovaní pedagógovia s vysokoškolským vzdelaním v odbore predškolskej pedagogiky. Pravidelne sa ďalej vzdelávajú a spolupracujú s logopédom, detským psychológom a špeciálnym pedagógom."
              />
            </RevealOnScroll>
          </Container>
        </section>

        <section className="bg-surface py-10 md:py-14">
          <Container>
            <TeamGrid />
          </Container>
        </section>

        <CTABand
          heading="Chcete sa osobne stretnúť s naším tímom?"
          subhead="Príďte na otvorený deň — radi vás prevedieme škôlkou a zodpovieme všetky otázky."
          primaryCTA={{ label: 'Rezervovať návštevu', href: '/kontakt' }}
          secondaryCTA={{ label: 'Kontaktujte nás', href: '/kontakt' }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
