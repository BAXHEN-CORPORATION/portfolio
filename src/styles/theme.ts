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

const theme = createTheme(themeOptions);

//* Other configs

themeOptions = merge<ThemeOptions, ThemeOptions>(themeOptions, {
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "nav-link",
          },
          style: {
            color: "black",
            position: "relative",
            padding: "6px 0",
            textTransform: "capitalize",
            minWidth: "unset",

            "&:hover": {
              backgroundColor: "transparent",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
            "&::after": {
              content: "''",
              bottom: 7,
              position: "absolute",
              height: "2px",
              backgroundColor: "currentColor",
              width: "100%",
              transform: "scaleX(0)",
              transformOrigin: "bottom left",
              transition: theme.transitions.create("transform", {
                duration: 300,
              }),
            },
            "&:hover::after": {
              transform: "scaleX(1)",
            },
          },
        },
      ],
    },
  },
});

//** Dark Theme */

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
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
