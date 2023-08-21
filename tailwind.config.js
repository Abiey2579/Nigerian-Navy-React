/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        NAVY_Light_Blue: "#00a5ec",
        NAVY_Blue: "#0065a0",
        NAVY_Dark_Blue: "#013871",
        NAVY_Gray: "#f7f7f7",

        NAVY_Light_Blue_Opacity: "rgba(11, 141, 190, 0.4)",
        NAVY_Gray_5P_Opacity: "rgba(247,247,247,0.05)",
        NAVY_Sky_Blue: "#E5EFF5",
        // BLACK
        NAVY_Black: "#23262d",
      },
    },
  },
  plugins: [],
};
