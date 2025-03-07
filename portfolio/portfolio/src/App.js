import logo from './logo.svg';
import './App.css';
import './portfolio/Portfolio.css';
import './portfolio/Home.css';
import  './portfolio/Register.css';
import './portfolio/About.css';
import './portfolio/Contact.css';
import './portfolio/Skills.css';
import './footer/Footer.css';
import './portfolio/Login.css'
import './portfolio/Rest.css';
import Footer from './footer/Footer';
import Home from './portfolio/Home';
import Header from './footer/Header';
import About from './portfolio/About';
import Contact from './portfolio/Contact';
import Portfolio from './portfolio/Portfolio';
import Skills from './portfolio/Skills';
import Login from './portfolio/Login'
import { Routes,Route} from 'react-router-dom';
import Rest from './portfolio/Reset';
import Register from './portfolio/Register';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Header" element={<Header/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Reset" element={<Rest/>}/>
      </Routes>
    </div>
  );
}

export default App;
