export type NewsCategory = 'Aktuality' | 'Výlety' | 'Fotogaléria' | 'Udalosti'

export interface NewsPost {
  slug: string
  title: string
  excerpt: string
  body: string
  publishedAt: string
  category: NewsCategory
  coverImageAlt: string
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'otvoreny-den-jesen-2026',
    title: 'Otvorený deň — jeseň 2026',
    excerpt:
      '[PLACEHOLDER: Pozvite rodičov na otvorený deň — kde, kedy a čo ich čaká. 1–2 vety.]',
    body: '[PLACEHOLDER: Plný text článku o otvorenom dni — čo si môžu rodičia prezrieť, program, registrácia.]',
    publishedAt: '2026-10-15',
    category: 'Udalosti',
    coverImageAlt: '[PLACEHOLDER: alt — otvorený deň Hrášok]',
  },
  {
    slug: 'vylet-do-prirody-september-2026',
    title: 'Výlet do prírody — september 2026',
    excerpt: '[PLACEHOLDER: Krátky popis výletu do prírody — kde sme boli a čo deti zažili.]',
    body: '[PLACEHOLDER: Detailný popis výletu — trasa, čo deti videli a čo sa naučili o prírode.]',
    publishedAt: '2026-09-20',
    category: 'Výlety',
    coverImageAlt: '[PLACEHOLDER: alt — deti na výlete v prírode]',
  },
  {
    slug: 'zaciatak-skolskeho-roku-2026',
    title: 'Začiatok školského roka 2026/2027',
    excerpt:
      '[PLACEHOLDER: Privítanie nových detí a rodičov na začiatku školského roka. 1–2 vety.]',
    body: '[PLACEHOLDER: Článok o prvom dni, nových deťoch, adaptácii a tíme.]',
    publishedAt: '2026-09-02',
    category: 'Aktuality',
    coverImageAlt: '[PLACEHOLDER: alt — prvý deň v Hrášku]',
  },
  {
    slug: 'fotogaleria-letne-aktivity-2026',
    title: 'Fotogaléria — letné aktivity 2026',
    excerpt:
      '[PLACEHOLDER: Fotky zo záhradných aktivít, vodných hier a výtvarky počas leta. 1–2 vety.]',
    body: '[PLACEHOLDER: Galéria s popismi aktivít — vodné hry, maľovanie, záhrada.]',
    publishedAt: '2026-07-10',
    category: 'Fotogaléria',
    coverImageAlt: '[PLACEHOLDER: alt — deti pri letných aktivitách]',
  },
  {
    slug: 'anglictina-novy-lektor-2026',
    title: 'Angličtina s novým lektorom od septembra',
    excerpt: '[PLACEHOLDER: Predstavenie nového lektora angličtiny — kto je a čo prináša.]',
    body: '[PLACEHOLDER: Článok o novom lektorovi, metodike a čo deti čaká v anglickej výučbe.]',
    publishedAt: '2026-08-25',
    category: 'Aktuality',
    coverImageAlt: '[PLACEHOLDER: alt — lekcia angličtiny v Hrášku]',
  },
  {
    slug: 'vylet-do-zoo-april-2026',
    title: 'Výlet do ZOO — apríl 2026',
    excerpt:
      '[PLACEHOLDER: Deťom sa veľmi páčila žirafa! Krátky popis výletu do ZOO. 1–2 vety.]',
    body: '[PLACEHOLDER: Článok o výlete do ZOO — zvieratá, zaujímavosti, ako deti reagovali.]',
    publishedAt: '2026-04-18',
    category: 'Výlety',
    coverImageAlt: '[PLACEHOLDER: alt — deti v ZOO]',
  },
]

export function getPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug)
}
