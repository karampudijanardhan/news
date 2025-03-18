import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";


function Portfolio() {
    return ( 
        <div>
            <div className="KARAMPUDI">
        <div className="sri">
            <h1>
                    <span>K</span><span>A</span><span>R</span><span>A</span><span>M</span><span>P</span><span>U</span><span>D</span><span>I</span> <span></span>
                <span>J</span><span>A</span><span>N</span><span>A</span><span>R</span><span>D</span><span>H</span><span>A</span><span>N</span>
              </h1>
              
        <div className="page">
        <img src="janardhan.jpg" />
        </div>
        <div className="cont">
        <p>I am passionate web developer with a focus on front-end technologies.I am currently pursuing my B.tech in Sri Venkateswara college of engeneering and technology in chittor.I have learn Web Development from code with janardhan.You can Click here to Checkout What i am learnt in HTML,CSS,JS</p>
        </div>
        <Link to="/Home">Read more</Link>
             </div> 
        </div>
        </div>
     );
}

export default Portfolio;