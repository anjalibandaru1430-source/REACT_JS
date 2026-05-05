import { useState } from "react";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
let Login = ()=>{
    let [user,setUser]=useState({name: "",email: "",
    pwd: "",
    mobile: "",
    services: "",
    message: ""})
    /*let emailHandler = (event)=>{
        setUser({...user,email:event.target.value})
    }
    let pwdHandler = (event)=>{
        setUser({...user,pwd:event.target.value})
    }*/
   let updateHandler = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    
    let submitHandler = (event)=>{
        event.preventDefault();
        alert(JSON.stringify("Login Successfull"))
    }
      return (
  <div className="bg-light text-light vh-100 d-flex justify-content-center align-items-center">
    <div className="card border-0 shadow-lg p-4" style={{ width: "420px", borderRadius: "12px" }}>
      
      <h3 className="text-center mb-4 fw-bold text-dark">Login</h3>

      <form onSubmit={submitHandler}>
        
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            className="form-control rounded-3"
            name="name"
            value={user.name}
            onChange={updateHandler}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control rounded-3"
            name="email"
            value={user.email}
            onChange={updateHandler}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control rounded-3"
            name="pwd"
            value={user.pwd}
            onChange={updateHandler}
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Mobile</label>
          <input
            type="number"
            className="form-control rounded-3"
            name="mobile"
            value={user.mobile}
            onChange={updateHandler}
            placeholder="Enter mobile number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Services</label>
          <select
            className="form-select rounded-3"
            name="services"
            value={user.services}
            onChange={updateHandler}
          >
            <option value="">Select service</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            className="form-control rounded-3"
            name="message"
            rows="3"
            value={user.message}
            onChange={updateHandler}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100 rounded-3 fw-semibold"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);
}
export default Login;