import React from "react";
import "./Header.css"; // Mantenha o CSS antigo
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; // Importe o useAuth

const Header = () => {
  const { isAuthenticated, userName, logout } = useAuth(); // Use o contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Chama a função de logout do contexto
    navigate("/login"); // Redireciona para a página de login
  };

  const backToHome = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <Navbar bg="dark" variant="light" expand="lg">
      <img
        src="logoCoMind.svg"
        alt="logo"
        onClick={backToHome}
        style={{ cursor: "pointer" }} // Adiciona um cursor de ponteiro para indicar que é clicável
      />
      <Container>
        <Nav className="mr-auto">
          <Nav.Link>Sobre</Nav.Link>
          <Nav.Link>Grupos</Nav.Link>
          <Nav.Link>Depoimentos</Nav.Link>
        </Nav>

        {isAuthenticated ? ( // Verifica se o usuário está autenticado
          <>
            <Navbar.Text className="autenticado-btn">Bem-vindo, {userName}</Navbar.Text>
            <Button variant="outline-danger" onClick={handleLogout}>
              Sair
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" href="/login">
              Entrar
            </Button>
            <Button variant="outline-primary" href="/register" style={{ marginLeft: "10px" }}>
              Criar conta
            </Button>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;