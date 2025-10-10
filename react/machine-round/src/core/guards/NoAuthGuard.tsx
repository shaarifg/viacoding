// src/auth/NoAuthGuard.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const NoAuthGuard = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default NoAuthGuard;
