import axios from "axios";

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

//MARK: - Registro
export const registerUser = async (name, email, password, userType) => {
  if (!validateEmail(email)) {
    return { success: false, message: "E-mail inválido!" };
  }

  if (password.length < 6) {
      return { success: false, message: "A senha deve ter pelo menos 6 caracteres!" };
  }

  let users = JSON.parse(sessionStorage.getItem('users')) || []; 

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
      return { success: false, message: "E-mail já está em uso!" };
  }

  const newUser = {
      id: users.length + 1,
      name,
      email,
      password, // ATENÇÃO: Isso deve ser enviado para o back-end para hashing
      userType: userType || "user",
  };

  users.push(newUser);
  sessionStorage.setItem('users', JSON.stringify(users));

  return { success: true, message: "Cadastro realizado com sucesso!", user: newUser };
};

  //MARK: - Autenticação
  export const authenticateUser = async (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(sessionStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                resolve({ 
                    message: "Login bem-sucedido!", 
                    userType: user.userType,
                    user: user,
                });
            } else {
                reject(new Error("Credenciais inválidas."));
            }
        }, 1000);
    });
};