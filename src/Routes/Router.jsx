import { createBrowserRouter } from "react-router-dom";
import Main from "../Componets/Main/Main";
import Home from "../Componets/Home/Home";
import About from "../Componets/About/About";
import ErrorPage from "../Componets/ErrorPage/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

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
           
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;
