import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { HeroSection } from '@/components/HeroSection'
import { StatsStrip } from '@/components/StatsStrip'
import { AgeGroupsSection } from '@/components/AgeGroupsSection'
import { WhyUsSection } from '@/components/WhyUsSection'
import { NasPribehSection } from '@/components/NasPribehSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { CTABand } from '@/components/ui'
import { SiteFooter } from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        <HeroSection />
        <StatsStrip />
        <AgeGroupsSection />
        <WhyUsSection />
        <NasPribehSection />
        <TestimonialsSection />
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
