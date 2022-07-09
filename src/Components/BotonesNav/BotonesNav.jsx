import React from 'react'

// css
import './BotonesNav.css'

const BotonesNav = () => {
  return (
    <>
      <button className="btn btn-iniciar-sesion me-2 d-flex" type="submit">Iniciar Sesion</button>
      <button className="btn btn-crear-cuenta d-flex" type="submit">Crear Cuenta</button>
    </>
  )
}

export default BotonesNav