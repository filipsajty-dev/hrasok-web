import { cn } from '@/lib/utils'
import { Heading } from './Heading'
import { KickerLabel } from './KickerLabel'
import { Eyebrow, type EyebrowAccent } from './Eyebrow'

export function SectionHeader({
  eyebrow,
  eyebrowAccent,
  heading,
  headingLevel = 2,
  headingId,
  intro,
  className,
}: {
  eyebrow?: string
  eyebrowAccent?: EyebrowAccent
  heading: string
  headingLevel?: 1 | 2 | 3 | 4
  headingId?: string
  intro?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {eyebrow &&
        (eyebrowAccent && eyebrowAccent !== 'none' ? (
          <Eyebrow accent={eyebrowAccent}>{eyebrow}</Eyebrow>
        ) : (
          <KickerLabel>{eyebrow}</KickerLabel>
        ))}
      <Heading level={headingLevel} id={headingId}>
        {heading}
      </Heading>
      {intro && <p className="max-w-xl text-muted">{intro}</p>}
    </div>
  )
}
