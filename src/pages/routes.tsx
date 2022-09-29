import { allProjects } from "app-data";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../surfaces/Layout";

import Error from "./Error";
import Home from "./Home";
import Portfolio from "./Portfolio";
import PortfolioProject from "./PortfolioItem";

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
        loader: () => {
          return { allProjects };
        },
      },
      {
        path: "portfolio/:name",
        element: <PortfolioProject />,
        loader: ({ params }) => {
          const name = params.name;

          if (!name) return {};

          const project = allProjects.find((project) => project.id === name);
          return { project };
        },
      },
    ],
  },
]);

export default router;
