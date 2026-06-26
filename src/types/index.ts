/**
 * Global type definitions shared across the entire application.
 * Feature-specific types live in their respective feature folders.
 */

import type React from 'react'

/* ── Navigation ── */
export interface NavLink {
  readonly label: string
  readonly href: string
  readonly id: string
}

/* ── Common component props ── */
export interface BaseComponentProps {
  readonly className?: string
  readonly id?: string
}

/* ── Section wrapper ── */
export interface SectionProps extends BaseComponentProps {
  readonly children: React.ReactNode
  readonly 'aria-labelledby'?: string
}

/* ── Button variants ── */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends BaseComponentProps {
  readonly children: React.ReactNode
  readonly variant?: ButtonVariant
  readonly size?: ButtonSize
  readonly href?: string
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
  readonly 'aria-label'?: string
  readonly onClick?: () => void
}

/* ── Feature Card ── */
export interface FeatureItem {
  readonly id: string
  readonly icon: React.ReactNode
  readonly title: string
  readonly description: string
}

/* ── Pricing ── */
export interface PricingPlan {
  readonly id: string
  readonly name: string
  readonly price: string
  readonly period: string
  readonly description: string
  readonly features: readonly string[]
  readonly cta: string
  readonly highlighted?: boolean
}

/* ── Testimonial ── */
export interface Testimonial {
  readonly id: string
  readonly quote: string
  readonly author: string
  readonly role: string
  readonly company: string
  readonly avatar?: string
}

/* ── Footer ── */
export interface FooterLinkGroup {
  readonly title: string
  readonly links: readonly NavLink[]
}

export interface SocialLink {
  readonly label: string
  readonly href: string
  readonly icon: React.ReactNode
}
