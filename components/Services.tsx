'use client'

/**
 * Services Section Component
 * 
 * Minimal, elegant services section with automatic alternating display.
 * 
 * FEATURES:
 * - Shows 4 services at a time in a 2x2 or 4-column grid
 * - Automatically alternates between two groups of 4 services every 5 seconds
 * - Smooth fade + translateY animations using Framer Motion
 * - Maintains premium, minimal design aesthetic
 * 
 * CONFIGURATION:
 * - To adjust the interval duration, change the INTERVAL_MS constant below (default: 5000ms = 5 seconds)
 * - To add/remove services, update the services array in lib/data.ts
 *   - Make sure you have an even number of services (divisible by 4)
 *   - The component will automatically split them into two groups
 *   - If you have 12 services, it will show 4 at a time (3 groups), etc.
 * 
 * ANIMATION TIMING:
 * - Fade out: 0.4s
 * - Fade in: 0.5s with 0.1s delay
 * - Total transition: ~0.6s
 */

import { useState, useEffect, useMemo } from 'react'
import { services } from '@/lib/data'
import ScrollReveal from '@/components/animations/ScrollReveal'
import ScrollWaves from '@/components/animations/ScrollWaves'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cardHover, fadeInUp } from '@/lib/motionVariants'

// Configuration: Change this to adjust the interval between group switches
const INTERVAL_MS = 8000 // 8 seconds

// Animation variants for group transitions
const groupVariants = {
  enter: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // Smooth easing
      staggerChildren: 0.08, // Stagger individual cards
      delayChildren: 0.1,
    },
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
    },
  },
}

// Animation variants for individual cards
const cardVariants = {
  enter: {
    opacity: 0,
    y: 15,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -15,
  },
}

export default function Services() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Split services into groups of 4
  const serviceGroups = useMemo(() => {
    const groups: typeof services[] = []
    for (let i = 0; i < services.length; i += 4) {
      groups.push(services.slice(i, i + 4))
    }
    return groups
  }, [])

  // Check if mobile on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
      const handleResize = () => setIsMobile(window.innerWidth < 768)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Auto-alternate between groups
  useEffect(() => {
    if (serviceGroups.length <= 1) return // Don't animate if only one group

    const interval = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % serviceGroups.length)
    }, INTERVAL_MS)

    return () => clearInterval(interval)
  }, [serviceGroups.length])

  const toggleCard = (serviceId: string) => {
    setExpandedCard((prev) => {
      if (prev === serviceId) {
        return null
      }
      return serviceId
    })
  }

  const currentGroup = serviceGroups[activeGroup] || serviceGroups[0]

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-background-light overflow-hidden">
      {/* Animated Waves Background */}
      <ScrollWaves />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-lg text-primary/70 mb-12">
            Soluzioni complete per ogni esigenza di ristrutturazione e finitura
          </p>
            
            {/* Elegant Separator */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-px w-12 bg-primary/20" />
              <div className="h-1 w-1 bg-accent rounded-full" />
              <div className="h-px flex-1 max-w-xs bg-primary/20" />
            </div>
          </motion.div>

        {/* Services Grid - Alternating groups with smooth animations */}
        <div className="relative min-h-[600px] sm:min-h-[500px] lg:min-h-[400px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeGroup}
              variants={groupVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
            >
              {currentGroup.map((service) => {
                const isExpanded = expandedCard === service.id

                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    className="group relative bg-background-warm/50 backdrop-blur-sm rounded-sm border border-primary/5 hover:border-accent/20 transition-all duration-250 overflow-hidden"
                    whileHover={
                      !isMobile && !isExpanded
                        ? {
                            y: -4,
                            scale: 1.02,
                            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                            transition: {
                              duration: 0.25,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          }
                        : undefined
                    }
                    whileTap={
                      !isMobile && !isExpanded
                        ? {
                            scale: 0.98,
                            transition: {
                              duration: 0.2,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          }
                        : undefined
                    }
                    style={{
                      minHeight: isExpanded ? 'auto' : '300px',
                    }}
                  >
                {/* Card Content - Minimal */}
                <div className="p-8 h-full flex flex-col">
                  {/* Title */}
                  <motion.h3 
                    className="font-headline text-xl lg:text-2xl font-semibold text-primary mb-4"
                    animate={isExpanded ? { color: '#C9A96B' } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Elegant Separator Layer */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/15 to-transparent mb-4" />

                  {/* Description - Always visible but compact */}
                  <p className="text-primary/70 leading-relaxed text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Expand/Collapse Indicator */}
                  <motion.button
                    type="button"
                    onClick={() => toggleCard(service.id)}
                    className="mt-auto flex items-center text-accent text-sm font-medium group/indicator w-full text-left cursor-pointer hover:text-accent-dark transition-colors duration-200"
                    animate={{
                      rotate: isExpanded ? 180 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="mr-2"
                      animate={isExpanded ? { opacity: 0.8 } : { opacity: 1 }}
                    >
                      {isExpanded ? 'Mostra meno' : 'Scopri di più'}
                    </motion.span>
                    <motion.div
                      animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Expanded Details - Reveals on click/touch */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: 'auto', opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 border-t border-primary/10">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="space-y-6 pt-6"
                        >
                          {/* Mini Section with Card Title */}
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.4 }}
                            className="pb-4 border-b border-primary/10"
                          >
                            <h4 className="font-headline text-lg font-semibold text-primary">
                              {service.title}
                            </h4>
                          </motion.div>

                          <div className="prose prose-sm max-w-none">
                            <p className="text-primary/80 leading-relaxed text-sm mb-4">
                              {service.description}
                            </p>
                            <motion.ul
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                              className="space-y-3 text-primary/70 text-sm list-none pl-0"
                            >
                              {[
                                'Materiali certificati e di alta qualità',
                                'Interventi precisi e duraturi',
                                'Supporto completo dalla pianificazione alla consegna',
                              ].map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.35 + idx * 0.1, duration: 0.3 }}
                                  className="flex items-start"
                                >
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                          <motion.a
                            href="#contact"
                            className="inline-flex items-center text-accent font-medium text-sm group/link"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            whileHover={{ x: 4 }}
                          >
                            Richiedi un preventivo
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </motion.a>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Overlay - Desktop only */}
                {!isMobile && !isExpanded && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                    initial={false}
                  />
                )}
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation indicators (optional - shows which group is active) */}
          {serviceGroups.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {serviceGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGroup(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeGroup
                      ? 'w-8 bg-accent'
                      : 'w-1.5 bg-primary/20 hover:bg-primary/40'
                  }`}
                  aria-label={`Show group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
