const productos = [
    { id: "1", nombre: "Anestesia Tktx", precio: 900, img: "../img/anestesiatktx.png", idCat: "2" },
    { id: "2", nombre: "Anestesia Tktx Spray", precio: 500, img: "../img/anestesiatktxspray.png", idCat: "2" },
    { id: "3", nombre: "Anestesia Tag 45", precio: 3200, img: "../img/tag45.png", idCat: "3" },
    { id: "4", nombre: "Combo Micropigmentacion", precio: 4100, img: "../img/combomicro.png", idCat: "3" },
    { id: "5", nombre: "Combo Tatuajes", precio: 3200, img: "../img/combotattoo.png", idCat: "3" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })

}

export const getUnProducto = (id) => {

    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)

    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
const productosCategoria = productos.filter(prod => prod.idCat ===idCategoria)
resolve(productosCategoria)
        }, 400)
    })

}