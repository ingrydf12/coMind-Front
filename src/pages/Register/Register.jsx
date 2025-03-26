import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/CustomButton";
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', senha: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.senha.length < 6) {
            return;
        }

        navigate('/medic-pacient', { state: form });
    };

    return (
        <main className="register-container">
            <div className="register-banner">
                <img src="https://raw.githubusercontent.com/ingrydf12/coMind-Front/6eaef495600fc128c99fce84e812f9a8e12fa601/src/assets/authMedia.svg" alt="logo" className="register-banner-image" />
            </div>
            <div className="register-form-container">
            <div className="register-form-box">
                <h1 className="register-title">Crie sua conta</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <input className="form-input" name="name" placeholder="Seu nome de usuário" onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name} required />

                    </div>
                    <div className="form-group">
                    <input className="form-input" name="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} required />

                    </div>
                    <div className="form-group">
                    <input className="form-input"name="senha" type="password" placeholder="Sua senha com mínimo de 6 caracteres" onChange={(e) => setForm({ ...form, senha: e.target.value })} value={form.senha} required />
                    
                    </div>
                    <Button
                        type="submit"
                        className="register-button"
                        buttonText="Prosseguir"
                        isOutlined={false}
                    />
                </form>

            </div>
            </div>
        </main>
    );
};

export default Register;