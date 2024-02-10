import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>


      <img src={img} alt="nombre" />
      <h3> {nombre} </h3>
      <p>ID: {id} </p>
      <h3>${precio} </h3>

      <Link to={`/item/${id}`} className='verdetalles'> Ver Detalles </Link>

      
      
    </div>
  )
}

export default Item