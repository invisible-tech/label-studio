import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { compareDate } from "../utils/time";
import { ToastContext, ToastType } from "../components/Toast/Toast";

// Create the context
export const AuthContext = createContext({
  isAuthenticated: false,
  login: (username: string, password: string) => {},
  logout: () => {}
});

// Create a provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Initialize authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const toast = useContext(ToastContext);

  const login = (username: string, password: string) => {
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      console.log("login success");
      setIsAuthenticated(true);
      return true;
    }

    toast?.show({
      message: "Invalid username or password",
      type: ToastType.error
    });
    setIsAuthenticated(false);
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const isPublic = location.pathname.startsWith("/tasks");
  const lastLogin = localStorage.getItem("loginDate");
  const hasSessionExpired = compareDate(lastLogin, 5);
  const canAccess = isAuthenticated || !hasSessionExpired;

  useEffect(() => {
    if (canAccess) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("loginDate", Date.now().toString());

      if (!isPublic) {
        history.push(`/manage/projects`);
      }
      return;
    }

    localStorage.setItem("authenticated", "false");
    localStorage.removeItem("loginDate");

    if (!isPublic) {
      history.push(`/auth`);
    }
  }, [canAccess]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
