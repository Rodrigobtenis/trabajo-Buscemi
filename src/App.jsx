import React from 'react';
import NavBar from './componentes/Navbar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import Footer from './componentes/Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          
          <Route path='/' element={<ItemListConteiner />} />

          
          <Route path='/categoria/:idCategoria' element={<ItemListConteiner />} />

          
          <Route path='/Item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/checkout' element = {<Checkout/>} />
          
        </Routes>
<Footer />

        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;