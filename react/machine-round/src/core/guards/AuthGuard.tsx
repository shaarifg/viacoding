import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

type AuthGuardProps = {
  children: React.ReactNode;
};

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
};
