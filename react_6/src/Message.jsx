/*import React, { useState } from 'react'
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
export default Message;*/


/*import React from "react";
class Message extends React.Component{
    constructor(props){
        super(props);
        console.log("First Constructor")
        this.state={
            msg:"hello"
        }
    }    
        gmHandler=()=>{
            this.setState({msg:"good morning"});
        }
        gnHandler=()=>{
            this.setState({msg:"good night"});
        }
        render(){
            console.log(" select render");
            return <div>
                <h1>Message value: {this.state.msg} </h1>
                <h2>value: {this.state.msg}</h2>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gnHandler}>GN</button>
            </div>
        }

    }*/


/*import React from "react";

class Message extends React.Component{
    constructor(props){
        super(props);
        console.log("First Constructor")
        this.state={"msg":"Hello"}
    }
    gmHandler = ()=>{
        this.setState({"msg":"Good Morining"});
    }
    gnHandler = ()=>{
        this.setState({"msg":"Goood Night"});
    }
    render(){
        console.log("Second Render method")
        return <div>
                    <h3>Message Component</h3>
                    <h3>Value:{this.state.msg}</h3>
                    <button onClick={this.gmHandler}>GM</button>
                    <button onClick={this.gnHandler}>GN</button>
                </div>
    }
}
export default Message;*/


/*import  React from "react";
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
export default Message;*/

import React from "react";
class Message extends React.Component{
    constructor(props){
        super(props);
        console.log("First Constructor")
        this.state={"msg":"Hello"}      
    }
    updateHandler=(value)=>{
        console.log("value")
        this.setState({"msg":value});
    }
    render(){
        console.log("Second Render method")
        return <div>
                    <h3>Message Component</h3>
                    <h3>Value:{this.state.msg}</h3>
                    <button onClick={this.updateHandler.bind(this, "Good morning")}>GM</button>
                    <button onClick={this.updateHandler.bind(this, "Good afternoon")}>GA</button>
                    <button onClick={this.updateHandler.bind(this, "Good evening")}>GE</button>
                    <button onClick={this.updateHandler.bind(this, "Good night")}>GN</button>
                </div>
    }
}
export default Message;