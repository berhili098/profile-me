'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal ({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const ob = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            ob.disconnect()
            break
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.07 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visible ? ' scroll-reveal--visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
