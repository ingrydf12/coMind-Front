<<<<<<< HEAD
import '../../styles/Banner.css';

const Banner = () => { 
    return (
        <div>
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

=======
import '../../styles/Banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => { 
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/login');  //descobri que devo usar a / pra indicar que é um caminho absoluto
      };
      
    return (
        <div>
           <div className="banner">
                <div className="banner-text">
                    <h1>VOCÊ NÃO ESTÁ SOZINHO!</h1>
                    <p>Nós da coMind somos uma organização não governamental dedicada a oferecer apoio psicológico gratuito. Conectamos profissionais qualificados a indivíduos que necessitam de ajuda. <strong>Vamos nessa?</strong></p>
                <button className="btnAjuda" onClick={handleRedirect}>Conecte-se agora</button></div>
                <img src="src/assets/homeHeart.svg" alt="homeHeart"></img>

           </div>
        </div>
    );
}

>>>>>>> af939747f70a3777558cf6e850e8b16049d00a4d
export default Banner;