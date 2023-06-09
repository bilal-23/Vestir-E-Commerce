import { createContext, useContext, useState } from "react";
import {
  AuthContextInterface,
  ContextProviderProps,
  AuthState,
} from "./ContextTypes";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext<AuthContextInterface>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

function getAuthState() {
  // Check in localstorage if user is logged in
  let tokenCookie = Cookies.get("token");
  let userLocalStorage = localStorage.getItem("user");
  if (tokenCookie && userLocalStorage) {
    return {
      user: JSON.parse(userLocalStorage),
      token: tokenCookie,
    };
  }
  return { user: null, token: null };
}

export const AuthProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(() => getAuthState());

  const handleLogin = (
    token: string,
    user: { name: string; email: string }
  ) => {
    setAuth({ user: user, token });
    // Set cookie valid for 1 hour
    Cookies.set("token", token, { expires: 24 * 3 }); // 72 hour
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    axios.defaults.headers.common["authorization"] = ``;
    Cookies.remove("token");
    localStorage.removeItem("user");
    setAuth({ user: null, token: null });
  };

  const authContext = {
    user: auth.user,
    token: auth.token,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
