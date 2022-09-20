import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/styles/theme";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*", control: "none" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
};

addDecorator((story) => (
  <ThemeProvider theme={theme.light}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
));
