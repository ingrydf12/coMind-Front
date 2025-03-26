import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { completarPaciente } from "../../api/pacienteService";
import "./Forms.css";
import Button from "../../components/Button/CustomButton";

function FormPacient(){
    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nomeCompleto: state?.nomeCompleto || '',
        genero: '',
        idade: '',
        principaisQueixas: '',
        usoDeMedicamentos: '',
        objetivoDaTerapia: '',
        historicoFamiliar: ''
    })

    const handleChange = async (e) => {
        const{ name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados enviados: ', formData);
        try {
            await completarPaciente(id, {
                ...formData,  
            });
            navigate('/pacient-profile');
        } catch (error) {
            console.error('Erro ao completar cadastro: ', error);
        }
    };

    return(
        <form className="form-style" onSubmit={handleSubmit}>
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
                            name="nomeCompleto" 
                            placeholder="Nome" 
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                            required
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
                            value="Masculino"
                            checked={formData.genero === "Masculino"}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="masculino">Masculino</label>
                        <br />
                        <input 
                            type="radio" 
                            id="feminino" 
                            name="genero" 
                            required
                            value="Feminino"
                            checked={formData.genero === "Feminino"}
                            onChange={handleChange}
                        />
                        <label htmlFor="feminino">Feminino</label>
                        <br />
                        <input 
                            type="radio" 
                            id="nao-informar" 
                            name="genero"
                            required
                            value="Prefiro não informar"
                            checked={formData.genero === "Prefiro não informar"}
                            onChange={handleChange} 
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
                            value={formData.idade}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="sub-title" htmlFor="objetivos">Qual o seu objetivo com a terapia?</label>
                        <textarea 
                            className="textarea-form" 
                            id="objetivos" 
                            name="objetivoDaTerapia" 
                            placeholder="Escreva sobre o seu objetivo" 
                            rows="5" 
                            cols="30" 
                            required
                            value={formData.objetivoDaTerapia}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="line-side">
                <hr className="form-line" />
            </div>

            {/* Informações de Atendimento */}
            <div>
                <h2 className="main-title">Informações Médicas</h2>
                <div className="service">
                    <div>
                        <div>
                            <label className="sub-title" htmlFor="usoDeMedicamentos">Você faz uso de algum medicamento para a saúde mental?</label>
                            <textarea 
                                className="textarea-form" 
                                id="usoDeMedicamentos" 
                                name="usoDeMedicamentos" 
                                placeholder="Escreva um pouco sobre a sua medicação..." 
                                rows="5" 
                                cols="30"
                                value={formData.usoDeMedicamentos}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="sub-title" htmlFor="principaisQueixas">Quais as suas principais queixas?</label>
                            <textarea 
                                className="textarea-form"
                                id="principaisQueixas" 
                                name="principaisQueixas" 
                                placeholder="Escreva as suas queixas" 
                                rows="5" 
                                cols="30"
                                value={formData.principaisQueixas}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="sub-title" htmlFor="historicoFamiliar">Há histórico de doenças da mente na sua família?</label>
                            <textarea 
                                className="textarea-form" 
                                id="historicoFamiliar" 
                                name="historicoFamiliar" 
                                placeholder="Escreva um pouco sobre" 
                                rows="5" 
                                cols="30"
                                value={formData.historicoFamiliar}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="button-side">
                <Button type="submit" className="classBtn-prim" buttonText="Enviar" isOutlined={false}/>
            </div>
        </form>
    );
}

export default FormPacient;