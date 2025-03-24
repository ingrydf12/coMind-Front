import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Forms.css";
import Button from "../../components/Button/CustomButton";


const FormPacient = () => {

    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [idade, setIdade] = useState("");
    const [objetivos, setObjetivos] = useState("");
    const [remedios, setRemedios] = useState("");
    const [remediosSim, setRemediosSim] = useState("");
    const [queixas, setQueixas] = useState("");
    const [historico, setHistorico] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = { nome, genero, idade, objetivos, remedios, remediosSim, queixas, historico };
        console.log("Enviando dados: ", userData);

    }

    return(
        <form className="form-style" onSubmit={handleRegister}>
            <h1>Preencha com suas informações</h1>
            {/* Informações Pessoais */}
            <div>
                <div className="personal">
                    <div>
                        <label className="main-title" htmlFor="nome">Nome completo</label>
                        <input 
                            className="type-large" 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            placeholder="Nome" 
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                </div>

                <div className="personal">
                    <fieldset className="fieldset-form">
                        <legend>Gênero</legend>
                        <input 
                            type="radio" 
                            id="masculino" 
                            name="genero" 
                            required
                            value="Masculino"
                            checked={genero === "Masculino"}
                            onChange={(e) => setGenero(e.target.value)} 
                        />
                        <label htmlFor="masculino">Masculino</label>
                        <br />
                        <input 
                            type="radio" 
                            id="feminino" 
                            name="genero" 
                            required
                            value="Feminino"
                            checked={genero === "Feminino"}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        <label htmlFor="feminino">Feminino</label>
                        <br />
                        <input 
                            type="radio" 
                            id="nao-informar" 
                            name="genero"
                            required
                            value="Prefiro não informar"
                            checked={genero === "Prefiro não informar"}
                            onChange={(e) => setGenero(e.target.value)} 
                        />
                        <label htmlFor="nao-informar">Prefiro não informar</label>
                    </fieldset>

                    <div>
                        <label className="sub-title" htmlFor="idade">Idade:</label>
                        <input 
                            className="type-short" 
                            type="number" 
                            id="idade" 
                            name="idade" 
                            required
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="sub-title" htmlFor="objetivos">Qual o seu objetivo com a terapia?</label>
                        <textarea 
                            className="textarea-form" 
                            id="objetivos" 
                            name="objetivos" 
                            placeholder="Escreva sobre o seu objetivo" 
                            rows="5" 
                            cols="30" 
                            required
                            value={objetivos}
                            onChange={(e) => setObjetivos(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="line-side">
                <hr className="form-line" />
            </div>

            {/* Informações de Atendimento */}
            <div>
                <h2 className="main-title">Atendimento</h2>
                <div className="service">
                    <div>
                        <fieldset className="fieldset-form">
                            <legend>Você faz uso de algum medicamento para a saúde mental?</legend>
                            <input 
                                type="radio" 
                                id="sim" 
                                name="remedios" 
                                required
                                value="Sim"
                                checked={remedios === "Sim"}
                                onChange={(e) => setRemedios(e.target.value)}
                            />
                            <label htmlFor="sim">Sim</label>
                            <input 
                                type="radio" 
                                id="nao" 
                                name="remedios" 
                                required
                                value="Não"
                                checked={remedios === "Não"}
                                onChange={(e) => setRemedios(e.target.value)}
                            />
                            <label htmlFor="nao">Não</label>
                        </fieldset>

                        <div>
                            <label className="sub-title" htmlFor="remediosSim">Se sim, qual?</label>
                            <textarea 
                                className="textarea-form" 
                                id="remediosSim" 
                                name="remdiosSim" 
                                placeholder="Escreva um pouco sobre a sua medicação..." 
                                rows="5" 
                                cols="30"
                                value={remediosSim}
                                onChange={(e) => setRemediosSim(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="sub-title" htmlFor="queixas">Quais as suas principais queixas?</label>
                            <textarea 
                                className="textarea-form"
                                id="queixas" 
                                name="queixas" 
                                placeholder="Escreva as suas queixas" 
                                rows="5" 
                                cols="30" 
                                required
                                value={queixas}
                                onChange={(e) => setQueixas(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="sub-title" htmlFor="historico">Há histórico de doenças da mente na sua família?</label>
                            <textarea 
                                className="textarea-form" 
                                id="historico" 
                                name="historico" 
                                placeholder="Escreva um pouco sobre" 
                                rows="5" 
                                cols="30" 
                                required
                                value={historico}
                                onChange={(e) => setHistorico(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

            </div>

        {/* MARK: - Precisa verificar o submit do formulario de registro */}
            <div className="button-side">
                <Button type="submit" className="classBtn-prim" buttonText="Enviar" isOutlined={false}/>
            </div>
        </form>
    );
}

export default FormPacient;