import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import '../../styles/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/medic-pacient");
    };

    return (
        <main className="register-container">
            <div className="register-banner">
            <img src="src/assets/authMedia.svg" alt="logo"></img>
            </div>
            <div className="register-log">
                <h1>Crie sua conta</h1>
            <form className="form-signin" onSubmit={handleRegister}>
                    <div className="form-signin-components">
                        <input placeholder="Seu nome completo" required />
                        <input placeholder="Seu email" required />
                        <input placeholder="Senha com mínino de 6 caracteres" required />
                    </div>
                    <Button className="classBtn-out-prim" buttonText="Criar conta" isOutlined={false} onClick={handleRegister} />
                </form>
            </div>
        </main>
    )
}
export default Register;