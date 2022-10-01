import { createBrowserRouter } from "react-router-dom";
import Layout from "../surfaces/Layout";

import Error from "./Error";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,

    children: [{ path: "", element: <Home /> }],
  },
]);

export default router;
