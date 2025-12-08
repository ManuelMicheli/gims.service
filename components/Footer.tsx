'use client'

import { companyInfo } from '@/lib/data'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Footer Component
 * 
 * Footer with company information, quick links, and legal placeholder.
 * 
 * To update content, modify the companyInfo object in lib/data.ts
 */

const footerLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Servizi', id: 'services' },
  { label: 'Galleria', id: 'projects' },
  { label: 'Domande', id: 'faq' },
  { label: 'Recensioni', id: 'reviews' },
  { label: 'Contatti', id: 'contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [footerRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-primary text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-xl font-semibold mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-sm text-white/80 mb-4">
              {companyInfo.owner}
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <p>{companyInfo.address}</p>
              <p>{companyInfo.city}</p>
              <p className="pt-2">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-sm font-semibold uppercase tracking-wider mb-4">
              Link Rapidi
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                >
                  <motion.button
                    onClick={() => handleLinkClick(link.id)}
                    className="relative text-sm text-white/80 hover:text-accent transition-colors duration-200 group"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-accent"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-headline text-sm font-semibold uppercase tracking-wider mb-4">
              Informazioni Legali
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-accent transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookie"
                  className="hover:text-accent transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>
            © {currentYear} {companyInfo.name}. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
