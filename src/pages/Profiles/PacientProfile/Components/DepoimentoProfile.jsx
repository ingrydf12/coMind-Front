import React, { useState } from "react";
import { publicarDepoimento } from "../../../../api/depoimentoService";
import "./DepoimentoProfile.css"
import Button from "../../../../components/Button/CustomButton"

function DepoimentoProfile() {

    const [depoimentoData, setDepoimentoData] = useState({
        nome: 'Anônimo',
        local: '',
        texto: ''
    });

    const handleChange = async (e) => {
        const{ name, value } = e.target;
        setDepoimentoData(prev => ({...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados enviados: ', depoimentoData);
        try {
            await publicarDepoimento({
                ...depoimentoData,
        });
        } catch (error) {
            console.error('Erro ao enviar o depoimento: ', error);
        }
    };

    return (
        <form id="depoimento-profile" onSubmit={handleSubmit}>
            <h1>Deixe um Depoimento</h1>
            <div id="depoimento-pessoal">
                <div>
                    <label htmlFor="nome">Seu nome (opcional)</label>
                    <input 
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        value={depoimentoData.nome}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="local">De onde você é?</label>
                    <input 
                        type="text"
                        id="local"
                        name="local"
                        placeholder="Localidade"
                        value={depoimentoData.local}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="texto">Diga o que achou sobre a plataforma e suas experiências</label>
                <textarea
                    id="texto"
                    name="texto"
                    placeholder="Seu depoimento..." 
                    rows="5" 
                    cols="60"
                    value={depoimentoData.texto}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit" className="classBtn-prim" buttonText="Enviar" isOutlined={false}/>
        </form>
    )
}

export default DepoimentoProfile;