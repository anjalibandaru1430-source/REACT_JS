import React, { useState } from 'react'
const Message = () => {
    let [msg,setMsg]=useState("hello");
    let gmHandler=()=>{
        setMsg("good morning");
    }
    let gnHandler=()=>{
        setMsg("good night");
    }
    return <div>
        <h3>Message value: {msg} </h3>
        <h2></h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message;

