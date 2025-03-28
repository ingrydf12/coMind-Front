import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Agenda.css";

const Agenda = () => {
    const [selectedBox, setSelectedBox] = useState(null);
    const navigate = useNavigate();

    const boxClick = (box) => {
        setSelectedBox(box);
    };

    const buttonClick = () => {
        if (selectedBox === "especialidadeBox") {
            navigate("/agenda-especialidade");
        } else if (selectedBox === "localizacaoBox") {
            navigate("/agenda-localizacao");
        } else if (selectedBox === "convenioBox") {
            navigate("/agenda-convenio");
        } else if (selectedBox === "atendimentoBox") {
            navigate("/agenda-atendimento");
        }
    };

    return (
        <main className="agenda-main">
            <h1 id="agenda-title">Preencha os dados para agendar sua consulta</h1>
            <div id="agenda-selector">
                {/* Caixinha para selecionar especialidade */}
                <div 
                    id="especialidadeBox" 
                    onClick={() => boxClick("especialidadeBox")} 
                    className={`${selectedBox === "especialidadeBox" ? "box-contrast" : "agenda-box"} ${selectedBox === "localizacaoBox" || selectedBox === "convenioBox" || selectedBox === "atendimentoBox" ? "agenda-box-blur" : ""}`}
                >
                    <h2 className={`${selectedBox === "especialidadeBox" ? "subtitle-contrast" : "agenda-subtitle"}`}>Especialidade</h2>
                    <select name="especialidade" id="especialidade">
                        <option>Depressão</option>
                        <option>Ansiedade</option>
                        <option>Transtorno de estresse pós-traumático</option>
                        <option>Esquizofrenia</option>
                        <option>Transtorno bipolar</option>
                        <option>Transtornos de personalidade</option>
                        <option>Transtornos alimentares</option>
                        <option>Transtorno do pânico</option>
                        <option>Transtorno de déficit de atenção com hiperatividade (TDAH)</option>
                        <option>Transtornos de estresse</option>
                    </select>
                </div>
                {/* Caixa para selecionar localização */}
                <div 
                    id="localizacaoBox" 
                    onClick={() => boxClick("localizacaoBox")} 
                    className={`${selectedBox === "localizacaoBox" ? "box-contrast" : "agenda-box"} ${selectedBox === "especialidadeBox" || selectedBox === "convenioBox" || selectedBox === "atendimentoBox" ? "agenda-box-blur" : ""}`}
                >
                    <h2 className={`${selectedBox === "localizacaoBox" ? "subtitle-contrast" : "agenda-subtitle"}`}>Localização</h2>
                    <input type="text" name="localização" id="localização" />
                </div>
                {/* Caixa para selecionar convênio */}
                <div 
                    id="convenioBox" 
                    onClick={() => boxClick("convenioBox")} 
                    className={`${selectedBox === "convenioBox" ? "box-contrast" : "agenda-box"} ${selectedBox === "especialidadeBox" || selectedBox === "localizacaoBox" || selectedBox === "atendimentoBox" ? "agenda-box-blur" : ""}`}
                >
                    <h2 className={`${selectedBox === "convenioBox" ? "subtitle-contrast" : "agenda-subtitle"}`}>Convênio</h2>
                    <select name="convenio" id="convenio">
                        <option value="">Bradesco</option>
                        <option value="">Caixa</option>
                        <option value="">Correios</option>
                        <option value="">Hapvida</option>
                        <option value="">Itaú</option>
                        <option value="">Petrobrás</option>
                        <option value="">Unimed</option>
                    </select>
                </div>
                {/* Caixa para selecionar tipo de atendimento */}
                <div 
                    id="atendimentoBox" 
                    onClick={() => boxClick("atendimentoBox")} 
                    className={`${selectedBox === "atendimentoBox" ? "box-contrast" : "agenda-box"} ${selectedBox === "especialidadeBox" || selectedBox === "localizacaoBox" || selectedBox === "convenioBox" ? "agenda-box-blur" : ""}`}
                >
                    <h2 className={`${selectedBox === "atendimentoBox" ? "subtitle-contrast" : "agenda-subtitle"}`}>Atendimento</h2>
                    <input type="radio" name="type" id="presencial" />
                    <label htmlFor="presencial">Presencial</label>
                    <input type="radio" name="type" id="remoto" />
                    <label htmlFor="remoto">Remoto</label>
                </div>
            </div>
            <div id="agenda-btn-side">
                <button 
                    id="btn-agenda" 
                    className={`classBtn-prim ${!selectedBox ? 'btn-disabled' : ''}`}
                    onClick={buttonClick} 
                    disabled={!selectedBox} 
                >
                    Prosseguir
                </button>
            </div>
        </main>
    );
};

export default Agenda;