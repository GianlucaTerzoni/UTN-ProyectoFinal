import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import ProductDetail from "./componentes/ProductDetail";
import RegisterForm from "./componentes/RegisterForm";
import LoginForm from "./componentes/LoginForm";
import Welcome from "./componentes/Welcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/home" element = {<Home />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
