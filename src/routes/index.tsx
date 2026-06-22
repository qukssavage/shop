// routes for the app
// роутинг нашего приложения
// отображение страниц приложения которые будут проходить через main
import { createBrowserRouter } from "react-router";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Cart from "@pages/Cart";
import SingleProduct from "@pages/SingleProduct";
import Profile from "@pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
