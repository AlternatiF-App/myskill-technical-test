import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        card: '0px 10px 20px 0px #1A143C1A',
        button: '0px 10px 20px 0px #FF935780'
      },
      colors: {
        primary: '#FF9357'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config