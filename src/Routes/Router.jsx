import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../pages/AllServices/AllServices";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><Services></Services></PrivateRoute>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/settings",
        element: <PrivateRoute><Settings></Settings></PrivateRoute>,
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch("/services.json")
      }
    ]
  }
]);

export default router;
