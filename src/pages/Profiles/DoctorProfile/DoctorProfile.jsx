import React from "react";
import "./DoctorProfile.css";
import ImageTest from "../../../assets/image_profile.png";
import Button from "react-bootstrap/Button";
import ModalFormIndicacoes from "../../../components/FormIndicacoes/FormIndicacoes";
import CardIndicacao from "../../../components/CardIndica/CardIndicacao";

const DoctorProfile = () => {
  return (
    <div className="info-profile">
      <div className="basic-info">
        <div className="functions-user-container">
          <img className="profile-image" src={ImageTest} alt="Doctor Image"/>
          {/* Adicionar botões de gerencimento de sessões / consultas */}
          {/* <Button className="functions-btn">
          <ModalFormIndicacoes />
            <span onClick={() => {handleShow}}>Indicar um grupo</span>
        </Button> */}

          <Button className="functions-btn">
            <a href="/indications">Gerenciar atendimentos</a>
          </Button>

          <CardIndicacao />

        </div>
        <div className="about-user">
          <h1>Dr. House</h1>
          <h2 className="crp-style">Matrícula Profissional: 1234567</h2>{" "}
          {/*Stephany: aqui ficaria concatenado com a numeração do CRP do usuario que está armazenada no banco de dados */}
          <h3>Sobre: </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            explicabo eveniet similique, unde vitae doloribus deleniti tempora
            perferendis asperiores hic alias quidem maxime saepe nostrum
            debitis? Quam quo modi perferendis.
          </p>
        </div>
      </div>

      <hr className="line-style" />

      <div className="contact-info">
        <div className="specific-info">
          <div className="main-info">
            <div className="atendimentos-container">
              <div>
                <h3>Atende:</h3>
              </div>
              <ul>
                <li>Adultos</li>
                <li>Crianças</li>
                <li>Idosos</li>
              </ul>
            </div>

            <div className="region-speciality-cont">
              <div className="region-container">
                <h3>Região</h3>
                <ul>
                  <li>Taiba/Pecém</li>
                </ul>
              </div>

              <div className="specialty-container">
                <h3>Especialidade</h3>
                <ul>
                  <li>Ansiedade</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <aside>
          <div className="disponibility-container">
            <div>
              <h3>Disponibilidade</h3>
            </div>

            <div className="days-hours-disponibility">
              <div className="days-hours-item">
                <p><strong>Dias disponíveis</strong></p>
                <ul>
                  <li>Seg-Sáb</li>
                </ul>
              </div>
              <div className="days-hours-item">
                <p><strong>Horários</strong></p>
                <ul>
                  <li>08:00 - 12:00</li>
                  <li>15:00 - 19:00</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DoctorProfile;
