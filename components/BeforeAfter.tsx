'use client'

import { useState, useRef, useEffect } from 'react'
import { beforeAfterItems } from '@/lib/data'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer, { staggerItem } from '@/components/animations/StaggerContainer'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Before/After Section Component
 * 
 * Displays before/after slider for renovation projects.
 * 
 * To update content, modify the beforeAfterItems array in lib/data.ts
 * Replace image paths with actual before/after photos.
 */
export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % beforeAfterItems.length)
    setSliderPosition(50)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + beforeAfterItems.length) % beforeAfterItems.length)
    setSliderPosition(50)
  }

  const currentItem = beforeAfterItems[activeIndex]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  return (
    <section id="before-after" className="py-20 lg:py-32 bg-background-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
              Prima e Dopo
            </h2>
            <p className="text-lg text-primary/70">
              Scopri le trasformazioni che abbiamo realizzato
            </p>
          </div>
        </ScrollReveal>

        {/* Slider */}
        <div className="max-w-5xl mx-auto">
          <StaggerContainer>
            <motion.div variants={staggerItem} className="relative">
              {/* Before/After Comparison */}
              <div
                ref={sliderRef}
                className="relative aspect-video rounded-sm overflow-hidden bg-background shadow-xl mb-6 select-none"
              >
                {/* Before Image */}
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${currentItem.beforeImage})`,
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-primary/20 to-transparent" />
                  </div>
                </div>

                {/* After Image with Slider */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${currentItem.afterImage})`,
                    }}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize z-10"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    setIsDragging(true)
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                    <ChevronLeft className="w-4 h-4 text-white" />
                    <ChevronRight className="w-4 h-4 text-white -ml-1" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-primary/80 text-white px-4 py-2 rounded-sm text-sm font-medium backdrop-blur-sm">
                  Prima
                </div>
                <div className="absolute top-4 right-4 bg-primary/80 text-white px-4 py-2 rounded-sm text-sm font-medium backdrop-blur-sm">
                  Dopo
                </div>
              </div>

              {/* Description */}
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                  {currentItem.title}
                </h3>
                <p className="text-primary/70 mb-4 max-w-2xl mx-auto">
                  {currentItem.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background border border-primary/10 rounded-sm text-sm text-primary/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrev}
                  className="p-2 text-primary hover:text-accent transition-colors duration-200 hover:bg-background rounded-sm"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {beforeAfterItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index)
                        setSliderPosition(50)
                      }}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        index === activeIndex
                          ? 'w-8 bg-accent'
                          : 'w-2 bg-primary/30 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 text-primary hover:text-accent transition-colors duration-200 hover:bg-background rounded-sm"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
