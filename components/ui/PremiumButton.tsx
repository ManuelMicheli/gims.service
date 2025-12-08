'use client'

import { motion, TargetAndTransition } from 'framer-motion'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { buttonHover, buttonTap } from '@/lib/motionVariants'

interface PremiumButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  icon?: ReactNode
}

/**
 * Premium Button Component
 * 
 * Elegant button using shared motion variants for consistent micro-interactions:
 * - Uses buttonHover and buttonTap from motionVariants
 * - Background color transition
 * - Soft shadow and lift on hover
 * - Arrow icon translation
 * All animations use transform and opacity only
 */
export default function PremiumButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  icon,
}: PremiumButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 font-medium rounded-sm transition-all duration-200'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  const ButtonContent = (
    <>
      {children}
      <motion.span
        className="ml-2"
        initial={false}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {icon || <ArrowRight className="w-5 h-5" />}
      </motion.span>
    </>
  )

  // Get hover and tap animations with proper typing
  const hoverAnimation: TargetAndTransition | undefined = Object.keys(buttonHover.hover).length > 0 
    ? (buttonHover.hover as TargetAndTransition)
    : undefined
  const tapAnimation: TargetAndTransition | undefined = Object.keys(buttonTap.tap).length > 0 
    ? (buttonTap.tap as TargetAndTransition)
    : undefined

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        {ButtonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
      {ButtonContent}
    </motion.button>
  )
}

