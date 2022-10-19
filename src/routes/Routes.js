import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../layout/Cart";
import Products from "../layout/Products";
import Root from "../layout/Root";
import Home from "../layout/Home";
import LogIn from "../layout/LogIn";
import Register from "../layout/Register";
import Inventory from "../layout/Inventory";
import RequireAuth from "../protectLayer/RequireAuth";
import ErrorPage from "../layout/ErrorPage";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: (
            <RequireAuth>
              <Cart />
            </RequireAuth>
          ),
        },
        {
          path: "/login",
          element: <LogIn />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/inventory",
          element: (
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
