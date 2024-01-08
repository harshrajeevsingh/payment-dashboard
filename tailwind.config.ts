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
    },
    colors: {
      'lightGray': '#fafafa',
      'darkGray': '#F2F2F2',
      'borderGray': '#D9D9D9',
      'activeGray': '#353C53',
      'darkText': '#1A181E',
      'lightText': '#4D4D4D',
      'searchText': '#808080',
      'blueText': '#146EB4',
      'navBlue': '#1E2640',
      'white': '#FFFFFF',
      
    },
  },
  plugins: [],
}
export default config
