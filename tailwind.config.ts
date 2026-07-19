import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#EDE7DA',      // ivory — primary text on dark
        ink: '#15180F',         // near-black — dark surfaces / chips
        forest: '#2C3A2E',      // mid forest-green — panels, primary buttons
        'forest-deep': '#1A1F1B', // page background (charcoal-forest)
        'forest-mist': '#232A22', // alt dark surface
        mist: '#232A22',
        brass: '#C9A24B',       // gold accent
        'brass-soft': '#DAC08A',
        stone: '#A9A390',       // muted light text
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Work Sans', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        editorial: '72rem'
      },
      letterSpacing: {
        eyebrow: '0.28em'
      }
    }
  },
  plugins: []
};

export default config;
