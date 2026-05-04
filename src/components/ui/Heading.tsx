import { cn } from '@/lib/utils'

type HeadingLevel = 1 | 2 | 3 | 4
type HeadingVariant = 'serif' | 'sans'

const sizeMap: Record<HeadingLevel, string> = {
  1: 'text-4xl md:text-5xl lg:text-[3.5rem]',
  2: 'text-3xl md:text-4xl',
  3: 'text-2xl',
  4: 'text-xl',
}

export function Heading({
  level = 2,
  variant,
  children,
  className,
  id,
}: {
  level?: HeadingLevel
  variant?: HeadingVariant
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4'
  const effective = variant ?? (level <= 2 ? 'serif' : 'sans')

  return (
    <Tag
      id={id}
      className={cn(
        sizeMap[level],
        'font-semibold leading-tight text-text',
        effective === 'serif' ? 'font-heading' : undefined,
        className,
      )}
    >
      {children}
    </Tag>
  )
}
