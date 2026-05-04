'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { type NewsPost, type NewsCategory } from '@/lib/news-posts'

const CATEGORIES: NewsCategory[] = ['Aktuality', 'Výlety', 'Fotogaléria', 'Udalosti']
type FilterOption = 'Všetky' | NewsCategory

export function NewsGrid({ posts }: { posts: NewsPost[] }) {
  const [activeCategory, setActiveCategory] = useState<FilterOption>('Všetky')

  const visible =
    activeCategory === 'Všetky' ? posts : posts.filter((p) => p.category === activeCategory)

  const [featured, ...rest] = visible

  return (
    <div>
      <div role="group" aria-label="Filtrovať podľa kategórie" className="mb-8 flex flex-wrap gap-2">
        {(['Všetky', ...CATEGORIES] as FilterOption[]).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'rounded-[var(--radius-pill)] border px-4 py-1.5 text-sm font-medium transition-all duration-150',
              activeCategory === cat
                ? 'border-primary bg-primary text-white'
                : 'border-border bg-surface text-muted hover:border-primary/40 hover:text-text',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-12 text-center text-muted">Žiadne príspevky v tejto kategórii.</p>
      )}

      {featured && (
        <Link
          href={`/aktuality/${featured.slug}`}
          className="group mb-8 block overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex aspect-[16/7] items-end justify-start bg-border p-4">
            <span className="text-xs text-muted">
              [PLACEHOLDER: cover — {featured.title}]
            </span>
          </div>
          <div className="p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              {featured.category} · {featured.publishedAt}
            </p>
            <p className="font-heading text-2xl font-semibold text-text transition-colors group-hover:text-primary">
              {featured.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
            <p className="mt-4 text-sm font-medium text-primary">
              Čítať ďalej →
            </p>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/aktuality/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex aspect-[16/9] items-end justify-start bg-border p-3">
                <span className="text-xs text-muted">
                  [PLACEHOLDER: cover — {post.title}]
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {post.category} · {post.publishedAt}
                </p>
                <p className="font-heading text-lg font-semibold text-text transition-colors group-hover:text-primary">
                  {post.title}
                </p>
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-auto pt-2 text-sm font-medium text-primary">
                  Čítať ďalej →
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
