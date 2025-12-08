# Documentazione Animazioni - G.I.M.S. Service

## Panoramica
Sistema di animazioni ispirato a edilturin.it, implementato con **Framer Motion** e **React Intersection Observer**. Tutte le animazioni utilizzano solo `transform` e `opacity` per performance ottimali.

---

## 🎬 Componenti Animazione Disponibili

### 1. **ScrollReveal** (`components/animations/ScrollReveal.tsx`)
Animazione base fade-in + slide quando l'elemento entra nel viewport.

**Props:**
- `delay`: ritardo animazione (default: 0)
- `direction`: direzione slide ('up', 'down', 'left', 'right')
- `className`: classi CSS aggiuntive

**Uso:**
```tsx
<ScrollReveal direction="left" delay={0.2}>
  <div>Contenuto animato</div>
</ScrollReveal>
```

---

### 2. **ParallaxScroll** (`components/animations/ParallaxScroll.tsx`)
Effetto parallax su scroll verticale. Usa solo `transform: translateY`.

**Props:**
- `speed`: moltiplicatore velocità (default: 0.5)
- `className`: classi CSS aggiuntive

**Uso:**
```tsx
<ParallaxScroll speed={0.15}>
  <img src="background.jpg" />
</ParallaxScroll>
```

---

### 3. **ScrollProgress** (`components/animations/ScrollProgress.tsx`)
Barra di progresso in alto alla pagina che indica lo scroll. Usa `transform: scaleX`.

**Uso:**
```tsx
<ScrollProgress /> // Nel layout principale
```

---

### 4. **StaggerContainer** (`components/animations/StaggerContainer.tsx`)
Container che anima i figli con effetto stagger sequenziale.

**Props:**
- `staggerDelay`: ritardo tra elementi (default: 0.1s)
- `className`: classi CSS aggiuntive

**Uso:**
```tsx
<StaggerContainer staggerDelay={0.15}>
  {items.map(item => <ItemCard key={item.id} />)}
</StaggerContainer>
```

---

### 5. **FadeInScale** (`components/animations/FadeInScale.tsx`)
Fade-in con scala per CTAs e bottoni.

**Props:**
- `scale`: scala iniziale (default: 0.95)
- `delay`: ritardo animazione
- `duration`: durata animazione (default: 0.6s)

**Uso:**
```tsx
<FadeInScale scale={0.95} delay={0.6}>
  <button>CTA Button</button>
</FadeInScale>
```

---

### 6. **CTASection** (`components/animations/CTASection.tsx`)
Animazione speciale per sezioni CTA che si attiva al 30-40% del viewport.

**Props:**
- `threshold`: soglia viewport (default: 0.3)
- `className`: classi CSS
- `id`: ID sezione

**Uso:**
```tsx
<CTASection id="contact" threshold={0.3}>
  <ContactForm />
</CTASection>
```

---

## 📐 Animazioni per Sezione

### **1. Hero Section**

**Animazioni implementate:**
- ✅ Titolo principale: fade-in + slide-up dal basso (y: 40px → 0)
- ✅ Parola accentata "precisione": fade-in ritardato (delay: 0.5s)
- ✅ Sottotitolo: fade-in + slide-up con stagger (delay: 0.3s)
- ✅ CTA buttons: scale-in (0.95 → 1) con ritardo sequenziale
- ✅ Background: parallax leggero (speed: 0.15)

**Timing:**
- Titolo: 0.8s duration, delay 0.1s
- Sottotitolo: 0.7s duration, delay 0.3s
- CTA 1: 0.5s duration, delay 0.6s
- CTA 2: 0.5s duration, delay 0.7s

**Hover effects:**
- CTA buttons: scale 1.02, shadow incremento
- Arrow icon: translateX +3px

---

### **2. Chi Siamo / About**

**Animazioni implementate:**
- ✅ Immagine: fade-in da destra (x: 50px → 0)
- ✅ Titolo: fade-in da sinistra (x: -30px → 0)
- ✅ Testo: fade-in da sinistra con stagger (delay: 0.15s)
- ✅ Statistiche: fade-in + scale (0.9 → 1) con stagger verticale
- ✅ Icone statistiche: rotazione da -10° con fade-in ritardato

**Timing:**
- Immagine: 0.7s duration
- Titolo: 0.6s duration
- Testo: 0.6s duration, delay 0.15s
- Stats: 0.5s duration, delay 0.4s + index * 0.1s

**Hover effects:**
- Immagine: scale 1.05
- Statistiche: scale 1.05, translateY -4px

---

### **3. Servizi / Metodo**

**Animazioni implementate:**
- ✅ Cards: stagger sequenziale con fade-in + slide-up
- ✅ Icone: rotazione animata al hover
- ✅ Cards: elevazione + scale al hover

**Timing:**
- Stagger delay: 0.1s tra cards
- Hover: spring animation (stiffness: 300, damping: 20)

**Hover effects:**
- Card: translateY -4px, scale 1.02, shadow incremento
- Icona: rotazione sequenziale [-10°, 10°, -10°, 0°], scale 1.1

---

### **4. Recensioni (Slider)**

**Animazioni implementate:**
- ✅ Slider automatico: cambio slide ogni 5 secondi
- ✅ Transizione orizzontale: slide da sinistra/destra (300px)
- ✅ Icona quote: scale-in con spring
- ✅ Stelle: fade-in sequenziale ritardato
- ✅ Frecce navigazione: translateX al hover nella direzione

**Timing:**
- Auto-advance: 5 secondi
- Transizione slide: spring (stiffness: 300, damping: 30)
- Stelle: delay 0.3s + index * 0.1s

**Hover effects:**
- Freccia sinistra: translateX -3px
- Freccia destra: translateX +3px
- Dot navigation: width animazione

---

### **5. Contatti / CTA Finale**

**Animazioni implementate:**
- ✅ Trigger al 30% viewport: fade-in background
- ✅ Contenuto: slide-up dal basso (y: 30px → 0)
- ✅ Header: fade-in + slide-up ritardato

**Timing:**
- Background fade: 0.8s duration
- Contenuto slide: 0.6s duration, delay 0.2s

---

### **6. Footer**

**Animazioni implementate:**
- ✅ Footer: fade-in + slide-up quando entra in viewport
- ✅ Link: fade-in sequenziale con stagger
- ✅ Hover link: underline animata da sinistra a destra
- ✅ Hover link: translateX +2px

**Timing:**
- Footer: 0.6s duration
- Link stagger: delay 0.1s + index * 0.05s
- Underline: 0.3s duration

**Hover effects:**
- Link: underline width 0 → 100%, translateX +2px

---

## 🎯 Best Practices Implementate

### **Performance**
- ✅ Solo `transform` e `opacity` per animazioni (no layout shifts)
- ✅ `will-change` implicito tramite Framer Motion
- ✅ `triggerOnce: true` per evitare re-animazioni
- ✅ GPU-accelerated transforms

### **Responsive**
- ✅ Animazioni più leggere su mobile
- ✅ Parallax ridotto/disabilitato su schermi piccoli
- ✅ Viewport margins per trigger anticipati

### **Accessibilità**
- ✅ `prefers-reduced-motion` rispettato (Framer Motion gestisce automaticamente)
- ✅ Animazioni non bloccanti per interazioni

### **Coerenza**
- ✅ Easing uniforme: `[0.22, 1, 0.36, 1]` (cubic-bezier)
- ✅ Durate standard: 0.4s - 0.8s
- ✅ Stagger delays: 0.1s - 0.15s

---

## 📝 Customizzazione

### Modificare velocità animazioni
```tsx
// In ScrollReveal.tsx
transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// Cambia duration per velocità diverse
```

### Modificare parallax intensity
```tsx
// In Hero.tsx
<ParallaxScroll speed={0.15}> // Riduci per meno movimento
```

### Modificare auto-advance slider
```tsx
// In Reviews.tsx
setInterval(() => {...}, 5000) // Cambia 5000 per intervallo diverso
```

---

## 🚀 Risultati

- ✅ Animazioni fluide e professionali
- ✅ Performance ottimizzate (60fps)
- ✅ Esperienza utente premium
- ✅ Codice modulare e riutilizzabile
- ✅ Mobile-friendly
- ✅ Accessibile

---

## 📚 Tecnologie Utilizzate

- **Framer Motion**: libreria animazioni React
- **React Intersection Observer**: trigger scroll-based
- **TypeScript**: type safety
- **Tailwind CSS**: styling utility-first

