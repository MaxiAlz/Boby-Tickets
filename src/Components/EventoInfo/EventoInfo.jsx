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
      console.log(responseData);
      setEvento(responseData)
      setIsLoading(!isLoading);

    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getEventos()
  }, [])
//######## SEGUIR ROUTER DE EVENTOS INFO
  return (
    <>
      {
        isLoading ?
          <div>
            <img src={evento.images.banner} alt="" className='imgEventoInfo' />
          </div>
          : <p>Cargando Data...</p>
      }
    </>
  )
}

export default EventoInfo