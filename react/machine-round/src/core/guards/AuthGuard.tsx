import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const AuthGuard = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
