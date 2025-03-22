import "./Sobre.css";

const Sobre = () => {
    return (
        <div className="Sobre">
            <div className="Sobre-text">
                <h1>SOBRE</h1>
                <p>Nós da coMind somos uma organização não governamental dedicada a oferecer apoio psicológico a pessoas que não têm acesso a serviços especializados. Conectamos profissionais qualificados a indivíduos que necessitam de ajuda, promovendo o bem-estar mental e emocional de forma acessível e inclusiva.</p>

                <div className="card-container">
                    <div className="card-sobre">
                        <img src="https://github.com/ingrydf12/coMind-Front/blob/main/src/assets/carrosel1.png?raw=true" alt="carrosel1.png" />
                        <h2>Encontros online diretamente com o médico</h2>

                    </div>
                    <div className="card-sobre">
                        <img src="https://github.com/ingrydf12/coMind-Front/blob/main/src/assets/carrosel2.png?raw=true" alt="carrosel2.png" />
                        <h2>Acesso a grupo de apoio virtual</h2>

                    </div>
                    <div className="card-sobre">
                        <img src="https://github.com/ingrydf12/coMind-Front/blob/main/src/assets/carrosel3.png?raw=true" alt="carrosel3.png" />
                        <h2>Desenvolva seu autoconhecimento</h2>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Sobre;