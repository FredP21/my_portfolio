/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-green": "#008080",
      },
      boxShadow: {
        "my-shadow":
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 128, 128, 0.3) 0px 30px 60px -30px, rgba(0, 128, 128, 0.35) 0px -2px 6px 0px inset",
      },
    },
  },
  plugins: [],
};
