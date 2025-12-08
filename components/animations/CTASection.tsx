'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface CTASectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  id?: string
}

/**
 * CTASection Component
 * 
 * Special animation for CTA sections that triggers at 30-40% viewport.
 * Animates background fade and content slide-up.
 */
export default function CTASection({
  children,
  className = '',
  threshold = 0.3,
  id,
}: CTASectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}
