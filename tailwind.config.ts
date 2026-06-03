import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        // Carrossel infinito: desloca -50% (metade do container duplicado) em loop contínuo
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-left-fast': 'scroll-left 22s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        marinale: {
          DEFAULT: '#1a1f5e',
          azul: '#1a1f5e',         // azul escuro principal — header, hero, footer
          verde: '#25d366',         // verde WhatsApp — todos os CTAs principais
          amarelo: '#f5a623',       // amarelo — CTAs secundários, ícones, badges
          cinza: '#f1f3f5',         // cinza claro — fundos alternativos
          'cinza-medio': '#6c757d', // cinza médio — textos secundários
        },
      },
      fontFamily: {
        titulo: ['var(--font-titulo)', 'sans-serif'],
        corpo: ['var(--font-corpo)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
