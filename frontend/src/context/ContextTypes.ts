export interface ContextProviderProps {
    children: React.ReactNode;
}

export interface AuthContextInterface {
    user: {
        name: string;
        email: string;
    } | null;
    token: string | null;
    login: (token: string,
        user: { name: string; email: string }) => void;
    logout: () => void;
}

export interface AuthState {
    user: {
        name: string;
        email: string;
    } | null;
    token: string | null;
}

// LoadingContext
export interface LoadingContextInterface {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}