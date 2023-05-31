import { useAuth } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({
  children,
  reverseProtection,
}: {
  children: React.ReactNode;
  reverseProtection?: boolean;
}) => {
  const location = useLocation();
  const { user } = useAuth();

  if (reverseProtection) {
    //user is logged in and trying to access route which is accessible only when user is not logged in , i.e Auth Page
    return !user ? (
      <>{children}</>
    ) : (
      <Navigate to={"/"} state={{ from: location }} replace />
    );
  }

  return user ? (
    <>{children}</>
  ) : (
    <Navigate to={"/auth"} state={{ from: location }} replace />
  );
};
