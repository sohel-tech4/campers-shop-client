import AboutUs from "@/pages/AboutUs/AboutUs";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/HomePage/Home";
import Main from "@/pages/Layouts/Main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
