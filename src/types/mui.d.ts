import "@mui/material";

declare module "@mui/material" {
  //** Palette */

  interface Palette {
    // neutral?: Palette["primary"];
  }
  interface PaletteOptions {
    // neutral?: PaletteOptions["primary"];
  }

  interface CommonColors {
    // darkGray: string;
  }

  //** Theme */

  interface Theme {
    navbar: {
      height: React.CSSProperties["height"];
    };
  }
  interface ThemeOptions {
    navbar?: {
      height?: React.CSSProperties["height"];
    };
  }

  //* Typography */

  interface TypographyVariants {
    // poster: React.CSSProperties;
    "info-name": React.CSSProperties;
    "info-title": React.CSSProperties;
    main: React.CSSProperties;
    content: React.CSSProperties;
    topic: React.CSSProperties;
    section: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    // poster?: React.CSSProperties;
    "info-name"?: React.CSSProperties;
    "info-title"?: React.CSSProperties;
    main?: React.CSSProperties;
    content: React.CSSProperties;
    topic: React.CSSProperties;
    section: React.CSSProperties;
  }

  interface TypographyPropsVariantOverrides {
    "info-name": true;
    "info-title": true;
    main: true;
    content: true;
    topic: true;
    section: true;
    //* remove default variants
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
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
    filter: true;
  }

  //** IconButtons */

  // interface
}
