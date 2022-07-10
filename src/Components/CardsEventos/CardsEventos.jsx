import React, { useState, useEffect } from 'react'

const CardsEventos = ({evento}) => {
  const {images, titulo, ubicacion } = evento
  return (
    <div className="card mx-2 my-2 g-0 shadow col-3 ">
      <img src={images.post} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default CardsEventos