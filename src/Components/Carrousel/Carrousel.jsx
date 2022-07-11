import React,{ useState} from 'react'
// css
import './Carrousel.css'
//CONSULTAR: HAY ALGUNA FORMA DE QUE LA IMAGEN SE VAYA ACOMODANDO SOLA EN EL CENTRO?
const Carrousel = ({eventos, isLoading}) => {
  // console.log(eventos);
  // console.log(isLoading);

  eventos.slice(1,eventos.length).map(evento => console.log(evento.images.banner))
  // { eventos.slice(1, eventos.length).forEach(evento => console.log(evento.titulo)) }
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
              <>
                <div className="carousel-item active">
                  <img src={eventos[0].images.banner} class="d-block w-100" alt={eventos[0].titulo} />
                </div>
                {
                  eventos.slice(1,3).map(evento => {
                    return <div className="carousel-item">
                    <img src={evento.images.banner} class="d-block w-100" alt={evento.titulo} />
                    </div>
                  })
                }
              </>
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