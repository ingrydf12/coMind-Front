import api from "./api";

export const completarPaciente = (id, data) => {
    return api.put(`/paciente/${id}`, data);
};

const getUserProfile = async () => {
    return api.get("/paciente");
};

export default { getUserProfile };