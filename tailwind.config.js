/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      padding: {
        "dash-left": "32rem",
        "dash-top": "10rem",
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
