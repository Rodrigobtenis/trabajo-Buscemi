import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListConteiner = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();


    useEffect(() => {

      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

      funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))


            
    }, [idCategoria]);


    return (
        <div>

            <h2> Mis Productos </h2>
            <ItemList productos={productos} />


        </div>

    )
}

export default ItemListConteiner