import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/modules/pages/dashboard/Dashboard";
import NoAuthGuard from "@/core/guards/NoAuthGuard";
import AuthGuard from "@/core/guards/AuthGuard";
import { authRoutes } from "./modules/auth/auth.routes";

const router = createBrowserRouter([
    // home page
  {
    path: "",
    element: <h1>I am Home</h1>,
    // children: 'I am Home Page',
  },
  {
    path: "auth",
    element: <NoAuthGuard />,
    children: authRoutes,
  },
  {
    path: "dashboard",
    element: <AuthGuard />,
    children: [{ path: "", element: <Dashboard /> }],
  },

  { path: "*", element: <h1>Not Found</h1> },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
