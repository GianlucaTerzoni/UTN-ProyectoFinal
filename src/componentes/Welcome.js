import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="container">
    <div className="welcome-container">
      <h2 className="welcome-heading">Bienvenido</h2>
      <p className="welcome-text">¿Ya tienes una cuenta?</p>
      <button className="login-button" onClick={handleLoginClick}>
        Iniciar Sesión
      </button>
      <p className="welcome-text">¿Necesitas registrarte?</p>
      <button className="register-button" onClick={handleRegisterClick}>
        Registrarse
      </button>
    </div>
    </div>
  );
};

export default Welcome;
