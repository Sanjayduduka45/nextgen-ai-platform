import { memo } from 'react'
import { Button, Badge } from '@/components/ui'
import { PriceDisplay } from './PriceDisplay'
import type { PricingPlanBase } from './pricingConfig'

interface PricingCardProps {
  readonly plan: PricingPlanBase
}

export const PricingCard = memo(function PricingCard({ plan }: PricingCardProps) {
  const isFeatured = plan.highlighted

  return (
    <article
      id={`pricing-card-${plan.id}`}
      className={`card flex flex-col justify-between relative h-full transition-all duration-300 ${
        isFeatured
          ? 'border-primary-500 card-highlighted scale-[1.02] z-raised ring-2 ring-primary-500/10'
          : 'hover:border-primary-200 card-interactive'
      }`}
    >
      {/* ── CARD TOP ── */}
      <div>
        
        {/* Plan Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-card-title text-xl font-bold font-heading text-neutral-900">
              {plan.name}
            </h3>
            <p className="text-caption text-xs text-neutral-500 mt-1 select-none">
              {plan.description}
            </p>
          </div>
          {isFeatured && (
            <Badge variant="primary" className="shadow-sm">
              Popular
            </Badge>
          )}
        </div>

        {/* Dynamic Price Display */}
        <div className="my-6 border-b border-neutral-100 pb-6">
          <PriceDisplay baseMonthlyUSD={plan.baseMonthlyPriceUSD} />
        </div>

        {/* Features list */}
        <ul className="space-y-4 mb-8" role="list">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600 font-body">
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  isFeatured ? 'text-primary-500' : 'text-success-500'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* ── CARD BOTTOM ── */}
      <div>
        <Button
          variant={isFeatured ? 'primary' : 'secondary'}
          size="lg"
          className="w-full shadow-sm hover:translate-y-[-1px] select-none"
          id={`pricing-cta-${plan.id}`}
        >
          {plan.cta}
        </Button>
      </div>

    </article>
  )
})
export default PricingCard
