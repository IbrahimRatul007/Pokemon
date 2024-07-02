/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        100: "32rem",
        200: "64rem",
      },
      colors: {
        cns: "#FFC0CB",
      },
    },
  },
  plugins: [],
};
