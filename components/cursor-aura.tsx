'use client'

import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Cursor-follow aura: mouse on desktop, touch on mobile (touch-primary hides until first touch).
 * Respects prefers-reduced-motion.
 */
export function CursorAura () {
  const rootRef = useRef<HTMLDivElement>(null)
  const glowEl = useRef<HTMLDivElement>(null)
  const ringEl = useRef<HTMLDivElement>(null)
  const dotEl = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const glow = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const dot = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)
  const touchFirstRef = useRef(false)
  const touchEndTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )

  const [active, setActive] = useState(false)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.documentElement.classList.add('custom-cursor-active')

    touchFirstRef.current = window.matchMedia(
      '(hover: none) and (pointer: coarse)'
    ).matches

    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    target.current = { x: cx, y: cy }
    glow.current = { x: cx, y: cy }
    ring.current = { x: cx, y: cy }
    dot.current = { x: cx, y: cy }

    const lg = touchFirstRef.current ? 0.19 : 0.12
    const lr = touchFirstRef.current ? 0.3 : 0.22
    const ld = touchFirstRef.current ? 0.55 : 0.42

    setActive(true)

    function onMove (e: MouseEvent) {
      rootRef.current?.classList.remove('cursor-aura-root--idle')
      target.current = { x: e.clientX, y: e.clientY }
    }

    function onTouchStart (e: TouchEvent) {
      rootRef.current?.classList.remove('cursor-aura-root--idle')
      const t = e.touches[0]
      if (t) target.current = { x: t.clientX, y: t.clientY }
    }

    function onTouchMove (e: TouchEvent) {
      const t = e.touches[0]
      if (t) target.current = { x: t.clientX, y: t.clientY }
    }

    function onTouchEnd (e: TouchEvent) {
      if (e.touches.length > 0) return
      clearTimeout(touchEndTimerRef.current)
      touchEndTimerRef.current = setTimeout(() => {
        if (touchFirstRef.current) {
          rootRef.current?.classList.add('cursor-aura-root--idle')
        }
      }, 220)
    }

    function tick () {
      const tg = target.current
      const g = glow.current
      const r = ring.current
      const d = dot.current

      g.x += (tg.x - g.x) * lg
      g.y += (tg.y - g.y) * lg
      r.x += (tg.x - r.x) * lr
      r.y += (tg.y - r.y) * lr
      d.x += (tg.x - d.x) * ld
      d.y += (tg.y - d.y) * ld

      const ge = glowEl.current
      const re = ringEl.current
      const de = dotEl.current
      if (ge) {
        ge.style.transform = `translate3d(${g.x}px, ${g.y}px, 0)`
      }
      if (re) {
        re.style.transform = `translate3d(${r.x}px, ${r.y}px, 0)`
      }
      if (de) {
        de.style.transform = `translate3d(${d.x}px, ${d.y}px, 0)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('touchcancel', onTouchEnd, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchcancel', onTouchEnd)
      clearTimeout(touchEndTimerRef.current)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!active) return null

  return (
    <div
      ref={rootRef}
      className={`cursor-aura-root${touchFirstRef.current ? ' cursor-aura-root--idle' : ''}`}
      aria-hidden
    >
      <div ref={glowEl} className="cursor-aura-layer cursor-aura--glow" />
      <div ref={ringEl} className="cursor-aura-layer cursor-aura--ring" />
      <div ref={dotEl} className="cursor-aura-layer cursor-aura--dot" />
    </div>
  )
}
