'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Text3DEffect from './Text3DEffect'

interface ColorInvertTextProps {
  children: ReactNode
  defaultColor?: 'primary' | 'accent'
  className?: string
}

/**
 * ColorInvertText Component
 * 
 * Dynamic text animation with color inversion on hover:
 * - Starts black, becomes yellow on hover
 * - Adds subtle scale and translateY for dynamic effect
 * - Includes elegant 3D line effects behind text
 * 
 * Uses only transform and color properties for performance
 */
export default function ColorInvertText({
  children,
  defaultColor = 'primary',
  className = '',
}: ColorInvertTextProps) {
  return (
    <Text3DEffect>
      <motion.span
        className={`inline-block cursor-pointer text-primary ${className}`}
        whileHover={{
          color: '#C9A96B', // accent color
          scale: 1.05,
          y: -2,
          transition: {
            duration: 0.25,
            ease: [0.34, 1.56, 0.64, 1], // elastic ease-out for dynamic feel
          },
        }}
        style={{
          transformOrigin: 'center bottom',
        }}
      >
        {children}
      </motion.span>
    </Text3DEffect>
  )
}

