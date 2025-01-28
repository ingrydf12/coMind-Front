import Button from "../../components/Button/Button"
import React from "react"
import '../../styles/Register.css';

const Register = () => {
    return (
        <main className="register-container">
            <div className="register-banner">
            <img src="src/assets/authMedia.svg" alt="logo"></img>
            </div>
            <div className="register-log">
                <h1>Crie sua conta</h1>
            <form className="form-signin" action="">
                    <div className="form-signin-components">
                        <input placeholder="Seu nome completo" />
                        <input placeholder="Seu email" />
                        <input placeholder="Senha com mínino de 6 caracteres" />
                    </div>
                    <Button className="classBtn-out-prim" buttonText="Criar conta" isOutlined={false} />
                </form>
            </div>
        </main>
    )
}
export default Register;