import Link from 'next/link'
import { cn } from '@/lib/utils'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'inverse-primary'
  | 'inverse-secondary'
export type ButtonSize = 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-hover hover:shadow-md transition-all duration-150 motion-safe:hover:scale-[1.02]',
  secondary:
    'border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200',
  ghost: 'text-primary hover:text-primary-hover transition-colors duration-200',
  'inverse-primary':
    'bg-white text-primary hover:shadow-md transition-all duration-150 motion-safe:hover:scale-[1.02]',
  'inverse-secondary':
    'border border-white text-white hover:bg-white hover:text-primary transition-all duration-200',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

const base =
  'inline-flex items-center justify-center font-medium rounded-[var(--radius-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: undefined
  href?: never
  variant?: ButtonVariant
  size?: ButtonSize
}

type ButtonAsLink = {
  as: 'link'
  href: string
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className } = props
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className)

  if (props.as === 'link') {
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    )
  }

  const p = props as ButtonAsButton & { as?: undefined; href?: never; variant?: ButtonVariant; size?: ButtonSize }
  // Strip non-HTML-button props before spreading
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _1, href: _2, variant: _3, size: _4, ...rest } = p
  return <button {...rest} className={classes} />
}
