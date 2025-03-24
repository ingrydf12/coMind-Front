import React from "react";
import "./Forms.css"
import Button from "../../components/Button/CustomButton";

const LIST_DATA = [
    { id: "depression", name: "depression", value: "Depressão" },
    { id: "anxiety", name: "anxiety", value: "Ansiedade"},
    { id: "phobias", name: "phobias", value: "Fobias"}
];

const FormMedic = () => {

    const [formData, setFormData] = useState({
        name: '',
        registration: '',
        gender: '',
        aboutyou: '',
        formation: '',
        price: '',
        local: '',
        free: '',
        howmany: '',

        child: false,
        teen: false,
        adult: false,
        old: false,
        couple: false,

        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false
    })

    const handleChange = (event) => {
        const {name, value, checked} = event.target

        setFormData({
            ...formData,
            [name]: value,

            child: name === "child" ? checked : formData.child,
            teen: name === "teen" ? checked : formData.teen,
            adult: name === "adult" ? checked : formData.adult,
            old: name === "old" ? checked : formData.old,
            couple: name === "couple" ? checked : formData.couple,
            
            sun: name === "sun" ? checked : formData.sun,
            mon: name === "mon" ? checked : formData.mon,
            tue: name === "tue" ? checked : formData.tue,
            wed: name === "wed" ? checked : formData.wed,
            thu: name === "thu" ? checked : formData.thu,
            fri: name === "fri" ? checked : formData.fri,
            sat: name === "sat" ? checked : formData.sat
        })
    }

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
    }

    return(
        <form className="form-style" onSubmit={handleSubmit}>
            <h1>Preencha com suas informações</h1>
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

                    <div>
                        <label className="main-title" htmlFor="registration">Matrícula Profissional</label>
                        <input className="type-large" type="text" id="registration" name="registration" required placeholder="Exemplo: CRP"/>
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

                    <textarea 
                        className="textarea-form" 
                        id="aboutyou" 
                        name="aboutyou" 
                        placeholder="Escreva sobre você" 
                        rows="5" 
                        cols="30" 
                        required
                        value={formData.aboutyou}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="line-side">
                <hr className="form-line" />   
            </div>

            <div className="formation-courses">
                <div>
                    <label className="main-title" htmlFor="formation">Formações e Cursos</label>
                    <textarea 
                        className="textarea-form" 
                        id="formation" 
                        name="formation" 
                        placeholder="Digite aqui sobre sua formação" 
                        rows="5" 
                        cols="30" 
                        required
                        value={formData.formation}
                        onChange={handleChange}
                    />
                </div>
                
                <div>
                    <fieldset className="fieldset-form">
                        <legend>Qual ou quais as suas especialidades?</legend>
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

            <div className="line-side">
                <hr className="form-line" />   
            </div>

            <div>
                <label className="main-title">Atendimento</label>

                <div className="service">
                    {/* Público */}
                    <fieldset className="fieldset-form">
                        <legend>Faixa etária:</legend>
                        
                        <input type="checkbox" id="child" name="child" checked={formData.child} onChange={handleChange} />
                        <label htmlFor="child">Crianças</label>
                        <br />

                        <input type="checkbox" id="teen" name="teen" checked={formData.teen} onChange={handleChange} />
                        <label htmlFor="teen">Adolescentes</label>
                        <br />

                        <input type="checkbox" id="adult" name="adult" checked={formData.adult} onChange={handleChange} />
                        <label htmlFor="adult">Adultos</label>
                        <br />

                        <input type="checkbox" id="old" name="old" checked={formData.old} onChange={handleChange} />
                        <label htmlFor="old">Idosos</label>
                        <br />

                        <input type="checkbox" id="couple" name="couple" checked={formData.couple} onChange={handleChange} />
                        <label htmlFor="couple">Casais</label>
                    </fieldset>

                    <div>
                        {/* Aqui deve ter algo pra substituir o que tinha antes (valor), tipo datas disponíveis, contendo dia e horário*/}
                        <br />
                        {/* MARK: Provavelmente deve ser removido, já que é totalmente remoto. */}
                        <label className="sub-title">Região</label>
                        <input className="type-large" type="text" id="local" name="local" required />
                    </div>
                </div>
                {/* Dias de atendimento */}
                <fieldset className="fieldset-form">
                    <legend>Dias de atendimento</legend>

                    <input 
                        type="checkbox" 
                        id="sun" 
                        name="sun"
                        checked={formData.sun}
                        onChange={handleChange}
                    />
                    <label htmlFor="sun">Domingo</label>
                    <br />

                    <input 
                        type="checkbox" 
                        id="mon" 
                        name="mon"
                        checked={formData.mon}
                        onChange={handleChange} 
                    />
                    <label htmlFor="mon">Segunda-feira</label>
                    <br />

                    <input 
                        type="checkbox" 
                        id="tue" 
                        name="tue"
                        checked={formData.tue}
                        onChange={handleChange} 
                    />
                    <label htmlFor="tue">Terça-feira</label>
                    <br />

                    <input  
                        type="checkbox"  
                        id="wed" 
                        name="wed"
                        checked={formData.wed}
                        onChange={handleChange} 
                    />
                    <label htmlFor="wed">Quarta-feira</label>
                    <br />

                    <input 
                        type="checkbox" 
                        id="thu" 
                        name="thu"
                        checked={formData.thu}
                        onChange={handleChange}
                    />
                    <label htmlFor="thu">Quinta-feira</label>
                    <br />

                    <input 
                        type="checkbox" 
                        id="fri" 
                        name="fri"
                        checked={formData.fri}
                        onChange={handleChange} 
                    />
                    <label htmlFor="fri">Sexta-feira</label>
                    <br />

                    <input 
                        type="checkbox" 
                        id="sat" 
                        name="sat"
                        checked={formData.sat}
                        onChange={handleChange} 
                    />
                    <label htmlFor="sat">Sábado</label>
                </fieldset>

                <div className="free-service">
                    <fieldset className="fieldset-form">
                        <legend>Pretende fazer atendimentos gratuitos?</legend>
                        <input 
                            type="radio" 
                            id="yes" 
                            name="free" 
                            required
                            value="Sim"
                            checked={formData.free === "Sim"}
                            onChange={handleChange} 
                        />
                        <label htmlFor="yes">Sim</label>
                        <input 
                            type="radio" 
                            id="no" 
                            name="free" 
                            required
                            value="Não"
                            checked={formData.free === "Não"}
                            onChange={handleChange} 
                        />
                        <label htmlFor="no">Não</label>
                    </fieldset>

                    <div>
                        <label className="sub-title" htmlFor="howmany">Se sim, quantos?</label>
                        <input 
                            className="type-short"
                            type="number" 
                            id="howmany" 
                            name="howmany" 
                            min="0"
                            value={formData.howmany}
                            onChange={handleChange} 
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