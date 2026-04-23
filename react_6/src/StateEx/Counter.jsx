import React, { useState } from "react";  
let Counter = () => {
    let[counter,setCounter]=useState(1);
    let incHandler = ()=>{
        setCounter(counter+1);
    }
    let decHandler = ()=>{
        setCounter(counter-1);
    }

    return <div>
        <h1>Counter component</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={incHandler}>+</button>
        <button onClick={decHandler}>-</button>
    </div>
}
export default Counter;