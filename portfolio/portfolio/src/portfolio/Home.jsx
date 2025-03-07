import React from "react";
import Login from './Login';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Portfolio from './Portfolio';
import { Link } from "react-router-dom";

function Home() {
    return ( 
        <div className="Header-section">
        <header>
        <h1 className="proze">PraROZ</h1>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbut">
        <i class='bx bx-menu'></i>
        </label>
        <nav>
            <Link>Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Portfolio">Portfololio</Link>
        </nav>
        </header>
    <div className="Home-contant">
        <h1 className="aa">web design&</h1>
        <h1 className="bb" >Development</h1>
        <h1 className="cc">course</h1>
        <p>web Design is a specialiasation of the designsteam.
        They also use HTML,CSS,java script to editing software.mark up validators etc.,
        to create design elements.</p>
        <button ><Link to="/Login">JOIN US</Link></button>
        </div>
        <About/>
        <Contact/>
        <Portfolio/>
        <Footer/>
        </div>
     );
}

export default Home;