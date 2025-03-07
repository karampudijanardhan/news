import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <div className="registrastion">
    <div className="Register-contact">
    <form>
    <div className="Register-input">
         <input type="text" id="name" placeholder="Enter your name" required/>
         </div>
         <div className="Register-input">
         <input type="email" id="email" placeholder="Enter your email" required/>
         </div>
         <div className="Register-input">
            <input type="password" placeholder="Set password" id="passowrd" />
         </div>
         <div className="Register-input">
        <input type="date"  id="date"/>
         </div>
         <button className="rigi" id="nani">Register</button>
         <div class="paragraph">
            <p>I have account?<Link to="/Login">Login here</Link></p>
         </div>
        </form>
        </div>
    </div>
        </div>
      );
}

export default Register;