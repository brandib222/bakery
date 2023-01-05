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
                  <Link className='landing-btn btn' to='/'>Home</Link>
                  <Link className='about-btn btn' to='/about'>About</Link>
                  <Link className='menu-btn btn' to='/menu'> Menu</Link>
                  <Link className='location-btn btn' to='/location'>Location</Link>
                  <Link className='socials-btn btn' to='/socials'>Socials</Link>
              </nav>
              <Routes>
                  <Route path='/' element={<LandingPage/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/menu' element={<Menu/>}/>
                  <Route path='/location' element={<Location/>}/>
                  <Route path='/socials' element={<Socials/>}/>
              </Routes>
          </div>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Lustria&display=swap" rel="stylesheet"></link>
    </div>
  );
}

export default App;
