import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Materská škola Hrášok',
  description:
    'Súkromná materská škola pre deti od 2 do 6 rokov s profesionálnym pedagogickým tímom a každodennou angličtinou.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
