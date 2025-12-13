'use client'

/**
 * ProjectTimeline Component
 * 
 * Elegant timeline section showing the renovation process steps.
 * Horizontal layout on desktop, vertical stacked on mobile.
 * 
 * CONFIGURATION:
 * - To add/remove steps: Modify the `timelineSteps` array below
 *   - Add/remove objects following the TimelineStep interface
 *   - Each step needs: id, number, title, description, icon
 *   - Icon can be any Lucide icon name (as string) or React component
 * 
 * - To adjust animation timings:
 *   - Stagger delay between steps: Modify `staggerDelay` in containerVariants (default: 0.15s)
 *   - Animation duration: Modify `duration` in containerVariants (default: 0.6s)
 *   - Hover effects: Modify `whileHover` properties in step cards
 * 
 * - To change colors/styling:
 *   - Active step color: `bg-accent` class
 *   - Connector line color: `border-accent` class
 *   - Card background: `bg-background-warm` class
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '@/components/animations/ScrollReveal'
import {
  ClipboardCheck,
  Ruler,
  Hammer,
  Paintbrush,
  CheckCircle2,
  Home,
} from 'lucide-react'
import { fadeInUp, cardHover } from '@/lib/motionVariants'

export interface TimelineStep {
  id: string
  number: number
  title: string
  description: string
  icon: any // Lucide icon component
}

// Timeline steps data - Easy to modify
const timelineSteps: TimelineStep[] = [
  {
    id: '1',
    number: 1,
    title: 'Sopralluogo',
    description: 'Analisi degli spazi e consulenza gratuita per definire le esigenze e il progetto.',
    icon: ClipboardCheck,
  },
  {
    id: '2',
    number: 2,
    title: 'Progettazione',
    description: 'Elaborazione di un preventivo dettagliato e pianificazione degli interventi.',
    icon: Ruler,
  },
  {
    id: '3',
    number: 3,
    title: 'Cantiere',
    description: 'Esecuzione dei lavori con coordinamento professionale e materiali certificati.',
    icon: Hammer,
  },
  {
    id: '4',
    number: 4,
    title: 'Finiture',
    description: 'Rifinitura e dettagli finali per garantire un risultato di alta qualità.',
    icon: Paintbrush,
  },
  {
    id: '5',
    number: 5,
    title: 'Consegna',
    description: 'Collaudo finale e consegna chiavi in mano con garanzia su tutti i lavori.',
    icon: CheckCircle2,
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each step appearance
      delayChildren: 0.1,
    },
  },
}

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smooth easing
    },
  },
}

export default function ProjectTimeline() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="timeline" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
              Il Nostro Processo
            </h2>
            <p className="text-lg text-primary/70">
              Dalla consulenza iniziale alla consegna finale, ogni fase è curata nei minimi dettagli
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline - Desktop: Horizontal, Tablet/Mobile: Vertical */}
        {/* 
          RESPONSIVE LAYOUT:
          - Mobile/Tablet (< 1024px): Vertical stacked layout
          - Desktop (1024px+): Horizontal timeline layout
        */}
        <div ref={ref} className="relative max-w-7xl mx-auto">
          {/* Desktop Horizontal Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="hidden lg:flex items-start justify-between relative px-4"
          >
            {/* Connector Line - Desktop */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary/10 z-0">
              <motion.div
                className="h-full bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {timelineSteps.map((step, index) => {
              const Icon = step.icon
              const isHovered = hoveredStep === step.id
              const isLast = index === timelineSteps.length - 1

              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className="relative z-10 flex flex-col items-center flex-1 max-w-[200px]"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step Number Circle */}
                  <motion.div
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                      isHovered
                        ? 'bg-accent shadow-lg'
                        : 'bg-background-warm border-2 border-primary/20'
                    }`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className={`w-10 h-10 transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-accent'
                        }`}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        isHovered
                          ? 'bg-primary text-white'
                          : 'bg-accent text-white'
                      } transition-colors duration-300`}
                    >
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Step Card */}
                  <motion.div
                    className={`w-full p-6 rounded-sm transition-all duration-300 ${
                      isHovered
                        ? 'bg-background-warm/50 shadow-lg'
                        : 'bg-transparent'
                    }`}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      transition: {
                        duration: 0.25,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    whileTap={{
                      scale: 0.98,
                      transition: {
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                  >
                    <motion.h3 
                      className="font-headline text-lg font-semibold text-primary mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-primary/70 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>

                  {/* Connector Dot (except last) */}
                  {!isLast && (
                    <div
                      className={`absolute top-12 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        isHovered || (index > 0 && hoveredStep === timelineSteps[index - 1]?.id)
                          ? 'bg-accent border-accent scale-125'
                          : 'bg-background border-primary/20'
                      }`}
                      style={{
                        left: 'calc(100% - 6px)',
                      }}
                    />
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Mobile/Tablet Vertical Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:hidden space-y-6 sm:space-y-8 px-2 sm:px-0"
          >
            {timelineSteps.map((step, index) => {
              const Icon = step.icon
              const isHovered = hoveredStep === step.id
              const isLast = index === timelineSteps.length - 1

              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className="relative flex gap-4"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Connector Line - Vertical */}
                  {!isLast && (
                    <div className="absolute left-6 top-16 bottom-[-2rem] w-0.5 bg-primary/10">
                      <motion.div
                        className="w-full bg-accent origin-top"
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.15 + 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  )}

                  {/* Step Number Circle */}
                  <motion.div
                    className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-accent shadow-lg'
                        : 'bg-background-warm border-2 border-primary/20'
                    }`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-accent'
                        }`}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isHovered
                          ? 'bg-primary text-white'
                          : 'bg-accent text-white'
                      } transition-colors duration-300`}
                    >
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Step Card */}
                  <motion.div
                    className={`flex-1 p-5 rounded-sm transition-all duration-300 ${
                      isHovered
                        ? 'bg-background-warm/50 shadow-lg'
                        : 'bg-transparent'
                    }`}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.h3 
                      className="font-headline text-lg font-semibold text-primary mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-primary/70 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

