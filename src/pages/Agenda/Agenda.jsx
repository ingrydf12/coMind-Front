import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Agenda.css";

const Agenda = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const navigate = useNavigate();

  const boxClick = (box) => {
    setSelectedBox(box);
  };

  const buttonClick = () => {
    //TODO: Mudar essa navegação ou remover para virar uma requisição de criação de atendimento
    navigate("/agenda-atendimento");
  };

  return (
    <div className="agenda-container">
      <main className="agenda-main">
        <h1 id="agenda-title">Preencha os dados para agendar sua consulta</h1>
        <div id="agenda-selector">
          <div
            id="especialidadeBox"
            onClick={() => boxClick("especialidadeBox")}
            className={`${
              selectedBox === "especialidadeBox"
                ? "box-local-contrast"
                : "agenda-box"
            } ${
              selectedBox === "localizacaoBox" ||
              selectedBox === "convenioBox" ||
              selectedBox === "atendimentoBox"
                ? "agenda-box-blur"
                : ""
            }`}
          >
            <h2
              className={`${
                selectedBox === "especialidadeBox"
                  ? "subtitle-text-contrast"
                  : "agenda-subtitle"
              }`}
            >
              Especialidade
            </h2>
            <select name="especialidade" id="especialidade">
              <option>Depressão</option>
              <option>Ansiedade</option>
              <option>Transtorno de estresse pós-traumático</option>
              <option>Esquizofrenia</option>
              <option>Transtorno bipolar</option>
              <option>Transtornos de personalidade</option>
              <option>Transtornos alimentares</option>
              <option>Transtorno do pânico</option>
              <option>
                Transtorno de déficit de atenção com hiperatividade (TDAH)
              </option>
              <option>Transtornos de estresse</option>
            </select>
          </div>
          <div
            id="localizacaoBox"
            onClick={() => boxClick("localizacaoBox")}
            className={`${
              selectedBox === "localizacaoBox"
                ? "box-local-contrast"
                : "agenda-box"
            } ${
              selectedBox === "especialidadeBox" ||
              selectedBox === "convenioBox" ||
              selectedBox === "atendimentoBox"
                ? "agenda-box-blur"
                : ""
            }`}
          >
            <h2
              className={`${
                selectedBox === "localizacaoBox"
                  ? "subtitle-text-contrast"
                  : "agenda-subtitle"
              }`}
            >
              Localização
            </h2>
            <input type="text" name="localização" id="localização" />
          </div>
          <div
            id="atendimentoBox"
            onClick={() => boxClick("atendimentoBox")}
            className={`${
              selectedBox === "atendimentoBox"
                ? "box-local-contrast"
                : "agenda-box"
            } ${
              selectedBox === "especialidadeBox" ||
              selectedBox === "localizacaoBox" ||
              selectedBox === "convenioBox"
                ? "agenda-box-blur"
                : ""
            }`}
          >
            <h2
              className={`${
                selectedBox === "atendimentoBox"
                  ? "subtitle-text-contrast"
                  : "agenda-subtitle"
              }`}
            >
              Atendimento
            </h2>
            <input type="radio" name="type" id="presencial" />
            <label htmlFor="presencial">Presencial</label>
            <input type="radio" name="type" id="remoto" />
            <label htmlFor="remoto">Remoto</label>
          </div>
        </div>
        <div id="agenda-btn-side">
          <Button
            id="btn-agenda"
            className={`classBtn-prim ${!selectedBox ? "btn-disabled" : ""}`}
            onClick={buttonClick}
            disabled={!selectedBox}
          >
            Prosseguir
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Agenda;
