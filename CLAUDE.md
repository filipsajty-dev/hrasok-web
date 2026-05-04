# Hrášok — Kindergarten Website

> Project brief and operating guide for Claude Code. Read me at the start of every session before making changes.

## 1. Project context

**What this is.** The marketing and admissions website for **Materská škola Hrášok**, a private kindergarten in Slovakia for children aged **2 to 6** organized into three age groups (2–3, 3–4, 5–6). The site's job is to convert visiting parents into booked tours and, ultimately, enrolled children.

**Primary audience.** Slovak parents, predominantly mothers aged 28–42, evaluating whether to entrust their 2–6 year-old to us. They decide in the first 30 seconds whether the place feels *safe, warm, and professional*.

**Secondary audience.** English-speaking expat parents in the area (build SK-first, EN as a translation layer).

**Our differentiators (USPs).**
1. Professionally trained pedagogical team — not just caretakers, qualified educators
2. Daily English-language exposure
3. Frequent trips and outdoor learning
4. Small mixed-age groups: a 2-year-old is only with 2–3 year-olds, never older kids

## 2. Brand identity

**Logo.** "HRÁŠOK" wordmark in vibrant green with a heart over the Á and a smiley in the O. Two variants: green-on-white and white-on-green. The logo is the playful element — the surrounding design should be calm and professional so the logo gets to do its job.

**Color tokens.** Use these as CSS variables in `globals.css`:

```css
:root {
  --color-primary: #3FA31F;        /* Logo green — CTAs, key accents */
  --color-primary-hover: #348A19;
  --color-bg: #FBF8F1;             /* Cream — main page background */
  --color-surface: #FFFFFF;        /* Cards, modals */
  --color-text: #1F2D1A;           /* Body text — green-tinted charcoal */
  --color-text-muted: #5A6B55;
  --color-accent-coral: #F4A88B;   /* Secondary CTAs, hover states */
  --color-accent-yellow: #F5D547;  /* Highlights — use very sparingly */
  --color-border: #E8E3D6;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
}
```

**Typography.**
- Headings: **Fraunces** (Google Fonts) — friendly modern serif with character
- Body: **Inter** (Google Fonts) — clean, readable sans-serif
- Load via `next/font/google` for performance, never via `<link>`

**Visual principles.**
- Generous whitespace; avoid cramped layouts
- Rounded corners (`--radius-md` for cards, `--radius-pill` for buttons)
- Real photos only — never stock kids photos, parents detect them instantly
- Subtle pea-themed motifs are okay (small SVG illustrations, never overdone)

## 3. Tech stack (locked)

- **Framework:** Next.js 15+ with App Router and TypeScript
- **Styling:** Tailwind CSS (latest), with the design tokens above wired as CSS variables and Tailwind theme extensions
- **CMS:** Sanity (headless), with Studio mounted at `/studio` on the same domain
- **Forms:** Resend for transactional email + react-hook-form + Zod for validation
- **Hosting:** Vercel, connected to GitHub `main` branch for production, all other branches for preview deploys
- **Analytics:** Plausible (privacy-first, no cookie banner needed for it)
- **Cookie consent:** Klaro (open source, EU-friendly) — wired up but configured to only fire when actual tracking cookies are added
- **Image optimization:** `next/image` with Sanity's image pipeline
- **i18n:** `next-intl` for SK (default) and EN routes
- **Linting:** ESLint + Prettier with `prettier-plugin-tailwindcss`

## 4. Information architecture

| Page | Slovak slug | Status | Purpose |
|---|---|---|---|
| Home | `/` | ✅ built | Hero + stats + age groups + why us + founder story + testimonials + CTA |
| Programme | `/program` | ✅ built | Daily rhythm, English, trips, what a day looks like |
| Age groups | `/skupiny` | ✅ built | Single page, three anchored sections: `#2-3`, `#3-4`, `#5-6` |
| Team | `/tim` | ✅ built | Filter chips + expandable teacher cards (hardcoded data) |
| Facilities | `/priestory` | ✅ built | 6 spaces, alternating layout, placeholder photo grids |
| Pricing & enrollment | `/cennik` | ✅ built | 3-tier comparison table + FAQ accordion |
| News index | `/aktuality` | ✅ built | Featured post + grid + category filter chips (hardcoded) |
| News post | `/aktuality/[slug]` | ✅ built | Individual post — 6 static slugs via `generateStaticParams` |
| Contact | `/kontakt` | not built | Map, phone, email, contact form |
| Privacy | `/ochrana-osobnych-udajov` | not built | GDPR privacy policy |
| Cookies | `/cookies` | not built | Cookie policy |

**Note:** `/o-nas` removed — founder story lives in the `NasPribehSection` on the homepage. Nav and footer links updated accordingly.

**Data layer:** All pages currently use hardcoded placeholder data in `src/lib/news-posts.ts` and inline arrays. Wire to Sanity once CMS is set up.

English mirrors at `/en/...` once SK is content-complete.

## 5. Sanity schema (initial)

Document types to define in `/studio/schemas`:

- **`siteSettings`** — singleton; nav links, footer, contact info, social
- **`page`** — generic page with portable text body and SEO fields
- **`ageGroup`** — `name`, `ageRange`, `slug`, `coverImage`, `dailySchedule`, `learningFocus`, `teacherRefs`
- **`teacher`** — `name`, `photo`, `qualifications`, `bio`, `languages`
- **`facility`** — `name`, `description`, `images[]`
- **`newsPost`** — `title`, `slug`, `coverImage`, `body`, `publishedAt`, `author`
- **`testimonial`** — `parentName`, `quote`, `childAge`, `consentObtained` (boolean, audit trail)

Every photo asset must have an `alt` field (required) and an `parentalConsent` boolean (required, default false) — we don't render images of children where `parentalConsent` is false.

## 6. Content & tone guidelines

- **Slovak first.** All content authored in Slovak, then translated. Avoid AI-translated kindergarten copy — it reads cold. Prefer a human Slovak copywriter or careful native review.
- **Voice.** Warm, calm, confident. Speak directly to parents ("Vaše dieťa…"), not in the abstract third person. No corporate or stiff language. No exclamation point spam.
- **Address the parent's anxiety.** They're leaving their child for the first time. Acknowledge that feeling. Show, don't tell — photos of teachers actually engaged with kids beat any text.
- **Trust signals to weave in everywhere.** Teacher qualifications. Group sizes (small!). Years operating. Real testimonials with parent name + child first name (with consent). Photos of the actual space.
- **Avoid.** Stock photos. Generic "leaders of tomorrow" rhetoric. Cute baby talk. Comic Sans–energy anywhere outside the logo itself.

## 7. Compliance baseline (must-haves before public launch)

- **GDPR-compliant privacy policy** in Slovak, written/reviewed by a Slovak lawyer (€150–300). Lists every processor: Vercel, Sanity, Resend, Plausible, etc. Covers retention, parental rights, contact form data.
- **Cookie consent banner** via Klaro. Pre-checked boxes are illegal under ePrivacy.
- **Children's photo consent.** Every photo of a child requires written, signed parental consent on file. The Sanity `parentalConsent` field is the audit trail.
- **EAA / WCAG 2.1 AA accessibility.** Mandatory in EU since June 2025. Test with axe DevTools and Lighthouse before launch. Specifically: alt text on all images, keyboard navigation, focus rings visible, color contrast ≥ 4.5:1 for body text.
- **Imprint** in footer: legal name, IČO, registered address, contact, supervisory authority.

## 8. Performance targets

- Lighthouse performance ≥ 90 on mobile
- LCP ≤ 2.5s on slow 4G
- CLS ≤ 0.1
- All images served as WebP/AVIF via `next/image`
- No third-party scripts on the homepage above the fold (Plausible loads async, Klaro loads only if needed)

## 9. Repo conventions

```
/
├── app/                    # Next.js App Router
│   ├── (site)/             # Public site routes
│   ├── studio/             # Sanity Studio mount
│   └── api/                # Route handlers (contact form, etc.)
├── components/
│   ├── ui/                 # Primitive components (Button, Card, Input)
│   └── sections/           # Page-level sections (Hero, AgeGroupCard, …)
├── lib/
│   ├── sanity/             # Sanity client, queries, image url builder
│   └── utils.ts
├── messages/               # next-intl translations: sk.json, en.json
├── public/
├── styles/globals.css
├── sanity/                 # Sanity schema definitions
├── CLAUDE.md               # this file
└── README.md
```

**Branching.** `main` = production. Feature work in branches like `feat/age-groups-page`, `fix/footer-imprint`. Vercel preview-deploys every branch automatically.

**Commits.** Conventional Commits (`feat:`, `fix:`, `chore:`, `content:`).

## 10. How to work with me (Claude Code)

- **Read this file first** at the start of every session.
- **Prefer small, reviewable diffs.** I'd rather merge five 50-line PRs than one 500-line PR.
- **Don't add new dependencies without flagging.** If you think a new library is needed, propose it and explain why before installing.
- **Never invent content.** Use clearly marked Slovak placeholders ("Lorem ipsum"–style but in Slovak) until I provide real copy.
- **Never use stock images of children.** Use neutral placeholders (gray boxes with dimensions) until I provide real photos with consent.
- **Honor the design tokens.** No new colors or fonts without updating this file first.
- **Prefer composition over abstraction.** Don't build framework-style abstractions until we have three concrete instances of a pattern.
- **Run `pnpm lint && pnpm build` before declaring a task done.** A green build is the bar.
- **Update this file** when we make a meaningful project decision so future sessions stay aligned.

## 11. Design principles (locked)

These decisions were locked during the first design pass (May 2026). Do not deviate without updating this section.

**Hero proportions**
- `min-h-[78vh]` on all screens; full-bleed video background (updated from two-column in May 2026 second pass)
- Text block: left-aligned `max-w-2xl` within `max-w-7xl` container, vertically centered (`flex-col justify-center`)
- Heading: Fraunces, `text-4xl` → `text-5xl` → `text-[3.5rem]` (mobile → md → lg)
- Hand-drawn underline: inline SVG (`stroke="#F4A88B"`, coral), `preserveAspectRatio="none"`, absolute under a `<span>` wrapping one key word
- Trust row: 3 items separated by `·` in `text-muted`, below the subhead paragraph
- Dual CTAs: filled primary + outlined secondary, `rounded-[var(--radius-button)]`
- Scroll chevron: `motion-safe:animate-bounce`, `aria-hidden="true"`

**Section rhythm**
- Sections alternate `bg-cream` / `bg-surface` top to bottom (hero=cream, stats=surface, age-groups=cream, why-us=surface, footer=surface)
- Vertical padding: `py-20 md:py-28` for major sections; `py-16 md:py-20` for utility strips
- Max-width container: `max-w-7xl mx-auto px-6` on every section

**Scroll-triggered animations**
- Implementation: `.animate-on-scroll` class in `globals.css` using CSS `animation-timeline: view()` inside `@supports` + `@media (prefers-reduced-motion: no-preference)` — no JS, no external library
- Effect: `fadeSlideUp` — 12px upward translation + opacity, 0.6s ease
- Apply to: section headings, stat rows, age-group cards, "why us" columns — NOT to the above-the-fold hero
- Do not animate decorative SVGs; do not use heavy transform sequences

**Decorative SVG usage rules**
- Maximum 3 decorative SVG accents per page
- Color: `text-primary/40` (primary green at 40% opacity), always `aria-hidden="true"`
- Size: 20–48px; never dominant, always secondary to content
- Permitted motifs: pea pod, sprout/leaf only
- Do not place more than one per section; do not animate them

**Age-group cards (locked pattern)**
- Large `aspect-[3/2]` photo area at top (gray placeholder until real photos with consent)
- Kicker label: `text-xs font-semibold uppercase tracking-widest text-primary`
- Heading: Fraunces `text-2xl font-semibold`
- Arrow link: `group` + `group-hover:translate-x-1` on the `→` span
- Card container: `rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-md`

**Navigation**
- Sticky (`sticky top-0 z-40`); on scroll > 60px: `bg-surface/85 backdrop-blur-md border-border shadow-sm`
- Logo: Fraunces `text-3xl font-bold text-primary`
- Announcement bar: thin `bg-primary` strip above nav, dismissible via `localStorage` key `hrašok-announcement-v1`; increment key suffix (e.g. `-v2`) to re-show after campaigns change

**Footer**
- 4 columns on `lg`: logo+tagline | contact | hours | quick links
- Newsletter row: `bg-cream` block, visual only — wire to Resend when email flows are built
- Imprint block: legal name, IČO, address, supervisory authority — all `[PLACEHOLDER]` until legal review

**Button radius: 12px**
- All primary and outlined CTAs use `rounded-[var(--radius-button)]` (`--radius-button: 12px`); updated from full pill in May 2026 design pass
- Exception: newsletter input row uses `rounded-[var(--radius-md)]` (16px) for form visual consistency

**Hero — locked (May 2026 second pass)**
- `min-h-[78vh]` (updated from 80vh)
- Kicker line above headline: `text-xs font-semibold uppercase tracking-widest text-primary`
- Coral hand-drawn underline sits under "radosťou" (moved from "rastie")
- Video: full-bleed `absolute inset-0 h-full w-full object-cover`; `aria-hidden="true"`; pause on `prefers-reduced-motion: reduce` via useEffect; section has `overflow-hidden`
- Video overlay — two layers: (A) `linear-gradient(110deg, rgba(251,248,241,0.93) 0%, rgba(251,248,241,0.82) 40%, rgba(251,248,241,0.42) 100%)` — cream fades left-to-right so video shows on the right side; (B) `rgba(63,163,31,0.05)` brand tint
- Content sits in `relative z-10`

**Decorative SVG icon system**
- Reusable components at `src/components/ui/icons/PeaPodIcon.tsx` and `SproutIcon.tsx`
- PeaPodIcon: elongated oval, 3 peas, 1.5px stroke, pod fill at 30% opacity, peas at 85%
- SproutIcon: vertical stem, V-shaped leaves, 1.5px stroke, leaf fill at 25% opacity
- Caller controls size and color via className (e.g. `h-5 w-12 text-primary/40`)
- Max 3 decorative SVG accents per page; never animated

**Section background alternation (updated)**
- hero=cream · stats=cream (border-y) · age-groups=cream · why-us=cream · testimonials=surface · open-day-band=primary · footer=surface

**Page sections (homepage)**
- Order: AnnouncementBar → StickyNav → HeroSection → StatsStrip → AgeGroupsSection → WhyUsSection → TestimonialsSection → OpenDayBand → SiteFooter

**Animation discipline (locked May 2026)**
- Duration: 200–300ms micro-interactions; 500ms hero reveal sequence; 1 200ms stat count-up
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` = Tailwind `ease-in-out` for all transitions
- `prefers-reduced-motion: reduce` — disable all transforms; keep only opacity transitions
- Use `motion-safe:` variant prefix for any hover transform (lift, scale, translate)
- Hero staggered reveal: pure CSS `@keyframes heroReveal` with `.hero-kicker / .hero-headline / .hero-subhead / .hero-trust / .hero-ctas` classes and staggered delays (0–400ms); no JS needed
- Section reveal: CSS `animation-timeline: view()` inside `@supports` + `prefers-reduced-motion` guard
- Stat count-up: `requestAnimationFrame`, ease-out quadratic, triggered once by `IntersectionObserver`; respects reduced-motion by jumping to final value
- Nav shadow: custom class `.nav-scrolled` (`box-shadow: 0 2px 12px rgba(0,0,0,0.06)`) applied via JS scroll listener at > 60px
- No spring physics; no infinite-loop animations in body content; no parallax; no cursor followers

## 12. Component library (`src/components/ui/`)

All primitives live here. Import from `@/components/ui` barrel or directly from the file.

| Component | Description |
|---|---|
| `Button` | Variants: `primary`, `secondary`, `ghost`, `inverse-primary`, `inverse-secondary`. Sizes: `md`, `lg`. Renders `<button>` or `<Link>` via `as="link"` prop. |
| `Container` | `max-w-7xl mx-auto px-6` wrapper. |
| `Section` | Wraps `<section>` with `background` (`cream`/`white`/`primary`) and `paddingY` (`sm`/`md`/`lg`/`xl`) props. `contained` prop adds `Container` automatically. |
| `KickerLabel` | Small `text-xs uppercase tracking-widest text-primary` label above headings. |
| `Heading` | `h1`–`h4` with auto serif/sans variant (Fraunces for 1–2, Inter for 3–4). `level` and `variant` props. |
| `Eyebrow` | `KickerLabel` with optional leading SVG accent: `accent="pea"` or `accent="sprout"`. |
| `SectionHeader` | Composes `Eyebrow` + `Heading` + optional intro `<p>`. Standardises section tops. |
| `RevealOnScroll` | Wraps children in `animate-on-scroll` div (CSS scroll-driven animation). Server component — no JS. |
| `Card` | Base card with hover-lift. Variants: `default`, `image-top`, `feature`. |
| `FeatureCard` | Icon (48px in `bg-primary/10` rounded square) + heading + body. Center on mobile, left-align on `md+`. |
| `StatBlock` | Large serif number + uppercase label. Numeric value triggers count-up on `trigger` prop; string value fades in. |
| `TestimonialCard` | Quote SVG + body text + name + context. Hover lift. |
| `CTABand` | Full-width `bg-primary` section with heading, optional subhead, and two `Button` components. Used to end every page. |
| `Timeline` | Vertical timeline: each entry has `time`, `heading`, optional `description` and `icon`. |
| `NumberedSection` | Decorative large serif `01`/`02`/`03` behind content via absolute positioning. |
| `Tabs` | Accessible tablist with keyboard navigation (ArrowLeft/Right, Home/End). `TabItem[]` prop. |
| `Carousel` | CSS `scroll-snap-type: x mandatory` carousel. Prev/Next buttons, pagination dots, keyboard arrows. No autoplay. |
| `StickyTOC` | Desktop-only sticky in-page TOC (`hidden lg:block`). `IntersectionObserver` highlights active section. `TOCEntry[]` prop. |
| `LightboxImage` | Click-to-open image modal. Escape key closes. Built for `/priestory` once real photos arrive. |
| `PeaPodIcon` | Decorative SVG — elongated oval with 3 peas. Use `className="h-5 w-12 text-primary/40"`. |
| `SproutIcon` | Decorative SVG — vertical stem with V-shaped leaves. Use `className="h-10 w-8 text-primary/40"`. |
| `TeamGrid` | Client component. Filter chips (Všetci / Pedagógovia / Asistenti) + expandable teacher cards. Data hardcoded in component. |
| `FAQAccordion` | Client component. Accordion with single-open behaviour. Accepts `FAQItem[]` prop. Used on `/cennik` and `/kontakt`. |
| `NewsGrid` | Client component. Category filter chips + featured post (first in filtered list) + grid of remaining posts. Accepts `NewsPost[]` prop. |
| `NasPribehSection` | Server component. Two-column founder story section: portrait photo placeholder left, text + quote + CTA right. Inserted between WhyUsSection and TestimonialsSection on homepage. |
| `Modal` | `src/components/ui/modal/Modal.tsx`. Reusable accessible dialog primitive. Props: `isOpen`, `onClose`, `title`, `maxWidth` (default 800). Focus trap, body scroll lock, Esc key, 200 ms fade+scale animation (reversed on close), `prefers-reduced-motion` aware. See `src/components/ui/modal/README.md`. |
| `ZapisModal` | `src/components/sections/ZapisModal.tsx`. First concrete Modal usage. Two-column: poster left (`/images/zapis-2026-2027.png`), content right. Rendered inside `AnnouncementBar`. |
| `ContactForm` | `src/components/sections/ContactForm.tsx`. Client component. Vanilla validation (no extra deps), Formspree `POST`, honeypot `_gotcha`, `useSearchParams` pre-selects reason. Requires `<Suspense>` wrapper in parent. |
| `MapSection` | `src/components/sections/MapSection.tsx`. Client component. Consent-gated Google Maps iframe. Consent stored in `localStorage` key `hrašok-consent-maps`; TODO: wire to Klaro `google-maps` category. |

## 13. Page conventions

Every new page must follow these rules:

- **Compose from `src/components/ui/`** — no inline re-implementations of Button, Section, etc.
- **Wrap major content blocks in `<RevealOnScroll>`** for scroll-triggered fade-in.
- **End with `<CTABand>`** above the footer — consistent call to action on every page.
- **Use `<Section background="..." paddingY="...">` or equivalent** to maintain vertical rhythm.
- **SEO**: export `metadata` with `title` and `description` (both tagged `[PLACEHOLDER]` until final copy). One `<h1>` per page. Semantic landmarks (`<main>`, `<section aria-labelledby="...">`, `<nav aria-label="...">`).
- **Placeholder tagging**: all unwritten copy uses `[PLACEHOLDER: short description]` so it can be grep'd and replaced systematically.
- **Slovak quotation marks in JSX**: use `&bdquo;` for `„` (opening) and `&ldquo;` or `&rdquo;` for `"` (closing) — raw Unicode quotes can trigger `react/no-unescaped-entities`.
- **No stock photos of children** — use gray `bg-border` placeholder divs with a text label until real photos with parental consent are available.

## 14. Real business information (source of truth)

Always use these values — never re-introduce placeholders for known info:

| Field | Value |
|---|---|
| School name | Súkromná materská škola Hrášok |
| Legal entity | Škôlka Hrášok s.r.o. (zriaďovateľ) |
| Address | Slivková 18, 900 41 Rovinka |
| Phone (primary) | 0905 345 222 — Ing. Jana Šajtyová, konateľka |
| Phone (secondary) | 02 / 3810 3645 — kancelária |
| Email | info@skolkahrasok.sk |
| Director | Mgr. Andrea Vargová, riaditeľka |
| Opening hours | Pondelok – Piatok, 7:00 – 17:00 |
| IČO | **[PLACEHOLDER IČO]** — not yet provided |

Tel links must use international format: `tel:+421905345222` / `tel:+421238103645`.

## 15. Integrations

**Formspree contact form**
- Endpoint: `https://formspree.io/f/mqenpwgk`
- Delivers to: filip.sajty@gmail.com
- Free tier: 50 submissions/month
- Honeypot field: `_gotcha` (Formspree auto-rejects filled submissions)
- Implementation: `src/components/sections/ContactForm.tsx`

**Google Maps consent gate**
- Consent stored in `localStorage` key `hrašok-consent-maps`
- TODO: replace with Klaro `google-maps` category check once Klaro is configured
- Implementation: `src/components/sections/MapSection.tsx`

**Modal pattern**
- Primitive: `src/components/ui/modal/Modal.tsx` — exported from `@/components/ui` barrel
- First instance: `ZapisModal` (`src/components/sections/ZapisModal.tsx`) — triggered by `AnnouncementBar`
- Pattern: create a named wrapper component (e.g. `PhotoLightbox`, `EnrollmentModal`) per use-case; never put business content directly in the primitive
