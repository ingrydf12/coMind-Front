import React from "react";
import './Header.css';
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/'); 
      };
    
    return (
        <Navbar bg="dark" variant="light" expand="lg">
            <img src="logoCoMind.svg" alt="logo" onClick={backToHome}></img>
            <Container>
                <Nav className="mr-auto">
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#indicacao">Grupos</Nav.Link>
                    <Nav.Link href="#depoiment">Depoimentos</Nav.Link>
                </Nav>
                <Button variant="primary" href="/login">Entrar</Button>
                <Button variant="outline-primary" href="/register">Criar conta</Button>
            </Container>
        </Navbar>
    );
}

export default Header;
