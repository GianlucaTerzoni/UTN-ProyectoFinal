import React from "react";
import mockData from "../data/mockData";
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className="contenedor">
      {mockData.map((producto) => (
        <Link to={`/product/${producto.id}`} key={producto.id} className="producto-enlace">
        <div key={producto.id} className="producto">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="imagen-producto"
          />
          <div className="detalles-producto">
            <h3>{producto.nombre}</h3>
          </div>
        </div>
        </Link>
       
      ))}
    </div>
  );
};

export default Home;
