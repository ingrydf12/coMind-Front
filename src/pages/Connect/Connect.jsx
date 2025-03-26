import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton";
import authService from "../../api/authValidation";
import { useAuth } from "../../contexts/AuthContext";
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
  
    try {
      const response = await authService.login({ email, senha });
      //console.log("Resposta do backend:", response);
  
      if (!response?.token) {
        throw new Error(response?.message || "Token não recebido");
      }
  
      login(response.token, {
        role: response.tipoUsuario,
        userData: response.usuario
      });
  
      const redirectPath = {
        'ADMIN': '/dashboard',
        'PROFISSIONAL': '/empty',
        'PACIENTE': '/empty'
      }[response.tipoUsuario] || '/';
  
      navigate(redirectPath);
  
    } catch (error) {
      console.error("Erro no login:", error);
      setError(
        error.response?.data?.message || 
        error.message || 
        "Credenciais inválidas ou serviço indisponível"
      );
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