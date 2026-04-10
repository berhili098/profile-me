import { notFound } from 'next/navigation'
import { getMessages, isLocale, type Locale } from '@/lib/i18n'
import { PortfolioContent } from '@/components/portfolio-content'

export default async function HomePage ({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  const locale: Locale = localeParam
  const messages = getMessages(locale)
  return <PortfolioContent locale={locale} messages={messages} />
}
