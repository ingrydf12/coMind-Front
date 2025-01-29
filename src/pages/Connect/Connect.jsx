import Button from "../../components/Button/Button"
import CustomLink from "../../components/CustomLink/CustomLink"
import "../../styles/Connect.css"

const Connect = () => {
    return (
        <main className="login-container">
            <div className="login-auth">
                <h1 id="accent">Já tem uma conta?</h1>
                <div className="login-auth-container"><h2>Bem-vindo de volta!</h2>
                    <p>Para se manter conectado conosco,
                        por favor entre com sua conta pessoal</p></div>


                <Button className="classBtn-prim" buttonText="Entrar" isOutlined={true} />
            </div>

            <div className="register-auth">
                <h1>Crie uma conta</h1>
                <div>
                    <button className="btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg>
                        <p>Criar conta com Google</p>
                    </button>
                </div>
                <h4>Ou use seu email para registro:</h4>


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

export default Connect;