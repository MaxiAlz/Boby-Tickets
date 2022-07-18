import React from 'react'
import './BotonTipoEvento.css'

const BotonTipoPublico = ({tipoEvento}) => {
  return (
    <div className='tipoEvento text-center'>
      <p className='text-uppercase badge'> {tipoEvento} </p>
    </div>
  )
}

export default BotonTipoPublico