import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./MedicPacient.css";
import doctorImage from "../../assets/doctorMedia.png";
import pacientImage from "../../assets/pacientMedia.png";

const MedicPacient = () => {
    const { state } = useLocation();
    const [selectedType, setSelectedType] = useState(null);
    const navigate = useNavigate();

    const handleBoxClick = (tipo) => {
        setSelectedType(tipo);
    };

    const handleButtonClick = () => {
        if (selectedType === "PACIENTE") {
            navigate('/form-paciente', { state: { ...state, tipo: selectedType } });
        }
        if (selectedType === "PROFISSIONAL") {
            navigate('/form-medic', { state: { ...state, tipo: selectedType } });
        }
    };

    return (
        <main className="selector-main">
            <h1 id="selector-title">Você é médico ou paciente?</h1>
            <div id="selector">
                <div 
                    id="professionalBox" 
                    onClick={() => handleBoxClick("PROFISSIONAL")} 
                    className={`${selectedType === "PROFISSIONAL" ? "box-contrast" : "selector-box"} ${selectedType === "PACIENTE" ? "selector-box-blur" : ""}`}
                >
                    <img className="selector-img" src={doctorImage} alt="doctor" />
                    <h2 className={`${selectedType === "PROFISSIONAL" ? "subtitle-contrast" : "selector-subtitle"}`}>Sou médico</h2>   
                </div>
                <div 
                    id="pacientBox" 
                    onClick={() => handleBoxClick("PACIENTE")} 
                    className={`${selectedType === "PACIENTE" ? "box-contrast" : "selector-box"} ${selectedType === "PROFISSIONAL" ? "selector-box-blur" : ""}`}
                >
                    <img className="selector-img" src={pacientImage} alt="pacient" />
                    <h2 className={`${selectedType === "PACIENTE" ? "subtitle-contrast" : "selector-subtitle"}`}>Sou paciente</h2>
                </div>
            </div>
            <div id="selector-btn-side">
                <button 
                    id="btn-selector" 
                    className={`classBtn-prim ${!selectedType ? 'btn-disabled' : ''}`}
                    onClick={handleButtonClick} 
                    disabled={!selectedType} 
                >
                    Prosseguir
                </button>
            </div>
        </main>
    );
};

export default MedicPacient;