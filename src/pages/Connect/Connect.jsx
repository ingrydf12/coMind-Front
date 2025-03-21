import "./Connect.css";
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton";
import { authenticateUser } from "../../utils/validation";

const Connect = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  //Função pra redirecionar pro dahsboard (falta colocar um contexto pra essa página)
  const handleRedirect = () => {
    navigate("/dashboard");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await authenticateUser(email, password); // chama a função de autenticação passando o email e senha aqui -> se for true, redireciona pro dashboard
      setSuccessMessage(response.message);

      handleRedirect();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <main className="register-container">
      <div className="register-redirect">
        <h1 id="accent">Ainda não tem uma conta?</h1>
        <CustomButton isOutlined={false} buttonText="Registrar-se" onClick={handleRegister}></CustomButton>

      </div>

      <div className="login-auth">
        <h1>Entre em sua conta</h1>

        <form className="form-log" action="">
          <div className="form-log-components">
            <input
              type="email"
              id="email"
              placeholder="Seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <CustomButton isOutlined={true} buttonText="Entrar" onClick={handleLogin}></CustomButton>

        </form>
      </div>
    </main>
  );
};

export default Connect;
