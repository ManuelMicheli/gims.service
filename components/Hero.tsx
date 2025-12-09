'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { smoothScrollTo } from '@/lib/utils'
import ParallaxScroll from '@/components/animations/ParallaxScroll'
import PremiumButton from '@/components/ui/PremiumButton'
import { AnimatedHeadline, AnimatedHighlightWord, AnimatedText } from '@/components/animations/TypographyAnimations'
import ColorInvertText from '@/components/animations/ColorInvertText'
import HeroSlideshow from '@/components/HeroSlideshow'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-background-warm lg:-mt-20">
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
            <div className="absolute inset-0 bg-primary/30 z-10" />
          </div>
        </ParallaxScroll>
      </motion.div>

      {/* Content - Full width with lateral padding */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content - Left column */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10">
              {/* Main Headline */}
              <AnimatedHeadline 
                delay={0.1} 
                className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold leading-tight"
              >
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

              {/* Description */}
              <AnimatedText
                delay={0.4}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Oltre 30 anni di esperienza nella ristrutturazione e finiture d&apos;interni.
                Soluzioni su misura, dall&apos;ispezione iniziale alla consegna finale.
                Il perfetto equilibrio tra qualità artigianale e investimento mirato.
              </AnimatedText>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center lg:justify-start pt-2 sm:pt-4"
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

            {/* Hero Slideshow - Right column */}
            <div className="w-full order-first lg:order-last">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
