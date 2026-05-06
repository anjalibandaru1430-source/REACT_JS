import Navbar from "./Navbar/Navbar";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

let App = ()=>{
    
    return <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
          </Router>
          </div>
}
export default App;