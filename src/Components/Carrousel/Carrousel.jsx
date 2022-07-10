import React, { useState, useEffect } from 'react'
import Banner from './Banner/Banner'

// css
import './Carrousel.css'

const Carrousel = () => {

  const [eventos, setEventos] = useState([])
  const [isLoding, setIsLoding] = useState(false)

  const getEventos = async () => {
    try {
      const response = await fetch('http://localhost:5000/eventos')
      const eventosdb = await response.json();
      setEventos(eventosdb)
      setIsLoding(!isLoding)

    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getEventos();
  }, []);

  eventos.slice(1,eventos.length).map(evento => console.log(evento.images.banner))
  { eventos.slice(1, eventos.length).forEach(evento => console.log(evento.titulo)) }
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner carrousel-styles">
          {
            isLoding
              ?
              <>
                <div className="carousel-item active">
                  <img src={eventos[0].images.banner} class="d-block w-100" alt={eventos[0].titulo} />
                </div>

                {/* <Banner eventos = { eventos }/> */}

                {
                  eventos.slice(1,eventos.length).map(evento => {
                    <div className="carousel-item">
                    <img src={evento.images.banner} class="d-block w-100" alt={evento.titulo} />
                    </div>
                  })
                }
              </>
              :
              <p className='fw-bolder pt-5'>Cargando Datos...</p>
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
    
  )
}

export default Carrousel