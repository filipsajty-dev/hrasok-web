import Link from 'next/link'

const quickLinks = [
  { label: 'Program', href: '/program' },
  { label: 'Skupiny', href: '/skupiny' },
  { label: 'Tím', href: '/tim' },
  { label: 'Priestory', href: '/priestory' },
  { label: 'Cenník', href: '/cennik' },
  { label: 'Aktuality', href: '/aktuality' },
  { label: 'Kontakt', href: '/kontakt' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Four-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <p className="font-heading text-2xl font-bold text-primary">Hrášok</p>
            <p className="text-sm leading-relaxed text-muted">
              Súkromná materská škola pre deti od 3 do 6 rokov v Rovinke. Akreditovaná MŠ SR od roku 2015.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-text">Kontakt</p>
            <address className="not-italic">
              <p className="text-sm text-muted">Slivková 18, 900 41 Rovinka</p>
              <a href="tel:+421905345222" className="mt-2 block text-sm text-muted transition-colors hover:text-primary">
                0905 345 222
              </a>
              <a href="tel:+421238103645" className="block text-sm text-muted transition-colors hover:text-primary">
                02 / 3810 3645
              </a>
              <a href="mailto:info@skolkahrasok.sk" className="block text-sm text-muted transition-colors hover:text-primary">
                info@skolkahrasok.sk
              </a>
            </address>
          </div>

          {/* Opening hours */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-text">Otváracie hodiny</p>
            <p className="text-sm text-muted">Pondelok – Piatok</p>
            <p className="text-sm text-muted">7:00 – 17:00</p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-text">Rýchle odkazy</p>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup placeholder */}
        <div className="mt-12 flex flex-col gap-4 rounded-[var(--radius-md)] bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-text">Prihláste sa na novinky</p>
            {/* PLACEHOLDER — wire up to Resend when ready */}
            <p className="text-sm text-muted">
              Správy o akciách, výletoch a otvorených dňoch na váš e-mail.
            </p>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <input
              type="email"
              placeholder="Váš e-mail"
              aria-label="E-mailová adresa pre novinky"
              className="w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none sm:w-56"
            />
            <button
              type="button"
              className="shrink-0 rounded-[var(--radius-button)] bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-150 motion-safe:hover:scale-[1.02] hover:bg-primary-hover hover:shadow-md"
            >
              Prihlásiť
            </button>
          </div>
        </div>

        {/* Imprint + legal */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="mb-3 text-xs text-muted">
            Škôlka Hrášok s.r.o. · IČO: [PLACEHOLDER IČO] · Slivková 18, 900 41 Rovinka
            {' · '}Riaditeľka: Mgr. Andrea Vargová
            {' · '}Dozorný orgán: [PLACEHOLDER: SOI, Inšpektorát SOI pre ... kraj]
          </p>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Materská škola Hrášok. Všetky práva vyhradené.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="#" className="text-muted transition-colors hover:text-primary">
                Ochrana osobných údajov
              </Link>
              <Link href="#" className="text-muted transition-colors hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
