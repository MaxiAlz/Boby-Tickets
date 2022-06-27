import React from 'react'

// css
import './BotonesNav.css'

const BotonesNav = () => {
  return (
    <div className='me-4 ms-4'>
        <button class="btn btn-iniciar-sesion me-2 " type="submit">Iniciar Sesion</button>
        <button class="btn btn-crear-cuenta" type="submit">Crear Cuenta</button>
        {/* <h2 className='text-white nav-botones'>hola</h2> */}
    </div>
  )
}

export default BotonesNav