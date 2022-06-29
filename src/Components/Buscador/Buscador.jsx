import React from 'react'
import './Buscador.css'

const Buscador = () => {
  return (
    <form className="d-flex align-items-center position-buscador formulario-container">
        <input className="form-control bg-dark text-white ps-5" type="search" placeholder="Buscar" />
        <i class="bi bi-search" />
    </form>
  )
}

export default Buscador