import { DataContextProvider } from "../../context/DataContext";
import { AuthProvider } from "../../context/AuthContext";
import { LoadingProvider } from "../../context/LoadingContext";
import { UserDataProvider } from "../../context/UserData";
import { FilterProvider } from "../../context/FilterContext";

interface Props {
  children: React.ReactNode;
}

const ContextContainer: React.FC<Props> = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <DataContextProvider>
          <FilterProvider>
            <UserDataProvider>{children}</UserDataProvider>
          </FilterProvider>
        </DataContextProvider>
      </AuthProvider>
      ;
    </LoadingProvider>
  );
};

export default ContextContainer;
