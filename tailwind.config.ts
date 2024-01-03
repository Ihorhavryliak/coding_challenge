import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        custom: {
          'blue-100': '#0a2742',
          'blue-200': '#000D19',
          'blue-300': '#4282fb',
          'gray-100': '#5F5F68',
          'gray-200': '#F1F1F2',
          'gray-300': '#333',
          'gray-400': '#BDC5CD',
          'gray-500': '#4E4E4E',
          'gray-600': '#E3E3E3',
          'gray-700': '#e9ecef',
          'brand-color-green': '#02FF83',
          'green-100': 'rgba(100, 213, 159, 0.2)',
          'color-neutral-900': '#171717',
          'red-100': '#CD4218'
        }
      },
      fontFamily: {
        scandia: ['Scandia', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '-3px 5px 40px -7px rgba(0,0,0,.3)',
      }
    },
  },
  plugins: [],
}
export default config
