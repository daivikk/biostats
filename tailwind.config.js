/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },

      colors: {
        transparent: 'transparent',
        red: '#FF918A',
        blue: '#A8D5FF', 
        gray: '#F0F0F0',
        darkGray: '#2B2B2B',
        parrot: '#D6FFD3',
        green: '#9FFFBF',
        darkGreen: '#64AD67'
      },
    },
  },
  plugins: [require("daisyui")],
};
