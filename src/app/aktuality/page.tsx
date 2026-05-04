import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import { NewsGrid } from '@/components/NewsGrid'
import { Container, CTABand, RevealOnScroll, SectionHeader } from '@/components/ui'
import { newsPosts } from '@/lib/news-posts'

export const metadata: Metadata = {
  title: '[PLACEHOLDER: Aktuality — Hrášok]',
  description: '[PLACEHOLDER: Novinky, výlety a fotogalérie z MŠ Hrášok.]',
}

export default function AktualityPage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        <section className="bg-cream py-10 md:py-14">
          <Container>
            <RevealOnScroll>
              <SectionHeader
                eyebrow="Aktuality"
                eyebrowAccent="pea"
                heading="Čo sa deje v Hrášku"
                headingLevel={1}
                intro="Výlety, aktivity a novinky priamo z našej škôlky."
              />
            </RevealOnScroll>
          </Container>
        </section>

        <section className="bg-surface py-10 md:py-14">
          <Container>
            <NewsGrid posts={newsPosts} />
          </Container>
        </section>

        <CTABand
          heading="Chcete vidieť Hrášok naživo?"
          subhead="Rezervujte si návštevu a príďte sa pozrieť."
          primaryCTA={{ label: 'Rezervovať návštevu', href: '/kontakt' }}
          secondaryCTA={{ label: 'Kontaktujte nás', href: '/kontakt' }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
