import api from "./api";

export const criarPaciente = (data) => {
    return api.post("/paciente", data);
};

export const completarPaciente = (id, data) => {
    return api.put(`/paciente/${id}`, data);
};