import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'azul-escuro':  '#0A1F44',
        'azul-medio':   '#1A3A6B',
        'azul-claro':   '#2979C8',
        'azul-brilho':  '#4DA6FF',
        'dourado':      '#C9A84C',
        'dourado-claro':'#F0CC6E',
        'cinza-suave':  '#F4F7FC',
        'cinza-texto':  '#5A6A80',
        'urgencia':     '#E03B3B',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato:       ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.7s ease both',
        'pulse-glow': 'pulseGlow 2s infinite',
        'bounce-slow': 'bounceSlow 3s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 4px 14px rgba(39,201,63,0.4)' },
          '50%':     { boxShadow: '0 4px 22px rgba(39,201,63,0.7)' },
        },
        bounceSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
