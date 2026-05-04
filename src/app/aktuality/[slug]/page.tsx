import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { StickyNav } from '@/components/StickyNav'
import { SiteFooter } from '@/components/SiteFooter'
import { Carousel, Container, CTABand } from '@/components/ui'
import { newsPosts, getPostBySlug } from '@/lib/news-posts'

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Hrášok`,
    description: post.excerpt,
  }
}

const carouselSlides = [1, 2, 3, 4]

const placeholderBullets = [
  '[PLACEHOLDER: Zaujímavosť alebo highlight z článku — 1 veta.]',
  '[PLACEHOLDER: Zaujímavosť alebo highlight z článku — 1 veta.]',
  '[PLACEHOLDER: Zaujímavosť alebo highlight z článku — 1 veta.]',
  '[PLACEHOLDER: Zaujímavosť alebo highlight z článku — 1 veta.]',
]

export default async function AktualitySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <AnnouncementBar />
      <StickyNav />
      <main>
        <article>
          {/* Header */}
          <section className="bg-cream py-10 md:py-14">
            <Container>
              <nav aria-label="Drobečková navigácia" className="mb-6">
                <Link
                  href="/aktuality"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  ← Späť na aktuality
                </Link>
              </nav>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                {post.category} · {post.publishedAt}
              </p>
              <h1 className="max-w-3xl font-heading text-3xl font-semibold text-text md:text-4xl">
                {post.title}
              </h1>
            </Container>
          </section>

          {/* Fotogaléria — slide 1 is the cover photo */}
          <section className="bg-surface py-6">
            <Container>
              <p className="mb-4 font-heading text-2xl font-semibold text-text">Fotogaléria</p>
              <Carousel
                slides={[
                  <div
                    key="cover"
                    className="flex aspect-[16/9] items-end justify-start rounded-[var(--radius-lg)] bg-border p-4"
                  >
                    <span className="text-xs text-muted">
                      [PLACEHOLDER: cover — {post.coverImageAlt}]
                    </span>
                  </div>,
                  ...carouselSlides.map((n) => (
                    <div
                      key={n}
                      className="flex aspect-[16/9] items-end justify-start rounded-[var(--radius-lg)] bg-border p-4"
                    >
                      <span className="text-xs text-muted">
                        [PLACEHOLDER: foto {n} — {post.title}]
                      </span>
                    </div>
                  )),
                ]}
              />
            </Container>
          </section>

          {/* Article body */}
          <section className="bg-surface py-10 md:py-14">
            <Container>
              <div className="mx-auto flex max-w-3xl flex-col gap-6">
                {/* Lead */}
                <p className="text-base leading-relaxed text-muted">{post.excerpt}</p>

                {/* Section heading */}
                <h2 className="font-heading text-2xl font-semibold text-text">
                  [PLACEHOLDER: Nadpis sekcie — napr. &bdquo;Čo sme zažili&ldquo;]
                </h2>

                {/* Body */}
                <p className="text-base leading-relaxed text-muted">{post.body}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2.5 rounded-[var(--radius-md)] bg-cream p-5">
                  {placeholderBullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-0.5 shrink-0 font-semibold text-primary" aria-hidden="true">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Second section */}
                <h2 className="font-heading text-2xl font-semibold text-text">
                  [PLACEHOLDER: Nadpis sekcie 2 — napr. &bdquo;Čo si deti odniesli domov&ldquo;]
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  [PLACEHOLDER: Záverečný odsek — reflexia, čo aktivita priniesla deťom alebo čo plánujeme ďalej. 2–3 vety.]
                </p>
              </div>
            </Container>
          </section>
        </article>

        <CTABand
          heading="Máte záujem o Hrášok?"
          subhead="Rezervujte si návštevu — radi vás spoznáme."
          primaryCTA={{ label: 'Rezervovať návštevu', href: '/kontakt' }}
          secondaryCTA={{ label: 'Späť na aktuality', href: '/aktuality' }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
