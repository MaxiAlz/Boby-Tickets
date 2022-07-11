import React from 'react';  
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({eventos}) {
  console.log(eventos);
  return (
   <>
   {
    eventos.map(evento => {
      return <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={evento.images.banner}
          alt={"asdasd"}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>      
    </Carousel>
    })
   }
   </>
  );
}

export default UncontrolledExample;