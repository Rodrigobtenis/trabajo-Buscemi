import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1);


    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
    <div className="contenedor-carrito-boton" >
    <div   >
        <button onClick={decrementar}> - </button>
        <p className="numero-central" > {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
      <button  className="agregar-carrito" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </div>
  )
}

export default ItemCount