/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textOverflow: ["ellipsis"],
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#FEBA54",
        blackish: "1b1b1b",
      },
    },
  },
  plugins: [],
};
