import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const NoAuthGuard = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
};
