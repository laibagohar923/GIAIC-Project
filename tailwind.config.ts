import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5C00', // Figma Primary Color
        secondary: '#252525', // Figma Secondary Color
        text: '#333333', // Figma Text Color
        bg: '#FFFFFF', // Figma Background Color
        button: '#FF5C00',
        buttonHover: '#E54D00',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Figma Typography
      },
      spacing: {
        '30px': '30px', // Custom spacing from Figma
      },
    },
  },
  plugins: [  require("@tailwindcss/aspect-ratio"),],
};

export default config;
