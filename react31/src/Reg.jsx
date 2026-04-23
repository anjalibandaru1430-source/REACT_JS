import { useState } from "react";
import axios from "axios";
let Reg = ()=>{
    let [user,setUser] = useState({"email":"","pwd":"","mobile":""})
    let [errors,setErrors] = useState({"email":"","pwd":"","mobile":""})
    let [message, setMessage] = useState("")
    
    // Email validation
    let validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return "Email is required";
        if (!emailRegex.test(email)) return "Invalid email format";
        return "";
    }
    
    // Password validation
    let validatePassword = (pwd) => {
        if (!pwd) return "Password is required";
        if (pwd.length < 6) return "Password must be at least 6 characters";
        return "";
    }
    
    // Indian mobile number validation (10 digits starting with 6-9)
    let validateMobile = (mobile) => {
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobile) return "Mobile number is required";
        if (!mobileRegex.test(mobile)) return "Invalid Indian mobile number (10 digits, starts with 6-9)";
        return "";
    }
    
    let updateHandler = (event)=>{
        const {name, value} = event.target;
        setUser({...user, [name]: value})
        
        // Real-time validation
        let error = "";
        if (name === "email") error = validateEmail(value);
        else if (name === "pwd") error = validatePassword(value);
        else if (name === "mobile") error = validateMobile(value);
        
        setErrors({...errors, [name]: error})
    }
    
    let submitHandler = (event)=>{
        event.preventDefault();
        
        // Validate all fields
        const emailError = validateEmail(user.email);
        const pwdError = validatePassword(user.pwd);
        const mobileError = validateMobile(user.mobile);
        
        setErrors({
            email: emailError,
            pwd: pwdError,
            mobile: mobileError
        })
        
        // Submit only if no errors
        if (!emailError && !pwdError && !mobileError) {
            axios.post("http://localhost:8000/user/create", user)
                .then((response) => {
                    setMessage("Registration Successful!");
                    // Reset form
                    setUser({"email":"","pwd":"","mobile":""})
                    setErrors({"email":"","pwd":"","mobile":""})
                    console.log("Response:", response.data)
                })
                .catch((error) => {
                    setMessage("Registration Failed: " + (error.response?.data?.message || error.message))
                    console.error("Error:", error)
                })
        }
    }
    return <div>
            <pre>{JSON.stringify(user)}</pre>
            <div className="container">
                <div className="row">
                <div className="col-4">
                {message && (
                    <div className={message.includes("Successful") ? "alert alert-success" : "alert alert-danger"} role="alert">
                        {message}
                    </div>
                )}
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email Id:</label>
                        <input type="text" name="email" value={user.email} onChange={updateHandler} className="form-control" />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                     <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="pwd" value={user.pwd} onChange={updateHandler} className="form-control" />
                        {errors.pwd && <small className="text-danger">{errors.pwd}</small>}
                    </div>
                     <div className="form-group">
                        <label>Mobile No:</label>
                        <input type="text" name="mobile" value={user.mobile} onChange={updateHandler} className="form-control" />
                        {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                    </div>

                    <input type="submit" value="Registration"  className="btn btn-warning"/>
                </form>
                </div>
                </div>
            </div>
            </div>
}
export default Reg;