import React from 'react'

import './CardEventos.css'
const CardsEventos = ({ evento }) => {
  const { images, titulo, ubicacion, entradas, fecha } = evento

  let min = 9999999999999
  let flag = min

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
    <div className="card mx-2 my-2 g-0 shadow col-3 cardContainer">
      <img src={images.post} className="img-fluid" alt={titulo} />
      <div className='textoCard container m-0'>
      {/* ${fecha.dia}/${fecha.mes} | ${fecha.horario.hora}: ${fecha.horario.minutos} Hs */}
        <h5 className=" text-white m-0">{`${titulo} en ${ubicacion.provincia} | ${fecha.dia}/${fecha.mes}`}</h5>
      </div>
      <div className="">
        {
          flag != min ?
            <a href="" className="btn container ">{`ENTRADAS DESDE:  $ ${min}`}</a>
            :
            //CAMBIAR BOTON A ROJO          
            <a href="" className="btn container btn-danger disabled">{`ENTRADAS AGOTADAS`}</a>
        }
      </div>
    </div>
  )
}

export default CardsEventos