import React, { useState } from "react";
import "./DepoimentoProfile.css"
import Button from "../../../../components/Button/CustomButton"

const DepoimentoProfile = () => {
    return (
        <div id="depoimento-profile">
            <h1>Deixe um Depoimento</h1>
            <div id="depoimento-pessoal">
                <div>
                    <label>Seu nome (opcional)</label>
                    <input 
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        required
                    />
                </div>
                <div>
                    <label>De onde você é?</label>
                    <input 
                        type="text"
                        id="local"
                        name="local"
                        placeholder="Localidade"
                        required
                    />
                </div>
            </div>
            <div>
                <label>Diga o que achou sobre a plataforma e suas experiências</label>
                <textarea
                    id="texto"
                    name="texto"
                    placeholder="Seu depoimento..." 
                    rows="5" 
                    cols="60" 
                    required
                />
            </div>
            <Button type="submit" className="classBtn-prim" buttonText="Enviar" isOutlined={false}/>
        </div>
    )
}

export default DepoimentoProfile;