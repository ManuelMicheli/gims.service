'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/animations/ScrollReveal'
import AnimatedCounter from '@/components/animations/AnimatedCounter'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Building2 } from 'lucide-react'

/**
 * About Section Component
 * 
 * Displays company information, owner portrait, and key numbers.
 * 
 * To update content, modify the text and stats below.
 * Replace the portrait image path with actual image.
 */
const stats = [
  { icon: Award, value: '+30', label: 'Anni di Esperienza' },
  { icon: Building2, value: '500+', label: 'Progetti Completati' },
  { icon: Users, value: '95%', label: 'Clienti Soddisfatti' },
]

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl">
        {/* 
          RESPONSIVE LAYOUT:
          - Mobile (< 640px): Stack vertically, image above text, full width
          - Tablet (640px - 1024px): Stack vertically, larger spacing
          - Desktop (1024px+): Side by side (image left, text right)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Image - Fade-in from right on desktop, from bottom on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.7, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5] rounded-sm overflow-hidden bg-background-warm shadow-lg mx-auto max-w-md lg:max-w-none"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/8cbb728f-f039-47a9-8131-56a991915218.jpg"
                alt="Geometra José Giardino - Fondatore G.I.M.S. Service"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                quality={90}
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            </motion.div>
          </motion.div>

          {/* Content - Fade-in from left on desktop, from bottom on mobile */}
          <div className="w-full">
            <motion.h2
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary mb-4 sm:mb-5 md:mb-6 text-center lg:text-left"
            >
              Chi Siamo
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed mb-6 sm:mb-8"
            >
              <div>
                <h3 className="font-headline text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-3 text-center lg:text-left">
                  Geometra José Giardino: Visione e Affidabilità
                </h3>
              </div>
              
              <p className="text-center lg:text-left">
                Il <strong className="text-primary">Geometra José Giardino</strong> è il fondatore e guida di <strong className="text-primary">G.I.M.S. Service</strong>, incarnando la massima esperienza nel settore delle ristrutturazioni e finiture d&apos;interni.
              </p>
              
              <p className="text-center lg:text-left">
                Con una carriera che si estende per oltre trent&apos;anni, il Geometra Giardino è rinomato per la sua meticolosa precisione e l&apos;approccio orientato alla soluzione. La sua profonda conoscenza tecnica è il pilastro della metodologia G.I.M.S. Service, garantendo che ogni progetto, dalla pianificazione iniziale al coordinamento finale dei partner specializzati, sia eseguito con rigore professionale e la massima trasparenza.
              </p>
              
              <p className="text-center lg:text-left">
                Sotto la sua direzione, G.I.M.S. Service offre la certezza di un risultato che non solo soddisfa, ma supera le aspettative in termini di <strong className="text-primary">qualità</strong>, <strong className="text-primary">funzionalità</strong> e <strong className="text-primary">durabilità</strong> nel tempo.
              </p>
            </motion.div>

            {/* Key Numbers - Stagger animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 border-t border-primary/10">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                        type: 'spring',
                        stiffness: 100
                      }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center cursor-default"
                    >
                      <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent mx-auto mb-1 sm:mb-2" strokeWidth={1.5} />
                      </motion.div>
                      <div className="font-headline text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">
                        <AnimatedCounter
                          value={stat.value}
                          prefix={stat.value.includes('+') ? '+' : ''}
                          suffix={stat.value.includes('%') ? '%' : stat.value.includes('+') ? stat.value.split('+')[1].split(/\d/)[0] : ''}
                          duration={2.5}
                        />
                      </div>
                      <div className="text-[10px] sm:text-xs text-primary/60 uppercase tracking-wider px-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
