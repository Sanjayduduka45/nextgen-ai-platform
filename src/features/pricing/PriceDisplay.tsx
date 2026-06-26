import { useState, useEffect } from 'react'
import { usePricing } from './PricingContext'

interface PriceDisplayProps {
  readonly baseMonthlyUSD: number
}

export function PriceDisplay({ baseMonthlyUSD }: PriceDisplayProps) {
  const { getPriceDetails, activeBilling } = usePricing()
  const details = getPriceDetails(baseMonthlyUSD)
  const [animateKey, setAnimateKey] = useState<number>(0)

  // Re-trigger CSS animation whenever price changes by swapping the React key
  useEffect(() => {
    setAnimateKey((prev) => prev + 1)
  }, [details.monthlyEquivalent])

  return (
    <div className="flex flex-col gap-1 min-h-[58px]">
      
      {/* Price Digit and Period (re-triggers animation on key update) */}
      <div 
        key={animateKey}
        className="flex items-baseline gap-1 animate-price-swap"
      >
        <span className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-900 tracking-tight">
          {details.monthlyEquivalent}
        </span>
        <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider select-none">
          / mo
        </span>
      </div>

      {/* Bill cycle annotation */}
      <div className="text-xs text-neutral-400 select-none">
        {activeBilling === 'annual' && details.annualTotal ? (
          <span>Billed annually ({details.annualTotal} / yr)</span>
        ) : (
          <span>Billed monthly</span>
        )}
      </div>

    </div>
  )
}
