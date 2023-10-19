/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Primary: ["Young Serif", "serif"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#1c1c1c",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },

  plugins: [],
};
