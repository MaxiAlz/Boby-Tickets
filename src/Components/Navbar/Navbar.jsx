//componentes
import React, { useState } from 'react';
import Buscador from '../Buscador/Buscador';
import BotonesNav from '../BotonesNav/BotonesNav';

// imagenes
import Logo from '../../img/boby-tickets-logo-vertical.png';
//css
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="asd">
          <img src={Logo} style={{ width: 180 }} alt={Logo} />
        </a>

        {/* boton buscar */}
        <div className='d-flex align-items-center'>
          <button className="navbar-toggler boton-lupa me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Lupita" aria-controls="navbar-Lupita" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-search lupa-icon-2" />
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSuppContent-Burguer" aria-controls="navbarSuppContent-Burguer" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className='collapse navbar-collapse d-lg-none' id='navbar-Lupita'>
          <div className='d-flex justify-content-center d-lg-none mt-2'>
            <Buscador />
          </div>
        </div>

        {/* boton hamburguesa */}
        <div className="container-fluid collapse navbar-collapse" id="navbarSuppContent-Burguer">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-start">
            <li className="nav-item dropdown ">
              <div className='d-lg-none'>
                <a class="nav-link dropdown-toggle active" data-bs-toggle="collapse" href="#collapseCategorias" role="button" aria-expanded="false" aria-controls="collapseCategorias">
                  | Categorias
                </a>
                <div class="collapse multi-collapse menu-categorias pe-5" id="collapseCategorias">
                  <li><a className="nav-link active text-start" href="asd">Recitales</a></li>
                  <li><a className="nav-link active text-start" href="asd">Fiestas</a></li>
                  <li><a className="nav-link active text-start" href="asd">Conferencias</a></li>
                </div>
              </div>

              <div className='d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block'>
                <a className="nav-link dropdown-toggle active " href="asd" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                {/* realizar map de las categorias */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="asd">Recitales</a></li>
                  <li><a className="dropdown-item" href="asd">Fiestas</a></li>
                  <li><a className="dropdown-item" href="asd">Conferencias</a></li>
                </ul>
              </div>

            </li>
            <li className="nav-item">
              <a className="nav-link active hover-nav" aria-current="page" href="asd">| Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active hover-nav eventos-zona d-lg-none d-xl-block" href="asd" tabindex="-1" aria-disabled="true">| Eventos en tu zona</a>
            </li>
          </ul>
          <div className="d-none d-lg-block me-3">
            <Buscador />
          </div>
          <BotonesNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
