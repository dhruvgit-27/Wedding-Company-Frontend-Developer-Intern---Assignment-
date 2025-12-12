/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A8D8E8',
          DEFAULT: '#0F5A7A',
          dark: '#0F4C5C',
        },
        accent: {
          cyan: '#C5E8ED',
          lightBlue: '#B3D9E8',
        },
        paw: '#F4C4C4',
        text: {
          primary: '#0F5A7A',
          secondary: '#2C3E50',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        title: ['52px', { lineHeight: '1.2', fontWeight: '700' }],
        heading: ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['18px', { lineHeight: '1.6', fontWeight: '500' }],
        label: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        containerPadding: '80px',
        containerPaddingY: '64px',
        gapMd: '16px',
      },
      borderRadius: {
        container: '32px',
        card: '16px',
      },
      boxShadow: {
        container: '0 20px 60px rgba(0, 0, 0, 0.08)',
        card: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #A8D8E8 0%, #98E1DC 100%)',
      },
    },
  },
  plugins: [],
};
