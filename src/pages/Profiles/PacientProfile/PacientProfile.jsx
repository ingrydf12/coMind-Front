import React, { useEffect, useState } from "react";
import "./PacientProfile.css";
import { useNavigate } from "react-router-dom";
import profileService from "../../../api/profileService";
import { Button } from "react-bootstrap";
import DepoimentoProfileModal from "./Components/DepoimentoProfile";

function PacientProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDepoimentoModal, setShowDepoimentoModal] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await profileService.getProfile();
        console.log("Dados do perfil:", profileData);
        setProfile(profileData);
      } catch (err) {
        setError(err.message || "Erro ao carregar perfil");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const openDepoimentoModal = () => setShowDepoimentoModal(true);
  const closeDepoimentoModal = () => setShowDepoimentoModal(false);

  if (loading)
    return <div className="loading-message">Carregando perfil...</div>;
  if (error) return <div className="error-message">Erro: {error}</div>;
  if (!profile) return <div>Nenhum dado de perfil encontrado</div>;

  return (
    <div className="pacient-profile">
      {profile ? (
        <div>
          <div className="profile-pacient-about">
            <div className="aside-profile-pacient">
              <img
                className="profile-image"
                src="https://raw.githubusercontent.com/ingrydf12/coMind-Front/fbd6b8e28cb22c7c026bd0f3a329c383c1864d42/src/assets/defaultProfile.svg"
                alt="defaultProfile image"
              />

              <Button 
                className="functions-btn" 
                onClick={openDepoimentoModal}
                variant="primary"
              >
                Fazer depoimento
              </Button>

              <Button className="functions-btn" variant="secondary">
                <a href="/atendimentos" className="session-link">Ver minhas sessões</a>
              </Button>
            </div>

            <div className="personal-pacient-info">
              <h1>Informações pessoais</h1>
              <h2>{profile.nomeUsario}</h2>
              <p>{profile.genero || "Não definido"}</p>
              <p>{profile.idade || "Idade não informada"}</p>
              <p>
                <strong>Meu objetivo com a terapia é: </strong>
                {profile.objetivoDaTerapia || "Objetivo não definido"}
              </p>
            </div>
          </div>

          <hr className="divider-style" />

          <div className="extra-info-pacient">
            <h1>Informações médicas</h1>
            <p>
              <strong>Medicamentos: </strong>
              {profile.usoDeMedicamentos || "Não informado"}
            </p>
            <p>
              <strong>Minhas principais queixas: </strong>
              {profile.principaisQueixas || "Não informado"}
            </p>
            <p>
              <strong>Histórico familiar: </strong>
              {profile.historicoFamiliar || "Não informado ou não possui."}
            </p>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}

      <DepoimentoProfileModal 
        showModal={showDepoimentoModal} 
        handleClose={closeDepoimentoModal} 
      />
    </div>
  );
}

export default PacientProfile;