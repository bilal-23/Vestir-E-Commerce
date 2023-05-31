import { createContext, useContext, useState } from "react";
import { ContextProviderProps, LoadingContextInterface } from "./ContextTypes";

const LoadingContext = createContext<LoadingContextInterface>({
  loading: false,
  setLoading: () => {},
});

export const LoadingProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = (loading: boolean) => {
    setLoading(loading);
  };

  const loadingContext = {
    loading,
    setLoading: handleLoading,
  };

  return (
    <LoadingContext.Provider value={loadingContext}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
