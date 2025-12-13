/**
 * Motion Variants - Shared Animation System
 * 
 * Centralized animation variants for consistent micro-interactions across the site.
 * All animations use only transform and opacity for optimal performance.
 * 
 * USAGE:
 * 
 * 1. In a component using Framer Motion:
 *    import { motion } from 'framer-motion'
 *    import { fadeInUp, cardHover, buttonHover, buttonTap } from '@/lib/motionVariants'
 * 
 * 2. For scroll-reveal animations:
 *    <motion.div
 *      initial="hidden"
 *      whileInView="visible"
 *      viewport={{ once: true, margin: "-100px" }}
 *      variants={fadeInUp}
 *    >
 *      Content
 *    </motion.div>
 * 
 * 3. For card hover effects:
 *    <motion.div
 *      variants={cardHover}
 *      whileHover="hover"
 *      whileTap="tap"
 *    >
 *      Card content
 *    </motion.div>
 * 
 * 4. For button interactions:
 *    <motion.button
 *      whileHover={buttonHover.hover}
 *      whileTap={buttonTap.tap}
 *    >
 *      Button
 *    </motion.button>
 * 
 * REDUCED MOTION:
 * All variants respect prefers-reduced-motion by default.
 * Use motion-safe: prefix in Tailwind or check window.matchMedia('(prefers-reduced-motion: reduce)')
 */

import { Variants } from 'framer-motion'

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false

// Shared easing functions for consistency
const easeOut = [0.4, 0, 0.2, 1] as const
const easeElegant = [0.25, 0.1, 0.25, 1] as const
const easeSmooth = [0.22, 1, 0.36, 1] as const
const easeBounce = [0.34, 1.56, 0.64, 1] as const

/**
 * fadeInUp - For elements appearing on scroll
 * Subtle fade-in with slight upward movement
 */
export const fadeInUp: Variants = prefersReducedMotion
  ? {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    }
  : {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: easeSmooth,
        },
      },
    }

/**
 * cardHover - For cards and service items
 * Gentle lift with scale and shadow on hover
 * Subtle press effect on tap
 */
export const cardHover: Variants = prefersReducedMotion
  ? {}
  : {
      hover: {
        y: -6,
        scale: 1.01,
        transition: {
          duration: 0.4,
          ease: easeElegant,
        },
      },
      tap: {
        scale: 0.98,
        transition: {
          duration: 0.2,
          ease: easeOut,
        },
      },
    }

/**
 * buttonHover - For primary call-to-action buttons
 * Subtle shadow increase and slight lift
 */
export const buttonHover = {
  hover: prefersReducedMotion
    ? {}
    : {
        y: -2,
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
        transition: {
          duration: 0.2,
          ease: easeOut,
        },
      },
  tap: prefersReducedMotion
    ? {}
    : {
        scale: 0.98,
        y: 0,
        transition: {
          duration: 0.15,
          ease: easeOut,
        },
      },
}

/**
 * buttonTap - For button press feedback
 * Quick scale down on tap
 */
export const buttonTap = {
  tap: prefersReducedMotion
    ? {}
    : {
        scale: 0.98,
        transition: {
          duration: 0.15,
          ease: easeOut,
        },
      },
}

/**
 * sectionHeader - For section titles appearing on scroll
 * More prominent animation for headers
 */
export const sectionHeader: Variants = prefersReducedMotion
  ? {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    }
  : {
      hidden: {
        opacity: 0,
        y: 30,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: easeSmooth,
        },
      },
    }

/**
 * staggerContainer - For staggered children animations
 * Use with staggerChildren property
 */
export const staggerContainer: Variants = prefersReducedMotion
  ? {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0,
        },
      },
    }
  : {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.08,
          ease: easeSmooth,
        },
      },
    }


