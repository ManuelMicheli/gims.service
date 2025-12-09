'use client'

/**
 * AcronymSection Component
 * 
 * Sezione minimale ed elegante che mostra l'acronimo G.IM.S.
 * - G = Giardino
 * - I = Imbiancatura
 * - M = Muratura
 * - S = Sanitari
 * 
 * Design pulito con lettere nere e parole corrispondenti sotto.
 */

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AcronymItem {
  letter: string
  word: string
}

const acronymItems: AcronymItem[] = [
  {
    letter: 'G',
    word: 'Giardino',
  },
  {
    letter: 'I',
    word: 'Imbiancatura',
  },
  {
    letter: 'M',
    word: 'Muratura',
  },
  {
    letter: 'S',
    word: 'Sanitari',
  },
]

export default function AcronymSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Varianti per le lettere dell'acronimo
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 + i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  // Varianti per le parole
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section
      ref={ref}
      id="acronym"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background-warm overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Acronym Display - Minimale ed elegante con proporzioni uniformi */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
          {acronymItems.map((item, index) => (
            <div key={item.letter} className="flex items-center">
              {/* Container lettera con larghezza fissa */}
              <motion.div
                custom={index}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-col items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32"
              >
                {/* Lettera - stessa dimensione per tutte */}
                <motion.div
                  custom={index}
                  variants={letterVariants}
                  className="mb-2 flex items-center justify-center h-12 sm:h-14 md:h-16 lg:h-20"
                >
                  <span className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-none">
                    {item.letter}
                  </span>
                </motion.div>

                {/* Parola sotto la lettera - stessa dimensione e stile per tutte */}
                <motion.div
                  custom={index}
                  variants={wordVariants}
                  className="mt-1 h-4 sm:h-5 md:h-6 flex items-center justify-center"
                >
                  <span className="font-body text-xs sm:text-sm md:text-base text-primary/70 uppercase tracking-wider text-center">
                    {item.word}
                  </span>
                </motion.div>
              </motion.div>

              {/* Separator Dot (non dopo l'ultimo elemento) */}
              {index < acronymItems.length - 1 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay: 0.2 + index * 0.1,
                            duration: 0.3,
                          },
                        }
                      : { opacity: 0, scale: 0 }
                  }
                  className="mx-1 sm:mx-2 md:mx-3 text-primary text-2xl sm:text-3xl md:text-4xl font-bold flex items-center"
                >
                  .
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
