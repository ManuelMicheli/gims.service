'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress Component
 * 
 * Displays a progress bar at the top of the page showing scroll progress.
 * Performance optimized: uses transform scaleX only.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
      style={{ scaleX }}
    />
  )
}
