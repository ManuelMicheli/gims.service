'use client'

import { motion } from 'framer-motion'
import { smoothScrollTo } from '@/lib/utils'
import ParallaxScroll from '@/components/animations/ParallaxScroll'
import PremiumButton from '@/components/ui/PremiumButton'
import { AnimatedHeadline, AnimatedHighlightWord, AnimatedText } from '@/components/animations/TypographyAnimations'
import ColorInvertText from '@/components/animations/ColorInvertText'

/**
 * Hero Section Component
 * 
 * Premium hero section with elegant typography and smooth animations.
 * - Serif headline with highlighted word animation
 * - Fade-in background on load
 * - Staggered text and CTA appearance
 * 
 * To update content, modify the text strings below.
 */

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-background-warm">
      {/* Background - Fade-in on load */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <ParallaxScroll speed={0.15} className="w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat min-h-[120%]"
            style={{
              backgroundImage: 'url(/images/hero-bg.jpg.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-primary/30 z-10" />
          </div>
        </ParallaxScroll>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content - Centered */}
          <div>
            {/* Main Headline - Fade-in + translateY */}
            <AnimatedHeadline delay={0.1} className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
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
            className="text-sm sm:text-base md:text-lg text-primary/80 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
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
        </div>
      </div>
    </section>
  )
}
