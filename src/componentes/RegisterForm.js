import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    setRegistrationSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };

  return (
    <div className="register-form-container">
      <h2 className="register-form-heading">Registrarse</h2>
      {registrationSuccess ? (
        <p className="registration-success-message">
          ¡Gracias por registrarte! Serás redirigido al formulario de inicio de
          sesión.
        </p>
      ) : (
        <form className="register-form" onSubmit={handleRegister}>
          <label htmlFor="username" className="register-form-label">
            Usuario:
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="register-form-input"
              required
            />
          </label>
          <label htmlFor="email" className="register-form-label">
            Email:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-form-input"
              required
            />
          </label>
          <label htmlFor="password" className="register-form-label">
            Contraseña:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-form-input"
              required
            />
          </label>
          <button type="submit" className="register-form-button">
            Registrarse
          </button>
        </form>
      )}
      <p className="register-form-text">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="register-form-link">
          Inicia sesión aquí
        </Link>
        .
      </p>
    </div>
  );
};

export default RegisterForm;
