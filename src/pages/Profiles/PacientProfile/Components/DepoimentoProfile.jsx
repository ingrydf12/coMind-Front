import React, { useState } from "react";
import { publicarDepoimento } from "../../../../api/depoimentoService";
import Button from "../../../../components/Button/CustomButton";
import "./DepoimentoProfile.css";

function DepoimentoProfileModal({ showModal, handleClose }) {
  const [depoimentoData, setDepoimentoData] = useState({
    nome: "Anônimo",
    local: "",
    texto: "",
  });

  if (!showModal) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepoimentoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await publicarDepoimento({ ...depoimentoData });
      handleClose();
    } catch (error) {
      console.error("Erro ao enviar o depoimento: ", error);
    }
  };

  return (
    <div
      className="modal show d-block custom-modal-overlay"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered custom-modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Deixe um Depoimento</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Fechar"
              onClick={handleClose}
            ></button>
          </div>

          <div className="modal-body">
            <form
              onSubmit={handleSubmit}
              id="depoimento-profile"
              className="depoimento-form-container"
            >
              <div className="form-input-area mb-3">
                <label htmlFor="nome" className="form-label">
                  Seu nome (opcional)
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={depoimentoData.nome}
                  onChange={handleChange}
                  className="form-control form-input"
                />
              </div>

              <div className="form-input-area mb-3">
                <label htmlFor="local" className="form-label">
                  De onde você é?*
                </label>
                <input
                  type="text"
                  id="local"
                  name="local"
                  value={depoimentoData.local}
                  onChange={handleChange}
                  required
                  className="form-control form-input"
                />
              </div>

              <div className="form-input-area mb-3">
                <label htmlFor="texto" className="form-label">
                  Diga o que achou sobre a plataforma e suas experiências*
                </label>
                <textarea
                  id="texto"
                  name="texto"
                  rows={5}
                  value={depoimentoData.texto}
                  onChange={handleChange}
                  required
                  className="form-control form-input form-textarea"
                />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <Button
              variant="secondary"
              onClick={handleClose}
              buttonText="Cancelar"
              isOutlined={true}
              className="me-2"
            />
            <Button
              type="submit"
              form="depoimento-profile"
              buttonText="Enviar Depoimento"
              isOutlined={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepoimentoProfileModal;
