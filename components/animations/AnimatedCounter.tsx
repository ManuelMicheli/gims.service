'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

/**
 * AnimatedCounter Component
 * 
 * Animates numbers from 0 to target value when scrolling into viewport.
 * Supports prefix (e.g., "+") and suffix (e.g., "%", " anni").
 * 
 * @param value - Target value (e.g., "30", "500", "95")
 * @param duration - Animation duration in seconds (default: 2)
 * @param className - Additional CSS classes
 * @param prefix - Text before the number (e.g., "+", "$")
 * @param suffix - Text after the number (e.g., "%", " anni")
 */
export default function AnimatedCounter({
  value,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  // Extract numeric value
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 80,
    mass: 0.8,
  })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (inView) {
      // Delay start slightly for smoother entry
      const timer = setTimeout(() => {
        motionValue.set(numericValue)
      }, 200)
      return () => clearTimeout(timer)
    } else {
      motionValue.set(0)
      setDisplayValue(0)
    }
  }, [inView, motionValue, numericValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      // Smooth rounding for better visual effect
      const rounded = Math.floor(latest)
      if (rounded !== displayValue) {
        setDisplayValue(rounded)
      }
    })

    return () => unsubscribe()
  }, [springValue, displayValue])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9, y: 5 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 5 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      }}
    >
      {prefix}
      <motion.span
        key={displayValue}
        initial={{ opacity: 0.7, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {inView ? displayValue : 0}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

