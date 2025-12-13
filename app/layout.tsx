import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import CookieConsent from '@/components/CookieConsent'
import WhatsAppButton from '@/components/WhatsAppButton'
import { companyInfo, services, reviews, faqItems } from '@/lib/data'
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
    'ristrutturazioni Bareggio',
    'finiture interne Milano',
    'imbiancatura Bareggio',
    'imbiancatura Milano',
    'cartongesso Milano',
    'pavimenti legno Milano',
    'ristrutturazione bagni Milano',
    'ristrutturazione bagni Bareggio',
    'Geometra José Giardino',
    'Geometra Giardino',
    'GIMS Service',
    'G.I.M.S. Service',
    'lavori edili Milano',
    'lavori edili Bareggio',
    'ristrutturazione appartamenti Milano',
    'ristrutturazione case Milano',
    'pavimenti ceramica Milano',
    'tapparelle Milano',
    'spatolati Milano',
    'decorazioni pareti Milano',
    'manutenzione stabili Milano',
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
    description: 'Oltre 30 anni di esperienza nella ristrutturazione e finiture d\'interni a Milano e provincia. Geometra José Giardino. Imbiancatura, cartongesso, pavimenti, bagni. Sopralluogo gratuito.',
    images: [
      {
        url: '/images/terrazzo-moderno-struttura-vetro.webp.jpg',
        width: 1200,
        height: 630,
        alt: 'G.I.M.S. Service - Ristrutturazioni e Finiture d\'Interni Milano - Oltre 30 anni di esperienza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G.I.M.S. Service - Ristrutturazioni e Finiture d\'Interni | Milano',
    description: 'Oltre 30 anni di esperienza nella ristrutturazione e finiture d\'interni a Milano e provincia. Sopralluogo gratuito.',
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

// JSON-LD Structured Data - Enhanced LocalBusiness Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://gimsservice.vercel.app',
  name: companyInfo.name,
  legalName: companyInfo.name,
  image: 'https://gimsservice.vercel.app/images/terrazzo-moderno-struttura-vetro.webp.jpg',
  logo: 'https://gimsservice.vercel.app/images/terrazzo-moderno-struttura-vetro.webp.jpg',
  url: 'https://gimsservice.vercel.app',
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.address,
    addressLocality: 'Bareggio',
    addressRegion: 'Lombardia',
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
  areaServed: [
    {
      '@type': 'City',
      name: 'Milano',
    },
    {
      '@type': 'City',
      name: 'Bareggio',
    },
    {
      '@type': 'State',
      name: 'Lombardia',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '45.4769',
      longitude: '9.0000',
    },
    geoRadius: {
      '@type': 'Distance',
      value: '50',
      unitCode: 'KM',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi di Ristrutturazione e Finiture',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'LocalBusiness',
          name: companyInfo.name,
        },
        areaServed: {
          '@type': 'City',
          name: 'Milano',
        },
      },
      position: index + 1,
    })),
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: reviews.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewBody: review.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  })),
}

// Organization Schema for E-E-A-T
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyInfo.name,
  url: 'https://gimsservice.vercel.app',
  logo: 'https://gimsservice.vercel.app/images/terrazzo-moderno-struttura-vetro.webp.jpg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: companyInfo.phone,
    contactType: 'customer service',
    areaServed: 'IT',
    availableLanguage: 'Italian',
  },
  founder: {
    '@type': 'Person',
    name: companyInfo.owner,
    jobTitle: 'Geometra',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.address,
    addressLocality: 'Bareggio',
    addressRegion: 'Lombardia',
    postalCode: '20008',
    addressCountry: 'IT',
  },
}

// FAQPage Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

// BreadcrumbList Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://gimsservice.vercel.app',
    },
  ],
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
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
