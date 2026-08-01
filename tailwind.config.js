/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2D',
        'navy-soft': '#17293D',
        gold: '#B89555',
        'gold-dark': '#9C7F48',
        cream: '#F2EBE6',
        'cream-alt': '#FAF6F2',
        ink: '#4A4A45',
        'ink-muted': '#8A8580',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
