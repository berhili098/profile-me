import translations from '@/data/translations.json'

export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export type Messages = (typeof translations)['en']

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getMessages(locale: Locale): Messages {
  return translations[locale]
}
