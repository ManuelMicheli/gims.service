import type { Metadata } from 'next'
import { companyInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy di G.I.M.S. Service - Ristrutturazioni Milano',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background-warm py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="bg-background rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-primary/80 space-y-6">
            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                1. Titolare del Trattamento
              </h2>
              <p>
                Il titolare del trattamento dei dati personali è:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{companyInfo.name}</strong></li>
                <li>{companyInfo.owner}</li>
                <li>{companyInfo.address}</li>
                <li>{companyInfo.city}</li>
                <li>Email: {companyInfo.email}</li>
                <li>Telefono: {companyInfo.phone}</li>
                <li>P.IVA: [da inserire]</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                2. Dati Raccolti
              </h2>
              <p>
                Raccogliamo i seguenti dati personali:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Indirizzo (se fornito)</li>
                <li>Dati di navigazione e cookie tecnici</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                3. Finalità del Trattamento
              </h2>
              <p>
                I dati personali vengono trattati per:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Eseguire sopralluoghi e fornire servizi</li>
                <li>Comunicazioni commerciali (con consenso)</li>
                <li>Adempimenti di legge e contabili</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                4. Base Giuridica
              </h2>
              <p>
                Il trattamento dei dati si basa su:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consenso dell&apos;interessato</li>
                <li>Esecuzione di un contratto</li>
                <li>Adempimento di obblighi di legge</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                5. Diritti dell&apos;Interessato
              </h2>
              <p>
                Ai sensi del GDPR, l&apos;utente ha diritto a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accesso ai propri dati personali</li>
                <li>Rettifica dei dati inesatti</li>
                <li>Cancellazione dei dati (&quot;diritto all&apos;oblio&quot;)</li>
                <li>Limitazione del trattamento</li>
                <li>Portabilità dei dati</li>
                <li>Opposizione al trattamento</li>
              </ul>
              <p className="mt-4">
                Per esercitare i propri diritti, contattare: {companyInfo.email}
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                6. Conservazione dei Dati
              </h2>
              <p>
                I dati personali vengono conservati per il tempo necessario alle finalità per cui sono stati raccolti,
                salvo obblighi di legge che impongono conservazioni più lunghe.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                7. Sicurezza
              </h2>
              <p>
                Adottiamo misure tecniche e organizzative appropriate per proteggere i dati personali da accesso non autorizzato,
                perdita, distruzione o alterazione.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold text-primary mt-8 mb-4">
                8. Modifiche
              </h2>
              <p>
                Questa privacy policy può essere modificata. La versione aggiornata sarà sempre disponibile su questa pagina.
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
