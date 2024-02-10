import React from 'react';
import CartWidget from '../Cartwidget/CartWidgel';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar-list">
        <li className='logo'>
  <Link to="/" className="logo-link">
    <img className='logo-img' src="../public/img/logo.png" alt="logo" />
  </Link>
</li>
          <li>
            <NavLink to="/categoria/1" className="mundo">
              Microblading
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/2" className="mundo">
              Micropigmentación
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3" className="mundo">
              Insumos Tattoo
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/4" className="mundo">
              Descartables
            </NavLink>
          </li>
          <li className="search-bar">
            <input type="text" placeholder="¿Qué producto estás buscando?" />
            <button className='button'>Buscar</button>
          </li>
          
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;