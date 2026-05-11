import React from 'react';
import Navbar from "./Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import ContactApp from './contactApp/ContactApp';

let App = () => {

  return (
    <div>
      <Router>

        <Navbar />

        <Routes>

          <Route path='/index' element={<Home />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/contact-app' element={<ContactApp />} />

        </Routes>

      </Router>
    </div>
  )
}

export default App;