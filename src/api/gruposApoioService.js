import api from './api';

const gruposApoioService = {
  listarGruposApoio: async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get("/grupos-apoio", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao listar grupos de apoio:", error);
      throw error;
    }
  },

  buscarGruposApoioPorId: async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get(`/grupos-apoio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar grupo de apoio por ID:", error);
      throw error;
    }
  },

  criarGruposApoio: async (grupoData) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.post("/grupos-apoio", grupoData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar grupo de apoio:", error);
      throw error;
    }
  },

  atualizarGruposApoio: async (id, grupoData) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.put(`/grupos-apoio/${id}`, grupoData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar grupo de apoio:", error);
      throw error;
    }
  },

  excluirGruposApoio: async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.delete(`/grupos-apoio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir grupo de apoio:", error);
      throw error;
    }
  }
};

export default gruposApoioService;