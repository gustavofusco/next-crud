/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,js,ts,jsx,tsx}",
    "./src/pages/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx}",
  ],
  safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
