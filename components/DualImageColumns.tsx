'use client'

/**
 * DualImageColumns Component
 * 
 * Simplified component containing just the two vertical infinite-scroll image columns.
 * Used to integrate images into other sections (like Hero) without the section wrapper.
 */

import { motion } from 'framer-motion'
import InfiniteImageColumn, { InfiniteImage } from '@/components/InfiniteImageColumn'
import { dualVerticalImages } from '@/lib/data'

interface DualImageColumnsProps {
  imageHeight?: number
  gap?: number
  speed?: number
  className?: string
}

export default function DualImageColumns({
  imageHeight = 280,
  gap = 20,
  speed = 25,
  className = '',
}: DualImageColumnsProps) {
  // Split images into two sets
  const leftColumnImages: InfiniteImage[] = dualVerticalImages.slice(0, Math.ceil(dualVerticalImages.length / 2))
  const rightColumnImages: InfiniteImage[] = dualVerticalImages.slice(Math.ceil(dualVerticalImages.length / 2))

  return (
    <div className={`flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:w-auto justify-center items-center ${className}`}>
      {/* Left Column - Scrolls Up */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-auto"
      >
        <InfiniteImageColumn
          images={leftColumnImages}
          direction="up"
          speed={speed}
          imageHeight={imageHeight}
          gap={gap}
          className="w-full max-w-xs mx-auto lg:max-w-sm"
        />
      </motion.div>

      {/* Right Column - Scrolls Down */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-auto"
      >
        <InfiniteImageColumn
          images={rightColumnImages}
          direction="down"
          speed={speed}
          imageHeight={imageHeight}
          gap={gap}
          className="w-full max-w-xs mx-auto lg:max-w-sm"
        />
      </motion.div>
    </div>
  )
}

