import React from "react";
import Button from "react-bootstrap/Button";

//Criar um botão para indicação de grupo caso não tenha um grupo indicado
const CardIndicacao = () => {
    return (
        <div className="indications-container">
            <p>Indicação:</p>
            <h2>Abraço Coletivo</h2>
            <div className="more-info">
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <Button className="btn-style">
                    <a href="../indications">Saiba mais</a>
                </Button>
            </div>
        </div>
    );
};

export default CardIndicacao;