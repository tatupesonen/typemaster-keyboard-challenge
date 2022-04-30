import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      orange: "#f16718",
      lightOrange: "#ff9b62",
      darkBlue: "#162542",
      darkGray: "#7b8bad",
      lightGray: "#e8eff2",
    },
  },
  fonts: {
    heading: "Barlow, sans-serif",
    body: "Barlow, sans-serif",
  },
  breakpoints: {
    base: `${375 / 16}em`,
    md: `${768 / 16}em`,
    xl: `${1440 / 16}em`,
  },
});

export default theme;
