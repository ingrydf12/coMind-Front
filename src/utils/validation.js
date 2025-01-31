//NOTA: Segurança de dados foi de base

//MARK: - Registro (Simulação com localStorage por enquanto)
export const registerUser = async (name, email, password) => {
  let users = JSON.parse(localStorage.getItem('users')) || []; 

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return { success: false, message: "E-mail já está em uso!" };
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(newUser);

  localStorage.setItem('users', JSON.stringify(users));

  return { success: true, message: "Cadastro realizado com sucesso!", user: newUser };
};

//MARK: - Autenticação
export const authenticateUser = async (email, password) => {
  // Simulação via localStorage + mockData
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Procura o usuário pelo e-mail
  const user = users.find(user => user.email === email);

  return new Promise((resolve, reject) => {
    if (user) {
      // Senha
      if (user.password === password) {
        resolve({
          success: true,
          message: `Bem-vindo, ${user.name}!`,
          user,
        });
      } else {
        reject({
          success: false,
          message: "Senha inválida",
        });
      }
    } else {
      reject({
        success: false,
        message: "E-mail não encontrado",
      });
    }
  });
};

  
