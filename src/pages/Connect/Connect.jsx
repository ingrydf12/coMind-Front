import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton";
import authService from "../../api/authValidation";
import { useAuth } from "../../contexts/AuthContext";
import * as jwt from "jwt-decode";
import "./Connect.css";

const Connect = () => {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const userData = { email, senha };

    try {
      const response = await authService.login(userData);
      const token = response.token;
      
      const decodedToken = jwt.jwtDecode(token);
      const userType = decodedToken.tipo || decodedToken.role;
      const userId = decodedToken.id || decodedToken.sub;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userType", userType);
      sessionStorage.setItem("userId", userId);

      login(token);

      switch(userType) {
        case "ADMIN":
          navigate("/dashboard");
          break;
        case "MEDICO":
          navigate(`/doctor-profile/${userId}`);
          break;
        case "PACIENTE":
          navigate(`/patient-profile/${userId}`);
          break;
        default:
          navigate("/profile");
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      setError(error.response?.data?.message || "Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  };

  const redirectRegister = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <main className="register-container">
      <div className="register-redirect">
        <h1 id="accent">Ainda não tem uma conta?</h1>
        <CustomButton 
          isOutlined={false} 
          buttonText="Registrar-se" 
          onClick={redirectRegister}
        />
      </div>

      <div className="login-auth">
        <form className="form-log-container" onSubmit={handleLogin}>
          <h1>Entre em sua conta</h1>
          <div className="form-log-components">
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <CustomButton 
            isOutlined={true} 
            buttonText={loading ? "Carregando..." : "Entrar"} 
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
    </main>
  );
};

export default Connect;
