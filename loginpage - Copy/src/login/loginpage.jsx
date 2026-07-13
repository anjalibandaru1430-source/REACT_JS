const loginpage=()=>{
    return <div>
        <h1>Login Page</h1>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter username" id="username" name="username"/>
            <br/>
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter password" id="password" name="password"/>
            <br/>
            <button type="submit">Login</button>
        </form>
    </div>
}
export default loginpage;