import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import CookieConsent from '@/components/CookieConsent'
import WhatsAppButton from '@/components/WhatsAppButton'
import { companyInfo } from '@/lib/data'
import Script from 'next/script'

// Elegant serif font for headlines
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
  preload: true,
  style: ['normal', 'italic'],
})

// Alternative elegant serif (fallback)
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline-alt',
  display: 'swap',
  preload: true,
})

// Modern sans for body, menu, buttons
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gimsservice.vercel.app'),
  title: {
    default: 'G.I.M.S. Service - Ristrutturazioni e Finiture d\'Interni | Bareggio (MI)',
    template: '%s | G.I.M.S. Service',
  },
  description: 'G.I.M.S. Service offre ristrutturazioni e finiture d\'interni di alta qualità a Milano e provincia. Oltre 30 anni di esperienza con Geometra José Giardino. Imbiancatura, cartongesso, pavimenti, bagni. Sopralluogo gratuito.',
  keywords: [
    'ristrutturazioni Milano',
    'finiture interne',
    'imbiancatura Bareggio',
    'cartongesso Milano',
    'pavimenti legno',
    'ristrutturazione bagni',
    'Geometra Giardino',
    'GIMS Service',
    'lavori edili Milano',
  ],
  authors: [{ name: 'G.I.M.S. Service' }],
  creator: 'G.I.M.S. Service',
  publisher: 'G.I.M.S. Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://gimsservice.vercel.app',
    siteName: 'G.I.M.S. Service',
    title: 'G.I.M.S. Service - Ristrutturazioni e Finiture d\'Interni | Bareggio (MI)',
    description: 'Oltre 30 anni di esperienza nella ristrutturazione e finiture d\'interni. Sopralluogo gratuito.',
    images: [
      {
        url: '/images/terrazzo-moderno-struttura-vetro.webp.jpg',
        width: 1200,
        height: 630,
        alt: 'G.I.M.S. Service - Ristrutturazioni Milano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G.I.M.S. Service - Ristrutturazioni e Finiture d\'Interni',
    description: 'Oltre 30 anni di esperienza nella ristrutturazione e finiture d\'interni.',
    images: ['/images/terrazzo-moderno-struttura-vetro.webp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://gimsservice.vercel.app',
    languages: {
      'it-IT': 'https://gimsservice.vercel.app',
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: companyInfo.name,
  image: 'https://gimsservice.vercel.app/images/terrazzo-moderno-struttura-vetro.webp.jpg',
  '@id': 'https://gimsservice.vercel.app',
  url: 'https://gimsservice.vercel.app',
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.address,
    addressLocality: 'Bareggio',
    addressRegion: 'MI',
    postalCode: '20008',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '45.4769',
    longitude: '9.0000',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    // Add social media links when available
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable} font-body antialiased`}>
        {/* Google Analytics 4 - Only load if consent given */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        <ScrollProgress />
        <Header />
        {/* 
          Padding-top to compensate for fixed header
          - Mobile: Increased padding to prevent header overlap (~88px)
          - Desktop: ~0px (hero section has negative margin)
        */}
        <main className="min-h-screen pt-24 sm:pt-24 md:pt-28 lg:pt-0">
          {/* Visual separator for mobile header - elegant divider line */}
          <div className="lg:hidden h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  )
}
