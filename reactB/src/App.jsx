import React from 'react'
import Navbar from './Navbar/navbar.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Employee from './Employee/Employee.jsx'

import { useState } from "react";
let App = () => {
  let [users, setUsers] = useState([]);

  return (
    <div>
      <h3>Employee Component</h3>
      <pre>{JSON.stringify(users)}</pre>

      {users.length === 0 ? <Employee setUsers={setUsers} /> : null}
    </div>
  );
};

export default App;
