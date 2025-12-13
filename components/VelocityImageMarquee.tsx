'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import Image from 'next/image'
import { InfiniteImage } from '@/lib/data'

interface VelocityImageMarqueeProps {
  images: InfiniteImage[]
  baseVelocity?: number
  imageWidth?: number
  gap?: number
  className?: string
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export default function VelocityImageMarquee({
  images,
  baseVelocity = 50,
  imageWidth = 320,
  gap = 20,
  className = '',
}: VelocityImageMarqueeProps) {
  // Filter out aweawe.jpg explicitly
  const filteredImages = images.filter(
    (img) => !img.src.includes('aweawe')
  )

  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const [repetitions, setRepetitions] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Calculate single set width using filtered images
  const singleSetWidth = (imageWidth + gap) * filteredImages.length

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        // Ensure we have enough repetitions to cover viewport + buffer
        const newRepetitions = Math.ceil((containerWidth * 3) / singleSetWidth) + 2
        setRepetitions(Math.max(4, newRepetitions))
      }
    }

    calculateRepetitions()
    window.addEventListener('resize', calculateRepetitions)
    return () => window.removeEventListener('resize', calculateRepetitions)
  }, [filteredImages.length, imageWidth, gap, singleSetWidth])

  // Use single set width for wrapping to create seamless infinite loop
  const x = useTransform(
    baseX,
    (v) => `${wrap(-singleSetWidth, 0, v)}px`
  )

  const directionFactor = React.useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    // Let baseX go beyond bounds, useTransform with wrap will handle the looping
    baseX.set(baseX.get() + moveBy)
  })

  if (filteredImages.length === 0) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      <motion.div
        ref={contentRef}
        className="flex"
        style={{ x }}
      >
        {Array.from({ length: repetitions }).map((_, repIndex) =>
          filteredImages.map((image, imgIndex) => (
            <div
              key={`${image.src}-${repIndex}-${imgIndex}`}
              className="relative flex-shrink-0 overflow-hidden bg-background-warm"
              style={{
                width: `${imageWidth}px`,
                height: `${imageWidth * 0.75}px`,
                marginRight: `${gap}px`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1200px) 320px, 320px"
                quality={85}
              />
            </div>
          ))
        )}
      </motion.div>
    </div>
  )
}
