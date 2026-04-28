import React from 'react'
import Navbar from './Navbar/navbar.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Login.jsx'
import Footer from './Navbar/footer.jsx'

let App=()=>{
    return <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Login />
      <Footer />
    </div>
}
import React from 'react'

let Login = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            
            <div className="card p-4 shadow" style={{ width: "350px" }}>
                
                <h3 className="text-center mb-4">Login</h3>

                <form>
                    <div className="mb-3">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter email" 
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter password" 
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Login;