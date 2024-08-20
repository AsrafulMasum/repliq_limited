import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClint = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClint}>
      <AuthProvider>
        <RouterProvider router={MainRoutes} />
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
  </StrictMode>
);
