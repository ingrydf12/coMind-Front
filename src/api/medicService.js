import api from "./api";

export const completarProfissional = (id, data) => {
    return api.put(`/profissional/${id}`, data);
};