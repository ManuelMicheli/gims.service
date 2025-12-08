'use client'

import { useState } from 'react'
import { projects } from '@/lib/data'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer, { staggerItem } from '@/components/animations/StaggerContainer'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Calendar } from 'lucide-react'

/**
 * Projects/Gallery Section Component
 * 
 * Displays a grid of project cards with images and details.
 * Click on a card to open a modal with more information.
 * 
 * To update projects, modify the projects array in lib/data.ts
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Progetti Realizzati
            </h2>
            <p className="text-base sm:text-lg text-primary/70">
              Alcuni dei nostri lavori più recenti
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        {/* 
          RESPONSIVE GRID:
          - Mobile: 1 column
          - Tablet (768px+): 2 columns
          - Desktop (1024px+): 3 columns
        */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-background-warm cursor-pointer"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-headline text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-sm text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-background-light rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 text-primary hover:text-accent transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="aspect-video bg-background-warm">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${selectedProject.image})`,
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-headline text-3xl font-bold text-primary mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-primary/80 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background border border-primary/10 rounded-sm text-sm text-primary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(selectedProject.location || selectedProject.year) && (
                    <div className="flex flex-wrap gap-6 text-sm text-primary/60 border-t border-primary/10 pt-6">
                      {selectedProject.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedProject.location}</span>
                        </div>
                      )}
                      {selectedProject.year && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedProject.year}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
