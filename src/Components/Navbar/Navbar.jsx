//componentes
import React from 'react';
import Buscador from '../Buscador/Buscador';
import BotonesNav from '../BotonesNav/BotonesNav';

// imagenes
import Logo from '../../img/boby-tickets-logo-vertical.png';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="asd">
          <img src={Logo} style={{ width: 120 }} alt={Logo} />
        </a>
        {/* boton buscar */}
        
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="search-toggler-icon"></span>
        </button> */}

        {/* boton hamburguesa */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              {/* realizar map de las categorias */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="asd">Recitales</a></li>
                <li><a className="dropdown-item" href="asd">Fiestas</a></li>
                <li><a className="dropdown-item" href="asd">Conferencias</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active hover-nav" aria-current="page" href="asd">| Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active hover-nav eventos-zona" href="asd" tabindex="-1" aria-disabled="true">| Eventos en tu zona</a>
            </li>
          </ul>
          <Buscador />
          <BotonesNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
