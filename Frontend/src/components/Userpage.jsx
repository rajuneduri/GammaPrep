
import React, { useState } from 'react';
import "../Stylesheet/Navbar.css"
import gif from "../Images/gif1.gif"
import course1 from "../Images/Cprogramming.png"
import course2 from "../Images/Cpp2.png"
import course3 from "../Images/java.png"
import course4 from "../Images/pythonn.png"
import course5 from "../Images/reactt.png"
import "../Stylesheet/Homepage.css"
import Login from './Login';
import Signup from './SignUp';
import Footer from './Footer';
import { Link } from 'react-router-dom'; 
const Userpage = () => {
    const [showMenu, setShowMenu] = useState(false);
    

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
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
                    <li>Welcome</li>
                    
                </ul>
            </div>
        </nav>
        <div> <h1 className='toptitle'><img src={gif} className='gif'></img> GET YOUR DREAM JOB/INTERNSHIP IN 90 DAYS <img src={gif} className='gif'></img></h1></div>
    <div className="cards-container  ">
        <h2></h2>
            <div className="cards-row">
                <div className="cards-tables">
                    <img className="images" src={course1} alt='/' />
                    <div className="product-info">
                        <p className="cat">C Programming</p>
                        <p className="title">Beginners</p>
                        <button className="price">Enroll</button>
                    </div>
                </div>
            </div>
            <div className="cards-row">
                <div className="cards-tables">
                    <img className="images" src={course2} alt='/' />
                    <div className="product-info">
                        <p className="cat">C++ Programming</p>
                        <p className="title">Beginners</p>
                        <button className="price">Enroll</button>
                    </div>
                </div>
            </div>
            <div className="cards-row">
                <div className="cards-tables">
                    <img className="images" src={course3} alt='/' />
                    <div className="product-info">
                        <p className="cat">JAVA</p>
                        <p className="title">Beginners</p>
                        <button className="price">Enroll</button>
                    </div>
                </div>
            </div>
            <div className="cards-row">
                <div className="cards-tables">
                    <img className="images" src={course4} alt='/' />
                    <div className="product-info">
                        <p className="cat">Python</p>
                        <p className="title">Beginners</p>
                        <button className="price">Enroll</button>
                    </div>
                </div>
            </div>
            <div className="cards-row">
                <div className="cards-tables">
                    <img className="images" src={course5} alt='/' />
                    <div className="product-info">
                        <p className="cat">React</p>
                        <p className="title">Beginners</p>
                        <button className="price">Enroll</button>
                    </div>
                </div>
            </div>
           
            </div>
            <Footer/>
</div>
        
    );

}

export default Userpage
