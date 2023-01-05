import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Menu from "./Menu";
import About from "./About";
import Location from "./Location";
import Socials from "./Socials";
import LandingPage from './LandingPage';


function App() {
  return (
    <div className="App">
      <div className='header'>
            <div className='nav-wrapper'>
              <nav>
                  <Link className='about-btn' to='/about'>About</Link>
                  <Link className='menu-btn' to='/menu'> Menu</Link>
                  <Link className='location-btn' to='/location'>Location</Link>
                  <Link className='socials-btn' to='/socials'>Socials</Link>
              </nav>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/location' element={<Location/>}/>
                <Route path='/socials' element={<Socials/>}/>
            </Routes>
          </div>
      </div>
      <LandingPage/>
      <link href="https://fonts.googleapis.com/css2?family=Lustria&display=swap" rel="stylesheet"></link>
    </div>
  );
}

export default App;
