# Deploy Instructions - G.I.M.S. Service Website

## Repository Git inizializzato ✅
Il repository locale è stato inizializzato e il primo commit è stato creato.

## Deploy su GitHub

### 1. Crea un nuovo repository su GitHub
1. Vai su https://github.com/new
2. Nome repository: `gims-service` (o un nome a tua scelta)
3. Non inizializzare con README, .gitignore o license (già presenti)
4. Clicca "Create repository"

### 2. Collega il repository locale a GitHub
```bash
git remote add origin https://github.com/TUO_USERNAME/gims-service.git
git branch -M main
git push -u origin main
```

Sostituisci `TUO_USERNAME` con il tuo username GitHub.

## Deploy su Vercel

### Opzione 1: Deploy via GitHub (Raccomandato)
1. Vai su https://vercel.com/new
2. Connetti il tuo account GitHub
3. Seleziona il repository `gims-service`
4. Vercel rileverà automaticamente Next.js
5. Clicca "Deploy"
6. Il sito sarà live in pochi minuti!

### Opzione 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Configurazione Vercel
- **Framework Preset**: Next.js (auto-detectato)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

## Note importanti

### Font ATHENE
Assicurati di avere i file del font ATHENE in `/public/fonts/`:
- `ATHENE-Regular.woff2` o `.woff`
- `ATHENE-Italic.woff2` o `.woff`
- `ATHENE-Bold.woff2` (opzionale)

Se i file hanno nomi diversi, modifica `app/globals.css` di conseguenza.

### Immagini
Assicurati che tutte le immagini siano presenti in `/public/images/`:
- `hero-bg.jpg.jpeg`
- `project-*.jpg`
- `before-after-*.jpg`
- `jose-giardino.jpg`

### Variabili d'ambiente
Attualmente non sono necessarie variabili d'ambiente per questo progetto.

## Build Status
✅ Build locale completata con successo
✅ TypeScript: nessun errore
✅ Linter: nessun errore

## URL dopo il deploy
Dopo il deploy, Vercel fornirà un URL tipo:
- `https://gims-service.vercel.app`
- Puoi aggiungere un dominio personalizzato dalle impostazioni Vercel

