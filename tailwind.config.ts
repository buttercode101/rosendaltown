import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'oklch(0.972 0.012 92)',
        ink: 'oklch(0.18 0.012 90)',
        forest: 'oklch(0.32 0.035 155)',
        'forest-deep': 'oklch(0.22 0.03 155)',
        brass: 'oklch(0.72 0.11 80)',
        'brass-soft': 'oklch(0.86 0.07 85)',
        stone: 'oklch(0.55 0.02 80)',
        mist: 'oklch(0.95 0.01 90)'
      },
      fontFamily: {
        serif: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        editorial: '80rem'
      },
      keyframes: {
        drift: {
          '0%': { transform: 'scale(1.05) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.12) translate3d(-1.5%,-1.5%,0)' }
        }
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite alternate'
      }
    }
  },
  plugins: []
};

export default config;
