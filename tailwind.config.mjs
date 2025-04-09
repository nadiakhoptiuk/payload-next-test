import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '9.375rem',
        // DEFAULT: '1rem',
        // lg: '2rem',
        // md: '2rem',
        // sm: '1rem',
        // xl: '2rem',
      },
      screens: {
        // sm: '40rem',
        // md: '48rem',
        // lg: '64rem',
        // xl: '80rem',
        '2xl': '120rem',
      },
    },

    borderRadius: {
      10: '0.625rem', // 10px
      20: '1.25rem', // 20px
      30: '1.875rem', // 30px
      195: '12.188rem', // 195px
      full: '9999px',
    },

    extend: {
      // animation: {
      //   'accordion-down': 'accordion-down 0.2s ease-out',
      //   'accordion-up': 'accordion-up 0.2s ease-out',
      // },

      colors: {
        accent: {
          DEFAULT: '#AA7446',
          light: '#DBA860',
          dark: '#2B0A0A',
        },
        black: '#000000',
        dark: '#1A3A37',
        gray: '#494949',
        muted: '#929292',
        yellow: '#FFB300',
        white: '#FFFFFF',
        background: {
          gray: '#F2F2F2',
          light: 'rgba(170, 116, 70, 0.1)',
          input: 'rgba(193, 167, 140, 0.2)',
          accordion: '#CCB363',
          'accordion-light': 'rgba(204, 179, 99, 0.2)',
          calendar: 'rgba(169, 156, 111, 0.2)',
        },
        border: {
          acordion: '#C1A78C',
          calendar: '#D4CBC2',
          line: '#C6C6C6',
        },
        icon: {
          gray: '#9A9A9A',
        },

        // success: 'hsl(var(--success))',
        // error: 'hsl(var(--error))',
        // warning: 'hsl(var(--warning))',
      },

      fontFamily: {
        marcellus: ['var(--font-marcellus)'],
        mirza: ['var(--font-mirza)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    }),
  ],
}

export default config
