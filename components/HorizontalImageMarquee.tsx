'use client'

/**
 * HorizontalImageMarquee Component
 * 
 * Creates a premium horizontal infinite-scroll image marquee with a single row.
 * Row scrolls left for a smooth, continuous visual effect.
 * 
 * CONFIGURATION:
 * - images: Array of image objects with src and alt
 * - speed: Duration in seconds for one complete cycle (default: 30)
 * - imageWidth: Width of each image in pixels (default: 300)
 * - gap: Gap between images in pixels (default: 16)
 * - className: Additional CSS classes for styling
 * 
 * REPLACE PLACEHOLDER IMAGES:
 * - Update the images prop with real project images from /public/images/gims/
 * - Ensure images are optimized (under 100KB, .webp or .avif format)
 * - Use descriptive, SEO-friendly alt text with localized keywords
 */

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { InfiniteImage } from '@/lib/data'

interface HorizontalImageMarqueeProps {
  images: InfiniteImage[]
  speed?: number // Duration in seconds for one complete cycle
  imageWidth?: number // Width of each image in pixels
  gap?: number // Gap between images in pixels
  className?: string
  direction?: 'left' | 'right' // Scroll direction: 'left' (default) or 'right'
}

export default function HorizontalImageMarquee({
  images,
  speed = 30,
  imageWidth = 300,
  gap = 16,
  className = '',
  direction = 'left', // Default: scroll left
}: HorizontalImageMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimation()
  const contentRef = useRef<HTMLDivElement>(null)

  // Duplicate images array multiple times for seamless infinite loop
  // We need at least 2 sets to create seamless loop
  const duplicatedImages = [...images, ...images]

  // Calculate total width of one set of images
  const totalWidth = images.length * (imageWidth + gap) - gap

  useEffect(() => {
    if (images.length === 0 || isPaused) return

    const animate = () => {
      // Determine scroll direction: left (negative) or right (positive)
      const scrollDistance = direction === 'left' ? -totalWidth : totalWidth
      const initialX = 0

      controls.set({ x: initialX })
      controls.start({
        x: initialX + scrollDistance,
        transition: {
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      })
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(animate, 100)
    return () => clearTimeout(timer)
  }, [controls, totalWidth, speed, isPaused, images.length, direction])

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
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Single Row - Scrolls Left (Infinite) */}
      <div className="overflow-hidden">
        <motion.div
          ref={contentRef}
          className="flex"
          animate={controls}
          style={{
            willChange: 'transform',
          }}
        >
          {/* Render multiple sets for seamless infinite loop */}
          {[...duplicatedImages, ...duplicatedImages, ...duplicatedImages, ...duplicatedImages].map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative flex-shrink-0 overflow-hidden bg-background-warm"
              style={{
                width: `${imageWidth}px`,
                height: `${imageWidth * 0.75}px`, // 4:3 aspect ratio
                marginRight: `${gap}px`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1200px) 320px, 320px"
                priority={index < 6}
                quality={85}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
