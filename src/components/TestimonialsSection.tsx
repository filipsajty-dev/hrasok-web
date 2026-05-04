import { Container, TestimonialCard, SectionHeader, RevealOnScroll } from '@/components/ui'

const testimonials = [
  {
    quote: '[Odkedy nastúpila naša dcérka do Hrášku, vidíme neuveriteľný pokrok. Pedagógovia sú výnimoční — trpezliví, vzdelaní a skutočne oddaní deťom. Každé ráno sa teší do škôlky.]',
    name: 'Mária K.',
    context: 'mama Sofie, 4 roky',
  },
  {
    quote: '[Malé skupinky sú presne to, čo sme hľadali. Náš syn sa nikdy nestratí v dave — učiteľky ho poznajú do hĺbky a vedia, ako k nemu pristupovať. Je to rozdiel, ktorý cítite každý deň.]',
    name: 'Peter a Jana N.',
    context: 'rodičia Mateja, 3 roky',
  },
  {
    quote: '[Angličtina každý deň je niečo, čo nikde inde nenájdete. Naša dcéra sa ju učí prirodzene, bez stresu — hrou a piesňami. Po polroku vie viac ako my čakali po roku.]',
    name: 'Zuzana H.',
    context: 'mama Linky, 5 rokov',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-10 md:py-14">
      <Container>
        <RevealOnScroll className="mb-14">
          <SectionHeader heading="Čo hovoria rodičia" />
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealOnScroll key={t.name}>
              <TestimonialCard quote={t.quote} name={t.name} context={t.context} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
