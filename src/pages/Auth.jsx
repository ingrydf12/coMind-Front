import React from "react";
import Header from "../components/Header";
import '../styles/Banner.css';

const AuthPage = () => { 
    return (
        <div>
           <Header />
           <div className="banner">
                <div className="banner-text">
                    <h1>VOCÊ NÃO ESTÁ SOZINHO!</h1>
                    <p>Nós da coMind somos uma organização não governamental dedicada a oferecer apoio psicológico gratuito. Conectamos profissionais qualificados a indivíduos que necessitam de ajuda. <strong>Vamos nessa?</strong></p>
                <button className="btnAjuda">Conecte-se agora</button></div>
                <img src="src/assets/homeHeart.svg" alt="homeHeart"></img>
                
           </div>
        </div>
    );
}

export default AuthPage;