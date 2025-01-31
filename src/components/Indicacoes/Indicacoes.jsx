import '../../styles/Indicacoes.css';

const Indicacoes = () => {
    return (
        <div className="Indicacoes">
            <h1>INDICAÇÕES</h1>
            <div className="Indicacoes-text">
                <div className="card1">
                    <h2>ACOLHER ONLINE</h2>
                    <h3>Presencial </h3>
                    <p>Grupo de apoio virtual focado em lidar com ansiedade e estresse por meio de encontros semanais online. </p>
                </div>
                <div className="card2">
                    <h4>ABRAÇO COLETIVO</h4>
                    <h5>Presencial</h5>
                    <p>Encontros presenciais para apoio psicológico e fortalecimento emocional, realizados em centros comunitários. </p>
                </div>
                <div className="card3">
                    <h6>CONEXÃO VIRTUAL</h6>
                    <h7>Remoto</h7>
                    <p>Sessões online voltadas para jovens em busca de suporte emocional e autoconhecimento. </p>
                </div>

            </div>
        </div>
    );
}

export default Indicacoes; 