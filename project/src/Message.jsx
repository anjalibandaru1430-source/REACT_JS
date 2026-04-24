import React from "react";
class Message extends  React.Component{
    constructor(props){
        super(props);
        this.state={ message: "Hello" };
    }
    gmHandler = () => {
        this.setState({ message: "Good Morning" });
    }
    gnHandler = () => {
        this.setState({ message: "Good Night" });
    }
    render(){
        return <div>
            <h2>{this.state.message}</h2>
            <button onClick={this.gmHandler}>Good Morning</button>
            <button onClick={this.gnHandler}>Good Night</button>    
        </div>
    }

}
export default Message;