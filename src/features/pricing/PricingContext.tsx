import { createContext, useContext, useState, useMemo, type ReactNode } from 'react'
import { CURRENCY_CONFIGS, BILLING_CONFIGS, type CurrencyConfig, type BillingConfig } from './pricingConfig'

export type CurrencyCode = 'USD' | 'EUR' | 'INR'
export type BillingCycle = 'monthly' | 'annual'

export interface PriceDetails {
  readonly monthlyEquivalent: string
  readonly annualTotal: string | null
  readonly symbol: string
  readonly rawValue: number
}

interface PricingContextProps {
  readonly activeCurrency: CurrencyCode
  readonly setActiveCurrency: (currency: CurrencyCode) => void
  readonly activeBilling: BillingCycle
  readonly setActiveBilling: (billing: BillingCycle) => void
  readonly getPriceDetails: (baseMonthlyUSD: number) => PriceDetails
}

const PricingContext = createContext<PricingContextProps | undefined>(undefined)

export function PricingProvider({ children }: { readonly children: ReactNode }) {
  const [activeCurrency, setActiveCurrency] = useState<CurrencyCode>('USD')
  const [activeBilling, setActiveBilling] = useState<BillingCycle>('monthly')

  // Memoize configurations to avoid re-creations
  const currencyInfo = useMemo<CurrencyConfig>(() => {
    return CURRENCY_CONFIGS[activeCurrency]
  }, [activeCurrency])

  const billingInfo = useMemo<BillingConfig>(() => {
    return BILLING_CONFIGS[activeBilling]
  }, [activeBilling])

  // Memoize pricing calculations for all inputs
  const getPriceDetails = useMemo(() => {
    return (baseMonthlyUSD: number): PriceDetails => {
      if (baseMonthlyUSD === 0) {
        const symbol = currencyInfo.symbol
        const formattedZero = new Intl.NumberFormat(currencyInfo.locale, {
          style: 'currency',
          currency: currencyInfo.code,
          maximumFractionDigits: 0,
        }).format(0)

        return {
          monthlyEquivalent: formattedZero,
          annualTotal: null,
          symbol,
          rawValue: 0,
        }
      }

      const discountFactor = 1 - billingInfo.discount
      const convertedMonthly = baseMonthlyUSD * currencyInfo.rate * discountFactor
      const convertedAnnual = baseMonthlyUSD * 12 * currencyInfo.rate * discountFactor

      const formatter = new Intl.NumberFormat(currencyInfo.locale, {
        style: 'currency',
        currency: currencyInfo.code,
        maximumFractionDigits: 0,
      })

      return {
        monthlyEquivalent: formatter.format(convertedMonthly),
        annualTotal: activeBilling === 'annual' ? formatter.format(convertedAnnual) : null,
        symbol: currencyInfo.symbol,
        rawValue: convertedMonthly,
      }
    }
  }, [currencyInfo, billingInfo, activeBilling])

  const value = useMemo<PricingContextProps>(() => {
    return {
      activeCurrency,
      setActiveCurrency,
      activeBilling,
      setActiveBilling,
      getPriceDetails,
    }
  }, [activeCurrency, activeBilling, getPriceDetails])

  return <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
}

export function usePricing() {
  const context = useContext(PricingContext)
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider')
  }
  return context
}
