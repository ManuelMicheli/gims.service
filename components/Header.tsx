'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { smoothScrollTo } from '@/lib/utils'

/**
 * Header Component
 * 
 * Sticky header with logo, navigation menu, and mobile hamburger menu.
 * Smooth scrolls to sections on click.
 * 
 * To update navigation links, modify the navItems array.
 */
const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Servizi', id: 'services' },
  { label: 'Chi Siamo', id: 'about' },
  { label: 'Prima e Dopo', id: 'before-after' },
  { label: 'Progetti', id: 'projects' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Recensioni', id: 'reviews' },
  { label: 'Contatti', id: 'contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (id: string) => {
    smoothScrollTo(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white lg:bg-background-light/95 lg:backdrop-blur-sm shadow-sm py-3 lg:py-3'
          : isMobileMenuOpen 
            ? 'bg-white lg:bg-background-light/95 lg:backdrop-blur-sm py-4 lg:py-6'
            : 'bg-white lg:bg-transparent py-3 sm:py-4 lg:py-6 shadow-sm lg:shadow-none border-b border-primary/10 lg:border-none'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive sizing */}
          <button
            onClick={() => handleNavClick('hero')}
            className="font-body text-lg sm:text-xl md:text-2xl font-semibold text-primary hover:text-accent transition-colors duration-200"
          >
            G.I.M.S. Service
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-250 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-primary/10 shadow-lg absolute left-0 right-0 top-full"
          >
            <div className="container mx-auto px-4 py-4 space-y-2 max-w-7xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left text-sm font-medium text-primary hover:text-accent transition-colors duration-200 py-2.5 px-2 rounded-sm hover:bg-background-warm/50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
