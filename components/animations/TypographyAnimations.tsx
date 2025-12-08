'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

/**
 * Typography Animation Components
 * 
 * Reusable animation variants for premium typography effects.
 * All animations use only transform and opacity for performance.
 */

interface HeadlineProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Headline Animation
 * 
 * Fade-in + translateY for main headlines
 */
export function AnimatedHeadline({ children, className = '', delay = 0 }: HeadlineProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.h1>
  )
}

interface HighlightWordProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Highlight Word Animation
 * 
 * Special animation for highlighted/accent words with letter-spacing animation
 */
export function AnimatedHighlightWord({ children, className = '', delay = 0.3 }: HighlightWordProps) {
  return (
    <motion.span
      initial={{ opacity: 0, letterSpacing: '0.1em' }}
      animate={{ opacity: 1, letterSpacing: '0.02em' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.span>
  )
}

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Animated Text
 * 
 * Fade-in for paragraphs and body text
 */
export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.p>
  )
}

interface ScrollRevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Scroll Reveal Text
 * 
 * Fade-in + slide-up when scrolling into viewport
 */
export function ScrollRevealText({ children, className = '', delay = 0 }: ScrollRevealTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

