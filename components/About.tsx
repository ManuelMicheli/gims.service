'use client'

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
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* 
          RESPONSIVE LAYOUT:
          - Mobile: Stack vertically (image above text)
          - Desktop (1024px+): Side by side (image left, text right)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image - Fade-in from right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.7, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden bg-background-warm"
          >
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/jose-giardino.jpg)',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              {/* Placeholder gradient */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
            </motion.div>
          </motion.div>

          {/* Content - Fade-in from left with stagger */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4 sm:mb-6"
            >
              Chi Siamo
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.6, 
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="space-y-5 text-primary/80 leading-relaxed mb-8"
            >
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary mb-3">
                  Geometra José Giardino: Visione e Affidabilità
                </h3>
              </div>
              
              <p>
                Il <strong className="text-primary">Geometra José Giardino</strong> è il fondatore e guida di <strong className="text-primary">G.I.M.S. Service</strong>, incarnando la massima esperienza nel settore delle ristrutturazioni e finiture d&apos;interni.
              </p>
              
              <p>
                Con una carriera che si estende per oltre trent&apos;anni, il Geometra Giardino è rinomato per la sua meticolosa precisione e l&apos;approccio orientato alla soluzione. La sua profonda conoscenza tecnica è il pilastro della metodologia G.I.M.S. Service, garantendo che ogni progetto, dalla pianificazione iniziale al coordinamento finale dei partner specializzati, sia eseguito con rigore professionale e la massima trasparenza.
              </p>
              
              <p>
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
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/10">
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
                        <Icon className="w-8 h-8 text-accent mx-auto mb-2" strokeWidth={1.5} />
                      </motion.div>
                      <div className="font-headline text-2xl lg:text-3xl font-bold text-primary mb-1">
                        <AnimatedCounter
                          value={stat.value}
                          prefix={stat.value.includes('+') ? '+' : ''}
                          suffix={stat.value.includes('%') ? '%' : stat.value.includes('+') ? stat.value.split('+')[1].split(/\d/)[0] : ''}
                          duration={2.5}
                        />
                      </div>
                      <div className="text-xs text-primary/60 uppercase tracking-wider">
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
