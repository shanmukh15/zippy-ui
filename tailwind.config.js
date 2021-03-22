module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-dark-1": "#13628C",
        "primary-dark-2": "#1E4759",
        "primary-dark-3": "#002E40",
        "primary-dark-4": "#306E8C",
        "primary-dark-5": "#2497D8",
        "primary-light-1": "#324104",
        "primary-light-2": "#ABCE48",
        "primary-light-3": "#98BF0A",
        "primary-light-4": "#364116",
        "primary-light-5": "#6E8F0A",
        "secondary-1": "#1D60BF",
        "secondary-2": "#BF2F1D",
        "secondary-3": "#2497D8",
        "neutral-1": "#F2F2F2",
        "neutral-2": "#A6A6A6",
        "neutral-3": "#595959",
        "neutral-4": "#262626",
        "neutral-5": "#0D0D0D",
        pistachio: {
          50: "#fafcf3",
          100: "#f5f9e7",
          200: "#e5efc2",
          300: "#d6e59d",
          400: "#b7d254",
          500: "#98bf0a",
          600: "#89ac09",
          700: "#728f08",
          800: "#5b7306",
          900: "#4a5e05",
        },
        elephant: {
          50: "#f2f5f5",
          100: "#e6eaec",
          200: "#bfcbcf",
          300: "#99abb3",
          400: "#4d6d79",
          500: "#002e40",
          600: "#00293a",
          700: "#002330",
          800: "#001c26",
          900: "#00171f",
        },
        chicago: {
          50: "#f7f7f7",
          100: "#eeeeee",
          200: "#d6d6d6",
          300: "#bdbdbd",
          400: "#8b8b8b",
          500: "#595959",
          600: "#505050",
          700: "#434343",
          800: "#353535",
          900: "#2c2c2c",
        },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringColor:  ['hover', 'active']
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
