import {useState} from 'react';

let Login=()=>{
    let [tc,setTc]=useState(false);
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let tcHandler=(event)=>{
        setTc(event.target.checked);
    }
    let emailHandler=(event)=>{
        setEmail(event.target.value);
    }
    let passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    return <div>
        <form>
            email:<input type ="email" onChange={emailHandler}/><br/>
            password:<input type="password" onChange={passwordHandler}      /><br/>
            <input type = "checkbox" onChange={tcHandler}/>Accept t & c<br/>
            <button type="submit" disabled={!tc}>Login</button>
            

        </form>
    </div>
}
export default Login;