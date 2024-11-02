/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Default theme
        // primary: '#4caf50',
        // secondary: '#ff9800',
        // Light theme
        // light: {
        //   background: '#f0f0f0',
        //   foreground: '#333333',
        //   primary: '#3f51b5',
        //   secondary: '#ff5722',
        // },
        // // Dark theme
        // dark: {
        //   background: '#121212',
        //   foreground: '#e0e0e0',
        //   primary: '#bb86fc',
        //   secondary: '#03dac6',
        // },
        // // Custom theme (e.g., Solarized)
        // solarized: {
        //   background: '#002b36',
        //   foreground: '#839496',
        //   primary: '#268bd2',
        //   secondary: '#2aa198',
        // },

        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        backgroundSecond: 'rgb(var(--backgroundSecond-rgb) / <alpha-value>)',
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        text: 'rgb(var(--text-rgb) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
