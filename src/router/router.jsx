import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
        {
            index: true,
           
        }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


export default router