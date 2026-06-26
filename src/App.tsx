/**
 * App — Root application component.
 *
 * Composes all layout and feature sections into a single-page layout.
 * Each section is lazy-loaded where appropriate for performance.
 */

import { lazy, Suspense } from 'react'
import { Header, Footer } from '@/components/layout'
import { Hero } from '@/features/hero'

// Lazy-loaded sections (below the fold)
const Features = lazy(() =>
  import('@/features/features').then((m) => ({ default: m.Features }))
)
const Pricing = lazy(() =>
  import('@/features/pricing').then((m) => ({ default: m.Pricing }))
)
const Testimonials = lazy(() =>
  import('@/features/testimonials').then((m) => ({ default: m.Testimonials }))
)
const CTA = lazy(() =>
  import('@/features/cta').then((m) => ({ default: m.CTA }))
)

/** Minimal loading fallback — no layout shift */
function SectionFallback() {
  return (
    <div
      className="flex items-center justify-center py-20"
      role="status"
      aria-label="Loading section"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-200 border-t-primary-600" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="main-content" role="main" className="flex-1">
        {/* Hero is eagerly loaded — above the fold */}
        <Hero />

        {/* Below-the-fold sections — lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
