import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie di G.I.M.S. Service',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-background-warm py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="bg-background rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Cookie Policy
          </h1>
          <div className="prose prose-lg max-w-none text-primary/80 space-y-6">
            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                Cosa sono i Cookie
              </h2>
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell&apos;utente quando visita un sito web.
                Vengono utilizzati per migliorare l&apos;esperienza di navigazione e fornire funzionalità personalizzate.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                Tipi di Cookie Utilizzati
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary mb-2">
                    Cookie Tecnici (Necessari)
                  </h3>
                  <p>
                    Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati.
                    Includono cookie di sessione e di sicurezza.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary mb-2">
                    Cookie di Analisi
                  </h3>
                  <p>
                    Utilizziamo Google Analytics per analizzare il traffico del sito e migliorare l&apos;esperienza utente.
                    Questi cookie possono essere disattivati tramite le impostazioni del browser o il banner di consenso.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                Gestione dei Cookie
              </h2>
              <p>
                Puoi gestire le preferenze dei cookie tramite:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Il banner di consenso che appare al primo accesso</li>
                <li>Le impostazioni del tuo browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Strumenti di terze parti per la gestione dei cookie</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                Cookie di Terze Parti
              </h2>
              <p>
                Utilizziamo servizi di terze parti che possono impostare cookie:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics</strong>: Analisi del traffico (se accettato)</li>
                <li><strong>Google Maps</strong>: Visualizzazione mappe</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                Durata dei Cookie
              </h2>
              <p>
                I cookie possono essere:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookie di sessione</strong>: Eliminati alla chiusura del browser</li>
                <li><strong>Cookie persistenti</strong>: Rimangono fino alla scadenza o alla cancellazione manuale</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                Contatti
              </h2>
              <p>
                Per domande sui cookie, contattare: info@gimsservice.it
              </p>
              <p className="mt-4 text-sm text-primary/60">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
