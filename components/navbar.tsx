'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { locales, type Locale, type Messages } from '@/lib/i18n'

interface NavbarProps {
  locale: Locale
  navigation: Messages['navigation']
  personName: string
}

export function Navbar ({ locale, navigation, personName }: NavbarProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const navLinksRef = useRef<HTMLUListElement>(null)
  const navTogglerRef = useRef<HTMLButtonElement>(null)

  const closeMobileNav = useCallback(() => {
    const navLinks = navLinksRef.current
    if (!navLinks) return
    navLinks.classList.remove('active')
    const icon = navTogglerRef.current?.querySelector('i')
    icon?.classList.add('fa-bars')
    icon?.classList.remove('fa-times')
  }, [])

  useEffect(() => {
    const toggler = navTogglerRef.current
    if (!toggler) return

    function onToggle () {
      const t = navTogglerRef.current
      const linksEl = navLinksRef.current
      if (!t || !linksEl) return
      linksEl.classList.toggle('active')
      const icon = t.querySelector('i')
      icon?.classList.toggle('fa-bars')
      icon?.classList.toggle('fa-times')
    }

    toggler.addEventListener('click', onToggle)
    return () => toggler.removeEventListener('click', onToggle)
  }, [])

  useEffect(() => {
    function onDocScroll () {
      setScrolled(window.scrollY > 12)
    }
    onDocScroll()
    window.addEventListener('scroll', onDocScroll, { passive: true })
    return () => window.removeEventListener('scroll', onDocScroll)
  }, [])

  useEffect(() => {
    function onScroll () {
      const heroName = document.querySelector<HTMLElement>('.hero-content .name')
      const navBrand = document.querySelector<HTMLElement>('.nav-brand')
      if (!heroName || !navBrand) return

      if (window.innerWidth > 768) {
        const scrollY = window.scrollY
        if (scrollY > 80) {
          heroName.classList.add('shrink')
          navBrand.classList.add('fade-in')
        } else {
          heroName.classList.remove('shrink')
          navBrand.classList.remove('fade-in')
        }
      } else {
        navBrand.classList.add('fade-in')
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  function handleNavLinkClick (e: React.MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
    closeMobileNav()
  }

  const isActiveLocale = (lang: Locale) =>
    pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container">
        <Link href={`/${locale}#hero`} className="nav-brand" prefetch={false}>
          {personName}
        </Link>
        <ul ref={navLinksRef} className="nav-links">
          <li>
            <a href="#about" onClick={handleNavLinkClick}>
              {navigation.about}
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleNavLinkClick}>
              {navigation.experience}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavLinkClick}>
              {navigation.projects}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavLinkClick}>
              {navigation.skills}
            </a>
          </li>
          <li>
            <a href="#education" onClick={handleNavLinkClick}>
              {navigation.education}
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={handleNavLinkClick}>
              {navigation.certifications}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavLinkClick}>
              {navigation.contact}
            </a>
          </li>
        </ul>
        <div className="language-switcher">
          {locales.map((lang) => (
            <Link
              key={lang}
              href={`/${lang}`}
              className={`lang-btn${isActiveLocale(lang) ? ' active' : ''}`}
              hrefLang={lang}
              prefetch={false}
            >
              {lang.toUpperCase()}
            </Link>
          ))}
        </div>
        <button
          ref={navTogglerRef}
          type="button"
          className="nav-toggler"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </nav>
  )
}
