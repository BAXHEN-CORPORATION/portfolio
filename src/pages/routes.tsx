import { createBrowserRouter } from "react-router-dom";
import Layout from "../surfaces/Layout";

import Error from "./Error";
import Home from "./Home";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

export default router;
