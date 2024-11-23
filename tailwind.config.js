import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        Google: ["Meie Script"],
        GaMaamli: ["Ga Maamli"],
        Anton: ["Anton"],
        Manrope: ["Manrope"],
        Oswald: ["Oswald"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
