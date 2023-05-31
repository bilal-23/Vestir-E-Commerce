import { AuthProvider } from "../../context/AuthContext";
import { LoadingProvider } from "../../context/LoadingContext";

interface Props {
  children: React.ReactNode;
}

const ContextContainer: React.FC<Props> = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>{children}</AuthProvider>;
    </LoadingProvider>
  );
};

export default ContextContainer;
