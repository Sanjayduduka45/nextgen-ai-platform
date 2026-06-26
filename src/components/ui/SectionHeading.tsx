/**
 * SectionHeading — Consistent heading for all page sections.
 *
 * Uses design system typography:
 *   .text-section-title  → JetBrains Mono, 36px→48px responsive
 *   .text-subtitle       → Inter, 20px→24px responsive
 *
 * UX: Recognition > Recall — every section heading looks the same.
 */

import type { BaseComponentProps } from '@/types'

interface SectionHeadingProps extends BaseComponentProps {
  readonly title: string
  readonly subtitle?: string
  readonly align?: 'left' | 'center'
  readonly headingId?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  headingId,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 lg:mb-16 ${alignClass} ${className}`.trim()}>
      <h2
        id={headingId}
        className="text-section-title"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-subtitle mx-auto mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
