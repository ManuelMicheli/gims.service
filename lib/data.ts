// Data structures for G.I.M.S. Service website
// Easily replaceable with real content

// Images for dual vertical scroll section
export interface InfiniteImage {
  src: string
  alt: string
}

// Hero section slideshow images - professional renovation project images
export const HERO_IMAGES: InfiniteImage[] = [
  { src: '/images/terrazzo-moderno-struttura-vetro.webp.jpg', alt: 'Terrazzo moderno con struttura in vetro - Ristrutturazione spazi esterni Milano' },
  { src: '/images/soggiorno-moderno-pavimenti-legno.webp.jpg', alt: 'Soggiorno moderno ristrutturato con pavimenti in legno - Interni eleganti Milano' },
  { src: '/images/installazione-pavimenti-legno.webp.jpg', alt: 'Installazione pavimenti in legno durante ristrutturazione - Lavori in corso Milano' },
  { src: '/images/imbiancatura-pareti-pavimenti-legno.webp.jpg.jpg', alt: 'Imbiancatura pareti e pavimenti in legno - Ristrutturazione completa Milano' },
  { src: '/images/recinzione-legno-lavori-esterni.webp.jpg', alt: 'Lavori esterni recinzione in legno - Ristrutturazione terrazzo Milano' },
]

// Legacy export for backward compatibility
export const heroMarqueeImages = HERO_IMAGES

// Horizontal marquee images - renovation detail images (first row - scrolls left)
export const horizontalMarqueeImages: InfiniteImage[] = [
  { src: '/images/0d0a1155-6be5-44a7-930b-ad1ca6c2beba.jpg', alt: 'Dettaglio ristrutturazione Milano - Lavori di qualità' },
  { src: '/images/7f8fe441-0f7e-4dd6-bf4a-59d023966520.jpg', alt: 'Dettaglio ristrutturazione Milano - Lavori eseguiti' },
  { src: '/images/d0affa3a-d7c8-4f5c-8edb-ccac1961f9d8.jpg', alt: 'Dettaglio ristrutturazione Milano - Qualità artigianale' },
  { src: '/images/ebc80799-ae77-4385-8bc4-c9612f7762c2.jpg', alt: 'Dettaglio ristrutturazione Milano - Trasformazione spazi' },
  { src: '/images/f61873bd-59d5-481d-bce0-67751c62b1d7.jpg', alt: 'Dettaglio ristrutturazione Milano - Progetto completato' },
  { src: '/images/5982973e-9973-46c8-8f99-478d10760c15.jpg', alt: 'Dettaglio ristrutturazione Milano - Finiture di qualità' },
  { src: '/images/5b4c008d-08c2-433d-86ae-1fcba80984e5.jpg', alt: 'Dettaglio ristrutturazione Milano - Progetto realizzato' },
  { src: '/images/78448fbf-f531-4d0b-9e57-cccc7d944734.jpg', alt: 'Dettaglio ristrutturazione Milano - Trasformazione completa' },
  { src: '/images/a129ce9f-dc35-4d41-a56b-432ab3da30c5.jpg', alt: 'Dettaglio ristrutturazione Milano - Lavori eseguiti con precisione' },
  { src: '/images/d9e27b30-83e5-4325-a353-52c8da95eb83.jpg', alt: 'Dettaglio ristrutturazione Milano - Qualità artigianale premium' },
  { src: '/images/4a0e014e-88a5-4d35-affc-2fef16cd78ee.jpg', alt: 'Dettaglio ristrutturazione Milano - Progetto completato con eccellenza' },
]

// Horizontal marquee images - second row (scrolls right, opposite direction)
export const horizontalMarqueeImagesRow2: InfiniteImage[] = [
  { src: '/images/12dc9512-b826-49be-9a94-f6bfdba2a998.jpg', alt: 'Dettaglio ristrutturazione Milano - Lavori eseguiti con precisione' },
  { src: '/images/5982973e-9973-46c8-8f99-478d10760c15.jpg', alt: 'Dettaglio ristrutturazione Milano - Finiture di qualità' },
  { src: '/images/5b4c008d-08c2-433d-86ae-1fcba80984e5.jpg', alt: 'Dettaglio ristrutturazione Milano - Progetto realizzato Milano' },
  { src: '/images/78448fbf-f531-4d0b-9e57-cccc7d944734.jpg', alt: 'Dettaglio ristrutturazione Milano - Trasformazione completa' },
  { src: '/images/8c139d39-4132-4d2d-ba1b-0dbdb8d8a871.jpg', alt: 'Dettaglio ristrutturazione Milano - Qualità artigianale premium' },
]

export const dualVerticalImages: InfiniteImage[] = [
  { src: '/images/terrazzo-moderno-struttura-vetro.webp.jpg', alt: 'Terrazzo moderno con struttura in vetro - Ristrutturazione spazi esterni Milano' },
  { src: '/images/soggiorno-moderno-pavimenti-legno.webp.jpg', alt: 'Soggiorno moderno ristrutturato con pavimenti in legno - Interni eleganti Milano' },
  { src: '/images/installazione-pavimenti-legno.webp.jpg', alt: 'Installazione pavimenti in legno durante ristrutturazione - Lavori in corso Milano' },
  { src: '/images/imbiancatura-pareti-pavimenti-legno.webp.jpg', alt: 'Imbiancatura pareti e pavimenti in legno - Ristrutturazione completa Milano' },
  { src: '/images/recinzione-legno-lavori-esterni.webp.jpg', alt: 'Lavori esterni recinzione in legno - Ristrutturazione terrazzo Milano' },
  { src: '/images/terrazzo-moderno-struttura-vetro.webp.jpg', alt: 'Terrazzo moderno con struttura in vetro - Ristrutturazione spazi esterni Milano' },
  { src: '/images/soggiorno-moderno-pavimenti-legno.webp.jpg', alt: 'Soggiorno moderno ristrutturato con pavimenti in legno - Interni eleganti Milano' },
  { src: '/images/installazione-pavimenti-legno.webp.jpg', alt: 'Installazione pavimenti in legno durante ristrutturazione - Lavori in corso Milano' },
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
    beforeImage: '/images/dopo.jpg',
    afterImage: '/images/prima.jpg',
    title: 'Ristrutturazione Bagno Completo',
    description: 'Trasformazione completa di un bagno anni \'80 in un ambiente moderno e funzionale, con piastrelle di design e sanitari all\'avanguardia.',
    tags: ['Bagno', 'Pavimenti', 'Rivestimenti'],
  },
  {
    id: '2',
    beforeImage: '/images/804002da-04f4-418d-997a-ed1728a9698b.jpg',
    afterImage: '/images/df187613-432f-4776-b510-1dfe30de7193.jpg',
    title: 'Trasformazione Completa',
    description: 'Ristrutturazione completa con interventi su tutti gli ambienti, dalla demolizione alla consegna finale.',
    tags: ['Ristrutturazione', 'Completa', 'Milano'],
  },
  {
    id: '3',
    beforeImage: '/images/dopo dopo.jpg',
    afterImage: '/images/prima prima.jpg',
    title: 'Ristrutturazione Professionale',
    description: 'Trasformazione completa di uno spazio con interventi su tutti gli ambienti, dalla progettazione alla consegna finale.',
    tags: ['Ristrutturazione', 'Completa', 'Milano'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Restyling Cucina',
    description: 'Trasformazione completa di una cucina con nuove piastrelle, spatolato decorativo e rivestimenti moderni.',
    image: '/images/cucina.jpg',
    tags: ['Cucina', 'Rivestimenti', 'Spatolati'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '2',
    title: 'Ristrutturazione Soggiorno con Pavimenti in Legno',
    description: 'Trasformazione di un soggiorno moderno con pavimenti in legno, cartongesso decorativo e illuminazione integrata.',
    image: '/images/soggiorno-moderno-pavimenti-legno.webp.jpg',
    tags: ['Soggiorno', 'Pavimenti', 'Legno'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '3',
    title: 'Ristrutturazione Interni',
    description: 'Restyling completo di ambienti interni con cartongesso, pavimenti e finiture eleganti.',
    image: '/images/unnamed (1).jpg',
    tags: ['Interni', 'Cartongesso', 'Pavimenti'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '4',
    title: 'Trasformazione Spazi Moderni',
    description: 'Modernizzazione completa di spazi residenziali con design contemporaneo e finiture di qualità.',
    image: '/images/ca1120c3-bfa2-4dc9-bd59-4aebbdba7510.jpg',
    tags: ['Modernizzazione', 'Design', 'Finiture'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '5',
    title: 'Imbiancatura e Pavimenti in Legno',
    description: 'Imbiancatura completa di interni con pavimenti in legno, prodotti di alta qualità e finiture perfette.',
    image: '/images/imbiancatura e pavi.jpg',
    tags: ['Imbiancatura', 'Pavimenti', 'Legno'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '6',
    title: 'Installazione Pavimenti in Legno',
    description: 'Posa professionale di pavimenti in legno con finiture di pregio e attenzione ai dettagli.',
    image: '/images/installazione-pavimenti-legno.webp.jpg',
    tags: ['Pavimenti', 'Legno', 'Installazione'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '7',
    title: 'Ristrutturazione Terrazzo Moderno',
    description: 'Trasformazione di un terrazzo con struttura in vetro e finiture moderne.',
    image: '/images/terrazzo-moderno-struttura-vetro.webp.jpg',
    tags: ['Terrazzo', 'Esterni', 'Vetro'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '8',
    title: 'Lavori Esterni e Recinzioni',
    description: 'Realizzazione di recinzioni in legno e lavori esterni con materiali di qualità.',
    image: '/images/recinzione-legno-lavori-esterni.webp.jpg',
    tags: ['Esterni', 'Recinzioni', 'Legno'],
    location: 'Milano',
    year: '2023',
  },
  {
    id: '9',
    title: 'Progetto Ristrutturazione Completa',
    description: 'Ristrutturazione completa di un immobile con interventi su tutti gli ambienti, dalla progettazione alla consegna finale.',
    image: '/images/4a0e014e-88a5-4d35-affc-2fef16cd78ee.jpg',
    tags: ['Ristrutturazione', 'Completa', 'Milano'],
    location: 'Milano',
    year: '2023',
  },
]

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Come chiedere un preventivo?',
    answer: 'Per richiedere un preventivo è sufficiente mettersi in contatto con noi attraverso i diversi canali disponibili: telefono, e‑mail, modulo di contatto sul sito o messaggistica istantanea. Saremo lieti di raccogliere le tue esigenze e fornirti una valutazione gratuita e trasparente.',
  },
  {
    id: '2',
    question: 'Quanto costa fare un preventivo?',
    answer: 'Il preventivo è completamente gratuito: lo realizziamo senza alcun impegno, per offrirti una valutazione chiara e trasparente dei lavori da eseguire.',
  },
  {
    id: '3',
    question: 'Quali tipi di pavimenti installate?',
    answer: 'Installiamo pavimenti in legno, laminato, gres porcellanato e vinilico, adattandoci alle esigenze del cliente.',
  },
  {
    id: '4',
    question: 'Offrite servizi di imbiancatura per interni ed esterni?',
    answer: 'Sì, realizziamo imbiancature professionali per ambienti interni ed esterni con finiture personalizzate.',
  },
  {
    id: '5',
    question: 'Come gestite la spazzatura?',
    answer: 'Durante i lavori ci occupiamo direttamente della raccolta e dello smaltimento dei materiali di risulta. Utilizziamo contenitori dedicati e seguiamo le normative locali per il conferimento dei rifiuti, garantendo ordine e pulizia in cantiere. Al termine dell\'intervento lasciamo sempre gli ambienti liberi da scarti e pronti all\'uso.',
  },
  {
    id: '6',
    question: 'Come gestite i lavori di idraulica?',
    answer: 'Ci occupiamo di riparazioni, manutenzioni e installazioni idrauliche seguendo procedure tecniche precise e conformi alle normative vigenti. Ogni intervento viene eseguito con analisi preliminare dell\'impianto per individuare guasti, perdite o inefficienze, utilizzo di materiali certificati (tubi multistrato, raccordi a pressare, guarnizioni e valvole conformi UNI/CE), strumentazione professionale per test di pressione, rilevamento perdite e verifica della portata, e installazioni su misura di reti idriche, scarichi, sanitari e sistemi di riscaldamento, con attenzione alla distribuzione ottimale e alla riduzione dei consumi. In ogni fase assicuriamo precisione, sicurezza e rispetto delle normative, offrendo soluzioni personalizzate che garantiscono affidabilità e risultati duraturi.',
  },
  {
    id: '7',
    question: 'Realizzate strutture in cartongesso su misura?',
    answer: 'Sì, ci occupiamo della progettazione e realizzazione di pareti, controsoffitti ed elementi decorativi in cartongesso, studiati su misura per ogni ambiente. Offriamo soluzioni personalizzate che uniscono funzionalità ed estetica, garantendo precisione nel montaggio e risultati di qualità.',
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
