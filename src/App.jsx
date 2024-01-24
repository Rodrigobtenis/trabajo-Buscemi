import React from 'react';
import NavBar from './componentes/Navbar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Ruta para la lista de productos */}
          <Route path='/' element={<ItemListConteiner />} />

          {/* Ruta para la lista de productos filtrada por categoría */}
          <Route path='/categoria/:idCategoria' element={<ItemListConteiner />} />

          {/* Ruta para ver detalles de un producto */}
          <Route path='/Item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;