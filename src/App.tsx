import React from "react";
import { RouterProvider } from "react-router-dom";
import { IntlProvider } from "react-intl";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import router from "./pages/routes";
import theme from "./styles/theme";
import lang from "lang";
import { SupportedLocales } from "lang/types";

export default function App() {
  const [locale, setLocale] = React.useState<SupportedLocales>("en");

  React.useEffect(() => {
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0].slice(0, 2)
        : navigator.language.slice(0, 2);

    const locale = userLocale as SupportedLocales;
    if (lang[locale]) {
      setLocale(locale);
    }
  }, []);

  return (
    <IntlProvider messages={lang[locale]} locale={locale}>
      <ThemeProvider theme={theme.light}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </IntlProvider>
  );
}
