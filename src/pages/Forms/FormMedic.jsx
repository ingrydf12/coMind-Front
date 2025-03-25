import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { completarProfissional } from "../../api/medicService";
import "./Forms.css";
import Button from "../../components/Button/CustomButton";

const LIST_DATA = [
    'ANSIEDADE',
    'DEPRESSAO',
    'FOBIAS',
    'AUTOCONHECIMENTO',
    'AUTOESTIMA',
    'BORDERLINE',
    'BULIMIA',
    'CANCER',
    'TRANSTORNOS',
    'COMPULSOES',
    'DISLEXIA',
    'DISTURBIOS',
    'DROGAS',
    'ESQUIZOFRENIA',
    'ESTRESSA',
    'HIPERATIVIDADE',
    'HIPOCONDRIA',
    'OBESIDADE',
    'BURNOUT',
    'SEXUALIDADE',
    'SUICIDIO'
];

function FormMedic() {
    const { id } = useParams();
    const{ state } = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nomeCompleto: state?.nomeCompleto || '',
        matricula: '',
        genero: '',
        bio: '',
        formacoes: '',
        especialidade: [],
        faixaEtaria: [],
        preco: 0,
        regiao: '',
        foto: '',
        diasAtendimento: [],
        quantAtendimentosGratuitos: 0
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({ ...prev, [name]:value}));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            if (checked) {
            return { ...prev, especialidade: [...prev.especialidade, value], faixaEtaria: [...prev.faixaEtaria, value], diasAtendimento: [...prev.diasAtendimento, value] };
            } else {
            return { ...prev, especialidade: prev.especialidade.filter(item => item !== value), faixaEtaria: prev.faixaEtaria.filter(item => item !== value), diasAtendimento: prev.diasAtendimento.filter(item => item !== value) };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await completarProfissional(id, {
                ...formData,
                quantAtendimentosGratuitos: parseInt(formData.quantAtendimentosGratuitos),
                preco: parseFloat(formData.preco)
            });
            navigate('/medic-profile');
        } catch (error) {
            console.error('Erro ao completar cadastro: ', error)
        }
    };

    return(
        <form className="form-style" onSubmit={handleSubmit}>
            <h1>Preencha com suas informações</h1>
            <div>
                <div className="personal">
                    <div>
                        <label className="main-title" htmlFor="nomeCompleto">Nome completo</label>
                        <input 
                            className="type-large" 
                            type="text" 
                            id="nomeCompleto" 
                            name="nomeCompleto" 
                            placeholder="Nome"
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="main-title" htmlFor="matricula">Matrícula Profissional</label>
                        <input 
                            className="type-large" 
                            type="text" 
                            id="matricula" 
                            name="matricula"
                            value={formData.matricula}
                            onChange={handleChange}
                            placeholder="Exemplo: CRP"
                            required
                        />
                    </div>
                    <div>
                        <label className="main-title" htmlFor="foto">Foto de Perfil (URL)</label>
                        <input
                            className="type-large"
                            type="text"
                            id="foto"
                            name="foto"
                            value={formData.foto}
                            onChange={handleChange}
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
                            value="Feminino"
                            checked={formData.genero === "Feminino"}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="feminino">Feminino</label>
                        <br />
                        <input 
                            type="radio" 
                            id="nao-informar" 
                            name="genero"
                            value="Prefiro não informar"
                            checked={formData.genero === "Prefiro não informar"}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="nao-informar">Prefiro não informar</label>
                    </fieldset>
                    <textarea 
                        className="textarea-form" 
                        id="bio" 
                        name="bio" 
                        placeholder="Escreva sobre você" 
                        rows="5" 
                        cols="30"
                        value={formData.bio}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="line-side">
                <hr className="form-line" />   
            </div>

            <div className="formation-courses">
                <div>
                    <label className="main-title" htmlFor="formacoes">Formações e Cursos</label>
                    <textarea 
                        className="textarea-form" 
                        id="formacoes" 
                        name="formacoes" 
                        placeholder="Digite aqui sobre sua formação" 
                        rows="5" 
                        cols="30"
                        value={formData.formacoes}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <fieldset className="fieldset-form">
                        <legend>Qual ou quais as suas especialidades?</legend>
                        {LIST_DATA.map((espec) => {
                            return(
                                <div key={espec}>
                                    <input
                                        type="checkbox"
                                        id={espec}
                                        value={espec}
                                        checked={formData.especialidade.includes(espec)}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor={espec}>
                                        {espec.charAt(0) + espec.slice(1).toLowerCase()}
                                    </label>
                                </div>
                            );
                        })}
                    </fieldset>
                </div>
            </div>

            <div className="line-side">
                <hr className="form-line" />   
            </div>

            <div>
                <label className="main-title">Atendimento</label>

                <div className="service">
                    {/* Público */}
                    <fieldset className="fieldset-form">
                        <legend>Faixa etária:</legend>
                        {['CRIANCAS', 'ADOLESCENTES', 'ADULTOS', 'IDOSOS', 'CASAIS'].map(faixa => (
                           <div key={faixa}>
                            <input
                                type="checkbox"
                                id={faixa}
                                value={faixa}
                                checked={formData.faixaEtaria.includes(faixa)}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor={faixa}>
                                {faixa.charAt(0) + faixa.slice(1).toLowerCase()}
                            </label>      
                           </div> 
                        ))}
                    </fieldset>

                    <div>
                        <label className="sub-title" htmlFor="preco">Valor da consulta</label>
                        <input
                            className="type-short" 
                            type="number" 
                            id="preco" 
                            name="preco"
                            value={formData.preco}
                            onChange={handleChange}
                            required
                        />
                        
                        <label className="sub-title" htmlFor="regiao">Região</label>
                        <input 
                            className="type-large" 
                            type="text" 
                            id="regiao" 
                            name="regiao"
                            value={formData.regiao}
                            onChange={handleChange} 
                            required />
                    </div>
                </div>
                {/* Dias de atendimento */}
                <fieldset className="fieldset-form">
                    <legend>Dias de atendimento</legend>
                    {['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'].map(dias => (
                        <div key={dias}>
                        <input
                            type="checkbox"
                            id={dias}
                            value={dias}
                            checked={formData.diasAtendimento.includes(dias)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={dias}>
                            {dias.charAt(0) + dias.slice(1).toLowerCase()}
                        </label>      
                        </div> 
                    ))}  
                </fieldset>

                <div className="free-service">
                    <div>
                        <label className="sub-title" htmlFor="quantAtendimentosGratuitos">Quantos atendimentos gratuitos pretende fazer?</label>
                        <input 
                            className="type-short"
                            type="number" 
                            id="quantAtendimentosGratuitos" 
                            name="quantAtendimentosGratuitos" 
                            min="0"
                            value={formData.quantAtendimentosGratuitos}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="button-side">
                <Button type="submit" className="classBtn-prim" buttonText="Enviar" isOutlined={false}/>
            </div>
        </form>
    );
}

export default FormMedic;