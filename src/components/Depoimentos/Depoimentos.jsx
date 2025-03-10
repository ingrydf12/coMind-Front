import './Depoimentos.css';

const Depoimentos = () => {
  return (
    <div className="depoimento">
      <h1>DEPOIMENTOS</h1>
      <div className="depoimento-container" >
        <div className="depoimento-card">
          <img src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=" alt="pacientMedia.png" />
          <div className="depoimento-text">
            <h2>LUIZA SOMA</h2>
            <h3>Cliente de Fortaleza, Brasil</h3>
            <p>"Uma ótima plataforma, me ajudou muito!"</p>
          </div>
        </div>
        <div className="depoimento-card">
          <img src="https://inpaonline.com.br/wp-content/uploads/2024/12/coringa.jpg" alt="pacientMedia.png" />
          <div className="depoimento-text">
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