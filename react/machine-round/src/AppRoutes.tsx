import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "@/modules/pages/dashboard/Dashboard";
import NoAuthGuard from "@/core/guards/NoAuthGuard";
import { AuthGuard } from "@/core/guards/AuthGuard";
import { AuthRoutes } from "@/modules/auth/AuthRoutes";
import { AppsRoutes } from "@/modules/apps/AppsRoutes";
import { LayoutProvider } from "@/context/LayoutContext";

const router = createBrowserRouter([
  // home page
  {
    path: "",
    element: <h1>I am Home</h1>,
    // children: 'I am Home Page',
  },
  {
    path: "apps",
    element: (
      <AuthGuard>
        <LayoutProvider>
          <Outlet />
        </LayoutProvider>
      </AuthGuard>
    ),
    children: AppsRoutes,
  },
  {
    path: "auth",
    element: <NoAuthGuard />,
    children: AuthRoutes,
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <LayoutProvider>
          <Outlet />
        </LayoutProvider>
      </AuthGuard>
    ),
    children: [{ path: "", element: <Dashboard /> }],
  },

  { path: "*", element: <h1>Not Found</h1> },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
