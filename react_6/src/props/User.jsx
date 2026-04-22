import React from "react";
import Emp from "./Emp";
class User extends React.Component {
    uname="RG";
    uid=100;
    location=["Bangalore","Chennai","Pune"];
    render(){
        return <div>
            <h1>user component</h1>
            <Emp ename={this.uname} eid={this.uid} loc={this.location}/> 


        </div>
    }
}
export default User;