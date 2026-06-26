/**
 * Custom hook to track scroll position.
 * Used for sticky header background changes and scroll-based effects.
 */

import { useState, useEffect } from 'react'

export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollY
}
