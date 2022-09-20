import { merge } from "lodash";

import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@mui/material/styles";
import blue from "@mui/material/colors/blue";

const customThemeMerge = (
  theme: ThemeOptions,
  themeOverride: ThemeOptions
): Theme => {
  return responsiveFontSizes(createTheme(merge(theme, themeOverride)));
};

let themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Poppins",
  },
  palette: { primary: { main: blue["100"] } },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      tabletLarge: 900,
      laptop: 1200,
      desktop: 1536,
    },
  },

  components: {
    MuiUseMediaQuery: {
      defaultProps: { noSsr: true },
    },
  },
};

//* Other configs

themeOptions = merge<ThemeOptions, ThemeOptions>(themeOptions, {
  components: {},
});

//** Dark Theme */

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    // neutral: { main: "#64748B", contrastText: "#fff" },
  },
};

//** Light Theme */

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    // neutral: { main: "#64748B", contrastText: "#fff" },
  },
};

//* Compiling Themes Modes*/

export const dark = customThemeMerge(darkTheme, themeOptions);
export const light = customThemeMerge(lightTheme, themeOptions);

const themes = { dark, light };

export default themes;
