import  React from "react";
let  Message=()=>{
    let [msg,setMsg]=React.useState("Hello");
    let  updateHandler=(value)=>{
        console.log("value")
        setMsg(value);
    }
    return <div>
        <h1>Message Component</h1>
        <h2>value:{msg}</h2>
        <button onClick={updateHandler.bind(null, "Good morning")}>GM</button>
        <button onClick={updateHandler.bind(null, "Good afternoon")}>GA</button>
        <button onClick={updateHandler.bind(null, "Good evening")}>GE</button>
        <button onClick={updateHandler.bind(null, "Good night")}>GN</button>
    </div>
}
export default Message;