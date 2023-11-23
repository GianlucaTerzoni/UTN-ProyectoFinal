import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-heading">Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email" className="login-form-label">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-form-input"
            required
          />
        </label>
        <label htmlFor="password" className="login-form-label">
          Contraseña:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-form-input"
            required
          />
        </label>
        <button type="submit" className="login-form-button">
          Iniciar Sesión
        </button>
      </form>
      <p className="login-form-text">
        ¿No tienes una cuenta?{" "}
        <Link to="/register" className="login-form-link">
          Regístrate aquí
        </Link>
        .
      </p>
    </div>
  );
};

export default LoginForm;
