/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#545454",
          light: "#d9d9d9"
        },
        accent: {
          DEFAULT: "#5e17eb"
        }
      }
    },
  },
  plugins: [],
}
