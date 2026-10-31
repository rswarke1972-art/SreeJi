/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F5EC',
          soft: '#FFFDF7',
          dark: '#EFE9DC',
        },
        sage: {
          light: '#C5D0BC',
          DEFAULT: '#A6B49A',
          dark: '#6A7D5C',
        },
        forest: {
          light: '#4E6C57',
          DEFAULT: '#344D3D',
          dark: '#213328',
        },
        dusty: {
          light: '#EAD1CF',
          DEFAULT: '#D8A6A3',
          dark: '#B57D7A',
        },
        skyMuted: {
          light: '#D3E2EE',
          DEFAULT: '#B7D0E1',
          dark: '#82A3BE',
        },
        ocean: {
          light: '#91B9B7',
          DEFAULT: '#739E9C',
          dark: '#4B7371',
        },
        warmBrown: {
          light: '#B29E8C',
          DEFAULT: '#8B7562',
          dark: '#5C4A3A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Caveat"', '"Sacramento"', 'cursive'],
        body: ['Lora', 'Georgia', 'serif']
      },
      boxShadow: {
        'soft-card': '0 8px 30px -4px rgba(80, 70, 60, 0.08)',
        'book': '0 15px 35px -5px rgba(52, 77, 61, 0.12), 0 5px 15px rgba(0, 0, 0, 0.04)',
        'inner-paper': 'inset 0 0 40px rgba(139, 117, 98, 0.06)',
      }
    },
  },
  plugins: [],
}

