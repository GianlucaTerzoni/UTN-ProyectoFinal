import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../data/mockData';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockData.find((item) => item.id.toString() === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="detalle-producto">
      <img src={product.imagen} alt={product.nombre} className="imagen-producto" />
      <div className="informacion-producto">
        <h2>{product.nombre}</h2>
        <p>Precio: <span className="precio">${product.precio}</span></p>
        <p>Stock: {product.stock}</p>
        <p>Código: {product.codigo}</p>
      </div>
    </div>
  );
};

export default ProductDetail;