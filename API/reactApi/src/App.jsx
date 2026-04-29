import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useState } from "react";

let Employee=()=>{
    let [users,setUsers]  = useState([])

    return <div>
                <h3>Employee Component</h3>
                <pre>{JSON.stringify(users)}</pre>
            </div>
}
export default Employee;