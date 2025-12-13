import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          dark: '#0F0F0F',
          light: '#2C2C2C',
          lighter: '#404040',
          subtle: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#C9A96B',
          light: '#D4B888',
          lighter: '#E0C9A5',
          dark: '#B8965A',
          darker: '#A6854A',
        },
        background: {
          DEFAULT: '#F8F8F8',
          light: '#FFFFFF',
          warm: '#F5F3F0',
          cool: '#FAFAFA',
          subtle: '#F0F0F0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#FFFFFF',
          subtle: '#FAFAFA',
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'elegant': '0 2px 12px rgba(26, 26, 26, 0.08), 0 1px 3px rgba(26, 26, 26, 0.04)',
        'hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'accent': '0 4px 20px rgba(201, 169, 107, 0.2)',
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'var(--font-headline-alt)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        athene: ['var(--font-athene)', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
