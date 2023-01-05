import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Menu from "./Menu";
import About from "./About";
import Location from "./Location";
import Socials from "./Socials";


export default function Header (props) {
    return (
        <div className='header'>
            <div className='nav-wrapper'>
              <nav>
                  <Link className='about-btn' to='/about'>About</Link>
                  <Link className='menu-btn' to='/menu'> Menu</Link>
                  <Link className='location-btn' to='/location'>Location</Link>
                  <Link className='socials-btn' to='/socials'>Socials</Link>
              </nav>
            <Routes>
                <Route path='/about' component={About}/>
                <Route path='/menu' component={Menu}/>
                <Route path='/location' component={Location}/>
                <Route path='/socials' component={Socials}/>
            </Routes>
          </div>
        </div>
    )
}