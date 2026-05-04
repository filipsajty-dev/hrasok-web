import { cn } from '@/lib/utils'
import { KickerLabel } from './KickerLabel'
import { PeaPodIcon } from './icons/PeaPodIcon'
import { SproutIcon } from './icons/SproutIcon'

export type EyebrowAccent = 'pea' | 'sprout' | 'none'

export function Eyebrow({
  children,
  accent = 'none',
  className,
}: {
  children: React.ReactNode
  accent?: EyebrowAccent
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {accent === 'pea' && <PeaPodIcon className="h-5 w-12 text-primary/40" />}
      {accent === 'sprout' && <SproutIcon className="h-10 w-8 text-primary/40" />}
      <KickerLabel>{children}</KickerLabel>
    </div>
  )
}
