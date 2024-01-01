/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 8px 8px -1px rgba(0, 0, 0, 0.15);',
        spread: '0 30px 30px rgba(24, 27, 34, 0.10)',
      },
      colors: {
        primary: '#06155A',
        domain: '#103dbe',
        slight: '#123072',
        alternate: '#1C65DE',
        secondary: '#49AFE2',
        sky: '#e8f1f8',
        muted: '#707070',
        off: '#d7d7d7',
        heading: '#303030',
      },
    },
  },
  plugins: [],
};
