import React, { useState } from "react";
import "../../styles/MedicPacient.css";

const MedicPacient = () => {
    
    const [selectedBox, setSelectedBox] = useState();

    const boxClick = (box) => {
        setSelectedBox(box);
    };

    return (
        <main className="selector-main">
            <h1 id="selector-title">Você é Médico ou Paciente?</h1>
            <div id="selector">
                <div id="box1" onClick={() => boxClick("box1")} className={`${selectedBox === "box1" ? "box-contrast" : "selector-box"} ${selectedBox === "box2" ? "selector-box-blur" : ""}`}>
                    <img className="selector-img" src="src\assets\doctorMedia.png" alt="doctor" />
                    <h2 className={`${selectedBox === 'box1' ? 'subtitle-contrast' : 'selector-subtitle'}`}>Sou médico</h2>   
                </div>
                <div id="box2" onClick={() => boxClick("box2")} className={`${selectedBox === "box2" ? "box-contrast" : "selector-box"} ${selectedBox === "box1" ? "selector-box-blur" : ""}`}>
                    <img className="selector-img" src="src\assets\pacientMedia.png" alt="pacient" />
                    <h2 className={`${selectedBox === 'box2' ? 'subtitle-contrast' : 'selector-subtitle'}`}>Sou paciente</h2>
                </div>
            </div>
            <div id="selector-btn-side">
                <button id="btn-selector">
                    <a href={`${selectedBox === "box1" ? "/form-medic" : "/form-pacient"}`}>Prosseguir</a>
                </button>
            </div> 
        </main>
    );
}

export default MedicPacient;

/*
<button id="btn-selector" onClick={buttonClick}>
    Prosseguir
</button>

<button id="btn-selector">
    <a href={buttonClick}>Prosseguir</a>
</button>
*/

/*
const buttonClick = () => {
    if (selected === "box1"){
        navigate("/form-medic")
    } else if(selected === "box2"){
        navigate("/form-pacient")
    };   
};
*/