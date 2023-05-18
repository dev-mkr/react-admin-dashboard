/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [],
};
