import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
//import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListConteiner = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {

        const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    // useEffect(() => {

    //   const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    //   funcionProductos(idCategoria)
    //   .then(res => setProductos(res))
    //   .catch(error => console.log(error))



    // }, [idCategoria]);


    return (
        <div>

            <img className='banner' src="../img/banner.png" alt="" />
            <ItemList productos={productos} />


        </div>

    )
}

export default ItemListConteiner
