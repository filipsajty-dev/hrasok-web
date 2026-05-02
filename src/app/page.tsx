import Link from 'next/link'

const navLinks = [
  { label: 'O nás', href: '#' },
  { label: 'Program', href: '#' },
  { label: 'Skupiny', href: '#' },
  { label: 'Tím', href: '#' },
  { label: 'Priestory', href: '#' },
  { label: 'Cenník', href: '#' },
  { label: 'Aktuality', href: '#' },
  { label: 'Kontakt', href: '#' },
]

const ageGroups = [
  {
    range: '2 – 3',
    heading: 'Najmenší škôlkári',
    description:
      '[Popis skupiny pre deti vo veku 2–3 roky: čo sa učia, na čo sa zameriavame, prečo je táto skupina výnimočná.]',
  },
  {
    range: '3 – 4',
    heading: 'Pokročilí škôlkári',
    description:
      '[Popis skupiny pre deti vo veku 3–4 roky: rozvoj reči, tvorivosti, spolupráce a dennej rutiny.]',
  },
  {
    range: '5 – 6',
    heading: 'Predškoláci',
    description:
      '[Popis skupiny pre deti vo veku 5–6 rokov: príprava na základnú školu, čítanie, počty, angličtina.]',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <header className="border-b border-border bg-surface">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* PLACEHOLDER — replace with SVG logo once available */}
          <Link
            href="/"
            className="font-heading text-2xl font-semibold text-primary"
          >
            Hrášok
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-text transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="rounded-[var(--radius-pill)] bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Rezervovať návštevu
          </Link>
        </nav>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {/* PLACEHOLDER — final copy from Slovak copywriter */}
              <h1 className="font-heading text-4xl font-semibold leading-tight text-text md:text-5xl">
                Miesto, kde vaše dieťa rastie s radosťou
              </h1>
              <p className="text-lg leading-relaxed text-muted">
                {/* PLACEHOLDER */}
                Súkromná materská škola pre deti od 2 do 6 rokov s profesionálnym
                pedagogickým tímom, každodennou angličtinou a malými skupinkami plnými
                pozornosti.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-block rounded-[var(--radius-pill)] bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary-hover"
                >
                  Rezervovať návštevu
                </Link>
              </div>
            </div>

            {/* PLACEHOLDER — replace with real photo (parental consent required) */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-[var(--radius-lg)] bg-border">
              <span className="text-sm text-muted">
                Fotografia detí pri hre
              </span>
            </div>
          </div>
        </section>

        {/* ── Age groups ───────────────────────────────────────────────── */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-4 font-heading text-3xl font-semibold text-text">
              Naše vekové skupiny
            </h2>
            <p className="mb-12 text-muted">
              {/* PLACEHOLDER */}
              Každá skupina je malá, aby každé dieťa dostalo pozornosť, ktorú si zaslúži.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {ageGroups.map((group) => (
                <div
                  key={group.range}
                  className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-cream p-8"
                >
                  <div className="inline-flex w-fit rounded-[var(--radius-sm)] bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {group.range} roky
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text">
                    {group.heading}
                  </h3>
                  <p className="grow text-muted">{group.description}</p>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Zistiť viac →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="mb-3 font-heading text-xl font-semibold text-primary">
                Hrášok
              </p>
              {/* PLACEHOLDER — replace with legal name and IČO */}
              <p className="text-sm text-muted">[Materská škola Hrášok, s.r.o.]</p>
              <p className="text-sm text-muted">IČO: [00000000]</p>
            </div>

            <div>
              <p className="mb-3 font-medium text-text">Kontakt</p>
              {/* PLACEHOLDER — real address, phone, email */}
              <p className="text-sm text-muted">[Ulica 1, 000 00 Mesto, Slovensko]</p>
              <p className="text-sm text-muted">[+421 900 000 000]</p>
              <p className="text-sm text-muted">[info@hrasok.sk]</p>
            </div>

            <div>
              <p className="mb-3 font-medium text-text">Otváracie hodiny</p>
              {/* PLACEHOLDER */}
              <p className="text-sm text-muted">[Pondelok – Piatok: 7:00 – 17:00]</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted md:flex-row">
            <p>© {new Date().getFullYear()} Materská škola Hrášok. Všetky práva vyhradené.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-text">
                Ochrana osobných údajov
              </Link>
              <Link href="#" className="hover:text-text">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
