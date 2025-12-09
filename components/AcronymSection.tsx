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
        <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 overflow-x-auto">
          {acronymItems.map((item, index) => (
            <div key={item.letter} className="flex items-center flex-shrink-0">
              {/* Container lettera con larghezza fissa */}
              <motion.div
                custom={index}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-col items-center justify-center w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32"
              >
                {/* Lettera - stessa dimensione per tutte */}
                <motion.div
                  custom={index}
                  variants={letterVariants}
                  className="mb-1 sm:mb-2 flex items-center justify-center h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20"
                >
                  <span className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-none">
                    {item.letter}
                  </span>
                </motion.div>

                {/* Parola sotto la lettera - stessa dimensione e stile per tutte */}
                <motion.div
                  custom={index}
                  variants={wordVariants}
                  className="mt-0.5 sm:mt-1 h-3 sm:h-4 md:h-5 lg:h-6 flex items-center justify-center"
                >
                  <span className="font-body text-[10px] sm:text-xs md:text-sm lg:text-base text-primary/70 uppercase tracking-wider text-center whitespace-nowrap">
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
                  className="mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center flex-shrink-0"
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
