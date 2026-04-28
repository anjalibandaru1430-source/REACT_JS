import React from 'react'

let Login = () => {
    return (
        <div className="container mt-5">
            <h1>Login</h1>

            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                    />
                </div>

                <div className="form-group mt-3">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;