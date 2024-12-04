/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
        serif: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
        mono: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
        display: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
        body: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
