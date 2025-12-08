// Data structures for G.I.M.S. Service website
// Easily replaceable with real content

// Images for dual vertical scroll section
export interface InfiniteImage {
  src: string
  alt: string
}

export const dualVerticalImages: InfiniteImage[] = [
  { src: '/images/project-1.jpg', alt: 'Ristrutturazione moderna' },
  { src: '/images/project-2.jpg', alt: 'Interni eleganti' },
  { src: '/images/project-3.jpg', alt: 'Design contemporaneo' },
  { src: '/images/project-4.jpg', alt: 'Finiture di pregio' },
  { src: '/images/project-5.jpg', alt: 'Spazi rinnovati' },
  { src: '/images/project-6.jpg', alt: 'Trasformazione completa' },
  { src: '/images/before-after-1-after.jpg', alt: 'Prima e dopo - Ristrutturazione completa' },
  { src: '/images/before-after-2-after.jpg', alt: 'Prima e dopo - Bagno moderno' },
]

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface BeforeAfterItem {
  id: string
  beforeImage: string
  afterImage: string
  title: string
  description: string
  tags: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  location?: string
  year?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface Review {
  id: string
  name: string
  quote: string
  workType: string
  rating: number
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Imbiancatura',
    description: 'Riverniciatura di interni ed esterni con prodotti di alta qualità, garantendo finiture perfette e durature nel tempo.',
    icon: 'Paintbrush',
  },
  {
    id: '2',
    title: 'Cartongesso',
    description: 'Realizzazione di controsoffitti, pareti divisorie e decorazioni su misura per ottimizzare gli spazi e migliorare l\'isolamento acustico.',
    icon: 'Layers',
  },
  {
    id: '3',
    title: 'Tapparelle',
    description: 'Installazione e manutenzione di tapparelle di ogni tipo, con materiali certificati e meccanismi all\'avanguardia per massima efficienza.',
    icon: 'Blinds',
  },
  {
    id: '4',
    title: 'Pavimenti e Rivestimenti',
    description: 'Posa professionale di ceramiche, parquet, laminati e rivestimenti di design per interni e spazi esterni.',
    icon: 'Square',
  },
  {
    id: '5',
    title: 'Decorazioni',
    description: 'Rivestimenti decorativi, spatolati, finiture artistiche e dettagli personalizzati che valorizzano ogni ambiente.',
    icon: 'Palette',
  },
  {
    id: '6',
    title: 'Ristrutturazione Bagni',
    description: 'Progettazione e realizzazione completa di bagni funzionali ed eleganti, dalla demolizione alla consegna chiavi in mano.',
    icon: 'Droplet',
  },
  {
    id: '7',
    title: 'Spatolati',
    description: 'Rivestimenti a spatola per pareti interne ed esterne, con finiture decorative che donano carattere e raffinatezza agli ambienti.',
    icon: 'Brush',
  },
  {
    id: '8',
    title: 'Manutenzione Stabili',
    description: 'Servizi di manutenzione ordinaria e straordinaria per edifici residenziali e commerciali, con interventi tempestivi e professionali.',
    icon: 'Building',
  },
]

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: '1',
    beforeImage: '/images/before-after-1-before.jpg',
    afterImage: '/images/before-after-1-after.jpg',
    title: 'Ristrutturazione Bagno Completo',
    description: 'Trasformazione completa di un bagno anni \'80 in un ambiente moderno e funzionale, con piastrelle di design e sanitari all\'avanguardia.',
    tags: ['Bagno', 'Pavimenti', 'Rivestimenti'],
  },
  {
    id: '2',
    beforeImage: '/images/before-after-2-before.jpg',
    afterImage: '/images/before-after-2-after.jpg',
    title: 'Ristrutturazione Appartamento',
    description: 'Rinnovamento completo di un appartamento a Milano: cartongesso, imbiancatura e nuova pavimentazione per un risultato contemporaneo.',
    tags: ['Appartamento', 'Cartongesso', 'Pavimenti'],
  },
  {
    id: '3',
    beforeImage: '/images/before-after-3-before.jpg',
    afterImage: '/images/before-after-3-after.jpg',
    title: 'Restyling Ufficio',
    description: 'Modernizzazione di uno spazio ufficio con controsoffitti in cartongesso, nuova illuminazione e finiture di qualità professionale.',
    tags: ['Ufficio', 'Cartongesso', 'Imbiancatura'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ristrutturazione Appartamento a Milano',
    description: 'Completa ristrutturazione di un appartamento di 120 mq con interventi su tutti gli ambienti.',
    image: '/images/project-1.jpg',
    tags: ['Bagno', 'Cartongesso', 'Pavimenti'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '2',
    title: 'Ristrutturazione Villa a Bareggio',
    description: 'Restyling completo di una villa unifamiliare con attenzione ai dettagli e finiture di pregio.',
    image: '/images/project-2.jpg',
    tags: ['Spatolati', 'Tapparelle', 'Rivestimenti'],
    location: 'Bareggio',
    year: '2023',
  },
  {
    id: '3',
    title: 'Nuovo Bagno Padronale',
    description: 'Realizzazione di un bagno padronale moderno con doccia walk-in e finiture di design.',
    image: '/images/project-3.jpg',
    tags: ['Bagno', 'Rivestimenti', 'Impianti'],
    location: 'Cornaredo',
    year: '2022',
  },
  {
    id: '4',
    title: 'Ristrutturazione Negozio',
    description: 'Rinnovamento completo di uno spazio commerciale con cartongesso decorativo e illuminazione professionale.',
    image: '/images/project-4.jpg',
    tags: ['Cartongesso', 'Imbiancatura', 'Illuminazione'],
    location: 'Rho',
    year: '2022',
  },
  {
    id: '5',
    title: 'Appartamento Moderno',
    description: 'Ristrutturazione di un appartamento con open space, cartongesso e pavimenti in parquet.',
    image: '/images/project-5.jpg',
    tags: ['Cartongesso', 'Pavimenti', 'Decorazioni'],
    location: 'Milano',
    year: '2022',
  },
  {
    id: '6',
    title: 'Restyling Cucina',
    description: 'Trasformazione di una cucina con nuove piastrelle, spatolato decorativo e rivestimenti.',
    image: '/images/project-6.jpg',
    tags: ['Cucina', 'Rivestimenti', 'Spatolati'],
    location: 'Bareggio',
    year: '2021',
  },
]

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Quali sono le tempistiche tipiche per una ristrutturazione?',
    answer: 'Le tempistiche variano in base all\'ampiezza dell\'intervento. Un bagno completo richiede generalmente 3-4 settimane, mentre una ristrutturazione completa di un appartamento può richiedere 2-3 mesi. Dopo il sopralluogo gratuito, forniamo sempre un preventivo dettagliato con tempi di esecuzione precisi.',
  },
  {
    id: '2',
    question: 'Come funziona il sopralluogo?',
    answer: 'Il sopralluogo è completamente gratuito e senza impegno. Durante la visita analizziamo gli spazi, discutiamo le vostre esigenze e forniamo consigli professionali. Segue un preventivo dettagliato entro 7-10 giorni lavorativi, con tutte le voci di costo trasparenti.',
  },
  {
    id: '3',
    question: 'Che materiali utilizzate e sono certificati?',
    answer: 'Utilizziamo esclusivamente materiali certificati e di alta qualità, selezionati in base alle specifiche esigenze del progetto. Collaboriamo con fornitori affidabili e garantiamo sempre la tracciabilità dei materiali utilizzati, con certificazioni CE e normative di sicurezza.',
  },
  {
    id: '4',
    question: 'Gestite anche gli impianti (elettrico, idraulico, serramenti)?',
    answer: 'Sì, coordiniamo tutto il processo di ristrutturazione. Lavoriamo con partner qualificati e certificati per impianti elettrici, idraulici, serramenti e climatizzazione. Offriamo un servizio completo e coordinato, dalla progettazione alla consegna finale.',
  },
  {
    id: '5',
    question: 'Fornite garanzia sui lavori?',
    answer: 'Sì, garantiamo tutti i lavori eseguiti. La durata della garanzia varia in base al tipo di intervento (solitamente 2-5 anni) ed è sempre specificata nel preventivo. Siamo disponibili per interventi di manutenzione e assistenza post-consegna.',
  },
  {
    id: '6',
    question: 'Lavorate anche su piccoli interventi?',
    answer: 'Certamente. Oltre alle grandi ristrutturazioni, ci occupiamo anche di interventi più piccoli come imbiancature, riparazioni, sostituzioni di tapparelle o lavori di manutenzione. Valutiamo ogni richiesta con la stessa professionalità e attenzione.',
  },
]

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Marco R.',
    quote: 'Professionalità e precisione eccezionali. Hanno ristrutturato completamente il nostro bagno e il risultato supera ogni aspettativa. Consigliatissimi!',
    workType: 'Ristrutturazione bagno completo',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sara M.',
    quote: 'Ottima esperienza dalla consulenza iniziale alla consegna. Il Geometra Giardino è stato sempre disponibile e trasparente su tempi e costi. Lavoro impeccabile.',
    workType: 'Ristrutturazione appartamento',
    rating: 5,
  },
  {
    id: '3',
    name: 'Giuseppe B.',
    quote: 'Oltre 30 anni di esperienza si sentono: ogni dettaglio curato, materiali di qualità e un team coordinato perfettamente. Rifaremmo la scelta.',
    workType: 'Ristrutturazione villa',
    rating: 5,
  },
  {
    id: '4',
    name: 'Laura F.',
    quote: 'Abbiamo affidato loro la ristrutturazione del nostro ufficio e siamo rimasti molto soddisfatti. Puntuali, precisi e con un ottimo rapporto qualità-prezzo.',
    workType: 'Ristrutturazione ufficio',
    rating: 5,
  },
  {
    id: '5',
    name: 'Alessandro T.',
    quote: 'Servizio completo: hanno gestito tutto, dagli impianti alle finiture. Zero stress per noi, risultato finale bellissimo. Professionisti veri.',
    workType: 'Ristrutturazione completa',
    rating: 5,
  },
]

export const companyInfo = {
  name: 'G.I.M.S. Service',
  owner: 'Geometra José Giardino',
  address: 'Via Primo Maggio 21',
  city: '20008 Bareggio (MI)',
  country: 'Italia',
  phone: '+39 347 800 4971',
  email: 'info@gimsservice.it',
  googleMapsUrl: 'https://maps.google.com/?q=Via+Primo+Maggio+21,+20008+Bareggio+MI',
}
