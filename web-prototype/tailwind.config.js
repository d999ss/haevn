/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'ocean-blue': '#0A5E8C',
        'sunset-orange': '#FF7D54',
        'sand': '#F2E9D8',
        'charcoal': '#2C3E50',
        
        // Secondary Palette
        'seafoam': '#7FDBCA',
        'coral': '#FF4D5E',
        'sunshine': '#FFD166',
        'lavender': '#9381FF',
        
        // Semantic Colors
        'success': '#06D6A0',
        'warning': '#FFD166',
        'error': '#EF476F',
        'info': '#118AB2',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.04)',
      },
      zIndex: {
        'base': 0,
        'above': 10,
        'below': -10,
        'dropdown': 1000,
        'sticky': 1100,
        'fixed': 1200,
        'modal': 1300,
        'popover': 1400,
        'toast': 1500,
      },
      screens: {
        'xs': '320px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
