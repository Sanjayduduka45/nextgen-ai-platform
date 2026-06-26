/**
 * Footer — Site footer with link groups, newsletter, social, and copyright.
 *
 * Typography: Inter (body font) throughout — footers are informational, not headlines.
 * Spacing: 8-point grid for all padding/margins.
 * Transitions: 150ms hover for link color changes.
 * Accessibility: Semantic landmarks, full keyboard tab focus rings, input labels for screen readers.
 */

import { Container } from '@/components/ui'
import { SITE_CONFIG, NAV_LINKS } from '@/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulated subscription flow
    const form = e.currentTarget
    const emailInput = form.elements.namedItem('email') as HTMLInputElement
    alert(`Successfully subscribed: ${emailInput.value}`)
    form.reset()
  }

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      className="bg-neutral-950 text-neutral-300 border-t border-neutral-800"
    >
      <Container>
        <div className="py-12 sm:py-16 lg:py-20">
          
          {/* Top row: Brand details, links columns, and newsletter form */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
            
            {/* Brand column (spans 4 on lg) */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <a
                href="/"
                className="inline-flex items-center gap-2 font-heading text-lg font-bold text-white transition-hover hover:text-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded-lg p-0.5"
                aria-label={`${SITE_CONFIG.name} — Home`}
              >
                <span aria-hidden="true" className="text-xl">⚡</span>
                <span>{SITE_CONFIG.name}</span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 max-w-xs font-body">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Product links (spans 2 on lg) */}
            <div className="lg:col-span-2">
              <h3 className="text-overline text-neutral-100 font-bold mb-4">
                Product
              </h3>
              <ul className="space-y-3" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={`footer-${link.id}`}>
                    <a
                      id={`footer-${link.id}`}
                      href={link.href}
                      className="text-sm font-body text-neutral-400 transition-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded-md py-1 px-1.5 -ml-1.5 block w-fit"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-sm font-body text-neutral-400 transition-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded-md py-1 px-1.5 -ml-1.5 block w-fit">
                    Status Monitor
                  </a>
                </li>
              </ul>
            </div>

            {/* Company links (spans 2 on lg) */}
            <div className="lg:col-span-2">
              <h3 className="text-overline text-neutral-100 font-bold mb-4">
                Company
              </h3>
              <ul className="space-y-3" role="list">
                <li>
                  <a href="#" className="text-sm font-body text-neutral-400 transition-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded-md py-1 px-1.5 -ml-1.5 block w-fit">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-body text-neutral-400 transition-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded-md py-1 px-1.5 -ml-1.5 block w-fit">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-body text-neutral-400 transition-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded-md py-1 px-1.5 -ml-1.5 block w-fit">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column (spans 4 on lg) */}
            <div className="lg:col-span-4 flex flex-col">
              <h3 className="text-overline text-neutral-100 font-bold mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-xs text-neutral-400 font-body leading-relaxed mb-4 select-none">
                The latest agentic engineering notes, codebase security, and feature releases delivered weekly.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="relative flex-grow">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    placeholder="you@domain.com"
                    required
                    className="w-full h-10 px-3.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 hover:border-neutral-700 focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 focus:outline-none transition-hover"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm h-10 w-full sm:w-auto flex-shrink-0 cursor-pointer shadow-sm"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          {/* Divider */}
          <hr className="divider divider-strong mt-12 opacity-15" />

          {/* Bottom row: copyright, legal links, and social SVGs */}
          <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
            
            {/* Copyright & Legal links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left select-none">
              <p className="text-caption text-xs text-neutral-500">
                &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs font-body text-neutral-500">
                <a href="#" className="hover:text-white transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded p-0.5">
                  Privacy Policy
                </a>
                <span>·</span>
                <a href="#" className="hover:text-white transition-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded p-0.5">
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Social icons vector links */}
            <div className="flex items-center gap-4" aria-label="Social media channels">
              
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                aria-label="GitHub Repository"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                aria-label="Discord Server"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                aria-label="X / Twitter Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                aria-label="LinkedIn Corporate Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}
