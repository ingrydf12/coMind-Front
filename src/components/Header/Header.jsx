import React from "react";
import "./Header.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, userData, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const backToHome = () => {
    navigate("/");
  };

  const goToDashboard = () => {
    if (!userData) return;
    
    switch(userData.role) {
      case 'ADMIN':
        navigate('/dashboard');
        break;
      case 'PROFISSIONAL':
        navigate('/empty');
        break;
      case 'PACIENTE':
        navigate('/empty');
        break;
      default:
        navigate('/');
    }
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
            <Navbar.Text className="autenticado-btn">Bem-vindo, {userData.nome}</Navbar.Text>
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