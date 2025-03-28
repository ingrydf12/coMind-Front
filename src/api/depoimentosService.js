import api from './api';

const depoimentosService = {
    listarDepoimentos: async () => {
        try {
          const token = sessionStorage.getItem("token");
          const response = await api.get("/depoimentos", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          return response.data;
        } catch (error) {
          console.error("Erro ao buscar depoimento:", error);
          throw error;
        }
    },
    
    atualizarDepoimentos: async (depoimentosData) => {
        try {
            const token = sessionStorage.getItem("token");
            const response = await api.put("/depoimentos", depoimentosData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar depoimento:", error);
            throw error;
        }
    }
}

export default depoimentosService;