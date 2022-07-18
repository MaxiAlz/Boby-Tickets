import React from 'react'
import BotonTipoPublico from '../BotonTipoPublico/BotonTipoPublico'
// import Pages

import './CardEventos.css'
import { useNavigate } from 'react-router-dom';
const CardsEventos = ({ evento }) => {
  const { images, titulo, ubicacion, entradas, fecha, tipoEvento , id} = evento

  let min = 9999999999999
  let flag = min
  const navigate = useNavigate()

  entradas.map(tipoEntrada => {
    for (const pops in tipoEntrada) {
      // console.log(`${titulo} ${tipoEntrada[pops]} ${tipoEntrada[pops].precio}`);
      if (tipoEntrada[pops].cantidad > 0) {
        if (tipoEntrada[pops].precio < min) {
          min = tipoEntrada[pops].precio
        }
      }
    }
  })

  return (

    <div  className="card mx-2 my-2 g-0 cardContainer">
      <a href="" className='hovera' >
        <img src={images.post} className="img-fluid" alt={titulo}  onClick={() => navigate(`/Evento-Info/${id}`)}/>
        <div className='textoCard container m-0 d-flex align-items-center' >
          {/* ${fecha.dia}/${fecha.mes} | ${fecha.horario.hora}: ${fecha.horario.minutos} Hs */}
          <h5 className="text-white text-center m-0">{`${titulo} | ${ubicacion.provincia} | ${fecha.dia}/${fecha.mes}`}</h5>
        </div>
        <div className="">
          {
            flag != min ?
              <a href="" className="btn container btnPrecioEntradas" onClick={() => navigate(`/Comprar-Entradas/${id}`)}>{`ENTRADAS DESDE:  $ ${min}`}</a>
              :
              //CAMBIAR BOTON A ROJO          
              <a href="" className="btn container btn-danger disabled btnPrecioEntradas">{`ENTRADAS AGOTADAS`}</a>
          }
        </div>

      </a>
      <BotonTipoPublico tipoEvento={tipoEvento} />
    </div>
  )
}

export default CardsEventos