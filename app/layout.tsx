import type { Viewport } from 'next'
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { CursorAura } from '@/components/cursor-aura'
import { ScrollRevealBoot } from '@/components/scroll-reveal-boot'
import { defaultLocale } from '@/lib/i18n'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang={defaultLocale}
      id="html-lang"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <ScrollRevealBoot />
        <CursorAura />
        {children}
      </body>
    </html>
  )
}
