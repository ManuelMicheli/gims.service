'use client'

/**
 * DualVerticalImageSection Component
 * 
 * Premium section with two vertical infinite-scroll image columns.
 * Left column scrolls up, right column scrolls down.
 * 
 * CONFIGURATION:
 * - To change images, modify the arrays in lib/data.ts
 * - To adjust scroll speed, modify the speed prop (default: 25 seconds)
 * - To change image dimensions, modify imageHeight and gap props
 */

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import InfiniteImageColumn, { InfiniteImage } from '@/components/InfiniteImageColumn'
import { dualVerticalImages } from '@/lib/data'

export default function DualVerticalImageSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Split images into two sets (or use same set for both columns)
  const leftColumnImages: InfiniteImage[] = dualVerticalImages.slice(0, Math.ceil(dualVerticalImages.length / 2))
  const rightColumnImages: InfiniteImage[] = dualVerticalImages.slice(Math.ceil(dualVerticalImages.length / 2))

  return (
    <section
      ref={ref}
      id="dual-vertical-images"
      className="relative w-full py-20 lg:py-32 bg-background-warm overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-warm to-background opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            I Nostri Progetti
          </h2>
          <p className="text-lg text-primary/70">
            Guarda alcuni dei nostri lavori più recenti, realizzati con precisione e passione
          </p>
        </motion.div>

        {/* Dual Image Columns */}
        {/* 
          RESPONSIVE LAYOUT:
          - Mobile: Single column (stacked)
          - Tablet: Still stacked for better mobile experience
          - Desktop (1024px+): Two columns side by side
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto px-4 sm:px-0">
          {/* Left Column - Scrolls Up */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <InfiniteImageColumn
              images={leftColumnImages}
              direction="up"
              speed={25}
              imageHeight={280}
              gap={20}
              className="w-full"
            />
          </motion.div>

          {/* Right Column - Scrolls Down */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <InfiniteImageColumn
              images={rightColumnImages}
              direction="down"
              speed={25}
              imageHeight={280}
              gap={20}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

