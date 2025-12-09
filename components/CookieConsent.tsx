'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    // Trigger analytics initialization if needed
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="bg-background-warm border border-primary/20 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <Cookie className="w-8 h-8 sm:w-10 sm:h-10 text-accent" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                id="cookie-consent-title"
                className="font-headline text-lg sm:text-xl font-semibold text-primary mb-2"
              >
                Utilizziamo i cookie
              </h3>
              <p
                id="cookie-consent-description"
                className="text-sm sm:text-base text-primary/70 mb-3"
              >
                Questo sito utilizza cookie tecnici e di analisi per migliorare la tua esperienza.
                Continuando a navigare, accetti l&apos;utilizzo dei cookie.{' '}
                <Link
                  href="/privacy"
                  className="text-accent hover:underline font-medium"
                  aria-label="Leggi la Privacy Policy"
                >
                  Privacy Policy
                </Link>
                {' · '}
                <Link
                  href="/cookie"
                  className="text-accent hover:underline font-medium"
                  aria-label="Leggi la Cookie Policy"
                >
                  Cookie Policy
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm font-medium text-primary/70 hover:text-primary border border-primary/20 rounded-sm hover:border-primary/40 transition-colors duration-200 whitespace-nowrap"
                aria-label="Rifiuta i cookie"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 text-sm font-medium bg-primary text-white rounded-sm hover:bg-primary-light transition-colors duration-200 whitespace-nowrap"
                aria-label="Accetta i cookie"
              >
                Accetta
              </button>
            </div>
            <button
              onClick={handleReject}
              className="absolute top-4 right-4 text-primary/50 hover:text-primary transition-colors duration-200 p-1"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
