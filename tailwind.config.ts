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
      backgroundColor: {
        'blue-custom': '#0a2742', // Replace with your custom color code
      },
      textColor: {
        'blue-custom': '#0a2742', // Custom text color
        
      },
      borderColor:{
        'blue-custom': '#0a2742', // Custom text color
      }
    },
  },
  plugins: [],
}
export default config
