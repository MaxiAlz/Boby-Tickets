import React,{useState, useEffect} from 'react';
import Carrousel from '../Carrousel/Carrousel';
import CardsEventos from '../CardsEventos/CardsEventos'
// css
import './Main.css'

const Main = () => {
  // const [eventos, setEventos] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  // const getEventos = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/eventos')
  //     const eventosdb = await response.json();
  //     setEventos(eventosdb)
  //     setIsLoading(!isLoading)

  //   } catch (error) {
  //     console.warn(error)
  //   }
  // }

  // useEffect(() => {
  //   getEventos();
  // }, [])

  return (
   <>
   <Carrousel />
   <CardsEventos />
   </>
  )
}

export default Main