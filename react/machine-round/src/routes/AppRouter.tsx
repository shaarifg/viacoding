import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthGuard } from "@/core/guards/AuthGuard";
import { NoAuthGuard } from "@/core/guards/NoAuthGuard";
import Login from "@/modules/pages/login/Login";
import Dashboard from "@/modules/pages/dashboard/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NoAuthGuard />,
    children: [
      { path: "login", element: <Login /> },
      { index: true, element: <Login /> },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  { path: "*", element: <h1>Not Found</h1> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
