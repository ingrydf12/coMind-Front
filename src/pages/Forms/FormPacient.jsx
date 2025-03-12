import React, { useState } from "react";
import "../../styles/Forms.css";
import Button from "../../components/Button/CustomButton";

const LIST_DATA = [
    { id: "depression", name: "depression", value: "Depressão" },
    { id: "anxiety", name: "anxiety", value: "Ansiedade"},
    { id: "phobias", name: "phobias", value: "Fobias"}
];

const FormPacient = () => {

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        objectives: '',
        medicines: '',
        medicines_yes: '',
        complaints: '',
        historical: '',
    });
    
    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value,
        }); 
    };
    
    const [checkedList, setCheckedList] = useState([]);

    const handleSelect = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if(isChecked) {
            setCheckedList([...checkedList, value]);
        } else {
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        console.log(checkedList)
    };

    return(
        <form className="form-style" onSubmit={handleSubmit}>
            <h1>Preencha com suas informações</h1>
            {/* Informações Pessoais */}
            <div>
                <div className="personal">
                    <div>
                        <label className="main-title" htmlFor="name">Nome completo</label>
                        <input 
                            className="type-large" 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Nome" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="personal">
                    <fieldset className="fieldset-form">
                        <legend>Gênero</legend>
                        <input 
                            type="radio" 
                            id="masculine" 
                            name="gender" 
                            required
                            value="Masculino"
                            checked={formData.gender === "Masculino"}
                            onChange={handleChange} 
                        />
                        <label htmlFor="masculine">Masculino</label>
                        <br />
                        <input 
                            type="radio" 
                            id="feminine" 
                            name="gender" 
                            required
                            value="Feminino"
                            checked={formData.gender === "Feminino"}
                            onChange={handleChange}
                        />
                        <label htmlFor="feminine">Feminino</label>
                        <br />
                        <input 
                            type="radio" 
                            id="not-inform" 
                            name="gender" 
                            required
                            value="Prefiro não informar"
                            checked={formData.gender === "Prefiro não informar"}
                            onChange={handleChange} 
                        />
                        <label htmlFor="not-inform">Prefiro não informar</label>
                    </fieldset>

                    <div>
                        <label className="sub-title" htmlFor="age">Idade:</label>
                        <input 
                            className="type-short" 
                            type="number" 
                            id="age" 
                            name="age" 
                            required
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="sub-title" htmlFor="objectives">Qual o seu objetivo com a terapia?</label>
                        <textarea 
                            className="textarea-form" 
                            id="objectives" 
                            name="objectives" 
                            placeholder="Escreva sobre o seu objetivo" 
                            rows="5" 
                            cols="30" 
                            required
                            value={formData.objectives}
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
                <h2 className="main-title">Atendimento</h2>
                <div className="service">
                    <div>
                        <fieldset className="fieldset-form">
                            <legend>Você faz uso de algum medicamento para a saúde mental?</legend>
                            <input 
                                type="radio" 
                                id="yes" 
                                name="medicines" 
                                required
                                value="Sim"
                                checked={formData.medicines === "Sim"}
                                onChange={handleChange}
                            />
                            <label htmlFor="yes">Sim</label>
                            <input 
                                type="radio" 
                                id="no" 
                                name="medicines" 
                                required
                                value="Não"
                                checked={formData.medicines === "Não"}
                                onChange={handleChange}
                            />
                            <label htmlFor="no">Não</label>
                        </fieldset>

                        <div>
                            <label className="sub-title" htmlFor="medicines_yes">Se sim, qual?</label>
                            <textarea 
                                className="textarea-form" 
                                id="medicines_yes" 
                                name="medicines_yes" 
                                placeholder="Escreva um pouco sobre a sua medicação" 
                                rows="5" 
                                cols="30"
                                value={formData.medicines_yes}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="sub-title" htmlFor="complaints">Quais as suas principais queixas?</label>
                            <textarea 
                                className="textarea-form"
                                id="complaints" 
                                name="complaints" 
                                placeholder="Escreva as suas queixas" 
                                rows="5" 
                                cols="30" 
                                required
                                value={formData.complaints}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="sub-title" htmlFor="historical">Há histórico de doenças da mente na sua família?</label>
                            <textarea 
                                className="textarea-form" 
                                id="historical" 
                                name="historical" 
                                placeholder="Escreva um pouco sobre" 
                                rows="5" 
                                cols="30" 
                                required
                                value={formData.historical}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <fieldset className="fieldset-form">
                                <legend>Para qual ou quais especialidades você deseja atendimento?</legend>
                                {LIST_DATA.map((item) => {
                                    return(
                                        <div key={item.id}>
                                            <input
                                                type="checkbox"
                                                id={item.id}
                                                name={item.name}
                                                value={item.value}
                                                onChange={handleSelect}
                                            />
                                            <label htmlFor={item.id}>{item.value}</label>
                                        </div>
                                    );
                                })}  
                            </fieldset>

                            <div>
                                {checkedList.map((item, index) => {
                                    return(
                                        <div key={item.id} className="chip-box">
                                            <p className="chip">{item}</p>
                                        </div>
                                    )
                                })}
                            </div>
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