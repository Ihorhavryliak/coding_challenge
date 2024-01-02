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
          'gray-100': '#5F5F68',
          'gray-200': '#F1F1F2',
        }
      },
      fontFamily: {
        scandia: ['Scandia', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
export default config
