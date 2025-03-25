import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(atob(token.split(".")[1]));
      setUserName(userData.name);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    const userData = JSON.parse(atob(token.split(".")[1]));
    setUserName(userData.name);
    setIsAuthenticated(true);
    sessionStorage.setItem("token", token);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);