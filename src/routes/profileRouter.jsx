import { useState, useEffect } from "react";
import DoctorProfile from "../pages/Profiles/DoctorProfile/DoctorProfile";
import PacientProfile from "../pages/Profiles/PacientProfile/PacientProfile";
import RedirectRoute from "../components/RedirectRoute/RedirectRoute";

const ProfileRoute = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    setUserType(sessionStorage.getItem("tipo"));
  }, []);

  if (userType === null) return <div>Carregando...</div>; // Evita renderização prematura

  return (
    <RedirectRoute>
      {userType === "PROFISSIONAL" ? <DoctorProfile /> : <PacientProfile />}
    </RedirectRoute>
  );
};

export default ProfileRoute;