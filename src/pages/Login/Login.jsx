import Button from "../../components/Button/Button"
import React from "react"
import '../../styles/Login.css';
import { authenticateUser } from '../../utils/validation';
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const response = await authenticateUser(email, password); // chama a função de autenticação passando o email e senha aqui
            setSuccessMessage(response.message);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="log-container">
            <div className="log-banner">
                <img src="src/assets/authMedia.svg" alt="logo"></img>
            </div>
            <div className="sign-log">
                <h1>Entre com sua conta</h1>
                <form className="form-log" onSubmit={handleLogin}>
                    <div className="form-log-components">
                        <input type="email" id="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" id="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button className="classBtn-out-prim" buttonText="Entrar" isOutlined={true} type="submit" />
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
        </main>
    )
}
export default Login;