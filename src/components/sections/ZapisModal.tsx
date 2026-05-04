import Image from 'next/image'
import { Button, KickerLabel, Modal } from '@/components/ui'

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const steps = [
  'Kontaktujte nás telefonicky na 0905 345 222 alebo vyplňte kontaktný formulár na stránke',
  'Dohodneme si osobné stretnutie s konateľkou škôlky a prevedieme vás priestormi',
  'Po prijatí dostanete písomné potvrdenie a všetky informácie k nástupu',
]

export function ZapisModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Zápis 2026/2027" maxWidth={820}>
      <div className="grid md:grid-cols-[45fr_55fr]">
        {/* Left: poster */}
        <div className="flex items-start justify-center bg-cream p-6 md:rounded-l-[var(--radius-lg)] md:p-8">
          <Image
            src="/images/zapis-2026-2027.png"
            alt="Plagát — Zápis do MŠ Hrášok 2026/2027"
            width={862}
            height={1286}
            className="w-full max-w-[280px] rounded-[var(--radius-md)] shadow-md md:max-w-none"
            priority
          />
        </div>

        {/* Right: content */}
        <div className="flex flex-col gap-5 p-6 pt-10 md:p-8 md:pr-10 md:pt-8">
          <div className="flex flex-col gap-3">
            <KickerLabel>Zápis 2026/2027</KickerLabel>
            <h2 className="font-heading text-2xl font-semibold text-text md:text-3xl">
              Prihláste vaše dieťa do Hrášku
            </h2>
          </div>

          {/* Key info rows */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-sm text-muted">
              <span className="text-primary"><IconCalendar /></span>
              <span>1. máj – 31. máj 2026</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-muted">
              <span className="text-primary"><IconMapPin /></span>
              <span>Slivková 18, 900 41 Rovinka</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted">
            Prijímame deti vo veku 3 – 6 rokov. Zápis prebieha počas mája — kontaktujte nás
            telefonicky alebo vyplňte online formulár a dohodneme si osobné stretnutie.
          </p>

          <ul className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 shrink-0 font-semibold text-primary" aria-hidden="true">
                  {i + 1}.
                </span>
                {step}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Button as="link" href="/kontakt?reason=zapis" size="md">
              Rezervovať si stretnutie
            </Button>
            <Button as="link" href="tel:+421905345222" variant="secondary" size="md">
              Zavolajte nám: 0905 345 222
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
