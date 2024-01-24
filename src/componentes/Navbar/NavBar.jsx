import React from 'react'
import CartWidget from '../Cartwidget/CartWidgel';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>



      <Link to="/">
        <h1 className='anestesiasTattoo'>Anestesias Tattoo</h1>
      </Link>



      <nav>

        <ul>

          <li>
            <NavLink to="/categoria/2">
              Piel Cerrada
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/2">
              Piel Abierta
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3">
              Combos
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3">
              Cremas
            </NavLink>
          </li>

        </ul>
      </nav>
      <CartWidget />

    </header>
  )
}

export default NavBar