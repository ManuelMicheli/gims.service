'use client'

/**
 * MarqueeText Component
 * 
 * Reusable horizontal infinite scrolling text marquee.
 * Creates a smooth, continuous scrolling effect with no visible jumps or gaps.
 * 
 * CONFIGURATION:
 * - text: The text to display in the marquee
 * - speed: Duration in seconds for one complete cycle (lower = faster, higher = slower)
 *   - Default: 20 seconds
 *   - Recommended range: 15-30 seconds for optimal visual effect
 * - direction: Scroll direction ("left" or "right")
 *   - Default: "left"
 * - className: Additional CSS classes for styling
 * - separator: Text/icon to separate repeated instances (e.g., " - ", " • ")
 *   - Default: " - "
 * 
 * USAGE:
 * <MarqueeText 
 *   text="Your text here" 
 *   speed={25} 
 *   direction="left"
 *   separator=" • "
 * />
 */

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface MarqueeTextProps {
  text: string
  speed?: number // Duration in seconds for one complete cycle
  direction?: 'left' | 'right'
  className?: string
  separator?: string
  repeat?: number // How many times to repeat the text in the strip
}

export default function MarqueeText({
  text,
  speed = 20,
  direction = 'left',
  className = '',
  separator = ' - ',
  repeat = 4, // Repeat text 4 times for seamless loop
}: MarqueeTextProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Create repeated text with separators
  const repeatedText = Array(repeat).fill(text).join(separator)

  // Duplicate for seamless loop
  const duplicatedText = `${repeatedText}${separator}${repeatedText}`

  useEffect(() => {
    if (!contentRef.current || isPaused) return

    // Use requestAnimationFrame to ensure accurate width calculation
    const updateAnimation = () => {
      if (!contentRef.current) return
      
      const totalWidth = contentRef.current.scrollWidth
      const contentWidth = totalWidth / 2 // Width of one duplicated set

      controls.set({ x: 0 })
      controls.start({
        x: direction === 'left' ? -contentWidth : contentWidth,
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
  }, [controls, speed, direction, isPaused, repeatedText])

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
    controls.stop()
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={contentRef}
        className="inline-flex"
        animate={controls}
        style={{
          willChange: 'transform',
        }}
      >
        <span className="inline-block">{duplicatedText}</span>
      </motion.div>
    </div>
  )
}

