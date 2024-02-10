import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="productoscarrito" >No hay productos en el carrito</h2>
                <div className="productoscarritolink" ><Link  to="/"  > Ver Productos </Link>
                </div>
            </>
        )
    }
    return (
        <div className="cart-container">
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h3 className="cart-total"> Total:$ {total}  </h3>
           <div className="cart-buttons"> <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart