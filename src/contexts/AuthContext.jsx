// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const userRole = sessionStorage.getItem("userRole");
        const storedUserData = sessionStorage.getItem("userData");
        
        if (token && userRole && storedUserData) {
          setIsAuthenticated(true);
          setUserData(JSON.parse(storedUserData));
        }
      } catch (e) {
        console.error("Erro ao recuperar dados da sessão:", e);
        logout();
      }
    }
  }, []);

const login = (token, userInfo) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("userRole", userInfo.role);
  sessionStorage.setItem("userData", JSON.stringify(userInfo.userData));
  
  setIsAuthenticated(true);
  setUserData(userInfo.userData);
};

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userData");
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      userData,
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export default AuthContext;