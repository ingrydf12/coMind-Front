import React from "react";
import '../styles/Header.css';
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="light" expand="lg">
            <img src="logoCoMind.svg" alt="logo"></img>
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