/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        darkRed: '#3D0A05',
        greyBeige: '#A58570',
        rubyRed: '#7F1F0E',
        silk: '#DAC1B1',
        indianRed: '#AC746C',
        
        // Light theme colors
        roseQuartz: '#F9CBD6',
        blush: '#F2AFBC',
        redWine: '#9E182B',
        oatMilk: '#F2E0D2',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
