import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><a href="https://github.com/dwayne314">GitHub</a></li>
                </ul>
            </div>
            <a className="close" href="#menu">
                ::before
                Close
                ::after
            </a>
        </nav>
    );
};


export default Menu;
