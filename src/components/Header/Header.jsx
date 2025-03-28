import React from "react";
import "./Header.css"; // Mantenha o CSS antigo
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="light" expand="lg">
      <img
        src="logoCoMind.svg"
        alt="logo"
        onClick={backToHome}
        style={{ cursor: "pointer" }}
      />
      <Container>
        <Nav className="mr-auto">
          <Nav.Link>Sobre</Nav.Link>
          <Nav.Link>Grupos</Nav.Link>
          <Nav.Link>Depoimentos</Nav.Link>
        </Nav>

        {isAuthenticated ? (
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