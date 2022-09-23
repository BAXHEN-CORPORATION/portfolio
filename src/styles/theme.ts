import { merge } from "lodash";

import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@mui/material/styles";
import green from "@mui/material/colors/green";

const customThemeMerge = (
  theme: ThemeOptions,
  themeOverride: ThemeOptions
): Theme => {
  return responsiveFontSizes(createTheme(merge(theme, themeOverride)));
};

let themeOptions: ThemeOptions = {
  navbar: {
    height: "100px",
  },
  typography: {
    fontFamily: "Poppins",
    "info-name": {
      color: "white",
      fontWeight: 700,
      fontSize: "1.75rem",
      fontStyle: "italic",
    },
    "info-title": {
      color: "white",
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    main: {
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: 1,
      letterSpacing: "-.04em",
      wordBreak: "break-word",
    },
    content: {
      lineHeight: "1.6875em",
      fontSize: "1rem",
    },
    topic: {
      fontWeight: 700,
      lineHeight: 1,
      fontSize: "2rem",
      letterSpacing: "-.04em",
    },
    section: {
      fontWeight: 700,
      lineHeight: "1.5em",
      fontSize: "18px",
      letterSpacing: "-.02em",
      wordBreak: "break-word",
    },
  },
  palette: { primary: { main: green["100"] }, secondary: { main: "#1f1f1f" } },
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
              bottom: 8,
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
            "&:hover::after, &:focus::after": {
              transform: "scaleX(1)",
            },

            "&.active::after": {
              transform: "scaleX(1)",
            },
          },
        },
      ],
    },

    MuiIconButton: {
      variants: [
        {
          props: { className: "nav" },
          style: {
            position: "relative",
            backgroundColor: "black",

            "&::before": {
              content: "''",
              color: "black",
              position: "absolute",
              borderRadius: "50%",
              border: "1px solid currentColor",
              height: "43px",
              width: "43px",
              left: "0px",
              top: "0px",
              borderTop: "none",
              borderLeft: "none",
              transition: theme.transitions.create(["top", "left"], {
                duration: 300,
              }),
            },

            "&:hover::before, &:focus::before": { left: "5px", top: "4px" },

            "&::after": {
              content: "''",
              color: "black",
              position: "absolute",
              borderRadius: "50%",
              border: "1px solid currentColor",
              height: "43px",
              width: "43px",
              left: "0px",
              top: "0px",
              borderTop: "none",
              borderLeft: "none",
              transition: theme.transitions.create(["top", "left"], {
                duration: 400,
              }),
            },
            "&:hover::after, &:focus::after": {
              left: "9px",
              top: "8px",
            },
            "&:hover": {
              backgroundColor: "black",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
          },
        },
        {
          props: { className: "nav-close" },
          style: {
            position: "relative",
            backgroundColor: "white",

            transition: theme.transitions.create("transform", {
              duration: 200,
            }),

            "&:hover": {
              backgroundColor: "white",
              transform: "rotate(90deg)",
            },

            "& .MuiTouchRipple-root": {
              display: "none",
            },
          },
        },
      ],
      styleOverrides: {
        sizeLarge: { height: "40px", width: "40px" },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { className: "no-top-elevation" },
          style: {
            "&::after": {
              content: "''",
              position: "absolute",
              top: -2,
              height: "2px",
              width: "100%",
              backgroundColor: "inherit",
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
