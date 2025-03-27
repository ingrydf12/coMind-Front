import api from './api';

const profileService = {
  getProfile: async () => {
    try {
      const response = await api.get("/perfil");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      throw error;
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await api.put("/perfil", profileData);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      throw error;
    }
  }
};

export default profileService;