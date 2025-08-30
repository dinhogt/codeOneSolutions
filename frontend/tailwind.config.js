/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3b3e43',  // Cor sólida principal (cinza escuro)
          light: '#2f455c',   // Azul-acinzentado
          lighter: '#f8f9fa',  // Cinza muito claro
          
          // Cores para o gradiente
          gradientStart: '#5e17eb', // Azul-marinho escuro
          gradientEnd: '#d9d9d9'    // Azul-acinzentado
        },
        accent: {
          DEFAULT: '#5e17eb'
        }
      }
    },
  },
  plugins: [],
}
