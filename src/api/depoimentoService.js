import api from "./api";

export const publicarDepoimento = (id, data) => {
    return api.put(`/depoimentos/${id}`, data);
};