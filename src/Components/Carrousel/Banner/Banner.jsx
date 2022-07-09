import React,{ useState,useEffect } from 'react'

const Banner = () => {
  const [eventos, setEventos] = useState([])
 
  const getEventosImages = async () => {
    try {
      const eventosResponse = await fetch('http://localhost:5000/eventos')
      const eventosdb = await eventosResponse.json();
      setEventos(eventosdb)
      
    } catch (error) {
      console.warn(error)
    }
  }
  
  useEffect(() => {
    getEventosImages();
  }, []);

const recorrerEventos = ()=>{
  eventos.map(evento => {console.log(evento.images.portada)})
}
recorrerEventos()

  return (
    <div className="carousel-item active">
      {eventos.map(evento => {
        <img src={""} className="d-block w-100" alt={""} />
      })}
    </div>

  )
}

export default Banner