


import React, { useState } from "react";
import { Link} from "react-router-dom";
function Login() {
    const [email,setEmail]=useState("");
    const handleSubmit=()=>{
        if (email=="janardhanakarampudi@gmail.com"){
            window.confirm("success");
            
        }
        else{
            window.confirm("not success")
            return;
        }
    }
    return ( 
        <div>
             <div className="login-form">
    <div className="Login-form">
        <form action="#">
            <h2>Login Here</h2>
            <div className="Login-form-input">
            <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div class="Login-form-input">
                <input type="password" placeholder="password" required id="passowrd" />
            </div>
            <div className="remember">
            <label><input type="checkbox"/>Remember me</label>
                <Link to="/Reset">Forgetpassword</Link>
            </div>
            <button className="dd" onClick={handleSubmit}>Login</button>
            <div className="register">
                <p>Don't Have an Account</p>
                <Link to="/Register">Register?</Link>
            </div>
            </form>
            </div>
        </div>
        </div>
     );
}

export default Login;