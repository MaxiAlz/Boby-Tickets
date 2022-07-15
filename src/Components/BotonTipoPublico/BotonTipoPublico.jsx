import React from 'react'
import './BotonTipoEvento.css'

const BotonTipoPublico = ({tipoEvento}) => {
console.log(tipoEvento);
let eventoPublicTipe;


  return (
    <div className='tipoEvento'>
      <p className='text-uppercase badge m-0 p-0 text-center'> {tipoEvento} </p>
    </div>
  )
}

export default BotonTipoPublico