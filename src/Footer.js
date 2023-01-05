import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Location from "./Location";
import Socials from "./Socials";

export default function Footer (props) {
    return (
            <div className='footer'>
                <a href='/about'>
                    <About />
                </a>
                <a href="/menu">
                    <Menu />
                </a>
                <a href="/location">
                    <Location/>
                </a>
                <a href="/socials">
                    <Socials/>
                </a>
            </div>
    )
}