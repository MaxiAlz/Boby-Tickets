import React, { useState, useEffect } from 'react'

const CardsEventos = () => {

  const [eventos, setEventos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getEventos = async () => {
    try {
      const responseEventos = await fetch('http://localhost:5000/eventos')
      const responsedb = await responseEventos.json()
      setEventos(responsedb)
      setIsLoading(!isLoading)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEventos()
  }, [])
  
  return (
    <>

    </>
  )
}

export default CardsEventos