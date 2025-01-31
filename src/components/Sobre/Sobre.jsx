import "../../styles/Sobre.css";

const Sobre = () => { 
    return (
           <div className="Sobre">
                <div className="Sobre-text">
                    <h1>SOBRE</h1>
             <p>Nós da coMind somos uma organização não governamental dedicada a oferecer apoio psicológico a pessoas que não têm acesso a serviços especializados. Conectamos profissionais qualificados a indivíduos que necessitam de ajuda, promovendo o bem-estar mental e emocional de forma acessível e inclusiva.</p>
    
        <div className="card-container">
    <div className="card1">
    <img src="src/assets/carrosel1.png" alt="carrosel1.png" />
          <h2>Encontros online diretamente com o médico</h2>

        </div>
    <div className="card2">
    <img src="src/assets/carrosel2.png" alt="carrosel2.png" />
          <h3>Acesso a grupo de apoio virtual</h3>

        </div>
    <div className="card3">
    <img src="src/assets/carrosel3.png" alt="carrosel3.png" />
          <h4>Desenvolva seu autoconhecimento</h4>


    </div>

           </div>
        </div>
        </div>
    );
}

export default Sobre;