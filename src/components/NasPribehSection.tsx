import { Button, Container, RevealOnScroll, SectionHeader } from '@/components/ui'

export function NasPribehSection() {
  return (
    <section className="bg-cream py-10 md:py-14">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <RevealOnScroll>
            <div className="flex aspect-[3/4] w-full items-end justify-start rounded-[var(--radius-lg)] bg-border p-4">
              <span className="text-xs font-medium text-muted">
                [PLACEHOLDER: Foto zakladateľky — s rodičovským súhlasom]
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Náš príbeh"
              eyebrowAccent="sprout"
              heading="Vznikli sme z presvedčenia, nie z náhody"
            />
            <div className="flex flex-col gap-4 leading-relaxed text-muted">
              <p>
                Súkromnú materskú školu Hrášok sme otvorili z presvedčenia, že deti si zaslúžia
                miesto, kde sa cítia bezpečne, šťastne a zároveň sa prirodzene rozvíjajú.
                Ak hľadáte škôlku, kde Vaše dieťa nájde presne to, čo potrebuje — ste na správnom mieste.
              </p>
              <p>
                Veríme, že deti sa učia najlepšie hravou formou, zážitkami a vlastnou skúsenosťou.
                Naším cieľom nie je naučiť deti čo najviac — ale v nich prebudiť prirodzený záujem
                učiť sa, socializovať sa a rozvíjať empatiu.
              </p>
              <p>
                Náš tím tvoria kvalifikovaní pedagógovia, ktorí sa pravidelne ďalej vzdelávajú.
                Spolupracujeme s logopédom, detským psychológom a špeciálnym pedagógom.
                Sme akreditovaní Ministerstvom školstva SR od septembra 2015.
              </p>
            </div>
            <blockquote className="border-l-2 border-primary/30 py-1 pl-4 text-sm italic text-muted">
              &bdquo;Každé dieťa je jedinečné — našou úlohou je byť pri tom a pomáhať mu rásť.&ldquo;
            </blockquote>
            <div>
              <Button as="link" href="/kontakt" size="lg">
                Rezervovať návštevu
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}
