const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Les fichiers où Tailwind doit scanner les classes
  theme: {
    extend: {},
  },
  plugins: [],
});