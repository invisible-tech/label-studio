import React, { createContext, ReactNode, useState } from "react";

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

  console.log({ isAuthenticated });

  // Define login function
  const login = (username: string, password: string) => {
    // Implement your authentication logic here
    // For demonstration, we'll accept any username/password
    setIsAuthenticated(true);
    return true; // Return true on successful login
  };

  // Define logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Provide authentication state and functions to children
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
