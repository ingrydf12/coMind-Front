import React, { useEffect, useState } from "react";
import './PacientProfile.css';
import { useNavigate } from "react-router-dom";
import profileService from "../../../api/profileService";
import DepoimentoProfile from "./Components/DepoimentoProfile";

function PacientProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  

  if (loading) return <div className="loading-message">Carregando perfil...</div>;
  if (error) return <div className="error-message">Erro: {error}</div>;
  if (!profile) return <div>Nenhum dado de perfil encontrado</div>;

  return (
    <div className="pacient-profile">
      {profile ? (
        <div>
          <h2>Informações Pessoais</h2>
          <div>
            <p>{profile.nome}</p>
            <p>{profile.genero}</p>
            <p>{profile.idade} anos</p>
          </div>
          <div>
            <p>{profile.objetivoDaTerapia}</p>
          </div>
          <hr />
          <h2>Informações Médicas</h2>
          <div>
            <p>{profile.usoDeMedicamentos}</p>
            <p>{profile.principaisQueixas}</p>
            <p>{profile.historicoFamiliar}</p>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
      <DepoimentoProfile /> 
    </div>
  )
}

export default PacientProfile;
