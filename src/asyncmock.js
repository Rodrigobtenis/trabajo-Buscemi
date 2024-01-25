const productos = [
    { id: "1", nombre: "Anestesia Tktx", precio: 900, img: "../img/anestesiatktx.png", idCat: "2" },
    { id: "2", nombre: "Anestesia Tktx Spray", precio: 500, img: "../img/anestesiatktxspray.png", idCat: "2" },
    { id: "3", nombre: "Anestesia Tag 45", precio: 3200, img: "../img/tag45.png", idCat: "3" },
    { id: "4", nombre: "Combo Micropigmentacion", precio: 4100, img: "../img/combomicro.png", idCat: "3" },
    { id: "5", nombre: "Combo Tatuajes", precio: 3200, img: "../img/combotattoo.png", idCat: "3" },
    { id: "6", nombre: "Filos Microblading x unidad", precio: 270, img: "../img/filos_microblading.png", idCat: "3" },
   
    { id: "10", nombre: "Tebori Doble punta", precio: 2900, img: "../img/tebori_doble_punta.png", idCat: "3" },
    { id: "11", nombre: "Piel Sintetica Chica", precio: 2300, img: "../img/piel_sintetica_chica.png", idCat: "3" },
    { id: "12", nombre: "Piel Sintetica Cejas", precio: 3200, img: "../img/piel_sintetica_cejas.png", idCat: "3" },
    { id: "13", nombre: "Piel Sintetica Grande A4", precio: 4500, img: "../img/piel_sintetica_grande.png", idCat: "3" },
    { id: "14", nombre: "Film Microblading", precio: 1500, img: "../img/film_microblading.png", idCat: "3" },
    { id: "15", nombre: "Guantes Nitrilo Negros", precio: 6900, img: "../img/guantes_nitrilo_negros.png", idCat: "3" },
    { id: "16", nombre: "Guantes Nitrilo Rosas", precio: 7200, img: "../img/guantes_nitrilo_rosas.png", idCat: "3" },
    { id: "17", nombre: "Marcador Quirurgico", precio: 2000, img: "../img/marcador_quirurgico.png", idCat: "3" },
    { id: "18", nombre: "Lapiz Dermatografico Negro", precio: 910, img: "../img/lapiz_dermatografico_negro.png", idCat: "3" },
    

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
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 400)
    })

}