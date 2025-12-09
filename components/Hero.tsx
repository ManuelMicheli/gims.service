'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { smoothScrollTo } from '@/lib/utils'
import ParallaxScroll from '@/components/animations/ParallaxScroll'
import PremiumButton from '@/components/ui/PremiumButton'
import { AnimatedHeadline, AnimatedHighlightWord, AnimatedText } from '@/components/animations/TypographyAnimations'
import ColorInvertText from '@/components/animations/ColorInvertText'
import VerticalImageMarquee from '@/components/VerticalImageMarquee'
import { heroMarqueeImages } from '@/lib/data'

/**
 * Hero Section Component
 * 
 * Premium hero section with elegant typography and smooth animations.
 * - Serif headline with highlighted word animation
 * - Fade-in background on load
 * - Staggered text and CTA appearance
 * - Vertical infinite-scroll marquee of renovation project images
 * 
 * REPLACE PLACEHOLDER IMAGES:
 * - Update heroMarqueeImages in lib/data.ts with real project images
 * - Images should be large, high-quality renovation project photos
 * - Ensure images are optimized (under 100KB, .webp or .avif format)
 * - Use descriptive, SEO-friendly alt text with localized keywords (e.g., "ristrutturazione cucina Milano")
 * 
 * To update content, modify the text strings below.
 */

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[75vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-background-warm lg:-mt-20">
      {/* Background - Fade-in on load */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <ParallaxScroll speed={0.15} className="w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/hero-bg.jpg.jpeg"
              alt="Sfondo hero G.I.M.S. Service - Ristrutturazioni Milano"
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-primary/30 z-10" />
          </div>
        </ParallaxScroll>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-14 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content - Left side on desktop, centered on mobile */}
          <div className="text-center lg:text-left">
            {/* Main Headline - Fade-in + translateY */}
            <AnimatedHeadline delay={0.1} className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2 sm:px-2">
              <ColorInvertText>Trasformiamo</ColorInvertText>{' '}
              <ColorInvertText>i tuoi spazi</ColorInvertText>{' '}
              <ColorInvertText>con</ColorInvertText>{' '}
              <AnimatedHighlightWord>
                <ColorInvertText className="italic">
                  precisione
                </ColorInvertText>
              </AnimatedHighlightWord>
              {' '}
              <ColorInvertText>e</ColorInvertText>{' '}
              <ColorInvertText>qualità</ColorInvertText>
            </AnimatedHeadline>

          {/* Description - Staggered appearance */}
          <AnimatedText
            delay={0.4}
            className="text-sm sm:text-base md:text-lg text-primary/80 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-2"
          >
              Oltre 30 anni di esperienza nella ristrutturazione e finiture d&apos;interni.
              Soluzioni su misura, dall&apos;ispezione iniziale alla consegna finale.
              Il perfetto equilibrio tra qualità artigianale e investimento mirato.
            </AnimatedText>

            {/* CTA Buttons - Staggered with 0.1s delay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <PremiumButton
                  onClick={() => smoothScrollTo('contact')}
                  variant="primary"
                >
                  Richiedi un sopralluogo
                </PremiumButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
              >
                <PremiumButton
                  onClick={() => smoothScrollTo('before-after')}
                  variant="secondary"
                >
                  Guarda i lavori realizzati
                </PremiumButton>
              </motion.div>
            </motion.div>
          </div>

          {/* Vertical Image Marquee - Right side on desktop, below text on mobile */}
          <div className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] mt-6 sm:mt-8 lg:mt-0">
            <VerticalImageMarquee
              images={heroMarqueeImages}
              speed={25}
              imageHeight={280}
              gap={12}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
