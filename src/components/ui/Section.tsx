import { cn } from '@/lib/utils'
import { Container } from './Container'

type SectionBackground = 'cream' | 'white' | 'primary'
type SectionPadding = 'sm' | 'md' | 'lg' | 'xl'

const bgMap: Record<SectionBackground, string> = {
  cream: 'bg-cream',
  white: 'bg-surface',
  primary: 'bg-primary',
}

const paddingMap: Record<SectionPadding, string> = {
  sm: 'py-10 md:py-14',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-36',
}

export function Section({
  children,
  background = 'white',
  paddingY = 'lg',
  contained = false,
  className,
  id,
  'aria-labelledby': ariaLabelledby,
}: {
  children: React.ReactNode
  background?: SectionBackground
  paddingY?: SectionPadding
  contained?: boolean
  className?: string
  id?: string
  'aria-labelledby'?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(bgMap[background], paddingMap[paddingY], className)}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
