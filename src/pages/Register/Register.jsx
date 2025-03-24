import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/CustomButton";
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        if (!name || !email || !password) {
            setError("Preencha todos os campos!");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("A senha deve ter pelo menos 6 caracteres!");
            setLoading(false);
            return;
        }

        navigate("/medic-pacient", { state: { name, email, password } });
    };

    return (
        <main className="register-container">
            <div className="register-banner">
                <img src="https://raw.githubusercontent.com/ingrydf12/coMind-Front/6eaef495600fc128c99fce84e812f9a8e12fa601/src/assets/authMedia.svg" alt="logo" className="register-banner-image" />
            </div>
            <div className="register-form-container">
            <div className="register-form-box">
                <h1 className="register-title">Crie sua conta</h1>
                <form className="register-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-input"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome de usuário"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-input"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Seu email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-input"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha com mínimo de 6 caracteres"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="register-button"
                        buttonText={loading ? "Carregando..." : "Prosseguir"}
                        isOutlined={false}
                        disabled={loading}
                    />
                </form>

                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
            </div>
        </main>
    );
};

export default Register;