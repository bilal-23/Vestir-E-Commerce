import { useAuth } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { token } = useAuth();
  return token ? (
    children
  ) : (
    <Navigate to={"/auth"} state={{ from: location }} replace />
  );
};
