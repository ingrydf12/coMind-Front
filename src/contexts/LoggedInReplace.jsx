// src/components/LoggedInRedirect/LoggedInRedirect.jsx
import { Navigate } from "react-router-dom";

const LoggedInRedirect = ({ children }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (token) {
    // Redireciona com base no tipo de usuário
    switch (userRole) {
      case "admin":
        return <Navigate to="/dashboard" replace />;
      case "medico":
        return <Navigate to="/medico" replace />;
      case "paciente":
        return <Navigate to="/paciente" replace />;
      default:
        return <Navigate to="/empty" replace />;
    }
  }

  return children; // Se não estiver logado, renderiza a rota normalmente (ex: /login)
};

export default LoggedInRedirect;