import type { Viewport } from 'next'
import { Roboto, Poppins } from 'next/font/google'
import { defaultLocale } from '@/lib/i18n'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap'
})

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const viewport: Viewport = {
  themeColor: '#0A0C0F',
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
      className={`${roboto.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
