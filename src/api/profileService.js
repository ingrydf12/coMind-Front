import api from './api';

const profileService = {
  getProfile: async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get("/perfil", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      throw error;
    }
  },

  updateProfile: async (profileData) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.put("/perfil", profileData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      throw error;
    }
  }
};

export default profileService;
