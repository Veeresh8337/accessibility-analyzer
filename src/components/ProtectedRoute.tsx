
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
