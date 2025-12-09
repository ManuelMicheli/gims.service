'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { HERO_IMAGES } from '@/lib/data'

/**
 * Professional Hero Slideshow Component
 * 
 * Displays one image at a time with smooth transitions.
 * - Auto-advances every 2 seconds
 * - Infinite loop
 * - Smooth opacity and scale animations
 * - Only one image in DOM at a time (AnimatePresence mode="wait")
 * - Optimized with Next/Image (priority for first, preload others)
 */

const SLIDE_DURATION = 5000 // 5 seconds
const TRANSITION_DURATION = 0.9 // 0.9s transition

// Animation variants for exiting image
const exitVariants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 1,
    scale: 0.98,
    transition: {
      duration: TRANSITION_DURATION,
      ease: [0.4, 0, 0.2, 1], // Smooth easing
    },
  },
}

// Animation variants for entering image
const enterVariants = {
  initial: {
    opacity: 1,
    scale: 1.02,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TRANSITION_DURATION,
      ease: [0.4, 0, 0.2, 1], // Smooth easing
    },
  },
}

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0]))

  // Auto-advance slideshow
  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [])

  // Preload next images in background using Next.js Image preload
  useEffect(() => {
    if (typeof window === 'undefined') return

    const preloadNext = (index: number) => {
      if (preloadedImages.has(index)) return

      const nextImage = HERO_IMAGES[index]
      if (!nextImage) return

      // Use Next.js Image preload
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = nextImage.src
      document.head.appendChild(link)

      setPreloadedImages((prev) => new Set([...prev, index]))
    }

    // Preload next 2 images
    const nextIndex = (currentIndex + 1) % HERO_IMAGES.length
    const nextNextIndex = (currentIndex + 2) % HERO_IMAGES.length
    preloadNext(nextIndex)
    preloadNext(nextNextIndex)
  }, [currentIndex, preloadedImages])

  if (HERO_IMAGES.length === 0) return null

  const currentImage = HERO_IMAGES[currentIndex]

  return (
    <div className="relative w-full aspect-video lg:aspect-[16/9] rounded-lg overflow-hidden shadow-lg bg-background-warm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: enterVariants.initial,
            animate: enterVariants.animate,
            exit: exitVariants.exit,
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            priority={currentIndex === 0}
            quality={currentIndex === 0 ? 90 : 85}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
          />
          {/* Subtle overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Optional: Slide indicators (dots) */}
      {HERO_IMAGES.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Vai alla slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
