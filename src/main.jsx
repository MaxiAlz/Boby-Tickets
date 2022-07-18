import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORT COMPONENTS
import App from './App'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';

// IMPORT PAGES
import Home from './Pages/HomePage';
import EventoInfo from './Pages/EventoInfoPage';
import Comprar from './Pages/ComprarPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Evento-Info/:idEvento' element={<EventoInfo />} />
        <Route path='/Comprar-Entradas/:idEvento' element={<Comprar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
