'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Text3DEffectProps {
  children: ReactNode
  className?: string
}

/**
 * Text3DEffect Component
 * 
 * Creates elegant 3D effect with animated thin lines behind text.
 * Lines animate on hover creating depth and movement.
 */
export default function Text3DEffect({
  children,
  className = '',
}: Text3DEffectProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Background lines for 3D effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={{
          initial: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            },
          },
        }}
      >
        {/* Top line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-accent/40"
          variants={{
            initial: {
              scaleX: 0,
              x: -10,
            },
            hover: {
              scaleX: 1,
              x: 0,
              transition: {
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              },
            },
          }}
          style={{
            transformOrigin: 'left center',
          }}
        />
        
        {/* Bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-accent/40"
          variants={{
            initial: {
              scaleX: 0,
              x: 10,
            },
            hover: {
              scaleX: 1,
              x: 0,
              transition: {
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              },
            },
          }}
          style={{
            transformOrigin: 'right center',
          }}
        />

        {/* Left diagonal line */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-px bg-accent/30"
          variants={{
            initial: {
              scaleY: 0,
              y: -5,
              rotate: -2,
            },
            hover: {
              scaleY: 1,
              y: 0,
              rotate: -2,
              transition: {
                duration: 0.5,
                delay: 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              },
            },
          }}
          style={{
            transformOrigin: 'top center',
          }}
        />

        {/* Right diagonal line */}
        <motion.div
          className="absolute top-0 bottom-0 right-0 w-px bg-accent/30"
          variants={{
            initial: {
              scaleY: 0,
              y: 5,
              rotate: 2,
            },
            hover: {
              scaleY: 1,
              y: 0,
              rotate: 2,
              transition: {
                duration: 0.5,
                delay: 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              },
            },
          }}
          style={{
            transformOrigin: 'bottom center',
          }}
        />

        {/* Diagonal accent line - top right */}
        <motion.svg
          className="absolute top-0 right-0"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          variants={{
            initial: {
              opacity: 0,
              scale: 0,
              rotate: -45,
            },
            hover: {
              opacity: 1,
              scale: 1,
              rotate: -45,
              transition: {
                duration: 0.4,
                delay: 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              },
            },
          }}
        >
          <line
            x1="0"
            y1="20"
            x2="20"
            y2="0"
            stroke="#C9A96B"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />
        </motion.svg>

        {/* Diagonal accent line - bottom left */}
        <motion.svg
          className="absolute bottom-0 left-0"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          variants={{
            initial: {
              opacity: 0,
              scale: 0,
              rotate: -45,
            },
            hover: {
              opacity: 1,
              scale: 1,
              rotate: -45,
              transition: {
                duration: 0.4,
                delay: 0.25,
                ease: [0.34, 1.56, 0.64, 1],
              },
            },
          }}
        >
          <line
            x1="0"
            y1="20"
            x2="20"
            y2="0"
            stroke="#C9A96B"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />
        </motion.svg>
      </motion.div>

      {/* Text content */}
      <span className="relative z-10">{children}</span>
    </motion.span>
  )
}

