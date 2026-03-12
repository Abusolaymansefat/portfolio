import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import ProjectDetails from "../components/ProjectDetails";
// import ProjectDetails from "../components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);



export default router