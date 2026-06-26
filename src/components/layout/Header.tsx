/**
 * Header — Main site navigation.
 *
 * Features:
 * - Sticky header with scroll-triggered background (150ms transition)
 * - Mobile hamburger menu with CSS-only animated icon
 * - Accessible keyboard navigation + skip-to-content
 * - Design system spacing (8-point grid)
 *
 * UX Principles:
 *   Fitts' Law → 44px min touch targets on mobile menu items
 *   Shneiderman → Consistent nav position, informative feedback on scroll
 *   Hick's Law → Max 3 nav links + 2 CTAs
 */

import { useState, useCallback } from 'react'
import { Container, Button } from '@/components/ui'
import { useScrollPosition, useMediaQuery } from '@/hooks'
import { NAV_LINKS, SITE_CONFIG } from '@/constants'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollY = useScrollPosition()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const isScrolled = scrollY > 20

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      {/* Skip to content — Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        id="site-header"
        role="banner"
        className={`fixed top-0 left-0 right-0 transition-hover ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/50'
            : 'bg-transparent'
        }`}
        style={{ zIndex: 'var(--z-sticky)' }}
      >
        <Container>
          <nav
            className="flex items-center justify-between"
            style={{ height: '64px' }}
            aria-label="Main navigation"
          >
            {/* Logo — JetBrains Mono */}
            <a
              href="/"
              className="flex items-center gap-2 font-heading text-xl font-bold text-neutral-900 transition-hover hover:text-primary-600"
              aria-label={`${SITE_CONFIG.name} — Home`}
              id="logo-link"
            >
              {/* TODO: Replace with provided SVG logo */}
              <span aria-hidden="true" className="text-2xl">⚡</span>
              <span>{SITE_CONFIG.name}</span>
            </a>

            {/* Desktop Navigation — Inter */}
            {isDesktop && (
              <ul className="flex items-center gap-8" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      id={link.id}
                      href={link.href}
                      className="text-sm font-medium font-body text-neutral-600 transition-hover hover:text-primary-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Desktop CTAs — Hick's Law: max 2 options */}
            {isDesktop && (
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" id="header-login-btn">
                  Log in
                </Button>
                <Button variant="primary" size="sm" id="header-cta-btn">
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle — Fitts' Law: 44px target */}
            {!isDesktop && (
              <button
                id="mobile-menu-toggle"
                type="button"
                className="relative flex items-center justify-center w-11 h-11 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-hover"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMobileMenu}
                style={{ zIndex: 'var(--z-modal)' }}
              >
                <div className="flex flex-col items-center justify-center w-5 gap-1.5">
                  <span
                    className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            )}
          </nav>
        </Container>

        {/* Mobile Menu Overlay — 300ms layout transition */}
        {!isDesktop && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className={`fixed inset-0 top-16 bg-white transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            style={{ zIndex: 'var(--z-overlay)' }}
          >
            <Container className="pt-8">
              {/* Nav links — Fitts' Law: generous 48px+ touch targets */}
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="block px-4 py-3 text-lg font-medium font-body text-neutral-700 rounded-xl transition-hover hover:bg-neutral-50 hover:text-primary-600"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-3 mt-8 px-4">
                <Button variant="secondary" size="lg" className="w-full" id="mobile-login-btn">
                  Log in
                </Button>
                <Button variant="primary" size="lg" className="w-full" id="mobile-cta-btn">
                  Get Started
                </Button>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  )
}
