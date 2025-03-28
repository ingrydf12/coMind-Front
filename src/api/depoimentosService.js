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
      console.error("Erro ao listar depoimentos:", error);
      throw error;
    }
  },

  buscarDepoimentosPorId: async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get(`/depoimentos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar depoimento por ID:", error);
      throw error;
    }
  },

  criarDepoimentos: async (depoimentosData) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.post("/depoimentos", depoimentosData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar depoimento:", error);
      throw error;
    }
  },

  atualizarDepoimentos: async (id, depoimentosData) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.put(`/depoimentos/${id}`, depoimentosData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar depoimento:", error);
      throw error;
    }
  },

  excluirDepoimentos: async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.delete(`/depoimentos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir depoimento:", error);
      throw error;
    }
  }
};

export default depoimentosService;