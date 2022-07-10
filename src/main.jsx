import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
// IMPORT COMPONENTS
import App from './App'
import Navbar from './Components/Navbar/Navbar'
// IMPORT PAGES
import Home from './Pages/HomePage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Routes>
        <Route path='/Home' element= { <Home /> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)
