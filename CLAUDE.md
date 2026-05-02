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

| Page | Slovak slug | Purpose |
|---|---|---|
| Home | `/` | Hero photo + 1-line promise + primary CTA "Rezervovať návštevu" |
| About | `/o-nas` | Founder story, philosophy, why we exist |
| Programme | `/program` | Daily rhythm, English, trips, what a day looks like |
| Age groups | `/skupiny` | Single page, three anchored sections: `#2-3`, `#3-4`, `#5-6` |
| Team | `/tim` | Teacher cards: photo, name, qualifications, short bio |
| Facilities | `/priestory` | Photo gallery of all spaces |
| Pricing & enrollment | `/cennik` | Fees, hours, included items, enrollment form |
| News | `/aktuality` | Blog index (light cadence, ~6 posts/year) |
| News post | `/aktuality/[slug]` | Individual post |
| Contact | `/kontakt` | Map, phone, email, contact form |
| Privacy | `/ochrana-osobnych-udajov` | GDPR privacy policy |
| Cookies | `/cookies` | Cookie policy |

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
