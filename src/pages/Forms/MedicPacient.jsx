import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/MedicPacient.css";
import doctorImage from "../../assets/doctorMedia.png";
import pacientImage from "../../assets/pacientMedia.png";

const MedicPacient = () => {
    const [selectedBox, setSelectedBox] = useState(null);
    const navigate = useNavigate();

    const boxClick = (box) => {
        setSelectedBox(box);
    };

    const buttonClick = () => {
        if (selectedBox === "professionalBox") {
            navigate("/form-medic");
        } else if (selectedBox === "pacientBox") {
            navigate("/form-pacient");
        }
    };

    return (
        <main className="selector-main">
            <h1 id="selector-title">Você é médico ou paciente?</h1>
            <div id="selector">
                <div 
                    id="professionalBox" 
                    onClick={() => boxClick("professionalBox")} 
                    className={`${selectedBox === "professionalBox" ? "box-contrast" : "selector-box"} ${selectedBox === "pacientBox" ? "selector-box-blur" : ""}`}
                >
                    <img className="selector-img" src={doctorImage} alt="doctor" />
                    <h2 className={`${selectedBox === "professionalBox" ? "subtitle-contrast" : "selector-subtitle"}`}>Sou médico</h2>   
                </div>
                <div 
                    id="pacientBox" 
                    onClick={() => boxClick("pacientBox")} 
                    className={`${selectedBox === "pacientBox" ? "box-contrast" : "selector-box"} ${selectedBox === "professionalBox" ? "selector-box-blur" : ""}`}
                >
                    <img className="selector-img" src={pacientImage} alt="pacient" />
                    <h2 className={`${selectedBox === "pacientBox" ? "subtitle-contrast" : "selector-subtitle"}`}>Sou paciente</h2>
                </div>
            </div>
            <div id="selector-btn-side">
                <button 
                    id="btn-selector" 
                    class={`classBtn-prim ${!selectedBox ? 'btn-disabled' : ''}`}
                    onClick={buttonClick} 
                    disabled={!selectedBox} 
                >
                    Prosseguir
                </button>
            </div>
        </main>
    );
};

export default MedicPacient;