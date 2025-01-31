import Button from "../../components/Button/Button"
import { useState, React } from "react"
import { useNavigate } from "react-router-dom";
import '../../styles/Register.css';
import { registerUser } from '../../utils/validation';

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');
        navigate("/medic-pacient");

        try {
            const response = await registerUser(name, email, password);
            setSuccessMessage(response.message);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <main className="register-container">
            <div className="register-banner">
            <img src="src/assets/authMedia.svg" alt="logo"></img>
            </div>
            <div className="register-log">
                <h1>Crie sua conta</h1>
            <form className="form-signin" onSubmit={handleRegister}>
                    <div className="form-signin-components">
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" />
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Seu email" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Senha com mínimo de 6 caracteres" />
                    </div>
                    <Button type="submit" className="classBtn-out-prim" buttonText="Criar conta" isOutlined={false} onClick={handleRegister}/>
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
        </main>
    )
}
export default Register;
