'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { smoothScrollTo } from '@/lib/utils'
import PremiumButton from '@/components/ui/PremiumButton'
import { AnimatedHeadline, AnimatedHighlightWord, AnimatedText } from '@/components/animations/TypographyAnimations'
import HeroSlideshow from '@/components/HeroSlideshow'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden lg:-mt-20">
      {/* Background Image - Static, no parallax */}
      <div className="absolute inset-0 z-0 bg-background-warm">
        <Image
          src="/bg/hero-gims.jpg"
          alt="Interni ristrutturati da G.I.M.S. Service - Ristrutturazioni Milano"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

      {/* Subtle Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_55%,_rgba(0,0,0,0.75)_100%)]" />

      {/* Content - Full width with lateral padding */}
      <div className="relative z-20 flex min-h-screen items-center w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
            {/* Text Content - Left column */}
            <div className="text-center lg:text-left space-y-8 sm:space-y-9 md:space-y-10 lg:space-y-12">
              {/* Main Headline */}
              <AnimatedHeadline 
                delay={0.1} 
                className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold leading-[1.1] text-white drop-shadow-lg"
              >
                Trasformiamo{' '}
                i tuoi spazi{' '}
                con{' '}
                <AnimatedHighlightWord>
                  <span className="italic">
                    precisione
                  </span>
                </AnimatedHighlightWord>
                {' '}
                e{' '}
                qualità
              </AnimatedHeadline>

              {/* Description */}
              <AnimatedText
                delay={0.4}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-100/90 leading-relaxed max-w-none lg:max-w-2xl mx-auto lg:mx-0 drop-shadow-md"
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
                className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-7 justify-center lg:justify-start pt-4 sm:pt-6"
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
                    variant="primary"
                  >
                    Guarda i lavori realizzati
                  </PremiumButton>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Slideshow - Right column, foreground layer */}
            <div className="w-full order-first lg:order-last relative z-30">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
