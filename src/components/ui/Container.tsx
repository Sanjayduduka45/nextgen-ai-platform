/**
 * Container — Constrains content width and centers it.
 *
 * Uses design system CSS class:
 *   .container → 1280px max-width, responsive padding (16→24→32px)
 *
 * Cognitive Load: Consistent margins reduce visual noise.
 */

import type { BaseComponentProps } from '@/types'

interface ContainerProps extends BaseComponentProps {
  readonly children: React.ReactNode
  readonly as?: 'div' | 'section' | 'article' | 'main' | 'nav'
}

export function Container({
  children,
  className = '',
  id,
  as: Component = 'div',
}: ContainerProps) {
  const classes = ['container', className].filter(Boolean).join(' ')

  return (
    <Component id={id} className={classes}>
      {children}
    </Component>
  )
}
