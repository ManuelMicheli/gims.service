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
          DEFAULT: '#2C2C2C',
          dark: '#1A1A1A',
          light: '#404040',
        },
        accent: {
          DEFAULT: '#C9A96B',
          light: '#D4B888',
          dark: '#B8965A',
        },
        background: {
          DEFAULT: '#FAFAFA',
          light: '#FFFFFF',
          warm: '#F7F5F3',
        },
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
      },
    },
  },
  plugins: [],
}
export default config
