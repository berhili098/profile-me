import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { HtmlLangSetter } from '@/components/html-lang-setter'
import { getMessages, isLocale, locales } from '@/lib/i18n'
import { getSiteUrl } from '@/lib/site'

export async function generateStaticParams () {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata ({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  const locale = localeParam
  const siteUrl = getSiteUrl()
  const msg = getMessages(locale)
  const title = msg.meta.title
  const description = msg.meta.description
  const keywords = msg.meta.keywords.split(',').map((k) => k.trim())
  const ogImage = `${siteUrl}/assets/og-image.png`

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    authors: [{ name: 'Oussama Berhili' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        fr: `${siteUrl}/fr`,
        'x-default': `${siteUrl}/en`
      }
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/${locale}`,
      title,
      description,
      siteName: 'Oussama Berhili Portfolio',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@your_twitter_handle'
    },
    icons: {
      icon: [
        { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
      ],
      apple: '/assets/favicon-180x180.png',
      other: [{ rel: 'icon', url: '/assets/favicon-192x192.png' }]
    },
    manifest: '/site.webmanifest',
    appleWebApp: { capable: true },
    other: {
      'geo.region': 'MA',
      'geo.placename': 'Rabat',
      'msapplication-TileColor': '#0A0C0F',
      'msapplication-TileImage': '/assets/favicon-144x144.png'
    }
  }
}

export default async function LocaleLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <>
      <HtmlLangSetter locale={locale} />
      {children}
    </>
  )
}
