import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pacienteService from "../../../api/pacienteService";
import DepoimentoProfile from "./Components/DepoimentoProfile";

function PacientProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await pacienteService.getUserProfile();
        setUser(response.data);
      } catch (error) {
       /* navigate("/login");*/
      }
    };
    fetchUser();
  }, [navigate]);

  return (
    <div id="pacient-profile">
      {user ? (
        <div>
          <h2>Informações Pessoais</h2>
          <div>
            <p>{user.nome}</p>
            <p>{user.genero}</p>
            <p>{user.idade} anos</p>
          </div>
          <div>
            <p>{user.objetivoDaTerapia}</p>
          </div>
          <hr />
          <h2>Informações Médicas</h2>
          <div>
            <p>{user.usoDeMedicamentos}</p>
            <p>{user.principaisQueixas}</p>
            <p>{user.historicoFamiliar}</p>
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
