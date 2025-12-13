'use client'

import { useState, FormEvent } from 'react'
import { companyInfo } from '@/lib/data'
import ScrollReveal from '@/components/animations/ScrollReveal'
import CTASection from '@/components/animations/CTASection'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

/**
 * Contact Section Component
 * 
 * Contact form and company information.
 * Form validation included. Replace form action with your backend endpoint.
 * 
 * To update company info, modify companyInfo object in lib/data.ts
 */
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipo: '',
    messaggio: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome è obbligatorio'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Il telefono è obbligatorio'
    }

    if (!formData.tipo.trim()) {
      newErrors.tipo = 'Seleziona il tipo di intervento'
    }

    if (!formData.messaggio.trim()) {
      newErrors.messaggio = 'Il messaggio è obbligatorio'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus('submitting')

    try {
      // EmailJS integration
      if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        // Dynamic import of EmailJS
        const emailjs = await import('@emailjs/browser')
        
        const templateParams = {
          from_name: formData.nome,
          from_email: formData.email,
          phone: formData.telefono,
          service_type: formData.tipo,
          message: formData.messaggio,
          to_email: companyInfo.email,
        }

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )

        // Track form submission in analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submission', {
            event_category: 'Contact',
            event_label: formData.tipo,
          })
        }

        setStatus('success')
        setFormData({ nome: '', email: '', telefono: '', tipo: '', messaggio: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        // Fallback: API route or alternative method
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setStatus('success')
          setFormData({ nome: '', email: '', telefono: '', tipo: '', messaggio: '' })
          setTimeout(() => setStatus('idle'), 5000)
        } else {
          setStatus('error')
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const interventionTypes = [
    'Imbiancatura',
    'Cartongesso',
    'Tapparelle',
    'Pavimenti e Rivestimenti',
    'Decorazioni',
    'Ristrutturazione Bagno',
    'Spatolati',
    'Manutenzione Stabili',
    'Altro',
  ]

  return (
    <CTASection
      id="contact"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-elegant"
      threshold={0.3}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Contattaci
            </h2>
            <p className="text-base sm:text-lg text-primary/70">
              Richiedi un sopralluogo gratuito e senza impegno
            </p>
          </motion.div>

          {/* 
            RESPONSIVE LAYOUT:
            - Mobile: Stack form and info vertically
            - Desktop (1024px+): Side by side
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-background-warm p-5 sm:p-6 md:p-8 rounded-sm border border-primary/5">
                <h3 className="font-headline text-2xl font-semibold text-primary mb-6">
                  Invia una Richiesta
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-primary mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border ${
                        errors.nome ? 'border-red-500' : 'border-primary/10'
                      } rounded-sm text-primary placeholder-primary/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200`}
                      placeholder="Il tuo nome"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border ${
                        errors.email ? 'border-red-500' : 'border-primary/10'
                      } rounded-sm text-primary placeholder-primary/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200`}
                      placeholder="la-tua-email@esempio.it"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-primary mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border ${
                        errors.telefono ? 'border-red-500' : 'border-primary/10'
                      } rounded-sm text-primary placeholder-primary/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200`}
                      placeholder="+39 123 456 7890"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.telefono}
                      </p>
                    )}
                  </div>

                  {/* Intervention Type */}
                  <div>
                    <label htmlFor="tipo" className="block text-sm font-medium text-primary mb-2">
                      Tipo di Intervento *
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border ${
                        errors.tipo ? 'border-red-500' : 'border-primary/10'
                      } rounded-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200`}
                    >
                      <option value="">Seleziona un intervento</option>
                      {interventionTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.tipo && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.tipo}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-primary mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-background border ${
                        errors.messaggio ? 'border-red-500' : 'border-primary/10'
                      } rounded-sm text-primary placeholder-primary/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 resize-none`}
                      placeholder="Descrivi il tuo progetto o le tue esigenze..."
                    />
                    {errors.messaggio && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.messaggio}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-primary-light transition-all duration-250 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>Invio in corso...</>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Messaggio inviato!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Invia Richiesta
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5" />
                      Si è verificato un errore. Riprova più tardi.
                    </motion.div>
                  )}
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary mb-6">
                    Informazioni di Contatto
                  </h3>
                  <p className="text-primary/80 mb-8 leading-relaxed">
                    Siamo disponibili per un sopralluogo gratuito e senza impegno. 
                    Contattaci per discutere del tuo progetto e ricevere un preventivo dettagliato.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-background-warm rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-250">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Telefono</div>
                      <div className="text-primary/70 group-hover:text-accent transition-colors duration-200">
                        {companyInfo.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-background-warm rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-250">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Email</div>
                      <div className="text-primary/70 group-hover:text-accent transition-colors duration-200">
                        {companyInfo.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={companyInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-background-warm rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-250">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Indirizzo</div>
                      <div className="text-primary/70 group-hover:text-accent transition-colors duration-200">
                        {companyInfo.address}
                        <br />
                        {companyInfo.city}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <div className="aspect-video bg-background-warm rounded-sm border border-primary/10 overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.123456789!2d9.0!3d45.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzAwLjAiTiA5wrAwMCcwMC4wIkU!5e0!3m2!1sit!2sit!4v1234567890`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mappa - G.I.M.S. Service"
                    />
                    {/* Alternative: Replace iframe with a placeholder div and integrate Google Maps API later */}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </CTASection>
  )
}
