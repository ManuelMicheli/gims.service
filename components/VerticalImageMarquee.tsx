'use client'

/**
 * VerticalImageMarquee Component
 * 
 * Creates a breathtaking vertical infinite-scroll image strip.
 * Images scroll upwards in a smooth, continuous, infinite loop.
 * 
 * CONFIGURATION:
 * - To change scroll speed/duration, modify the `speed` prop (default: 20)
 *   - Lower values = faster scroll (e.g., 15 = faster)
 *   - Higher values = slower scroll (e.g., 30 = slower)
 *   - The speed represents seconds to complete one full cycle
 * 
 * - To add real images from assets folder:
 *   - Place images in /public/images/ directory
 *   - Update the images prop with paths like '/images/your-image.jpg'
 *   - Or fetch from CMS and pass as props
 * 
 * - To customize image dimensions:
 *   - Modify the `imageHeight` constant below (default: 280px)
 *   - Adjust gap spacing with `gap` constant (default: 16px)
 */

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

export interface MarqueeImage {
  src: string
  alt: string
  caption?: string
}

interface VerticalImageMarqueeProps {
  images: MarqueeImage[]
  speed?: number // Duration in seconds for one complete cycle
  imageHeight?: number // Height of each image in pixels
  gap?: number // Gap between images in pixels
  className?: string
  direction?: 'up' | 'down' // Scroll direction: 'up' (default) or 'down' (inverse)
}

export default function VerticalImageMarquee({
  images,
  speed = 20,
  imageHeight = 280,
  gap = 16,
  className = '',
  direction = 'up', // Default: scroll up
}: VerticalImageMarqueeProps) {
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

    // Determine scroll direction: up (negative) or down (positive)
    const scrollDistance = direction === 'up' ? -totalHeight : totalHeight
    const initialY = direction === 'down' ? -totalHeight : 0

    // Start animation from initial position
    controls.set({ y: initialY })
    controls.start({
      y: initialY + scrollDistance,
      transition: {
        duration: speed,
        ease: 'linear',
        repeat: Infinity,
      },
    })
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
        height: `${Math.min(imageHeight * 3, totalHeight)}px`, // Show ~3 images at a time
      }}
    >
      {/* Glassmorphism container - no borders for minimal look */}
      <div className="absolute inset-0 bg-background-warm/40 backdrop-blur-md" />
      
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
            className="relative overflow-hidden rounded-lg shadow-md w-full"
            style={{
              height: `${imageHeight}px`,
              marginBottom: index < duplicatedImages.length - 1 ? `${gap}px` : 0,
              width: '100%',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 4}
              quality={90}
              unoptimized={true}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
            {/* Subtle gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            
            {/* Optional caption */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-primary/80 to-transparent">
                <p className="text-white text-xs font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

