import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default MainRoutes;
