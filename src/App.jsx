// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from "./Components/Navbar";
import {Route, Routes} from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
// import SignupForm from './Components/SignupForm';
import SIGNup from './Routes/SIGNup';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
 

  return (
    <div>
   <Navbar />
   <Routes>

  <Route path="/" element={<Home/>}/> 
  <Route path="/about" element={<About/>}/> 
  <Route path="/contact" element={<Contact/>}/> 
  <Route path="/service" element={<Service/>}/> 
  
  <Route path="/signup" element={<SIGNup />}/>
   </Routes>

  <Footer />
    
     
    </div>
   
   
   
  )
}

export default App
