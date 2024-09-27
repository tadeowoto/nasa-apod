/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'mainbg': '#1a1a1a',
        'cardbg': '#2b2b2b',
        'cardbg2': '#3b3b3b',
        'cardtext': '#4b4b4b',
        'cardbg4': '#5b5b5b',
      }
    }
  },
  plugins: []
}
