import { DataContextProvider } from "../../context/DataContext";
import { AuthProvider } from "../../context/AuthContext";
import { LoadingProvider } from "../../context/LoadingContext";
import { UserDataProvider } from "../../context/UserData";

interface Props {
  children: React.ReactNode;
}

const ContextContainer: React.FC<Props> = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <DataContextProvider>
          <UserDataProvider>{children}</UserDataProvider>
        </DataContextProvider>
      </AuthProvider>
      ;
    </LoadingProvider>
  );
};

export default ContextContainer;
