'use client'

import { useEffect } from 'react'

/**
 * Enables scroll-reveal hidden states only after JS runs and when motion is allowed.
 * Without this class on <html>, reveal targets stay visible (no-JS / SEO / print).
 */
export function ScrollRevealBoot () {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.documentElement.classList.add('scroll-reveal-ready', 'ambient-motion')
  }, [])
  return null
}
