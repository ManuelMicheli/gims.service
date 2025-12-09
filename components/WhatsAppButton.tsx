'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { companyInfo } from '@/lib/data'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Show button after user scrolls a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const phoneNumber = companyInfo.phone.replace(/\s/g, '') // Remove spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Buongiorno, vorrei informazioni sui vostri servizi di ristrutturazione.')}`

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 right-6 z-40"
        aria-label="Contattaci su WhatsApp"
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-20 right-0 bg-background-warm border border-primary/20 rounded-lg shadow-2xl p-4 mb-2 w-64"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-headline text-sm font-semibold text-primary">
                  Contattaci su WhatsApp
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-primary/50 hover:text-primary transition-colors"
                  aria-label="Chiudi"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-primary/70 mb-3">
                Rispondiamo di solito entro pochi minuti
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-[#25D366] text-white rounded-sm hover:bg-[#20BA5A] transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsExpanded(false)}
              >
                Apri WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20BA5A] transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contattaci su WhatsApp"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background-warm animate-pulse" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}
