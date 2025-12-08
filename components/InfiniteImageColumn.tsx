'use client'

/**
 * InfiniteImageColumn Component
 * 
 * Premium vertical infinite-scroll image column.
 * Supports both upward and downward scrolling directions.
 * 
 * CONFIGURATION:
 * - images: Array of image objects with src and alt
 * - direction: "up" (default) or "down" for scroll direction
 * - speed: Duration in seconds for one complete cycle (default: 20)
 * - imageHeight: Height of each image card in pixels (default: 260)
 * - gap: Gap between images in pixels (default: 16)
 * - className: Additional CSS classes for styling
 */

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

export interface InfiniteImage {
  src: string
  alt: string
}

interface InfiniteImageColumnProps {
  images: InfiniteImage[]
  direction?: 'up' | 'down'
  speed?: number
  imageHeight?: number
  gap?: number
  className?: string
}

export default function InfiniteImageColumn({
  images,
  direction = 'up',
  speed = 20,
  imageHeight = 260,
  gap = 16,
  className = '',
}: InfiniteImageColumnProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Duplicate images array for seamless loop
  const duplicatedImages = [...images, ...images]

  // Calculate total height of one set of images
  const totalHeight = images.length * (imageHeight + gap) - gap

  useEffect(() => {
    if (images.length === 0 || isPaused) return

    const updateAnimation = () => {
      if (!contentRef.current) return

      // Determine scroll direction: up (negative) or down (positive)
      const scrollDistance = direction === 'up' ? -totalHeight : totalHeight
      const initialY = direction === 'down' ? -totalHeight : 0

      controls.set({ y: initialY })
      controls.start({
        y: initialY + scrollDistance,
        transition: {
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        },
      })
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateAnimation, 100)
    return () => clearTimeout(timer)
  }, [controls, totalHeight, speed, isPaused, images.length, direction])

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
    controls.stop()
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: `${imageHeight * 2.5}px`, // Responsive height - reduced for mobile
      }}
    >
      {/* Image strip */}
      <motion.div
        ref={contentRef}
        className="flex flex-col"
        animate={controls}
        style={{
          willChange: 'transform',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative overflow-hidden rounded-lg shadow-lg"
            style={{
              height: `${imageHeight}px`,
              marginBottom: index < duplicatedImages.length - 1 ? `${gap}px` : 0,
              width: '100%',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index < 4 ? 'eager' : 'lazy'}
              onError={(e) => {
                // Fallback to a placeholder gradient if image fails to load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                if (target.parentElement) {
                  target.parentElement.style.background = 'linear-gradient(135deg, #F7F5F3 0%, #E8E6E4 100%)'
                }
              }}
            />
            {/* Subtle gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

