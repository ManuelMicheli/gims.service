'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface FadeInScaleProps {
  children: ReactNode
  delay?: number
  className?: string
  scale?: number
  duration?: number
}

/**
 * FadeInScale Component
 * 
 * Reveals content with fade-in and scale animation.
 * Perfect for CTAs and buttons.
 * 
 * @param children - Content to animate
 * @param delay - Animation delay in seconds
 * @param className - Additional CSS classes
 * @param scale - Initial scale (default: 0.95)
 * @param duration - Animation duration (default: 0.6)
 */
export default function FadeInScale({
  children,
  delay = 0,
  className = '',
  scale = 0.95,
  duration = 0.6,
}: FadeInScaleProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
