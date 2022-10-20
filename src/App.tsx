import { RouterProvider } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import router from "./pages/routes";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
