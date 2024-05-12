/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Verydarkblue: "hsl(220, 13%, 13%)",
        Lightgrayish: "hsl(223, 64%, 98%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",
      },
      fontFamily: {
        KumbhSans: ["Kumbh Sans"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        boxShadow: {},
      },
    },
  },
  plugins: [],
};
