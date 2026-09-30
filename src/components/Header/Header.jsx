import React from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
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

  const backToHomeProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img
          src="logoCoMind.svg"
          alt="logo"
          onClick={backToHome}
          style={{ cursor: "pointer" }}
          className="navbar-brand me-3"
        />

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/grupos" className="nav-link">Grupos</Link>
            </li>
            <li className="nav-item">
              <Link to="/depoimentos" className="nav-link">Depoimentos</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {isAuthenticated ? (
              <>
                <span
                  className="navbar-text autenticado-btn me-2"
                  onClick={backToHomeProfile}
                  style={{ cursor: "pointer" }}
                >
                  Bem-vindo, {userName}
                </span>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate("/login")}
                >
                  Entrar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => navigate("/register")}
                >
                  Criar conta
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;