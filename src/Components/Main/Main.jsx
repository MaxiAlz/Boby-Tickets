import React, { useState, useEffect } from 'react';
import Carrousel from '../Carrousel/Carrousel';
import CardsEventos from '../CardsEventos/CardsEventos'
import './Main.css'

const Main = () => {
  const [eventos, setEventos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getEventos = async () => {
    try {
      const response = await fetch('http://localhost:5000/eventos')
      const eventosdb = await response.json();
      setEventos(eventosdb)
      setIsLoading(!isLoading)

    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getEventos();
  }, [])

  return (
    <>
    {isLoading ?  <Carrousel eventos={eventos} isLoading={isLoading}/> : <p className='pt-5'>Cargando Eventos...</p>} 
      <div className='container d-flex justify-content-center'>
      {
        isLoading ?  eventos.map(evento =>  <CardsEventos evento={evento} /> ) : <p className='pt-5'>Cargando Eventos...</p>
      }
      </div>
    </>
  )
}

export default Main