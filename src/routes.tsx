import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/games-catalog/",
    element: <Layout />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

export default router;
