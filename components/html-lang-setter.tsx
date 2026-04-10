'use client'

import { useEffect } from 'react'
import { isLocale } from '@/lib/i18n'

interface HtmlLangSetterProps {
  locale: string
}

export function HtmlLangSetter ({ locale }: HtmlLangSetterProps) {
  useEffect(() => {
    if (isLocale(locale)) {
      document.documentElement.lang = locale
    }
  }, [locale])
  return null
}
