/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "system-ui", "sans-serif"],
        Teko: ["Teko", "sans-serif"]
      },
    },
  },
  plugins: [],
};
