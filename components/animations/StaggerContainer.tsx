'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

/**
 * StaggerContainer Component
 * 
 * Container that staggers children animations when entering viewport.
 * Useful for service cards, project grids, etc.
 * 
 * @param children - Child elements to stagger
 * @param className - Additional CSS classes
 * @param staggerDelay - Delay between each child animation in seconds (default: 0.1)
 */
export default function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          delayChildren: 0.08,
          ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Stagger item optimized for mobile (only fade-in)
export const staggerItemMobile = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}
