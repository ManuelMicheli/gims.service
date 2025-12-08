# G.I.M.S. Service Website

Professional, fully responsive website for G.I.M.S. Service - a high-end renovation and finishing company led by Geometra José Giardino, based in Bareggio (MI), Italy.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Intersection Observer** - Scroll-based animations

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Elegant, minimal, high-end aesthetic
- ✅ Smooth scroll animations
- ✅ Interactive before/after slider
- ✅ Project gallery with modal view
- ✅ FAQ accordion
- ✅ Contact form with validation
- ✅ Client testimonials section
- ✅ Accessible and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── animations/         # Reusable animation components
│   ├── Header.tsx          # Sticky header with navigation
│   ├── Footer.tsx          # Footer with links and company info
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── About.tsx           # About section
│   ├── BeforeAfter.tsx     # Before/after slider
│   ├── Projects.tsx        # Projects gallery
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Reviews.tsx         # Client testimonials
│   └── Contact.tsx         # Contact form and info
├── lib/
│   ├── data.ts             # All content data (easily replaceable)
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Place images here
```

## Customization

### Updating Content

All content is stored in `lib/data.ts`:

- **Services**: Modify the `services` array
- **Projects**: Update the `projects` array
- **Before/After**: Edit the `beforeAfterItems` array
- **FAQ**: Change the `faqItems` array
- **Reviews**: Update the `reviews` array
- **Company Info**: Modify the `companyInfo` object

### Adding Images

1. Create a `public/images/` directory
2. Add your images with the following names (or update paths in `lib/data.ts`):
   - `hero-bg.jpg` - Hero section background
   - `jose-giardino.jpg` - About section portrait
   - `before-after-*-before.jpg` - Before images
   - `before-after-*-after.jpg` - After images
   - `project-*.jpg` - Project images

### Styling

- Colors: Edit `tailwind.config.ts` to customize the color palette
- Fonts: Font families are defined in `app/layout.tsx` and `app/globals.css`
- Animations: Modify animation components in `components/animations/`

### Contact Form

The contact form currently has a simulated submission. To connect it to your backend:

1. Create an API route at `app/api/contact/route.ts`
2. Update the form submission logic in `components/Contact.tsx`
3. Replace the setTimeout simulation with your actual API call

## Color Palette

- **Primary**: Deep charcoal (#2C2C2C)
- **Accent**: Desaturated gold (#C9A96B)
- **Background**: Warm near-white (#FAFAFA)

## Typography

- **Headings**: Poppins (geometric sans-serif)
- **Body**: Inter (clean sans-serif)

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

## License

© 2024 G.I.M.S. Service. All rights reserved.
