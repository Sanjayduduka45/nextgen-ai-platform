/**
 * Hero — Primary above-the-fold section.
 *
 * Architecture:
 * - Full-viewport height on mobile, constrained on desktop
 * - Two-column layout (text | visual) on lg+
 * - Stacked layout on mobile
 * - Primary + secondary CTA buttons
 * - Subtle background gradient/pattern
 * - No animation library — CSS transitions and keyframes only
 *
 * Design & UX Principles:
 * - Norman: Clear signifiers and affordances on CTA buttons.
 * - Fitts' Law: Large (52px) tap targets with clear grouping and padding.
 * - Hick's Law: Distinct primary and secondary paths to minimize choice delay.
 * - Accessibility: Semantic landmark structure, explicit ARIA labels, focus-visible outlines.
 * - Anti-Generic: Avoids standard stock AI brain/robot graphics in favor of a clean, mock-terminal editor interface.
 */

import { Section, Container, Button } from '@/components/ui'

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32 bg-gradient-hero"
      animate={false}
      aria-labelledby="hero-heading"
    >
      {/* ── Background Glow Blobs (Mesh Gradients) ── */}
      <div 
        className="absolute top-[-20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-primary-200/35 blur-[120px] pointer-events-none animate-drift-1" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-[20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-accent-100/30 blur-[130px] pointer-events-none animate-drift-2" 
        aria-hidden="true" 
      />

      {/* ── Background Dot Pattern ── */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" aria-hidden="true" />

      {/* ── Floating SVG Decorations ── */}
      <div className="absolute top-[12%] right-[55%] pointer-events-none animate-float-slow hidden md:block" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-300/60">
          <rect x="2" y="2" width="44" height="44" rx="12" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="24" cy="24" r="8" fill="currentColor" fillOpacity="0.1" />
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[5%] pointer-events-none animate-float-medium hidden lg:block" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-300/40">
          <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M32 4V60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <Container className="relative z-raised">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* ── Text Column (Left) ── */}
          <div className="max-w-2xl lg:col-span-6 flex flex-col items-start">
            
            {/* Interactive / Animated Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/50 px-3 py-1.5 text-xs font-semibold text-primary-700 mb-6 transition-all duration-150 hover:bg-primary-100/50 cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="font-heading tracking-wide uppercase">NextGen AI Engine v2.0</span>
            </div>

            {/* Display Headline */}
            <h1
              id="hero-heading"
              className="text-display tracking-tight text-neutral-900 mb-6 leading-tight"
            >
              Software, built by agents.{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Guided by you.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-subtitle mb-8 leading-relaxed text-neutral-600">
              Deploy autonomous software engineers directly into your codebase. They read issues, plan modifications, write clean typescript/python, run local test suites, and open fully verified pull requests.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                id="hero-primary-cta"
                className="group relative overflow-hidden"
              >
                <span>Start Building Free</span>
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
                id="hero-secondary-cta"
                href="#demo"
                className="group"
              >
                <span>Watch 2m Demo</span>
                <svg
                  className="w-4 h-4 text-primary-500 transition-transform duration-150 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>

            {/* Social Proof & Metrics (8-point spacing applied) */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200 mt-12 w-full max-w-lg">
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold font-heading text-neutral-900">99.4%</div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">PR Approval</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold font-heading text-neutral-900">10x</div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">Dev Velocity</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold font-heading text-neutral-900">200k+</div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">PRs Merged</div>
              </div>
            </div>

          </div>

          {/* ── Visual Column (Right) ── */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center w-full"
            aria-hidden="true"
          >
            {/* Background glowing ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary-400 to-accent-300 opacity-20 blur-xl pointer-events-none" />

            {/* Sleek code terminal panel */}
            <div className="relative w-full max-w-lg rounded-xl border border-neutral-200 bg-neutral-950 text-neutral-200 shadow-2xl overflow-hidden font-heading text-[13px] leading-relaxed animate-border-beam">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/80 border-b border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-neutral-400 select-none">agent@nextgen: ~/workspace</div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Editor Tabs */}
              <div className="flex bg-neutral-900 border-b border-neutral-800 select-none">
                <div className="px-4 py-2 bg-neutral-950 border-r border-neutral-800 text-primary-400 flex items-center gap-2 font-semibold">
                  <span className="text-amber-500">🐍</span> agent.py
                </div>
                <div className="px-4 py-2 border-r border-neutral-800 text-neutral-500 flex items-center gap-2">
                  <span>🧪</span> test_agent.py
                </div>
                <div className="px-4 py-2 text-neutral-500 flex items-center gap-2">
                  <span>⚙️</span> config.yaml
                </div>
              </div>

              {/* Terminal Console Output */}
              <div className="p-5 font-mono select-none space-y-3 min-h-[320px] bg-neutral-950/95 overflow-y-auto">
                
                {/* Simulated Lines using CSS animations */}
                <div className="animate-line-1 text-neutral-500">
                  $ nextgen run --instructions "auto-implement migration v3"
                </div>

                <div className="animate-line-2 text-primary-300">
                  🚀 Initializing autonomous developer agent...
                </div>

                <div className="animate-line-3 text-neutral-400">
                  <span className="text-neutral-500">[1/3]</span> Analyzing codebase schema and connections...
                </div>

                <div className="animate-line-4 text-success-500 font-semibold">
                  ✔ Found 14 related entities in postgres db schema.
                </div>

                <div className="animate-line-5 text-neutral-400">
                  <span className="text-neutral-500">[2/3]</span> Drafting migration scripts & schemas...
                </div>

                <div className="animate-line-6 text-neutral-300 bg-neutral-900/50 p-2.5 rounded border border-neutral-800 font-mono text-[12px] whitespace-pre">
                  <span className="text-purple-400">def</span> <span className="text-blue-400">upgrade</span>():<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;op.add_column(<span className="text-amber-300">'users'</span>, Column(<span className="text-amber-300">'api_key'</span>, String))
                </div>

                <div className="animate-line-7 text-neutral-400">
                  <span className="text-neutral-500">[3/3]</span> Executing local test suites...
                </div>

                <div className="animate-line-8 flex items-center gap-2 text-success-500 font-bold bg-success-50/5 border border-success-700/30 p-2 rounded">
                  <span className="flex h-2 w-2 rounded-full bg-success-500 animate-pulse" />
                  <span>PASS: 24 tests. Coverage: 100%. PR #1483 opened.</span>
                </div>

                {/* Blinking CLI Cursor */}
                <div className="flex items-center pt-2">
                  <span className="text-neutral-500 font-bold">$</span>
                  <span className="w-2 h-4 ml-1.5 bg-primary-500 animate-blink" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </Section>
  )
}
