import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import './EventoInfo.css'
const EventoInfo = () => {
  const { idEvento } = useParams()
  const [evento, setEvento] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const getEventos = async () => {
    try {
      const response = await fetch(`http://localhost:5000/eventos/${idEvento}`);
      const responseData = await response.json();
      setEvento(responseData)
      setIsLoading(!isLoading);

    } catch (error) {
      console.warn(error)
    }
  }
  console.log(evento);
   const {descripcionEvento, entradas, id, images, tipoEvento, titulo, ubicacion, fecha} = evento
   
  useEffect(() => {
    getEventos()
  }, [])
//######## SEGUIR ROUTER DE EVENTOS INFO
  return (
    <>
      {
        isLoading ?
        
          <div>
            <img src={images.banner} alt="" className='imgEventoInfo' />
            <div className='d-flex container'>
            <aside className='col-6 '>
              <p>{`${titulo} en ${ubicacion.lugar}`.toUpperCase()}</p>
              <img src={images.post} alt="" className='img-fluid' width={300}/>
              <div className=''>
                <p>Ubicacion y fecha : </p>
                {`${fecha.dia}/${fecha.mes} En ${ubicacion.provincia}, ${ubicacion.departamento} a las ${fecha.horario.hora}:${fecha.horario.minutos} Hs`}
              </div>
            </aside>
            <aside className='col-6'>
              aside 2
            </aside>
            </div>
          </div>
          
          : <p>Cargando Data...</p>
      }
    </>
  )
}

export default EventoInfo