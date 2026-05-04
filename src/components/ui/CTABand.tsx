import { Button } from './Button'
import { Container } from './Container'

export function CTABand({
  heading,
  subhead,
  primaryCTA,
  secondaryCTA,
}: {
  heading: string
  subhead?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}) {
  return (
    <section className="bg-primary py-20">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
          {subhead && (
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{subhead}</p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as="link" href={primaryCTA.href} variant="inverse-primary">
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button as="link" href={secondaryCTA.href} variant="inverse-secondary">
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
