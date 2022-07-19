import React from 'react'
import { Link } from 'react-router-dom'
// import img
import Logo from '../../img/boby-tickets-logo-vertical.png';
//import css
import '../Footer/Footer.css'
const Footer = () => {
  console.log("hol");
  return (
    // <></>
    <div className='bg-dark'>
      <footer className="container-fluid">
        <nav className='row footerElements'>
          <div className='col-12 col-md-3 mt-1' >
            <Link to="/Home">
              <img src={Logo} alt="logo-Boby-Tickets" className='mx-2 mt-2 mb-2 logoFooter' height='50px' />
            </Link>
            <p className='text-white ms-5 my-0 itemsFooterResponsive'>contacto@BobyTickets.com</p>
            <p className='text-white ms-5 my-0 itemsFooterResponsive'>wsp: +54 1242456</p>
          </div>
          <ul className='col-12 col-md-3 mt-3 list-unstyled'>
            <h5 className='text-white'>¿Quienes somos?</h5>
            <li className='text-white mb2'>Crea tu evento en Boby Tickets</li>
            <li className='text-white mb2'>¿Eres Artista o Productor?</li>
          </ul>
          <ul className='col-12 col-md-3 mt-3 list-unstyled'>
            <h5 className='text-white'>Conoce Mas</h5>
            <li className='text-white'>Terminos y Condiciones</li>
            <li className='text-white'>Preguntas Frecuentes</li>
            <li className='text-white'>Contactanos</li>
            <li className='text-white'>Registrarte</li>
          </ul>
          <ul className='col-12 col-md-3 mt-3 list-unstyled'>
            <div className='d-flex d-wrap col-12 col-md-3 mt-4 botonRedesFooter'>
              <button className="btn btn-Redes m-2" type="submit"><i class="bi bi-facebook"></i></button>
              <button className="btn btn-Redes m-2" type="submit"><i class="bi bi-instagram"></i></button>
              <button className="btn btn-Redes m-2" type="submit"><i class="bi bi-twitter"></i></button>
            </div>
          </ul>
        </nav>
        <div className='pt-5 bg-dark pb-3'>
          <p className='text-white text-center m-0'>Developed by: Maxi Alzugaray</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer