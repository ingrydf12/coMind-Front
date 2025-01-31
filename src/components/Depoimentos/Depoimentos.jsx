import '../../styles/Depoimentos.css';

const Depoimentos = () => {
  return (
    <div className="Depoimento">
      <h1>DEPOIMENTOS</h1>
      <div className="depoimento-container" >
        <div className="Depoimento-card">
          <img src="src/assets/pacientMedia.png" alt="pacientMedia.png" />
          <div className="Depoimento-text">
            <h2>LUIZA SOMA</h2>
            <h3>Cliente de Fortaleza, Brasil</h3>
            <p>"Uma ótima plataforma, me ajudou muito!"</p>
          </div>
        </div>
        <div className="Depoimento-card">
          <img src="src/assets/pacientMedia.png" alt="pacientMedia.png" />
          <div className="Depoimento-text">
            <h2>JOÃO FEIJÃO</h2>
            <h3>Cliente de Rio de Janeiro, Brasil</h3>
            <p>"Recomendo demais, pessoal =) "</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;