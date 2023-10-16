/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        track: "4rem 1fr 8rem",
      },
      fontFamily: {
        sans: ["Inter var", "sans"],
      },

      colors: {
        spotify: "#1DB954",
      },
    },
  },
  plugins: [],
};
