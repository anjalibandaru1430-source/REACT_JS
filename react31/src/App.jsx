import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Message from './Message';
import Navbar from './Navbar';

let App = () => {
  return (
    <div className="full-width">

      <Navbar />
      <h1 className="text-center text-primary">Hello React</h1>
      <Message />
    </div>
  );
}

export default App; 