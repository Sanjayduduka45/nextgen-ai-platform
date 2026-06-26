/**
 * Testimonials — Customer testimonials section.
 *
 * Architecture:
 * - Section heading + subtitle
 * - Overall ratings and statistics bar (social proof)
 * - Client logo showcase (Acme, Initech, Dundler, Stark, Cyberdyne)
 * - Infinite Marquee Customer Cards:
 *   - CSS-only scrolling track (no JS loop timers)
 *   - Duplicate tracks rendered side-by-side for a seamless loop
 *   - Second track hidden from screen readers via aria-hidden
 *   - Animation pauses on hover for readability
 *   - Reduced motion queries automatically stop marquee and flex-wrap items.
 */

import { Section, Container, SectionHeading } from '@/components/ui'
import { TestimonialCard } from './TestimonialCard'

export interface TestimonialItem {
  readonly id: string
  readonly quote: string
  readonly author: string
  readonly role: string
  readonly company: string
  readonly initials: string
  readonly rating: number
}

const TESTIMONIALS_DATA: readonly TestimonialItem[] = [
  {
    id: 'jane-doe',
    quote: 'NextGen agents merged 25 complex migration PRs in our first week. The execution safety and multi-file reasoning is unmatched.',
    author: 'Jane Doe',
    role: 'Lead Devops Engineer',
    company: 'Acme Corp',
    initials: 'JD',
    rating: 5,
  },
  {
    id: 'michael-scott',
    quote: 'We completely automated our database migration workflows. The developer supervision chat makes interactive reviews incredibly simple.',
    author: 'Michael Scott',
    role: 'Product Director',
    company: 'Dundler Mifflin',
    initials: 'MS',
    rating: 5,
  },
  {
    id: 'elif-kaya',
    quote: 'Contextual directory refactoring across 40 folders was handled flawlessly. No other agent has this level of file structure awareness.',
    author: 'Elif Kaya',
    role: 'Tech Lead',
    company: 'Initech',
    initials: 'EK',
    rating: 5,
  },
  {
    id: 'alex-patel',
    quote: 'The micro-sandbox VMs run all test suites instantly. It prevents buggy code from ever reaching our git branches or production.',
    author: 'Alex Patel',
    role: 'Solutions Architect',
    company: 'Stark Industries',
    initials: 'AP',
    rating: 5,
  },
  {
    id: 'claire-laurent',
    quote: 'Our deployment velocity increased by 10x. The semantic commit generation alone keeps our releases beautifully organized.',
    author: 'Claire Laurent',
    role: 'VP of Engineering',
    company: 'Cyberdyne Systems',
    initials: 'CL',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      background="alt"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden"
    >
      <Container>
        <SectionHeading
          headingId="testimonials-heading"
          title="Vetted by Developers"
          subtitle="See how engineering teams use autonomous agents to ship code faster and reduce technical friction."
        />

        {/* ── RATINGS & METRICS BAR (8-point spacing applied) ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-200 pb-8 mb-12 select-none">
          {/* Average Rating Block */}
          <div className="flex items-center gap-3">
            <div className="flex text-amber-500" aria-label="5 out of 5 stars rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="font-heading text-neutral-900 font-extrabold text-lg">4.9/5 Rating</div>
            <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">Average Agent Score</div>
          </div>

          {/* Social Proof stats */}
          <div className="flex gap-8 text-center sm:text-left">
            <div>
              <div className="text-xl font-bold font-heading text-neutral-900">1,200+</div>
              <div className="text-xs text-neutral-400 font-body uppercase tracking-wider mt-0.5">Active Devs</div>
            </div>
            <div>
              <div className="text-xl font-bold font-heading text-neutral-900">14M+</div>
              <div className="text-xs text-neutral-400 font-body uppercase tracking-wider mt-0.5">Lines Analyzed</div>
            </div>
          </div>
        </div>

        {/* ── CLIENT COMPANY LOGOS (Grayscale vector shapes) ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center mb-16 select-none opacity-60">
          {/* Acme */}
          <div className="text-neutral-500 font-heading text-sm font-bold tracking-wider hover:text-neutral-900 transition-hover">
            ACME CORPORATION
          </div>
          {/* Initech */}
          <div className="text-neutral-500 font-heading text-sm font-bold tracking-wider hover:text-neutral-900 transition-hover">
            INITECH CO
          </div>
          {/* Dundler */}
          <div className="text-neutral-500 font-heading text-sm font-bold tracking-wider hover:text-neutral-900 transition-hover">
            DUNDLER MIFFLIN
          </div>
          {/* Stark */}
          <div className="text-neutral-500 font-heading text-sm font-bold tracking-wider hover:text-neutral-900 transition-hover">
            STARK INDUSTRIES
          </div>
          {/* Cyberdyne */}
          <div className="text-neutral-500 font-heading text-sm font-bold tracking-wider hover:text-neutral-900 transition-hover">
            CYBERDYNE SYSTEMS
          </div>
        </div>

        {/* ── INFINITE MARQUEE SCROLL TRACK ── */}
        <div 
          className="marquee-container"
          aria-label="Developer testimonials scroll list"
        >
          {/* The scrolling track containing identical lists */}
          <div className="marquee-track">
            
            {/* List 1 (Accessible to screen readers) */}
            <div className="flex gap-6" role="list">
              {TESTIMONIALS_DATA.map((testimonial) => (
                <div key={testimonial.id} role="listitem">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* List 2 (Duplicate list, hidden from screen readers to prevent reading repetition) */}
            <div className="flex gap-6" aria-hidden="true">
              {TESTIMONIALS_DATA.map((testimonial) => (
                <TestimonialCard
                  key={`${testimonial.id}-duplicate`}
                  testimonial={testimonial}
                />
              ))}
            </div>

          </div>
        </div>

      </Container>
    </Section>
  )
}
