import "./Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h1>VOCÊ NÃO ESTÁ SOZINHO!</h1>
          <p>
            Nós da coMind somos uma organização não governamental dedicada a
            oferecer apoio psicológico gratuito. Conectamos profissionais
            qualificados a indivíduos que necessitam de ajuda.
            <strong>Vamos nessa?</strong>
          </p>
          <button className="classBtn-ajuda" onClick={handleRedirect}>
            Conecte-se agora
          </button>
        </div>
        <img src="https://raw.githubusercontent.com/ingrydf12/coMind-Front/6eaef495600fc128c99fce84e812f9a8e12fa601/src/assets/homeHeart.svg" alt="homeHeart"></img>
      </div>
    </div>
  );
};

export default Banner;
