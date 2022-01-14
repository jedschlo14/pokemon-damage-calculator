// import { colors } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    colors: {
      light: "#7dd3fc",
      dark: "#0c4a6e",
      white: "#ffffff",
      special: "#0284c7",
      title: "#0284c7",
      button: {
        selected: "#0ea5e9",
        hover: "#bae6fd",
        secondary: {
          DEFAULT: "#ef4444",
          hover: "#dc2626",
          disabled: "#71717a",
        },
      },
      type: {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
      },
    },
  },
};
