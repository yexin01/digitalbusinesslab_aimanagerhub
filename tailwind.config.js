/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F6F3",
        primary: "#BF82FF",
        success: "#25CD25",
        warning: "#FFA500",
        danger: "#B01212",
        dark: "#131313",
        muted: "#7D7D7D",
        light: "#F8F8F8",
        border: "#F1F1F1",
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}; 