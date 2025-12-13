'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

/**
 * ScrollReveal Component
 * 
 * Provides smooth fade-in and slide animations when element enters viewport.
 * 
 * @param children - Content to animate
 * @param delay - Animation delay in seconds (default: 0)
 * @param direction - Slide direction: 'up', 'down', 'left', 'right' (default: 'up')
 * @param className - Additional CSS classes
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  }

  const initial = directionMap[direction]
  const animate = { x: 0, y: 0 }

  return (
    <motion.div
      ref={ref}
      initial={{ ...initial, opacity: 0 }}
      animate={inView ? { ...animate, opacity: 1 } : { ...initial, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
