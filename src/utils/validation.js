//MARK: - Registro (Simulação com localStorage por enquanto)
export const registerUser = async (name, email, password) => {
    const response = await fetch('/mockData.json');
    const users = await response.json();
  
    // verifica se o email já existe
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
  
    localStorage.setItem('users', JSON.stringify(users)); //salva no localStorage
  
    return { success: true, message: "Cadastro realizado com sucesso!", user: newUser };
  };
  

//MARK: - Autenticação
export const authenticateUser = async (email, password) => {
    const response = await fetch('/mockData.json');
    const users = await response.json();
  
    const user = users.find(user => user.email === email);
  
    return new Promise((resolve, reject) => {
      if (user) {
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
  