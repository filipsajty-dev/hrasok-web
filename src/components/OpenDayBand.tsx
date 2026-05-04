import Link from 'next/link'

export function OpenDayBand() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
          Príďte sa pozrieť
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Najlepší spôsob, ako spoznať Hrášok, je prísť k nám na návštevu.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-[var(--radius-button)] bg-white px-7 py-3 font-medium text-primary transition-all duration-150 motion-safe:hover:scale-[1.02] hover:shadow-md"
          >
            Rezervovať návštevu
          </Link>
          <Link
            href="#"
            className="rounded-[var(--radius-button)] border border-white px-7 py-3 font-medium text-white transition-all duration-200 hover:bg-white hover:text-primary"
          >
            Kontaktujte nás
          </Link>
        </div>
      </div>
    </section>
  )
}
