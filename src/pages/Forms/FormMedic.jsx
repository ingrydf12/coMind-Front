import React from "react";
import "../../styles/FormMedic.css"

const FormMedic = () => {

    return(
        <form className="form-medic">
            <h1>Preencha com suas informações</h1>
            {/* Informações Pessoais */}
            <div>
                <div className="personal">
                    <div>
                        <label className="main-title" for="name">Nome completo</label>
                        <input className="type-large" type="text" id="name" name="name" placeholder="Nome" required />
                    </div>

                    <div>
                        <label className="main-title" for="crp">CRP</label>
                        <input className="type-large" type="text" id="crp" name="crp" required />
                    </div>
                </div>

                <div clasName="personal">
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

                    <textarea className="textarea-form" id="about-you" name="about-you" placeholder="Escreva sobre você" rows="5" cols="30" required />
                </div>
            </div>

            <div className="line-side">
                <hr className="form-line" />   
            </div>

            {/* Formações e Cursos */}
            <div className="formation-courses">
                <div>
                    <label className="main-title" for="formation">Formações e Cursos</label>
                    <textarea className="textarea-form" id="formation" name="formation" placeholder="Digite aqui sobre sua formação" rows="5" cols="30" required />
                </div>
                
                <div>
                    <select className="type-large" id="espec" name="espec" required>
                        <option value="none" selected disabled hidden>Especialidade</option>
                        <option value="anxiety">Ansiedade</option>
                        <option value="depression">Depressão</option>
                    </select>
                    <div>
                    {/* Caixinhas de especialidade vem aqui */}
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
                    <fieldset className="fieldset-form">
                        <legend>Você quer atender</legend>
                        <input type="checkbox" id="child" name="public" required />
                        <label for="child">Crianças</label>
                        <br />
                        <input type="checkbox" id="teen" name="public" required />
                        <label for="teen">Adolescentes</label>
                        <br />
                        <input type="checkbox" id="adult" name="public" required />
                        <label>Adultos</label>
                        <br />
                        <input type="checkbox" id="old" name="public" required />
                        <label>Idosos</label>
                        <br />
                        <input type="checkbox" id="couple" name="public" required />
                        <label>Casais</label>
                    </fieldset>

                    <div>
                        <label className="sub-title">Valor do atendimento:</label>
                        <input className="type-short" type="text" id="price" name="price" required />
                        <br />
                        <label className="sub-title">Local:</label>
                        <input className="type-large" type="text" id="local" name="local" required />
                    </div>
                </div>

                <fieldset className="fieldset-form">
                    <legend>Dias e horários de atendimento</legend>
                    <input type="checkbox" id="sun" name="schedules" />
                    <label>Domingo</label>
                    <input className="type-short" type="time" />
                    <label>às</label>
                    <input className="type-short" type="time" />
                    <br />

                    <input type="checkbox" id="mon" name="schedules" />
                    <label>Segunda-feira</label>
                    <input className="type-short" type="time" />
                    <label>às</label>
                    <input className="type-short" type="time" />
                    <br />

                    <input type="checkbox" id="tue" name="schedules" />
                    <label>Terça-feira</label>
                    <input className="type-short" type="time" />
                    <label>às</label>
                    <input className="type-short" type="time" />
                    <br />

                    <input  type="checkbox"  id="wed" name="schedules" />
                    <label>Quarta-feira</label>
                    <input className="type-short" type="time" />
                    <label>às</label>
                    <input className="type-short" type="time" />
                    <br />

                    <input type="checkbox" id="thu" name="schedules" />
                    <label>Quinta-feira</label>
                    <input className="type-short" type="time" />
                    <label>às</label>
                    <input className="type-short" type="time" />
                    <br />

                    <input type="checkbox" id="fri" name="schedules" />
                    <label>Sexta-feira</label>
                    <input className="type-short" type="time" />
                    <label>às</label>
                    <input className="type-short" type="time" />
                    <br />

                    <input type="checkbox" id="sat" name="schedules" />
                    <label>Sábado</label>
                    <input className="type-short" type="time" />
                    <label>às</label>
                    <input className="type-short" type="time" />
                </fieldset>

                <div className="free-service">
                    <fieldset className="fieldset-form">
                        <legend>Pretende fazer atendimentos gratuitos?</legend>
                        <input type="radio" id="yes" name="free" required />
                        <label>Sim</label>
                        <input type="radio" id="no" name="free" required />
                        <label>Não</label>
                    </fieldset>
                    <div>
                        <label className="sub-title">Se sim, quantos?</label>
                        <input className="type-short" type="number" id="how-many" name="how-many" min="0" />
                    </div>
                </div>
            </div>

            <div className="button-side">
                <button className="form-button">Enviar</button>
            </div>
        </form>
    );
}

export default FormMedic;