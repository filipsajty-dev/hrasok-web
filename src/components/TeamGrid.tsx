'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Teacher {
  id: string
  name: string
  role: string
  category: 'pedagog' | 'asistent'
  qualifications: string[]
  bio: string
}

const teachers: Teacher[] = [
  {
    id: 'maria',
    name: 'Mária Nováková',
    role: 'Zakladateľka & Pedagóg',
    category: 'pedagog',
    qualifications: ['Mgr. predškolská pedagogika', 'ECCE certifikát', '12 rokov praxe'],
    bio: '[PLACEHOLDER: Biografia Márie — ako začala, prečo založila Hrášok, jej pedagogická filozofia. 3–4 vety.]',
  },
  {
    id: 'jana',
    name: 'Jana Kováčová',
    role: 'Pedagóg',
    category: 'pedagog',
    qualifications: ['Bc. predškolská pedagogika', '5 rokov praxe'],
    bio: '[PLACEHOLDER: Biografia Jany — jej špecializácia, čo má na práci s deťmi najradšej. 3–4 vety.]',
  },
  {
    id: 'petra',
    name: 'Petra Horváthová',
    role: 'Pedagóg & Lektor angličtiny',
    category: 'pedagog',
    qualifications: ['Mgr. učiteľstvo AJ pre MŠ', 'CELTA certifikát', '7 rokov praxe'],
    bio: '[PLACEHOLDER: Biografia Petry — ako sa dostala k anglickému vzdelávaniu v MŠ. 3–4 vety.]',
  },
  {
    id: 'eva',
    name: 'Eva Ondrušková',
    role: 'Pedagóg',
    category: 'pedagog',
    qualifications: ['Mgr. predškolská pedagogika', 'Montessori certifikát', '9 rokov praxe'],
    bio: '[PLACEHOLDER: Biografia Evy — jej záujem o Montessori, ako to aplikuje v práci. 3–4 vety.]',
  },
  {
    id: 'lucia',
    name: 'Lucia Szabóová',
    role: 'Pedagogický asistent',
    category: 'asistent',
    qualifications: ['Pedagogický asistent (certifikát)', '3 roky praxe'],
    bio: '[PLACEHOLDER: Biografia Lucie — prečo sa rozhodla pracovať s malými deťmi. 3–4 vety.]',
  },
  {
    id: 'monika',
    name: 'Monika Takáčová',
    role: 'Pedagogický asistent',
    category: 'asistent',
    qualifications: ['Pedagogický asistent (certifikát)', '4 roky praxe'],
    bio: '[PLACEHOLDER: Biografia Moniky — jej silné stránky v práci s deťmi. 3–4 vety.]',
  },
]

type FilterOption = 'all' | 'pedagog' | 'asistent'

const filters: { id: FilterOption; label: string }[] = [
  { id: 'all', label: 'Všetci' },
  { id: 'pedagog', label: 'Pedagógovia' },
  { id: 'asistent', label: 'Asistenti' },
]

export function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const visible = teachers.filter(
    (t) => activeFilter === 'all' || t.category === activeFilter,
  )

  return (
    <div>
      <div role="group" aria-label="Filtrovať podľa roly" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveFilter(f.id)}
            className={cn(
              'rounded-[var(--radius-pill)] border px-4 py-1.5 text-sm font-medium transition-all duration-150',
              activeFilter === f.id
                ? 'border-primary bg-primary text-white'
                : 'border-border bg-surface text-muted hover:border-primary/40 hover:text-text',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((teacher) => {
          const expanded = expandedId === teacher.id
          return (
            <article
              key={teacher.id}
              className={cn(
                'flex flex-col rounded-[var(--radius-lg)] border border-border bg-surface shadow-sm transition-shadow duration-200',
                expanded ? 'shadow-md' : 'hover:shadow-md',
              )}
            >
              <div className="flex aspect-[4/3] items-end justify-start rounded-t-[var(--radius-lg)] bg-border p-3">
                <span className="text-xs text-muted">
                  [PLACEHOLDER: Foto — {teacher.name}]
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {teacher.role}
                  </p>
                  <p className="mt-0.5 font-heading text-xl font-semibold text-text">
                    {teacher.name}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {teacher.qualifications.map((q) => (
                    <li
                      key={q}
                      className="rounded-[var(--radius-sm)] bg-cream px-2.5 py-0.5 text-xs text-muted"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
                {expanded && (
                  <p className="text-sm leading-relaxed text-muted">{teacher.bio}</p>
                )}
                <button
                  type="button"
                  onClick={() => setExpandedId(expanded ? null : teacher.id)}
                  className="mt-auto text-left text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                  aria-expanded={expanded}
                >
                  {expanded ? '↑ Menej info' : '↓ Viac info'}
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
