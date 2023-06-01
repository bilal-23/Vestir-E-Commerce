import { DataContextProvider } from "../../context/DataContext";
import { AuthProvider } from "../../context/AuthContext";
import { LoadingProvider } from "../../context/LoadingContext";

interface Props {
  children: React.ReactNode;
}

const ContextContainer: React.FC<Props> = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <DataContextProvider>{children}</DataContextProvider>
      </AuthProvider>
      ;
    </LoadingProvider>
  );
};

export default ContextContainer;
