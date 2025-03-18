import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <div className="About-contact">
    <div className="About-Deatils">
        <img src="janardhan.jpg"/>
    <h1>k.janardhan</h1>
    <p>This is a sample text.insert<br/>Your desired text here.</p>
    <div class="About-addres">
        <div>
            <p>Nellore,Andhara Pradesh,India</p>
        </div>
        <div>
            <p>9121971848</p>
        </div>
        <div>
           <p>janardhankarampudi@gmail.com</p> 
        </div>
    </div>
    </div>
    <div className="Introducation">
        <div class="self">
        <h1>Self-Introducation</h1>
        <ul class="About-information">
            <li>As you know,myself karampudi janardhan,and I come from Nellore.</li>
            <li>I am studying in B.Tech 3rd year CSD in SVCET College in 2022 with 70%</li>
            <li>I did my intermediate from M.J.P.AP.BC.WRS.junior college in 2020 with 76.2% </li>
            <li>I did my SCC from Z.P.P.H.School in 2016 with 95% grade.</li>
            <li>Coming to my Strengths I am quick learner and hard working.</li>
            <li>My hobbies are playing chess and watching movies.</li>
            <li>My short-term goal is to find work in a well-know oraganization like yours.</li>
            <li>My long-term goal is to attain a leading postition in my profession</li>
            <li>This is all about me.</li>
            <Link className="go" to="/Home"> Go To Home</Link>
        </ul>
        </div>
        </div>
        </div>
        </div>
    );
  };
  
    
export default About;