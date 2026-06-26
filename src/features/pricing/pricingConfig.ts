/**
 * Pricing configurations and data structures.
 *
 * Requirements:
 * - Currencies: INR, USD, EUR
 * - Billing: Monthly, Annual (Annual includes exactly 20% discount)
 * - DO NOT hardcode converted prices. Conversion logic must calculate on-the-fly.
 */

export interface CurrencyConfig {
  readonly code: 'USD' | 'EUR' | 'INR'
  readonly symbol: string
  readonly rate: number // Rate relative to USD base
  readonly locale: string
}

export interface BillingConfig {
  readonly code: 'monthly' | 'annual'
  readonly label: string
  readonly discount: number // e.g. 0.20 for 20%
}

export interface PricingPlanBase {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly baseMonthlyPriceUSD: number
  readonly features: readonly string[]
  readonly cta: string
  readonly highlighted?: boolean
}

export const CURRENCY_CONFIGS: Record<'USD' | 'EUR' | 'INR', CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    rate: 1.0, // Base
    locale: 'en-US',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    rate: 0.92,
    locale: 'de-DE',
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    rate: 83.5,
    locale: 'en-IN',
  },
} as const

export const BILLING_CONFIGS: Record<'monthly' | 'annual', BillingConfig> = {
  monthly: {
    code: 'monthly',
    label: 'Monthly billing',
    discount: 0.0,
  },
  annual: {
    code: 'annual',
    label: 'Annual billing (20% off)',
    discount: 0.20, // 20% discount
  },
} as const

export const PRICING_MATRIX: readonly PricingPlanBase[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individual developers testing autonomous workflows.',
    baseMonthlyPriceUSD: 0,
    features: [
      '50 agent runs / month',
      '1 active parallel agent',
      'Read-only directory analyzer',
      'Community support access',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'pro',
    name: 'Developer Pro',
    description: 'Designed for active engineers building production applications.',
    baseMonthlyPriceUSD: 79,
    features: [
      'Unlimited agent runs / month',
      '5 parallel execution tasks',
      'Isolated compilation micro-sandboxes',
      'Interactive chat feedback panels',
      'Priority task scheduling queues',
      'Prioritized discord/email support',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Teams',
    description: 'Custom capabilities and dedicated resource models for organizations.',
    baseMonthlyPriceUSD: 299,
    features: [
      'Custom execution runs allocation',
      'Dedicated agents with physical CPU cores',
      'Single Sign-On (SSO) & audit vaults',
      'Pre-release model sandbox accesses',
      'Custom enterprise SLA commitments',
      '24/7 critical phone support hotline',
    ],
    cta: 'Contact Sales',
  },
] as const
