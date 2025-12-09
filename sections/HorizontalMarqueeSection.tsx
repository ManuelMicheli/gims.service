'use client'

/**
 * HorizontalMarqueeSection Component
 * 
 * Premium section featuring a horizontal infinite-scroll marquee with two opposing rows
 * of renovation detail images. This section showcases the quality and attention to detail
 * of GIMS.Service's work.
 * 
 * REPLACE PLACEHOLDER IMAGES:
 * - Update horizontalMarqueeImages in lib/data.ts with real project detail images
 * - Images should showcase renovation details: tiles, finishes, decorative elements, etc.
 * - Ensure images are optimized (under 100KB, .webp or .avif format)
 * - Use descriptive, SEO-friendly alt text with localized keywords
 */

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HorizontalImageMarquee from '@/components/HorizontalImageMarquee'
import { horizontalMarqueeImages } from '@/lib/data'

export default function HorizontalMarqueeSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="horizontal-marquee"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-background-light overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-warm/30 via-background-light to-background-warm/30 opacity-50" />

      {/* Section Header - with padding */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Dettagli che Fanno la Differenza
          </h2>
          <p className="text-base sm:text-lg text-primary/70">
            Ogni dettaglio curato con precisione artigianale per risultati di eccellenza
          </p>
        </motion.div>
      </div>

      {/* Horizontal Image Marquee - Scrolls Left - Full width, no padding */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full"
      >
        <HorizontalImageMarquee
          images={horizontalMarqueeImages}
          speed={35}
          imageWidth={320}
          gap={20}
          direction="left"
          className="w-full"
        />
      </motion.div>
    </section>
  )
}
