/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Covers all files with js, jsx, ts, tsx extensions inside src and its subfolders
    "./src/styles/tailwind.css",   // Ensures your tailwind.css file is processed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
