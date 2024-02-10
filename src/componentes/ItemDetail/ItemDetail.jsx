import { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, stock, precio, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }



  return (
    <div className='contenedorItem'>
  <div className='detalleProducto'>
    <img src={img} alt={nombre} className='imagenProducto' />
    <div className='infoProducto'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: ${precio}</h3>
      <p>ID: {id} </p>
      <p>Stock: {stock}</p>
      {
        agregarCantidad > 0 ? (
          <Link to= "/cart"> Terminar Compra</Link>
        ) : (
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        )
      }
    </div>
  </div>
</div>
  )
}

export default ItemDetail