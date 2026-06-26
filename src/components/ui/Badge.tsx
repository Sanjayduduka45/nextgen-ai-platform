/**
 * Badge — Small label/tag component.
 *
 * Variants: primary | neutral | success
 *
 * Design system classes: .badge .badge-{variant}
 */

import type { BaseComponentProps } from '@/types'

interface BadgeProps extends BaseComponentProps {
  readonly children: React.ReactNode
  readonly variant?: 'primary' | 'neutral' | 'success'
}

const variantMap: Record<string, string> = {
  primary: 'badge-primary',
  neutral: 'badge-neutral',
  success: 'badge-success',
}

export function Badge({
  children,
  variant = 'primary',
  className = '',
  id,
}: BadgeProps) {
  const classes = ['badge', variantMap[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span id={id} className={classes}>
      {children}
    </span>
  )
}
