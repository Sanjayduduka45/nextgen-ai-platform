/**
 * Application-wide constants.
 * Single source of truth for configuration, navigation, and design tokens.
 *
 * Note: Visual tokens (colors, spacing, shadows) are defined in index.css
 * as CSS custom properties. This file contains JS-accessible constants only.
 */

import type { NavLink } from '@/types'

export const SITE_CONFIG = {
  name: 'Frontend Hack',
  tagline: 'Build Something Amazing',
  description: 'A modern, performant landing page built with React, TypeScript, and Tailwind CSS.',
  url: 'https://frontendhack.dev',
} as const

/** Main navigation — Hick's Law: max 3 items to minimize decision time */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Features', href: '#features', id: 'nav-features' },
  { label: 'Pricing', href: '#pricing', id: 'nav-pricing' },
  { label: 'Testimonials', href: '#testimonials', id: 'nav-testimonials' },
] as const

/** Breakpoints (mirrors Tailwind v4 defaults, for JS-side media queries) */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/** Animation durations in ms (mirrors CSS tokens for JS-side usage) */
export const DURATIONS = {
  hover: 150,
  base: 200,
  layout: 300,
  enter: 400,
} as const
