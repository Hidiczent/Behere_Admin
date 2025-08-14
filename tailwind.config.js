/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: 
    {
      colors: {
        primary: "#567C8D",
        secondary: "#F8F1E6",
      },
    },
  },
  plugins: [],
};
