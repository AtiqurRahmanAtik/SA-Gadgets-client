import { createBrowserRouter } from "react-router-dom";
import Main from "../Componets/Main/Main";
import Home from "../Componets/Home/Home";
import About from "../Componets/About/About";
import ErrorPage from "../Componets/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,

      children: [
        {
            path: '/',
            element: <Home></Home>,
         
        },
        {
            path: '/about',
            element: <About></About>,
           
        }
      ]
    },
  ]);

export default router;
