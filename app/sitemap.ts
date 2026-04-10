import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { getSiteUrl } from '@/lib/site'

export default function sitemap (): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = new Date()

  const localeEntries = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 1
  }))

  return [
    ...localeEntries,
    {
      url: `${base}/assets/oussamaBerhiliFinal.pdf`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }
  ]
}
