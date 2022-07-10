import React from 'react'

const Banner = ({ eventos }) => {

  console.log(eventos);

  return (
    <>
    {
      eventos.slice(1, eventos.length).map(evento => {
        <div className="carousel-item">
          <img src={evento.images.banner} class="d-block w-100" alt={evento.titulo} />
        </div>
      })
    }
    </>
  )
}

export default Banner