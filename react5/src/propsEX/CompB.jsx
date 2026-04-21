/*import React from "react";
let CompB=(props)=>{
    return <div>
        <h2>ComponentB</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>{props.msg}</h3>
    </div>
}
export default CompB;*/

import React from 'react'
const CompB = (props) => {
  return <div>
            <h2>Component B</h2>
            <pre>{JSON.stringify(props)}</pre>

            <h3>Price:{props.price}</h3>
            <h3>Wish message:{props.msg}</h3>
            <h3>Location:{props.locations[1]}</h3>
         </div>
}
export default CompB;