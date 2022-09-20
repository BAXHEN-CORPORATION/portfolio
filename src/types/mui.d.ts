import "@mui/material";

declare module "@mui/material" {
  //** Palette */

  interface Palette {
    neutral?: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }

  interface CommonColors {
    orange: string;
  }

  //** Theme */

  interface Theme {
    status?: {
      danger?: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties["color"];
    };
  }

  //* Typography */

  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }

  interface TypographyPropsVariantOverrides {
    poster: true;
    // h6: false;
  }

  //** Breakpoints */

  interface BreakpointOverrides {
    //* remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    //* add more readable breakpoints
    mobile: true;
    tablet: true;
    tabletLarge: true;
    laptop: true;
    desktop: true;
  }

  //** Buttons */

  interface ButtonPropsVariantOverrides {
    "nav-link": true;
  }
}
