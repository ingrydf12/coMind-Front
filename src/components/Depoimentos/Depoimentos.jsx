import '../../styles/Depoimentos.css';

const Depoimentos = () => {
    return (
      <div className="Depoimento">
        <h1>DEPOIMENTOS</h1>
        <div className="Depoimento-card">
          <img src="src/assets/pacientMedia.png" alt="pacientMedia.png" />
          <div className="Depoimento-text">
            <h2>LUIZA SOMA</h2>
            <h3>Cliente de Fortaleza, Brasil</h3>
            <p>"Uma ótima plataforma, me ajudou muito!"</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Depoimentos;