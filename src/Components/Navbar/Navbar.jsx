import React from 'react'
import Logo from '../../img/boby-tickets-logo-vertical.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="asd">
          <img src={Logo} style={{width: 120}} alt={Logo} />
        </a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="asd">Recitales</a></li>
                <li><a className="dropdown-item" href="asd">Rock</a></li>
                <li><a className="dropdown-item" href="asd">Conferencias</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active hover-nav" aria-current="page" href="asd">| Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="asd" tabindex="-1" aria-disabled="true">| Eventos en tu zona</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
