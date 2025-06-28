import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Projects from "../Components/Projects";
import ProjectDetails from "../Components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "projects/:projectId",
        Component: ProjectDetails,
      },
    ],
  },
]);

export default router;
