import Projects from '@/components/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Progetti Realizzati | G.I.M.S. Service',
  description: 'Scopri i nostri progetti di ristrutturazione completati a Milano e dintorni. Trasformazioni di interni, bagni, cucine e spazi residenziali.',
  keywords: 'progetti ristrutturazione Milano, lavori completati, portfolio ristrutturazioni, case history Milano',
  openGraph: {
    title: 'Progetti Realizzati | G.I.M.S. Service',
    description: 'Scopri i nostri progetti di ristrutturazione completati a Milano e dintorni.',
    type: 'website',
  },
}

export default function ProgettiPage() {
  return (
    <main>
      <Projects />
    </main>
  )
}
