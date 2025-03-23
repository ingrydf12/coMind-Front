import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  // Função de login
  const login = (token) => {
    const userData = JSON.parse(atob(token.split(".")[1]));
    setUserName(userData.name);
    setIsAuthenticated(true);
    sessionStorage.setItem("token", token);
  };

  // Função de logout
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