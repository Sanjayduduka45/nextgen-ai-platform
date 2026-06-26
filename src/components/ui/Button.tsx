/**
 * Button — Reusable button component.
 *
 * Variants: primary | secondary | ghost
 * Sizes: sm (36px) | md (44px) | lg (52px)
 *
 * Renders as <a> when `href` is provided, <button> otherwise.
 *
 * Design system classes:
 *   .btn .btn-{variant} .btn-{size}
 *
 * UX Principles:
 *   Fitts' Law → min 44px touch targets (md default)
 *   Norman → Affordance via visual weight hierarchy
 *   Feedback → :hover, :active, :focus-visible states in CSS
 */

import type { ButtonProps } from '@/types'

const variantMap: Record<string, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const sizeMap: Record<string, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  className = '',
  id,
  'aria-label': ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = [
    'btn',
    variantMap[variant],
    sizeMap[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={classes}
        aria-label={ariaLabel}
        role="button"
      >
        {children}
      </a>
    )
  }

  return (
    <button
      id={id}
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
