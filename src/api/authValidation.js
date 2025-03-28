import api from "./api";

const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição de registro:", error.response?.data || error.message);
    throw error;
  }
};

const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
      sessionStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Erro na requisição de login:", error.response?.data || error.message);
    throw error;
  }
};

const logout = async () => {
  try {
    await api.post("/auth/logout");
  } catch (error) {
    console.error("Erro ao deslogar:", error.response?.data || error.message);
  }
  sessionStorage.removeItem("token");
};

export default { register, login, logout };
