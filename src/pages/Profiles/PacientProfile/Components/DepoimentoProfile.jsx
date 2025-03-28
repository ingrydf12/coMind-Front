import React, { useState } from "react";
import { publicarDepoimento } from "../../../../api/depoimentoService";
import { Modal, Form } from "react-bootstrap";
import Button from "../../../../components/Button/CustomButton";
import "./DepoimentoProfile.css";

function DepoimentoProfileModal({ showModal, handleClose }) {
  const [depoimentoData, setDepoimentoData] = useState({
    nome: "Anônimo",
    local: "",
    texto: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepoimentoData(prev => ({ ...prev, [name]: value }));
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
    <Modal 
      show={showModal} 
      onHide={handleClose} 
      centered
      size="lg"
      backdrop="static"
      keyboard={false}
      className="custom-modal-overlay"
      dialogClassName="custom-modal-dialog"
    >
      <Modal.Header className="modal-header">
        <Modal.Title className="modal-title">Deixe um Depoimento</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="modal-body">
        <Form onSubmit={handleSubmit} id="depoimento-profile" className="depoimento-form-container">
          <Form.Group className="form-input-area">
            <Form.Label htmlFor="nome">Seu nome (opcional)</Form.Label>
            <Form.Control
              type="text"
              id="nome"
              name="nome"
              value={depoimentoData.nome}
              onChange={handleChange}
              className="form-input"
            />
          </Form.Group>

          <Form.Group className="form-input-area">
            <Form.Label htmlFor="local">De onde você é?*</Form.Label>
            <Form.Control
              type="text"
              id="local"
              name="local"
              value={depoimentoData.local}
              onChange={handleChange}
              required
              className="form-input"
            />
          </Form.Group>

          <Form.Group className="form-input-area">
            <Form.Label htmlFor="texto">
              Diga o que achou sobre a plataforma e suas experiências*
            </Form.Label>
            <Form.Control
              as="textarea"
              id="texto"
              name="texto"
              rows={5}
              value={depoimentoData.texto}
              onChange={handleChange}
              required
              className="form-input form-textarea"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className="modal-footer">
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
      </Modal.Footer>
    </Modal>
  );
}

export default DepoimentoProfileModal;