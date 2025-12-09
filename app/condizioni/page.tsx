import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Condizioni d\'uso',
  description: 'Termini e condizioni d\'uso del sito G.I.M.S. Service',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CondizioniPage() {
  return (
    <div className="min-h-screen bg-background-warm py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="bg-background rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Condizioni d&apos;uso
          </h1>
          <div className="prose prose-lg max-w-none text-primary/80 space-y-6">
            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                1. Accettazione delle Condizioni
              </h2>
              <p>
                L&apos;accesso e l&apos;utilizzo di questo sito web implicano l&apos;accettazione delle presenti condizioni d&apos;uso.
                Se non si accettano queste condizioni, si prega di non utilizzare il sito.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                2. Utilizzo del Sito
              </h2>
              <p>
                Il sito è destinato esclusivamente a scopi informativi e per richiedere preventivi e servizi.
                È vietato utilizzare il sito per scopi illegali o non autorizzati.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                3. Proprietà Intellettuale
              </h2>
              <p>
                Tutti i contenuti del sito (testi, immagini, loghi, design) sono di proprietà di G.I.M.S. Service
                e sono protetti dalle leggi sul copyright. È vietata la riproduzione senza autorizzazione.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                4. Limitazione di Responsabilità
              </h2>
              <p>
                G.I.M.S. Service non si assume responsabilità per:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interruzioni o errori nel funzionamento del sito</li>
                <li>Danni derivanti dall&apos;utilizzo del sito</li>
                <li>Contenuti di siti esterni linkati</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                5. Modifiche
              </h2>
              <p>
                G.I.M.S. Service si riserva il diritto di modificare queste condizioni in qualsiasi momento.
                Le modifiche saranno pubblicate su questa pagina.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                6. Legge Applicabile
              </h2>
              <p>
                Queste condizioni sono regolate dalla legge italiana. Eventuali controversie saranno di competenza
                del tribunale di Milano.
              </p>
            </section>

            <p className="mt-8 text-sm text-primary/60">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
