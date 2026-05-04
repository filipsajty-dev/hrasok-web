'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqenpwgk'

const REASON_OPTIONS = [
  { value: '', label: 'Vyberte typ otázky' },
  { value: 'general', label: 'Všeobecná otázka' },
  { value: 'zapis', label: 'Zápis a prijatie dieťaťa' },
  { value: 'navsteva', label: 'Návšteva škôlky' },
  { value: 'other', label: 'Iné' },
]

interface FormValues {
  name: string
  email: string
  phone: string
  reason: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>
type Touched = Partial<Record<keyof FormValues, boolean>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {}
  if (!v.name.trim()) e.name = 'Zadajte vaše meno a priezvisko'
  if (!v.email.trim()) e.email = 'Zadajte váš e-mail'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = 'Zadajte platný e-mail (napr. jan@gmail.com)'
  if (!v.reason) e.reason = 'Vyberte typ otázky'
  if (!v.message.trim()) e.message = 'Napíšte nám správu'
  if (!v.consent) e.consent = 'Súhlas so spracovaním údajov je povinný'
  return e
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
      <span aria-hidden="true">⚠</span> {message}
    </p>
  )
}

const inputBase =
  'w-full rounded-[var(--radius-sm)] border bg-surface px-3.5 py-2.5 text-sm text-text placeholder:text-muted/60 transition-colors duration-150 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50'

export function ContactForm() {
  const searchParams = useSearchParams()
  const initialReason = searchParams.get('reason') === 'zapis' ? 'zapis' : ''

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    reason: initialReason,
    message: '',
    consent: false,
  })
  const [honeypot, setHoneypot] = useState('')
  const [touched, setTouched] = useState<Touched>({})
  const [status, setStatus] = useState<Status>('idle')

  const errors = validate(values)
  const visibleErrors: FormErrors = Object.fromEntries(
    Object.entries(errors).filter(([k]) => touched[k as keyof FormValues]),
  )
  const isValid = Object.keys(errors).length === 0

  function touch(field: keyof FormValues) {
    setTouched((t) => ({ ...t, [field]: true }))
  }

  function set(field: keyof FormValues, value: string | boolean) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Mark all fields touched to show all errors
    setTouched({ name: true, email: true, phone: true, reason: true, message: true, consent: true })
    if (!isValid) return

    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || undefined,
          inquiry_type: REASON_OPTIONS.find((o) => o.value === values.reason)?.label,
          message: values.message,
          _gotcha: honeypot,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">
          ✓
        </div>
        <h3 className="font-heading text-2xl font-semibold text-text">Ďakujeme za správu</h3>
        <p className="max-w-sm text-muted">
          Ozveme sa vám čo najskôr, zvyčajne do 24 hodín.
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
          !
        </div>
        <h3 className="font-heading text-2xl font-semibold text-text">Niečo sa pokazilo</h3>
        <p className="max-w-sm text-muted">
          Skúste to prosím znova alebo nám zavolajte na{' '}
          <a href="tel:+421905345222" className="text-primary hover:underline">
            0905 345 222
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-[var(--radius-button)] border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Skúsiť znova
        </button>
      </div>
    )
  }

  const disabled = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <h2 id="napiste-nam" className="font-heading text-2xl font-semibold text-text">
        Napíšte nám
      </h2>

      {/* Honeypot — hidden from real users */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text">
          Meno a priezvisko <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          required
          disabled={disabled}
          value={values.name}
          onChange={(e) => set('name', e.target.value)}
          onBlur={() => touch('name')}
          aria-describedby={visibleErrors.name ? 'contact-name-error' : undefined}
          className={cn(inputBase, visibleErrors.name && 'border-red-400 focus:border-red-500 focus:ring-red-400')}
          placeholder="Ján Novák"
        />
        <FieldError id="contact-name-error" message={visibleErrors.name} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-text">
          E-mail <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          required
          disabled={disabled}
          value={values.email}
          onChange={(e) => set('email', e.target.value)}
          onBlur={() => touch('email')}
          aria-describedby={visibleErrors.email ? 'contact-email-error' : undefined}
          className={cn(inputBase, visibleErrors.email && 'border-red-400 focus:border-red-500 focus:ring-red-400')}
          placeholder="jan@gmail.com"
        />
        <FieldError id="contact-email-error" message={visibleErrors.email} />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-text">
          Telefón <span className="text-muted/60 text-xs font-normal">(nepovinné)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          disabled={disabled}
          value={values.phone}
          onChange={(e) => set('phone', e.target.value)}
          className={cn(inputBase)}
          placeholder="0900 000 000"
        />
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="contact-reason" className="mb-1.5 block text-sm font-medium text-text">
          Typ otázky <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="contact-reason"
          required
          disabled={disabled}
          value={values.reason}
          onChange={(e) => set('reason', e.target.value)}
          onBlur={() => touch('reason')}
          aria-describedby={visibleErrors.reason ? 'contact-reason-error' : undefined}
          className={cn(inputBase, visibleErrors.reason && 'border-red-400 focus:border-red-500 focus:ring-red-400')}
        >
          {REASON_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ''}>
              {o.label}
            </option>
          ))}
        </select>
        <FieldError id="contact-reason-error" message={visibleErrors.reason} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text">
          Vaša správa <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          disabled={disabled}
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          onBlur={() => touch('message')}
          aria-describedby={visibleErrors.message ? 'contact-message-error' : undefined}
          className={cn(inputBase, 'resize-y', visibleErrors.message && 'border-red-400 focus:border-red-500 focus:ring-red-400')}
          placeholder="Váš dotaz, požiadavka alebo odkaz..."
        />
        <FieldError id="contact-message-error" message={visibleErrors.message} />
      </div>

      {/* GDPR consent */}
      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            disabled={disabled}
            checked={values.consent}
            onChange={(e) => { set('consent', e.target.checked); touch('consent') }}
            aria-describedby={visibleErrors.consent ? 'contact-consent-error' : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded accent-primary"
          />
          <span className="text-sm text-muted">
            Súhlasím so spracovaním osobných údajov podľa{' '}
            <Link href="/ochrana-osobnych-udajov" className="text-primary underline underline-offset-2 hover:no-underline">
              zásad ochrany osobných údajov
            </Link>
            <span className="text-red-500" aria-hidden="true"> *</span>
          </span>
        </label>
        <FieldError id="contact-consent-error" message={visibleErrors.consent} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={disabled}
        className="flex items-center justify-center gap-2 rounded-[var(--radius-button)] bg-primary px-7 py-3 text-sm font-medium text-white transition-all duration-150 hover:bg-primary-hover hover:shadow-md disabled:opacity-60 motion-safe:hover:scale-[1.02]"
      >
        {status === 'submitting' && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            aria-hidden="true"
          />
        )}
        {status === 'submitting' ? 'Odosielam…' : 'Odoslať správu'}
      </button>
    </form>
  )
}
