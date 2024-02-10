import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import React from 'react'
import './Cartwidget.css';


const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div className='carrito-total-total' >
<Link to="/cart">
      <img className='imgCarrito' src="/img/carritonuevo.png" alt="" />
{
  cantidadTotal > 0 && <strong className='stronger'> {cantidadTotal} </strong>
}
</Link>
      


    </div>
  )
}

export default CartWidget