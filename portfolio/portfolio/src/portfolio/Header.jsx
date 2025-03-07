import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <h1 className="proze">PraROZ</h1>
        <input type="checkbox" id="check"></input>
        <label for="check" class="checkbut">
        <i class='bx bx-menu'></i>
        </label>
        <nav>
            <Link >Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Portfolio">Portfololio</Link>
        </nav>
        </header>
      );
}

export default Header;