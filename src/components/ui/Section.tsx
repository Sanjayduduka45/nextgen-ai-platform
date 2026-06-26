/**
 * Section — Semantic wrapper for page sections.
 *
 * Integrates IntersectionObserver for scroll-triggered entrance animations.
 * Uses design system CSS classes:
 *   .section-padding      → 8-point vertical rhythm (64→80→96px)
 *   .animate-fade-in-up   → CSS-only entrance transition (400ms ease-out)
 *   .is-visible            → triggers the animation
 *
 * Norman: Consistency — all sections share identical spacing/animation.
 */

import { useIntersectionObserver } from '@/hooks'
import type { SectionProps } from '@/types'

interface ExtendedSectionProps extends SectionProps {
  readonly background?: 'default' | 'alt'
  readonly animate?: boolean
  readonly children: React.ReactNode
}

export function Section({
  children,
  className = '',
  id,
  background = 'default',
  animate = true,
  'aria-labelledby': ariaLabelledBy,
}: ExtendedSectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true,
  })

  const bgClass = background === 'alt' ? 'bg-neutral-50' : 'bg-white'
  const animClass = animate ? 'animate-fade-in-up' : ''
  const visibleClass = animate && isVisible ? 'is-visible' : ''

  const classes = [
    'section-padding',
    bgClass,
    animClass,
    visibleClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      ref={ref}
      id={id}
      className={classes}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  )
}
