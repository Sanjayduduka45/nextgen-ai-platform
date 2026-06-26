/**
 * CTA — Final conversion section at the bottom of the page.
 *
 * Design:
 * - Large, elevated dark card (bg-gradient-to-br from-neutral-950 to-primary-950)
 * - Drifting ambient glow blobs to create depth
 * - Balanced, semantic typography (JetBrains Mono for titles, Inter for body)
 * - Accessible CTAs with visible focus rings
 */

import { Section, Container, Button } from '@/components/ui'

export function CTA() {
  return (
    <Section id="final-cta" aria-labelledby="cta-heading" className="bg-white">
      <Container>
        {/* Modern elevated card container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-primary-950 text-white shadow-2xl p-8 sm:p-12 md:p-16 text-center flex flex-col items-center justify-center">
          
          {/* Ambient Glows */}
          <div 
            className="absolute top-[-30%] left-[-25%] h-96 w-96 rounded-full bg-primary-500/20 blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute bottom-[-30%] right-[-25%] h-96 w-96 rounded-full bg-accent-500/15 blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Inline SVG mesh nodes decoration */}
          <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Card Content (Relative z-index for visibility) */}
          <div className="relative z-raised max-w-2xl flex flex-col items-center">
            
            {/* Conversion Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-primary-300 uppercase tracking-widest mb-6">
              <span>⚡ Start Building Today</span>
            </div>

            {/* Title */}
            <h2 
              id="cta-heading" 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-6"
            >
              Supercharge your team's code output.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-400 font-body leading-relaxed max-w-lg mb-10 select-none">
              Deploy autonomous software engineering agents to handle migrations, structural refactors, and test validation. Get set up in less than 5 minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                id="cta-primary-btn"
                className="group relative overflow-hidden shadow-lg shadow-primary-500/10"
              >
                <span>Create Free Account</span>
                <svg
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                id="cta-secondary-btn"
                href="#pricing"
                // Custom styles override standard secondary borders for dark-mode CTA compatibility
                className="!bg-transparent !border-white/20 !text-white hover:!bg-white/10 hover:!border-white/40 active:!bg-white/20"
              >
                View Plans & Pricing
              </Button>
            </div>

            {/* Trust factors (8-point spacing applied) */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/10 w-full select-none text-xs text-neutral-400 font-body uppercase tracking-wider font-semibold">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                Free 50 runs/mo
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                ISO 27001 Secure Sandbox
              </span>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  )
}
export default CTA
