/**
 * Pricing — Pricing plans section.
 *
 * Architecture:
 * - PricingProvider localizes currency/billing selections.
 * - PricingContent renders selectors and maps base pricing data.
 * - Sub-selectors allow switching currency (USD, EUR, INR) and billing (Monthly, Annual).
 * - Implements premium sliding indicators for switches using CSS transitions on fixed button dimensions.
 */

import { Section, Container, SectionHeading } from '@/components/ui'
import { PricingCard } from './PricingCard'
import { PricingProvider, usePricing, type CurrencyCode } from './PricingContext'
import { PRICING_MATRIX } from './pricingConfig'

function PricingContent() {
  const { activeCurrency, setActiveCurrency, activeBilling, setActiveBilling } = usePricing()

  return (
    <Section id="pricing" aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading
          headingId="pricing-heading"
          title="Simple, Transparent Plans"
          subtitle="Deploy autonomous developer agents at scale. Choose your currency and billing cycle to get started."
        />

        {/* ── SELECTOR CONTROLS (8-point spacing applied) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 sm:mb-16 select-none">
          
          {/* Billing Cycle Switcher with sliding backplane */}
          <div className="inline-flex items-center p-1 rounded-full bg-neutral-100/80 border border-neutral-200 relative">
            {/* Sliding white backplane indicator */}
            <div
              className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out"
              style={{
                left: activeBilling === 'monthly' ? '4px' : '84px',
                width: activeBilling === 'monthly' ? '80px' : '136px',
              }}
            />
            <button
              type="button"
              onClick={() => setActiveBilling('monthly')}
              className={`relative z-raised w-20 py-2 text-xs sm:text-sm font-semibold rounded-full text-center transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 ${
                activeBilling === 'monthly'
                  ? 'text-neutral-900 font-bold'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setActiveBilling('annual')}
              className={`relative z-raised w-[136px] py-2 text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 ${
                activeBilling === 'annual'
                  ? 'text-neutral-900 font-bold'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <span>Annual</span>
              <span className="badge badge-success !py-0.5 !px-1.5 text-[10px]">Save 20%</span>
            </button>
          </div>

          {/* Currency Switcher with sliding backplane */}
          <div className="inline-flex items-center p-1 rounded-full bg-neutral-100/80 border border-neutral-200 relative">
            {/* Sliding indigo backplane indicator */}
            <div
              className="absolute top-1 bottom-1 bg-primary-600 rounded-full shadow-sm transition-all duration-300 ease-in-out"
              style={{
                left:
                  activeCurrency === 'USD'
                    ? '4px'
                    : activeCurrency === 'EUR'
                    ? '60px'
                    : '116px',
                width: '56px',
              }}
            />
            {(['USD', 'EUR', 'INR'] as CurrencyCode[]).map((currency) => (
              <button
                key={currency}
                type="button"
                onClick={() => setActiveCurrency(currency)}
                className={`relative z-raised w-14 py-2 text-xs sm:text-sm font-semibold rounded-full text-center transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 ${
                  activeCurrency === currency
                    ? 'text-white font-bold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {currency}
              </button>
            ))}
          </div>

        </div>

        {/* ── PRICING CARDS GRID (1 col mobile → 3 col desktop) ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6 items-stretch">
          {PRICING_MATRIX.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function Pricing() {
  return (
    <PricingProvider>
      <PricingContent />
    </PricingProvider>
  )
}
