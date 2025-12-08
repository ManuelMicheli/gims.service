'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/data'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer, { staggerItem } from '@/components/animations/StaggerContainer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/**
 * FAQ Section Component
 * 
 * Accordion-style FAQ section with smooth animations.
 * 
 * To update FAQs, modify the faqItems array in lib/data.ts
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Domande Frequenti
            </h2>
            <p className="text-lg text-primary/70">
              Risposte alle domande più comuni sui nostri servizi
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <StaggerContainer className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="bg-background-warm border border-primary/5 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-background transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-headline text-lg font-semibold text-primary pr-8">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-primary/80 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
