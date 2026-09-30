import React from "react";

//Criar um botão para indicação de grupo caso não tenha um grupo indicado
const CardIndicacao = () => {
    return (
        <div className="indications-container">
            <p>Indicação:</p>
            <h2>Abraço Coletivo</h2>
            <div className="more-info">
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <button className="btn-style">
                    <a href="../indications">Saiba mais</a>
                </button>
            </div>
        </div>
    );
};

export default CardIndicacao;