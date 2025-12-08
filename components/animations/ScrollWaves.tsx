'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * ScrollWaves Component
 * 
 * Creates elegant 3D wave effects in the background that respond to scroll.
 * Creates depth and visual interest with animated waves.
 */
export default function ScrollWaves() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Wave transforms based on scroll
  const wave1Y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const wave1Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])
  
  const wave2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const wave2Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2])
  
  const wave3Y = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const wave3Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.3, 0.15])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Wave 1 - Large subtle wave */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: wave1Y, opacity: wave1Opacity }}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        height="300"
      >
        <motion.path
          d="M0,150 Q300,100 600,150 T1200,150 L1200,200 L0,200 Z"
          fill="#C9A96B"
          fillOpacity="0.08"
          animate={{
            d: [
              "M0,150 Q300,100 600,150 T1200,150 L1200,200 L0,200 Z",
              "M0,150 Q300,120 600,150 T1200,150 L1200,200 L0,200 Z",
              "M0,150 Q300,100 600,150 T1200,150 L1200,200 L0,200 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Wave 2 - Medium wave */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: wave2Y, opacity: wave2Opacity }}
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        height="250"
      >
        <motion.path
          d="M0,130 Q400,80 800,130 T1200,130 L1200,180 L0,180 Z"
          fill="#2C2C2C"
          fillOpacity="0.03"
          animate={{
            d: [
              "M0,130 Q400,80 800,130 T1200,130 L1200,180 L0,180 Z",
              "M0,130 Q400,100 800,130 T1200,130 L1200,180 L0,180 Z",
              "M0,130 Q400,80 800,130 T1200,130 L1200,180 L0,180 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Wave 3 - Small accent wave */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        style={{ y: wave3Y, opacity: wave3Opacity }}
        viewBox="0 0 1200 150"
        preserveAspectRatio="none"
        height="200"
      >
        <motion.path
          d="M0,120 Q500,90 1000,120 T1200,120 L1200,150 L0,150 Z"
          fill="#C9A96B"
          fillOpacity="0.05"
          animate={{
            d: [
              "M0,120 Q500,90 1000,120 T1200,120 L1200,150 L0,150 Z",
              "M0,120 Q500,110 1000,120 T1200,120 L1200,150 L0,150 Z",
              "M0,120 Q500,90 1000,120 T1200,120 L1200,150 L0,150 Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  )
}

