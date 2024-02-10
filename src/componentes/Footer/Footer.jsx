import React from "react";
import "./Footer.css"; 
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Correo Electrónico: info@insumosdatri.com</p>
          <p>Teléfono: +54 11 1234-5678</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul className="social-links">
            <li> Facebook <a href="https://facebook.com/insumosdatri" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
            <li> Twitter<a href="https://twitter.com/insumosdatri" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li>Instagram<a href="https://instagram.com/insumosbyestudiodatri" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul className="quick-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Insumos Datri | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;