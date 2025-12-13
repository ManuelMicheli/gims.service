'use client'

import { reviews } from '@/lib/data'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

/**
 * Reviews/Testimonials Section Component
 * 
 * Infinite scrolling carousel displaying client testimonials.
 * Continuously scrolls from right to left (infinite loop).
 * Cards fill the full horizontal width without side margins.
 * 
 * To update reviews, modify the reviews array in lib/data.ts
 */
export default function Reviews() {
  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]
  const cardWidth = 500 // Approximate width for calculation
  const gap = 32 // Gap between cards
  const totalCardWidth = cardWidth + gap
  const scrollDistance = reviews.length * totalCardWidth

  return (
    <section id="reviews" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-elegant overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 max-w-7xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="text-base sm:text-lg text-primary/70">
              La soddisfazione dei clienti è la nostra priorità
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite Scrolling Carousel - Full Width */}
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-background-warm to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-background-warm to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6 lg:gap-8"
            animate={{
              x: [0, -scrollDistance],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[calc(100vw-64px)] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] bg-surface-elevated p-5 sm:p-6 lg:p-8 rounded-sm border border-primary/8 hover:border-accent/30 shadow-elegant hover:shadow-hover transition-all duration-400"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 248, 0.95) 100%)',
                }}
                whileHover={{ 
                  scale: 1.01, 
                  y: -6,
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(201, 169, 107, 0.08)'
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent/30 mb-4" strokeWidth={1.5} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-primary/80 mb-6 leading-relaxed italic min-h-[80px]">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-primary/10 pt-4">
                  <div className="font-headline font-semibold text-primary mb-1">
                    {review.name}
                  </div>
                  <div className="text-sm text-primary/60">
                    {review.workType}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}