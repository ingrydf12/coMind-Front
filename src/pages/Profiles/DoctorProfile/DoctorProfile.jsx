import React, { useState, useEffect } from "react";
import "./DoctorProfile.css";
import defaultProfileImage from "../../../assets/image_profile.png";
import Button from "react-bootstrap/Button";
import ModalFormIndicacoes from "../../../components/FormIndicacoes/FormIndicacoes";
import CardIndicacao from "../../../components/CardIndica/CardIndicacao";
import profileService from "../../../api/profileService"

const DoctorProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await profileService.getProfile();
        console.log("Resposta completa da API:", response);
        
        const profileData = {
          ...response.user,
          ...response.profissional
        };
        
        console.log("Dados combinados do perfil:", profileData);
        setProfile(profileData);
      } catch (err) {
        setError(err.message || "Erro ao carregar perfil");
        console.error("Erro ao carregar perfil:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) return <div className="loading-message">Carregando perfil...</div>;
  if (error) return <div className="error-message">Erro: {error}</div>;
  if (!profile) return <div>Nenhum dado de perfil encontrado</div>;

  // Função para formatar os dias de atendimento
  const formatAvailableDays = (days) => {
    if (!days || days.length === 0) return "Não informado";
    return days.join(", ");
  };

  // Função para formatar os horários
  const formatAvailableHours = (hours) => {
    if (!hours || hours.length === 0) return "Não informado";
    return hours.join(" | ");
  };

  return (
    <div className="info-profile">
      <div className="basic-info">
        <div className="functions-user-container">
          <img 
            className="profile-image" 
            src={profile.photoUrl || defaultProfileImage} 
            alt="Doctor"
          />

          <Button className="functions-btn">
            <a href="/atendimentos">Gerenciar atendimentos</a>
          </Button>

          <CardIndicacao />
        </div>
        
        <div className="about-user">
          <h1>{profile.fullName || profile.nomeUsario}</h1>
          <h2 className="crp-style">Matrícula Profissional: {profile.crp || "Não informado"}</h2>
          <h3>Sobre: </h3>
          <p>{profile.bio || "Nenhuma descrição fornecida."}</p>
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
                {profile.targetGroups && profile.targetGroups.length > 0 ? (
                  profile.targetGroups.map((group, index) => (
                    <li key={index}>{group}</li>
                  ))
                ) : (
                  <li>Não informado</li>
                )}
              </ul>
            </div>

            <div className="region-speciality-cont">
              <div className="region-container">
                <h3>Região</h3>
                <ul>
                  {profile.regions && profile.regions.length > 0 ? (
                    profile.regions.map((region, index) => (
                      <li key={index}>{region}</li>
                    ))
                  ) : (
                    <li>Não informado</li>
                  )}
                </ul>
              </div>

              <div className="specialty-container">
                <h3>Especialidade</h3>
                <ul>
                  {profile.specialties && profile.specialties.length > 0 ? (
                    profile.specialties.map((specialty, index) => (
                      <li key={index}>{specialty}</li>
                    ))
                  ) : (
                    <li>Não informado</li>
                  )}
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
                  <li>{formatAvailableDays(profile.availableDays)}</li>
                </ul>
              </div>
              <div className="days-hours-item">
                <p><strong>Horários</strong></p>
                <ul>
                  <li>{formatAvailableHours(profile.availableHours)}</li>
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