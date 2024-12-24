/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 3s ease-in-out", // Set duration to 3 seconds and ease-in-out timing
      },
    },
  },
  plugins: [],
};
