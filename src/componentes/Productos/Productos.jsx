import { useState, useEffect } from "react"
import { db } from "../../services/config"

import { getDocs, collection, query } from "firebase/firestore"

const Productos = () => {
    const [producto, setProducto] = useState ([]);
  return (
    <div>
        
<h2>Mis productos</h2>

    </div>
  )
}

export default Productos