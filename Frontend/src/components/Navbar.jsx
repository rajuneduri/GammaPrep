// Navbar.js
import React, { useState } from 'react';
import "../Stylesheet/Navbar.css"
import { Link } from 'react-router-dom'; 
import Login from './Login';
import Signup from './SignUp';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <h1>GammaPrep</h1>
                <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`menu ${showMenu ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <Login/>
                    <Signup/>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
