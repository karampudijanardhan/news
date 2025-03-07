import React from "react";
import { Link } from "react-router-dom";
function Rest() {
    return ( 
        <div className="Form-Rigester">
             <div class="Rest">
    <div class="Rest-password">
        <h1>Reset Password</h1>
       <div class="Rest-input">
        <input type="password" id="passowrd" placeholder="Create New Password"/>
       </div>
       <div class="Rest-input">
        <input type="password" id="confirm" placeholder="Confirm Password"/>
       </div>
       <div class="Rest-account">
       <p>I have account?<Link to="/Login">Reset</Link></p>
       </div>
    </div>
    </div>
        </div>

     );
}

export default Rest;