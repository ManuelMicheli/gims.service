import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'

// Elegant serif font for headlines
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
  style: ['normal', 'italic'],
})

// Alternative elegant serif (fallback)
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline-alt',
  display: 'swap',
})

// Modern sans for body, menu, buttons
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'G.I.M.S. Service - Ristrutturazioni e Finiture d\'Interni | Bareggio (MI)',
  description: 'G.I.M.S. Service offre ristrutturazioni e finiture d\'interni di alta qualità. Oltre 30 anni di esperienza con Geometra José Giardino a Bareggio (MI).',
  keywords: 'ristrutturazioni, finiture interne, Bareggio, Milano, imbiancatura, cartongesso, Geometra Giardino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable} font-body antialiased`}>
        <ScrollProgress />
        <Header />
        {/* 
          Padding-top to compensate for fixed header
          - Mobile: ~80px (header + mobile menu space)
          - Desktop: ~70px (header height)
        */}
        <main className="min-h-screen pt-20 sm:pt-20 md:pt-24 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
