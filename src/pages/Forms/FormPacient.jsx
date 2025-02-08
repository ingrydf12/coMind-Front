import React from "react";
import "../../styles/FormPacient.css"


const FormPacient = () => {
    return(
        <form className="form-pacient">
            <h1>Preencha com suas informações</h1>
            {/* Informações Pessoais */}
            <div>
                <div className="personal">
                    <div>
                        <label className="main-title" for="name">Nome completo</label>
                        <input className="type-large" type="text" id="name" name="name" placeholder="Nome" required />
                    </div>
                </div>

                <div className="personal">
                    <fieldset className="fieldset-form">
                        <legend>Gênero</legend>
                        <input type="radio" id="masculine" name="gender" required />
                        <label for="masculine">Masculino</label>
                        <br />
                        <input type="radio" id="feminine" name="gender" required />
                        <label for="feminine">Feminino</label>
                        <br />
                        <input type="radio" id="not-inform" name="gender" required />
                        <label for="not-inform">Prefiro não informar</label>
                    </fieldset>

                    <div>
                        <label className="sub-title" for="age">Idade:</label>
                        <input className="type-short" type="number" id="age" name="age" required />
                    </div>

                    <div>
                        <label className="sub-title" for="objectives">Qual o seu objetivo com a terapia?</label>
                        <textarea className="textarea-form" id="objectives" name="objectives" placeholder="Escreva sobre o seu objetivo" rows="5" cols="30" required />
                    </div>
                </div>
            </div>

            <div className="line-side">
                <hr className="form-line" />   
            </div>

            {/* Informações de Atendimento */}
            <div>
                <label className="main-title">Atendimento</label>
                <div className="service">
                    <div>
                        <fildset className="fieldset-form">
                            <legend>Você faz uso de algum medicamento para a saúde mental?</legend>
                            <input type="radio" id="yes" name="medicines" required />
                            <label for="yes">Sim</label>
                            <input type="radio" id="no" name="medicines" required />
                            <label for="no">Não</label>
                        </fildset>

                        <div>
                            <label className="sub-title" for="medicines-yes">Se sim, qual?</label>
                            <textarea className="textarea-form" id="medicines-yes" name="medicines-yes" placeholder="Escreva um pouco sobre a sua medicação" rows="5" cols="30" />
                        </div>

                        <div>
                            <label className="sub-title" for="medicines-yes">Quais as suas principais queixas?</label>
                            <textarea className="textarea-form" id="medicines-yes" name="medicines-yes" placeholder="Escreva as suas queixas" rows="5" cols="30" required />
                        </div>

                        <div>
                            <label className="sub-title" for="medicines-yes">Há histórico de doenças da mente na sua família?</label>
                            <textarea className="textarea-form" id="medicines-yes" name="medicines-yes" placeholder="Escreva um pouco sobre" rows="5" cols="30" required />
                        </div>

                        <div>
                            <label className="sub-title" for="espec">Para qual ou quais especialidades você deseja atendimento?</label>
                            <select className="type-large" id="espec" name="espec" required>
                                <option value="" selected disabled hidden>Especialidade</option>
                                <option value="anxiety">Ansiedade</option>
                                <option value="depression">Depressão</option>
                            </select>
                            <div>
                            {/* Caixinhas de especialidade vem aqui */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="button-side">
                <button className="form-button">Enviar</button>
            </div>
        </form>
    );
}

export default FormPacient;