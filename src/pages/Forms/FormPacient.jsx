import React, { useState } from "react";
import "./Forms.css";
import Button from "../../components/Button/CustomButton";
import authService from "../../api/authValidation";
import { useNavigate, useLocation } from 'react-router-dom';

const FormPacient = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
  
    const [form, setForm] = useState({
      nomeCompleto: '',
      genero: '',
      idade: 0,
      principaisQueixas: '',
      usoDeMedicamentos: 'NAO',
      objetivoDaTerapia: '',
      historicoFamiliar: ''
    });
  
    const handleChange = (e) => {
      const { name, value, type } = e.target;
      const finalValue = type === 'number' ? parseInt(value) : value;
      setForm({ ...form, [name]: finalValue });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { confirmarSenha, ...dados } = state;
  
      try {
        await authService.register({
          ...dados,
          ...form,
        });
        alert("Cadastro realizado com sucesso!");
        navigate('/login');
      } catch (error) {
        alert("Erro ao cadastrar: " + error.message);
      }
    };

    return(
        <form className="form-style" onSubmit={handleSubmit}>
            <h1>Preencha com suas informações</h1>
            {/* Informações Pessoais */}
            <div>
                <div className="personal">
                    <div>
                        <label className="main-title" htmlFor="nomeCompleto">Nome completo</label>
                        <input className="type-large" type="text" onChange={handleChange} id="nomeCompleto" name="nomeCompleto" value={form.nomeCompleto} placeholder="Nome completo" required />
                    </div>
                </div>

                <div className="personal">
                    <fieldset className="fieldset-form">
                        <legend>Selecione o gênero</legend>
                        <input type="radio" id="masculine" onChange={handleChange} value="MASCULINO" name="genero" required />
                        <label htmlFor="masculine">Masculino</label>
                        <br />
                        <input type="radio" value="FEMININO" id="feminine" name="genero" onChange={handleChange} required />
                        <label htmlFor="feminine">Feminino</label>
                        <br />
                        <input type="radio" value="NAO_INFORMADO" id="not-inform" name="genero" onChange={handleChange} required />
                        <label htmlFor="not-inform">Prefiro não informar</label>
                    </fieldset>

                    <div>
                        <label className="sub-title" htmlFor="idade">Idade:</label>
                        <input className="type-short" onChange={handleChange} value={form.idade} type="number" id="idade" name="idade" min="0" required />
                    </div>

                    <div>
                        <label className="sub-title" htmlFor="objetivoDaTerapia">Qual o seu objetivo com a terapia?</label>
                        <textarea className="textarea-form" onChange={handleChange} value={form.objetivoDaTerapia} id="objetivoDaTerapia" name="objetivoDaTerapia" placeholder="Escreva sobre o seu objetivo" rows="5" cols="30" required />
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
                        <fieldset className="fieldset-form">
                            <legend>Você faz uso de algum medicamento para a saúde mental?</legend>
                            <input type="radio" id="yes" name="usoDeMedicamentos" value="SIM" onChange={handleChange} checked={form.usoDeMedicamentos === 'SIM'} required />
                            <label htmlFor="yes">Sim</label>
                            <input type="radio" id="no" name="usoDeMedicamentos" value="NAO" onChange={handleChange} checked={form.usoDeMedicamentos === 'NAO'} required />
                            <label htmlFor="no">Não</label>
                        </fieldset>

                        <div>
                            <label className="sub-title" htmlFor="principaisQueixas">Quais as suas principais queixas?</label>
                            <textarea className="textarea-form" onChange={handleChange} value={form.principaisQueixas} id="principaisQueixas" name="principaisQueixas" placeholder="Escreva as suas queixas" rows="5" cols="30" required />
                        </div>

                        <div>
                            <label className="sub-title" htmlFor="historicoFamiliar">Há histórico de doenças da mente na sua família?</label>
                            <textarea className="textarea-form" onChange={handleChange} value={form.historicoFamiliar} id="historicoFamiliar" name="historicoFamiliar" placeholder="Escreva um pouco sobre" rows="5" cols="30" required />
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